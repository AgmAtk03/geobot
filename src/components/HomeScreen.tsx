'use client';

type Props = { onPlay: () => void };

export default function HomeScreen({ onPlay }: Props) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-navy-950 px-6 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-md animate-fade-in text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
          Street to globe
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          GeoBot
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-white/65 sm:text-base">
          Study a mystery outdoor photo, drop a pin on the world map, and score
          points by how close you get. Five rounds. No repeats. Pure geography vibes.
        </p>
        <div className="mb-8 rounded-2xl border border-white/10 bg-navy-900/80 p-5 text-left backdrop-blur">
          <h2 className="mb-3 text-sm font-semibold text-accent-gold">How to play</h2>
          <ol className="space-y-2 text-sm text-white/70">
            <li>1. Look at the mystery location photo</li>
            <li>2. Open the map and place your guess pin</li>
            <li>3. Submit — see distance &amp; points (max 5,000)</li>
            <li>4. Climb the leaderboard across 5 rounds</li>
          </ol>
        </div>
        <button
          type="button"
          onClick={onPlay}
          className="w-full rounded-xl bg-accent-cyan px-8 py-4 text-lg font-bold text-navy-950 shadow-glow transition hover:brightness-110 active:scale-[0.98]"
        >
          Play
        </button>
        <p className="mt-4 text-xs text-white/40">Default: 5 rounds · Leaflet + OpenStreetMap</p>
      </div>
    </div>
  );
}
