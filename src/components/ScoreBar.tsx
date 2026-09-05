'use client';

type Props = {
  totalScore: number;
  round: number;
  totalRounds: number;
};

export default function ScoreBar({ totalScore, round, totalRounds }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-navy-950/80 px-4 py-2.5 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold tracking-tight text-accent-cyan">GeoBot</span>
        <span className="hidden text-white/30 sm:inline">·</span>
        <span className="hidden text-xs text-white/50 sm:inline">
          Round {round}/{totalRounds}
        </span>
      </div>
      <div className="text-sm font-medium text-white/90">
        Score{' '}
        <span className="font-bold tabular-nums text-accent-gold">
          {totalScore.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
