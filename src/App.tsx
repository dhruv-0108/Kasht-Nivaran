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
        borderBottom: '1.5px solid rgba(212, 149, 10, 0.3)',
      }}>
        <span
          className="script-deva"
          style={{ fontSize: '1.25rem', color: 'var(--drapery)', fontWeight: 600 }}
        >
          काष्ट निवारણ
        </span>
        <span className="caption" style={{ color: 'var(--stone)' }}>
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
        gap: '24px',
      }}>

        {/* Label above frame */}
        <div style={{ textAlign: 'center' }}>
          <p
            className="inscription"
            style={{ color: 'var(--sindoor)', letterSpacing: '0.28em', fontSize: '0.75rem', fontWeight: 800 }}
          >
            નિત્ય દર્શન
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: 700,
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
        */}
        <div style={{
          width: '100%',
          maxWidth: 'min(100%, 640px)',
        }}>
          <DarshanCard />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: '16px clamp(16px, 4vw, 40px)',
        borderTop: '1.5px solid rgba(212, 149, 10, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span
          className="script-deva"
          style={{ fontSize: '1.0625rem', color: 'var(--stone)', fontWeight: 600 }}
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
