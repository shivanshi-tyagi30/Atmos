export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{ fontSize: '36px', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Atmos
      </h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        AI-Powered Urban Air Quality Intelligence
      </p>
    </main>
  );
}