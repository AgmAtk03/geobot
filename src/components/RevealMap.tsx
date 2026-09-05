'use client';

import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import type { LatLng } from '@/lib/types';

const guessIcon = new L.DivIcon({
  className: '',
  html: '<div style="width:18px;height:18px;border-radius:50%;background:#22d3ee;border:3px solid #fff;box-shadow:0 0 12px rgba(34,211,238,.8)"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

const trueIcon = new L.DivIcon({
  className: '',
  html: '<div style="width:18px;height:18px;border-radius:50%;background:#fbbf24;border:3px solid #fff;box-shadow:0 0 12px rgba(251,191,36,.8)"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function FitBounds({ a, b }: { a: LatLng; b: LatLng }) {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds([
      [a.lat, a.lng],
      [b.lat, b.lng],
    ]);
    map.fitBounds(bounds.pad(0.35));
    setTimeout(() => map.invalidateSize(), 100);
  }, [map, a, b]);
  return null;
}

type Props = {
  guess: LatLng;
  actual: LatLng;
};

export default function RevealMap({ guess, actual }: Props) {
  const mid = {
    lat: (guess.lat + actual.lat) / 2,
    lng: (guess.lng + actual.lng) / 2,
  };

  return (
    <MapContainer
      center={[mid.lat, mid.lng]}
      zoom={3}
      className="h-full w-full rounded-xl"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[guess.lat, guess.lng]} icon={guessIcon} />
      <Marker position={[actual.lat, actual.lng]} icon={trueIcon} />
      <Polyline
        positions={[
          [guess.lat, guess.lng],
          [actual.lat, actual.lng],
        ]}
        pathOptions={{ color: '#22d3ee', weight: 3, dashArray: '8 10', opacity: 0.85 }}
      />
      <FitBounds a={guess} b={actual} />
    </MapContainer>
  );
}
