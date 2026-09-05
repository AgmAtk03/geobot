'use client';

import dynamic from 'next/dynamic';
import type { RoundResult } from '@/lib/types';
import { formatDistance } from '@/lib/scoring';

const RevealMap = dynamic(() => import('./RevealMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-navy-800 text-sm text-white/50">
      Loading map...
    </div>
  ),
});

type Props = {
  result: RoundResult;
  totalScore: number;
  isLast: boolean;
  onNext: () => void;
};

export default function RevealOverlay({ result, totalScore, isLast, onNext }: Props) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-navy-950 p-3 sm:p-5">
      <div className="mb-3 text-center">
        <p className="text-xs uppercase tracking-wider text-accent-cyan">Round result</p>
        <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">{result.location.name}</h2>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10">
        <RevealMap
          guess={result.guess}
          actual={{ lat: result.location.lat, lng: result.location.lng }}
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-navy-900/80 p-3 text-center">
        <div>
          <p className="text-[10px] uppercase text-white/40">Distance</p>
          <p className="text-sm font-semibold text-white">{formatDistance(result.distanceKm)}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-white/40">Points</p>
          <p className="text-sm font-semibold text-accent-cyan">+{result.points.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-white/40">Total</p>
          <p className="text-sm font-semibold text-accent-gold">{totalScore.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-white/50">
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-cyan" /> Your guess</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-gold" /> True location</span>
      </div>
      <button
        type="button"
        onClick={onNext}
        className="mt-3 w-full rounded-xl bg-accent-cyan px-6 py-3.5 text-sm font-bold text-navy-950 shadow-glow transition hover:brightness-110 active:scale-[0.98]"
      >
        {isLast ? 'See final score' : 'Next Round'}
      </button>
    </div>
  );
}
