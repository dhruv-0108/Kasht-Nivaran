import { useState } from 'react';
import { DarshanCard } from './components/DarshanCard';
import { TRANSLATIONS } from './types';
import type { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('gu');
  const t = TRANSLATIONS[lang];

  // Split the 12 names into left (first 6) and right (last 6) lists
  const leftNames = t.namesList.slice(0, 6);
  const rightNames = t.namesList.slice(6, 12);

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
        padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 40px) clamp(40px, 6vw, 80px)',
        gap: '32px',
      }}>

        {/* Label above frame */}
        <div style={{ textAlign: 'center' }}>
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

        {/* Responsive Layout: 12 Names on Left & Right on Desktop, Stacked on Mobile */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          gap: 'clamp(24px, 4vw, 64px)',
        }}>
          
          {/* Left Column - Names 1-6 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: '200px',
            textAlign: 'right',
            flex: '1 1 200px',
            order: 1
          }} className="names-column-left">
            {leftNames.map((name, index) => (
              <div key={index} style={{
                fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                fontWeight: 600,
                color: 'var(--drapery)',
                letterSpacing: '0.1em',
                lineHeight: '1.4',
              }}>
                {name}
              </div>
            ))}
          </div>

          {/* Center Column - Image Frame */}
          <div style={{
            width: '100%',
            maxWidth: 'min(100%, 560px)',
            flex: '2 1 400px',
            order: 2
          }}>
            <DarshanCard t={t} />
          </div>

          {/* Right Column - Names 7-12 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: '200px',
            textAlign: 'left',
            flex: '1 1 200px',
            order: 3
          }} className="names-column-right">
            {rightNames.map((name, index) => (
              <div key={index} style={{
                fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                fontWeight: 600,
                color: 'var(--drapery)',
                letterSpacing: '0.1em',
                lineHeight: '1.4',
              }}>
                {name}
              </div>
            ))}
          </div>

        </div>

      </main>

      {/* Custom Styles override for responsive order on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .names-column-left, .names-column-right {
            text-align: center !important;
            flex: 1 1 100% !important;
          }
          .names-column-left {
            order: 2 !important;
          }
          .names-column-right {
            order: 3 !important;
          }
        }
      `}</style>

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
