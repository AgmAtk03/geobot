import type { Location } from '@/data/locations';

export type GamePhase = 'home' | 'playing' | 'guessing' | 'reveal' | 'end';

export type LatLng = { lat: number; lng: number };

export type RoundResult = {
  location: Location;
  guess: LatLng;
  distanceKm: number;
  points: number;
};

export type GameState = {
  phase: GamePhase;
  roundIndex: number;
  locations: Location[];
  guess: LatLng | null;
  results: RoundResult[];
  totalScore: number;
};
