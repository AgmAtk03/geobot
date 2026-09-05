'use client';

import dynamic from 'next/dynamic';
import type { LatLng } from '@/lib/types';

const GuessMap = dynamic(() => import('./GuessMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-navy-800 text-sm text-white/50">
      Loading map...
    </div>
  ),
});

type Props = {
  guess: LatLng | null;
  onPick: (ll: LatLng) => void;
  onSubmit: () => void;
  onClose: () => void;
};

export default function GuessOverlay({ guess, onPick, onSubmit, onClose }: Props) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-navy-950/95 p-3 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-white sm:text-base">Drop your pin</h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/5"
        >
          Back to photo
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10">
        <GuessMap guess={guess} onPick={onPick} />
      </div>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">
          {guess
            ? "Pin placed — submit when ready"
            : "Tap the map to place your guess"}
        </p>
        <button
          type="button"
          disabled={!guess}
          onClick={onSubmit}
          className="rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-navy-950 shadow-glow-gold transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit Guess
        </button>
      </div>
    </div>
  );
}
