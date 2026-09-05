'use client';

import { useState } from "react";
import type { Location } from "@/data/locations";

type Props = {
  location: Location;
  round: number;
  totalRounds: number;
  onOpenMap: () => void;
};

export default function LocationView({
  location,
  round,
  totalRounds,
  onOpenMap,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const imgClass =
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 " +
    (loaded ? "opacity-100" : "opacity-0");

  return (
    <div className="relative h-full w-full overflow-hidden bg-navy-950">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={location.imageUrl}
          alt="Mystery location"
          className={imgClass}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          draggable={false}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-950">
          <p className="px-6 text-center text-white/60">
            Image failed to load — still guess this round.
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/50" />

      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-navy-950/70 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur-md sm:left-6 sm:top-6 sm:text-sm">
        Round {round} / {totalRounds}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-3">
          <p className="text-center text-sm text-white/70 sm:text-base">
            Where in the world is this?
          </p>
          <button
            type="button"
            onClick={onOpenMap}
            className="w-full rounded-xl bg-accent-cyan px-6 py-3.5 text-base font-semibold text-navy-950 shadow-glow transition hover:brightness-110 active:scale-[0.98] sm:w-auto sm:min-w-[220px]"
          >
            Place your guess
          </button>
          <p className="hidden text-xs text-white/40 sm:block">
            Press Space to open map
          </p>
        </div>
      </div>
    </div>
  );
}
