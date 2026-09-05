'use client';

import { useCallback, useEffect, useState } from 'react';
import { ROUNDS_PER_GAME, shuffleLocations } from '@/data/locations';
import { haversineKm, scoreFromDistanceKm } from '@/lib/scoring';
import type { GamePhase, LatLng, RoundResult } from '@/lib/types';
import HomeScreen from './HomeScreen';
import LocationView from './LocationView';
import ScoreBar from './ScoreBar';
import GuessOverlay from './GuessOverlay';
import RevealOverlay from './RevealOverlay';
import EndScreen from './EndScreen';

export default function Game() {
  const [phase, setPhase] = useState<GamePhase>('home');
  const [roundIndex, setRoundIndex] = useState(0);
  const [locations, setLocations] = useState(() => shuffleLocations(ROUNDS_PER_GAME));
  const [guess, setGuess] = useState<LatLng | null>(null);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [lastResult, setLastResult] = useState<RoundResult | null>(null);

  const totalRounds = locations.length;
  const current = locations[roundIndex];

  const startGame = useCallback(() => {
    const next = shuffleLocations(ROUNDS_PER_GAME);
    setLocations(next);
    setRoundIndex(0);
    setGuess(null);
    setResults([]);
    setTotalScore(0);
    setLastResult(null);
    setPhase('playing');
  }, []);

  const openMap = useCallback(() => {
    if (phase === 'playing') setPhase('guessing');
  }, [phase]);

  const closeMap = useCallback(() => {
    if (phase === 'guessing') setPhase('playing');
  }, [phase]);

  const submitGuess = useCallback(() => {
    if (!guess || !current) return;
    const distanceKm = haversineKm(guess.lat, guess.lng, current.lat, current.lng);
    const points = scoreFromDistanceKm(distanceKm);
    const result: RoundResult = { location: current, guess, distanceKm, points };
    setLastResult(result);
    setResults((prev) => [...prev, result]);
    setTotalScore((s) => s + points);
    setPhase('reveal');
  }, [guess, current]);

  const nextRound = useCallback(() => {
    if (roundIndex + 1 >= totalRounds) {
      setPhase('end');
      return;
    }
    setRoundIndex((i) => i + 1);
    setGuess(null);
    setLastResult(null);
    setPhase('playing');
  }, [roundIndex, totalRounds]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;
      e.preventDefault();
      if (phase === 'playing') openMap();
      else if (phase === 'guessing') closeMap();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, openMap, closeMap]);

  if (phase === 'home') {
    return (
      <div className="h-[100dvh] w-full">
        <HomeScreen onPlay={startGame} />
      </div>
    );
  }

  if (phase === 'end') {
    return (
      <div className="h-[100dvh] w-full overflow-y-auto">
        <EndScreen totalScore={totalScore} results={results} onPlayAgain={startGame} />
      </div>
    );
  }

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-navy-950">
      <ScoreBar
        totalScore={totalScore}
        round={roundIndex + 1}
        totalRounds={totalRounds}
      />
      <div className="relative min-h-0 flex-1">
        {current && (
          <LocationView
            location={current}
            round={roundIndex + 1}
            totalRounds={totalRounds}
            onOpenMap={openMap}
          />
        )}
        {phase === 'guessing' && (
          <GuessOverlay
            guess={guess}
            onPick={setGuess}
            onSubmit={submitGuess}
            onClose={closeMap}
          />
        )}
        {phase === 'reveal' && lastResult && (
          <RevealOverlay
            result={lastResult}
            totalScore={totalScore}
            isLast={roundIndex + 1 >= totalRounds}
            onNext={nextRound}
          />
        )}
      </div>
    </div>
  );
}
