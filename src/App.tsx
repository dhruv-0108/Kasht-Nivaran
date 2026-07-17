import { DarshanCard } from './components/DarshanCard';

/*
  Layout intention:
  You enter a temple. You pass through the dwar (doorway).
  You see the garbhagriha (sanctum). You take darshan.
  Nothing competes with the murti. The architecture serves the deity.
*/

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--cream)',
      }}
    >

      {/* ── Pravesha — entry line ── */}
      <header
        style={{
          padding: '18px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          borderBottom: '1px solid rgba(212, 149, 10, 0.18)',
        }}
      >
        {/* Temple name in Devanagari — feels carved, not printed */}
        <span
          className="script-deva"
          style={{
            fontSize: '1.125rem',
            color: 'var(--drapery)',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          काष्ट निवारण
        </span>

        {/* Location — like a plaque, not a badge */}
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--stone)',
          }}
        >
          Salangpur · Gujarat
        </span>
      </header>

      {/* ── Garbhagriha — the sanctum ── */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px 56px',
        }}
      >

        {/* Inscription above the frame */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <p
            className="inscription"
            style={{
              fontSize: '0.625rem',      /* 10px */
              color: 'var(--marigold)',
              marginBottom: '10px',
              letterSpacing: '0.28em',
            }}
          >
            नित्य दर्शन
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 500,
              color: 'var(--drapery)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Kashtbhanjan Dev
          </h1>

          {/* Threshold — thin marigold rule */}
          <div style={{ marginTop: '12px', width: '100%' }}>
            <hr className="threshold" />
          </div>
        </div>

        {/* The darshan frame — constrained like a temple niche */}
        <div
          style={{
            width: '100%',
            maxWidth: '380px',
          }}
        >
          <DarshanCard />
        </div>

        {/* Below-frame label */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 300,
            color: 'var(--stone)',
            letterSpacing: '0.1em',
            marginTop: '18px',
            textAlign: 'center',
            lineHeight: 1.7,
          }}
        >
          Hover for depth &nbsp;·&nbsp; स्थिर = Still &nbsp;·&nbsp; चल = Live
        </p>
      </main>

      {/* ── Pranam — the leaving line ── */}
      <footer
        style={{
          padding: '16px 28px',
          borderTop: '1px solid rgba(212, 149, 10, 0.18)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className="script-deva"
          style={{
            fontSize: '0.875rem',
            color: 'var(--stone)',
            fontWeight: 400,
          }}
        >
          जय श्री हनुमान
        </span>

        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--stone-lt)',
          }}
        >
          Kasht Nivaran
        </span>
      </footer>

    </div>
  );
}

export default App;
