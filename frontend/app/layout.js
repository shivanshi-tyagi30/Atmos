import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Atmos — Urban Air Quality Intelligence',
  description: 'AI-powered hyperlocal AQI forecasting for Indian cities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <div style={{ marginLeft: '260px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <header style={{
              height: '56px',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              position: 'sticky',
              top: 0,
              zIndex: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>City</span>
                <span style={{ fontSize: '13px', color: 'var(--accent-primary)', fontWeight: '600' }}>Delhi, India</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </header>
            <main style={{ flex: 1, padding: '24px' }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}