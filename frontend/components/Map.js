'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function getAqiColor(aqi) {
  if (aqi <= 50) return '#4ade80';
  if (aqi <= 100) return '#a3e635';
  if (aqi <= 200) return '#facc15';
  if (aqi <= 300) return '#fb923c';
  if (aqi <= 400) return '#f97316';
  return '#ef4444';
}

function getAqiLabel(aqi) {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Satisfactory';
  if (aqi <= 200) return 'Moderate';
  if (aqi <= 300) return 'Poor';
  if (aqi <= 400) return 'Very Poor';
  return 'Severe';
}

export default function Map({ wards }) {
  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap &copy; CARTO'
      />
      {wards.map((ward) => (
        <CircleMarker
          key={ward.name}
          center={[ward.lat, ward.lon]}
          radius={20}
          fillColor={getAqiColor(ward.aqi)}
          color={getAqiColor(ward.aqi)}
          weight={2}
          opacity={0.9}
          fillOpacity={0.6}
        >
          <Popup>
            <strong>{ward.name}</strong><br />
            AQI: <strong style={{ color: getAqiColor(ward.aqi) }}>{ward.aqi}</strong><br />
            Status: {getAqiLabel(ward.aqi)}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}