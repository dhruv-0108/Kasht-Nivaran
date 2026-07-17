import { DarshanCard } from './components/DarshanCard';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--cream)',
    }}>

      {/* ── Header ── */}
      <header style={{
        padding: '18px clamp(16px, 4vw, 40px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderBottom: '1px solid rgba(212, 149, 10, 0.18)',
      }}>
        <span
          className="script-deva"
          style={{ fontSize: '1.125rem', color: 'var(--drapery)', fontWeight: 400 }}
        >
          काष्ट निवारण
        </span>
        <span className="caption">
          Gola Gaam · Olpad
        </span>
      </header>

      {/* ── Main ── */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 40px) clamp(40px, 6vw, 80px)',
        gap: '20px',
      }}>

        {/* Label above frame */}
        <div style={{ textAlign: 'center' }}>
          <p
            className="inscription"
            style={{ color: 'var(--marigold)', letterSpacing: '0.28em', fontSize: '0.625rem' }}
          >
            નિત્ય દર્શન
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '8px',
            color: 'var(--drapery)',
          }}>
            Kasht Nivaran Dada
          </h1>
          <div style={{ marginTop: '14px' }}>
            <hr className="threshold" />
          </div>
        </div>

        {/*
          Image frame — big, responsive.
          On mobile: full width minus 32px padding total.
          On desktop: up to 640px, enough to feel immersive.
          Uses CSS clamp for smooth scaling between breakpoints.
        */}
        <div style={{
          width: '100%',
          maxWidth: 'min(100%, 640px)',
        }}>
          <DarshanCard />
        </div>

        {/* Toggle hint */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          fontWeight: 300,
          color: 'var(--stone)',
          letterSpacing: '0.1em',
          textAlign: 'center',
          lineHeight: 1.7,
        }}>
          Hover for depth &nbsp;·&nbsp; स्थिर = Still &nbsp;·&nbsp; चल = Live
        </p>
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: '16px clamp(16px, 4vw, 40px)',
        borderTop: '1px solid rgba(212, 149, 10, 0.18)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span
          className="script-deva"
          style={{ fontSize: '0.9375rem', color: 'var(--stone)', fontWeight: 400 }}
        >
          જય શ્રી હનુમાન
        </span>
        <span className="caption" style={{ color: 'var(--stone-lt)' }}>
          Kasht Nivaran
        </span>
      </footer>

    </div>
  );
}

export default App;
