'use client';

import type { RoundResult } from '@/lib/types';
import { formatDistance } from '@/lib/scoring';

type Props = {
  totalScore: number;
  results: RoundResult[];
  onPlayAgain: () => void;
};

export default function EndScreen({ totalScore, results, onPlayAgain }: Props) {
  const maxPossible = results.length * 5000;
  const pct = maxPossible ? Math.round((totalScore / maxPossible) * 100) : 0;
  let verdict = 'Tourist';
  if (pct >= 85) verdict = 'World Navigator';
  else if (pct >= 65) verdict = 'Seasoned Traveler';
  else if (pct >= 40) verdict = 'Curious Explorer';

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-navy-950 px-4 py-10">
      <div className="w-full max-w-lg animate-slide-up">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
          Game over
        </p>
        <h1 className="mb-2 text-center text-3xl font-bold text-white sm:text-4xl">
          {verdict}
        </h1>
        <p className="mb-8 text-center text-white/60">
          Final score
          <span className="mt-1 block text-4xl font-bold tabular-nums text-accent-gold">
            {totalScore.toLocaleString()}
          </span>
          <span className="text-xs text-white/40">
            of {maxPossible.toLocaleString()} possible ({pct}%)
          </span>
        </p>

        <ul className="mb-8 space-y-2 rounded-2xl border border-white/10 bg-navy-900/70 p-4">
          {results.map((r, i) => (
            <li key={r.location.id} className="flex items-start justify-between gap-3 border-b border-white/5 pb-2 last:border-0 last:pb-0">
              <div>
                <p className="text-xs text-white/40">Round {i + 1}</p>
                <p className="text-sm font-medium text-white/90">{r.location.name}</p>
                <p className="text-xs text-white/50">{formatDistance(r.distanceKm)} away</p>
              </div>
              <span className="shrink-0 text-sm font-bold tabular-nums text-accent-cyan">
                +{r.points.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onPlayAgain}
          className="w-full rounded-xl bg-accent-cyan px-6 py-3.5 text-base font-bold text-navy-950 shadow-glow transition hover:brightness-110 active:scale-[0.98]"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
