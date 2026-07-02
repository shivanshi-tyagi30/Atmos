'use client';

const mockData = {
  cityAqi: 247,
  worstWard: { name: 'Anand Vihar', aqi: 389 },
  bestWard: { name: 'Lodhi Garden', aqi: 98 },
  trend: [
    { time: '6 AM', aqi: 198 }, { time: '8 AM', aqi: 234 },
    { time: '10 AM', aqi: 267 }, { time: '12 PM', aqi: 289 },
    { time: '2 PM', aqi: 312 }, { time: '4 PM', aqi: 278 },
    { time: '6 PM', aqi: 247 }, { time: '8 PM', aqi: 231 },
  ]
};

function getAqiColor(aqi) {
  if (aqi <= 50) return 'var(--aqi-good)';
  if (aqi <= 100) return 'var(--aqi-satisfactory)';
  if (aqi <= 200) return 'var(--aqi-moderate)';
  if (aqi <= 300) return 'var(--aqi-poor)';
  if (aqi <= 400) return 'var(--aqi-very-poor)';
  return 'var(--aqi-severe)';
}

function getAqiLabel(aqi) {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Satisfactory';
  if (aqi <= 200) return 'Moderate';
  if (aqi <= 300) return 'Poor';
  if (aqi <= 400) return 'Very Poor';
  return 'Severe';
}

function getCigarettes(aqi) {
  const pm25 = aqi * 0.6;
  return (pm25 / 22).toFixed(1);
}

function StatCard({ title, value, subtitle, color }) {
  return (
    <div className="card" style={{ flex: 1 }}>
      <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</p>
      <p style={{ fontSize: '36px', fontWeight: '700', color: color || 'var(--text-primary)', lineHeight: 1 }}>{value}</p>
      {subtitle && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  const { cityAqi, worstWard, bestWard, trend } = mockData;
  const cigarettes = getCigarettes(cityAqi);

  const maxAqi = Math.max(...trend.map(t => t.aqi));
  const minAqi = Math.min(...trend.map(t => t.aqi));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Page title */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)' }}>Delhi Overview</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>Real-time air quality intelligence</p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <StatCard
          title="City Average AQI"
          value={cityAqi}
          subtitle={getAqiLabel(cityAqi)}
          color={getAqiColor(cityAqi)}
        />
        <StatCard
          title="Worst Ward"
          value={worstWard.aqi}
          subtitle={worstWard.name}
          color={getAqiColor(worstWard.aqi)}
        />
        <StatCard
          title="Best Ward"
          value={bestWard.aqi}
          subtitle={bestWard.name}
          color={getAqiColor(bestWard.aqi)}
        />
        <StatCard
          title="Cigarette Equivalent"
          value={`${cigarettes} cigs`}
          subtitle="Breathing Delhi's air today"
          color="var(--accent-secondary)"
        />
      </div>

      {/* 24h trend chart */}
      <div className="card">
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>24h AQI Trend</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px' }}>
          {trend.map((point) => {
            const height = ((point.aqi - minAqi) / (maxAqi - minAqi)) * 80 + 20;
            return (
              <div key={point.time} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '100%',
                  height: `${height}px`,
                  background: getAqiColor(point.aqi),
                  borderRadius: '4px 4px 0 0',
                  opacity: 0.8,
                  transition: 'height 0.3s ease'
                }} />
                <span style={{ fontSize: '10px', color: 'var(--text-dim)' }}>{point.time}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top wards list */}
      <div className="card">
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>Top 5 Worst Wards</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { name: 'Anand Vihar', aqi: 389 },
            { name: 'Wazirpur', aqi: 356 },
            { name: 'Rohini', aqi: 334 },
            { name: 'Dwarka', aqi: 312 },
            { name: 'Shahdara', aqi: 298 },
          ].map((ward, i) => (
            <div key={ward.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)', width: '16px' }}>{i + 1}</span>
              <span style={{ flex: 1, fontSize: '13px', color: 'var(--text-primary)' }}>{ward.name}</span>
              <div style={{
                flex: 2,
                height: '6px',
                background: 'var(--bg-tertiary)',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(ward.aqi / 400) * 100}%`,
                  height: '100%',
                  background: getAqiColor(ward.aqi),
                  borderRadius: '3px'
                }} />
              </div>
              <span style={{ fontSize: '13px', fontWeight: '600', color: getAqiColor(ward.aqi), width: '36px', textAlign: 'right' }}>{ward.aqi}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}