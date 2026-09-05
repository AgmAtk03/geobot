# GeoBot

Mystery photo, world map pin, score by distance.

## Run
Install packages, then start the Next.js development server.
Open http://localhost:3000

## Add locations
Edit src/data/locations.ts (id, name, lat, lng, imageUrl).

## Scoring
Math.round(5000 * Math.exp(-distanceKm / 2000))
