import { DarshanCard } from './components/DarshanCard';

/*
  Layout logic:
  ─────────────
  Hanumanji fills all three worlds.
  This page has one job: let him fill the screen.

  Three zones:
  1. Entry — one thin line (the dwar)
  2. Darshan — the image, edge to edge, tall
  3. Pranam — a Chalisa verse at large type, then the footer

  Nothing competes. No grids, no sidebar, no cards.
*/

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--cream)' }}>

      {/* ── 1. Dwar — entry mark, one line ── */}
      <header style={{
        position: 'relative',
        zIndex: 10,
        padding: '20px clamp(20px, 5vw, 48px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
        <span
          className="script-deva"
          style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            color: 'var(--drapery)',
            fontWeight: 400,
            letterSpacing: '0.025em',
          }}
        >
          काष्ट निवारण
        </span>
        <span className="caption">
          Salangpur · Gujarat
        </span>
      </header>

      {/* ── 2. Darshan — full bleed, no padding, no box ── */}
      <section style={{ width: '100%', lineHeight: 0 }}>
        <DarshanCard />
      </section>

      {/* ── 3. Pranam section — large verse, generous space ── */}
      <section style={{
        flex: 1,
        padding: 'clamp(56px, 10vw, 120px) clamp(20px, 8vw, 120px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      }}>

        {/* Thin marigold rule */}
        <div style={{ width: '100%', maxWidth: '640px' }}>
          <hr className="threshold" />
        </div>

        {/* The verse — LARGE. Typography that fills space. */}
        <div style={{ textAlign: 'center', maxWidth: '760px' }}>

          {/* Verse number — tiny, recessive */}
          <p
            className="inscription"
            style={{
              color: 'var(--marigold)',
              marginBottom: '24px',
              fontSize: '0.625rem',
              letterSpacing: '0.3em',
            }}
          >
            हनुमान चालीसा · चौपाई २३
          </p>

          {/* The verse in Devanagari at display scale */}
          <p
            className="verse-large"
            style={{
              marginBottom: '8px',
              color: 'var(--drapery)',
            }}
          >
            आपन तेज सम्हारो आपै।
          </p>
          <p
            className="verse-large"
            style={{
              marginBottom: '36px',
              color: 'var(--drapery)',
            }}
          >
            तीनों लोक हाँक तें काँपै॥
          </p>

          {/* Translation — small, DM Sans, stone color */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'var(--stone)',
            maxWidth: '520px',
            margin: '0 auto',
            letterSpacing: '0.01em',
          }}>
            Only you can contain your own radiance.<br />
            All three worlds tremble at your thunderous roar.
          </p>
        </div>

        {/* Bottom rule */}
        <div style={{ width: '100%', maxWidth: '640px' }}>
          <hr className="threshold" />
        </div>
      </section>

      {/* ── 4. Footer — one line, nothing more ── */}
      <footer style={{
        padding: '18px clamp(20px, 5vw, 48px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(184, 169, 144, 0.25)',
      }}>
        <span
          className="script-deva"
          style={{
            fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)',
            color: 'var(--stone)',
            fontWeight: 400,
          }}
        >
          जय श्री हनुमान
        </span>
        <span className="caption" style={{ color: 'var(--stone-lt)' }}>
          Kasht Nivaran
        </span>
      </footer>

    </div>
  );
}

export default App;
