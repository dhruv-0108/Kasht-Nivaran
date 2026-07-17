import { useState } from 'react';
import { DarshanCard } from './components/DarshanCard';
import { TRANSLATIONS } from './types';
import type { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('gu');
  const t = TRANSLATIONS[lang];

  // Split the 12 names into left (1-6) and right (7-12) columns for side-by-side display
  const leftCol = t.namesList.slice(0, 6);
  const rightCol = t.namesList.slice(6, 12);

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
        alignItems: 'center',
        borderBottom: '1.5px solid rgba(212, 149, 10, 0.3)',
      }}>
        {/* Language selector — top left corner */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => setLang('gu')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: lang === 'gu' ? 800 : 500,
              color: lang === 'gu' ? 'var(--sindoor)' : 'var(--stone)',
              borderBottom: lang === 'gu' ? '1.5px solid var(--sindoor)' : '1.5px solid transparent',
              paddingBottom: '2px',
              fontFamily: 'system-ui'
            }}
          >
            ગુજરાતી
          </button>
          <span style={{ color: 'rgba(212, 149, 10, 0.3)', fontSize: '0.75rem' }}>|</span>
          <button
            onClick={() => setLang('en')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: lang === 'en' ? 800 : 500,
              color: lang === 'en' ? 'var(--sindoor)' : 'var(--stone)',
              borderBottom: lang === 'en' ? '1.5px solid var(--sindoor)' : '1.5px solid transparent',
              paddingBottom: '2px',
              fontFamily: 'system-ui'
            }}
          >
            EN
          </button>
          <span style={{ color: 'rgba(212, 149, 10, 0.3)', fontSize: '0.75rem' }}>|</span>
          <button
            onClick={() => setLang('hi')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: lang === 'hi' ? 800 : 500,
              color: lang === 'hi' ? 'var(--sindoor)' : 'var(--stone)',
              borderBottom: lang === 'hi' ? '1.5px solid var(--sindoor)' : '1.5px solid transparent',
              paddingBottom: '2px',
              fontFamily: 'system-ui'
            }}
          >
            हिन्दी
          </button>
        </div>

        {/* Location — top right corner */}
        <span className="caption" style={{ color: 'var(--stone)', fontWeight: 700, letterSpacing: '0.2em' }}>
          {t.location}
        </span>
      </header>

      {/* ── Main ── */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 96px)',
        gap: '40px',
      }}>

        {/* ── SECTION 1: The Immersion (Main Focus) ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '640px',
          textAlign: 'center',
          gap: '24px',
        }}>
          {/* Label above frame */}
          <div>
            <p
              className="inscription"
              style={{ color: 'var(--sindoor)', letterSpacing: '0.35em', fontSize: '0.8rem', fontWeight: 800 }}
            >
              {t.subtitle}
            </p>
            <h1 style={{
              fontFamily: lang === 'en' ? "'Cormorant Garamond', Georgia, serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              marginTop: '8px',
              color: 'var(--drapery)',
            }}>
              {t.title}
            </h1>

            <p style={{
              fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
              fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              fontWeight: 600,
              color: 'var(--stone-lt)',
              letterSpacing: '0.08em',
              marginTop: '8px',
              lineHeight: 1.5,
            }}>
              {t.subAddress}
            </p>

            <div style={{ marginTop: '16px' }}>
              <hr className="threshold" />
            </div>
          </div>

          {/* The image frame — centered, standalone, and clean */}
          <div style={{ width: '100%' }}>
            <DarshanCard t={t} />
          </div>
        </div>

        {/* Divider Threshold between Darshan and Names */}
        <div style={{ width: '100%', maxWidth: '640px', marginTop: '16px' }}>
          <hr className="threshold" />
        </div>

        {/* ── SECTION 2: 12 Names of Hanuman (Compact Single Screen Text List) ── */}
        <section style={{
          width: '100%',
          maxWidth: '600px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingTop: '8px',
        }}>
          <div>
            <h2 style={{
              fontFamily: lang === 'en' ? "'Cormorant Garamond', Georgia, serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--drapery)',
            }}>
              {t.namesHeading}
            </h2>
            <div style={{
              width: '50px',
              height: '2.5px',
              backgroundColor: 'var(--sindoor)',
              margin: '10px auto 0',
            }} />
          </div>

          {/* 
            Two-column simple text list. 
            Takes minimal vertical height, keeping all 12 items easily on one screen view.
          */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            gap: '32px',
          }}>
            {/* Left Column (1-6) */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              textAlign: 'left',
            }}>
              {leftCol.map((name, index) => (
                <div
                  key={index}
                  style={{
                    fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                    fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                    fontWeight: 600,
                    color: 'var(--drapery)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Divider line in middle */}
            <div style={{
              width: '1.5px',
              backgroundColor: 'rgba(212, 149, 10, 0.25)',
              alignSelf: 'stretch',
            }} />

            {/* Right Column (7-12) */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              textAlign: 'left',
            }}>
              {rightCol.map((name, index) => (
                <div
                  key={index}
                  style={{
                    fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                    fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                    fontWeight: 600,
                    color: 'var(--drapery)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

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
          style={{ fontSize: '1.0625rem', color: 'var(--stone)', fontWeight: 600, letterSpacing: '0.05em' }}
        >
          {t.footerSalutation}
        </span>
        <span className="caption" style={{ color: 'var(--stone-lt)', letterSpacing: '0.2em' }}>
          {t.footerBrand}
        </span>
      </footer>

    </div>
  );
}

export default App;
