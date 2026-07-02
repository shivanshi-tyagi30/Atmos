'use client';

export default function Sidebar() {
  return (
    <aside style={{
      width: '260px',
      minHeight: '100vh',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div style={{ marginBottom: '40px', paddingLeft: '8px' }}>
        <h1 style={{
          fontSize: '20px',
          fontWeight: '700',
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          ◈ Atmos
        </h1>
        <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px' }}>
          Air Quality Intelligence
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {[
          { label: 'Dashboard', href: '/', icon: '⬡' },
          { label: 'Forecast Map', href: '/forecast', icon: '◎' },
          { label: 'Blame Score', href: '/blame', icon: '◈' },
          { label: 'Enforcement', href: '/enforce', icon: '◉' },
          { label: 'Chat', href: '/chat', icon: '◌' },
        ].map((item) => (
          <a key={item.href} href={item.href} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--bg-tertiary)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', paddingLeft: '8px' }}>
        <p style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
          ET AI Hackathon 2.0 · Track 5
        </p>
      </div>
    </aside>
  );
}