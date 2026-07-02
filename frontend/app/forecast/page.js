'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const mockWards = [
  { name: 'Anand Vihar', lat: 28.6469, lon: 77.3161, aqi: 389 },
  { name: 'Wazirpur', lat: 28.6928, lon: 77.1678, aqi: 356 },
  { name: 'Rohini', lat: 28.7369, lon: 77.0656, aqi: 334 },
  { name: 'Dwarka', lat: 28.5921, lon: 77.0460, aqi: 312 },
  { name: 'Shahdara', lat: 28.6727, lon: 77.2945, aqi: 298 },
  { name: 'Lodhi Garden', lat: 28.5931, lon: 77.2197, aqi: 98 },
  { name: 'Vasant Kunj', lat: 28.5218, lon: 77.1577, aqi: 145 },
  { name: 'Connaught Place', lat: 28.6315, lon: 77.2167, aqi: 201 },
];

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

export default function ForecastPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)' }}>Forecast Map</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>Hyperlocal 24-72hr AQI forecast across Delhi wards</p>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden', height: '500px' }}>
        <Map wards={mockWards} />
      </div>

      <div className="card">
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>Ward AQI Summary</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {mockWards.sort((a, b) => b.aqi - a.aqi).map((ward) => (
            <div key={ward.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: getAqiColor(ward.aqi), flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: '13px', color: 'var(--text-primary)' }}>{ward.name}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{getAqiLabel(ward.aqi)}</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: getAqiColor(ward.aqi), width: '36px', textAlign: 'right' }}>{ward.aqi}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}