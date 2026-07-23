import { useState, useEffect } from 'react';
import { DarshanCard, DADA_IMAGES } from './components/DarshanCard';
import { Directions } from './components/Directions';
import { VisitorCounter } from './components/VisitorCounter';
import { HistorySection } from './components/HistorySection';
import { ChalisaReader } from './components/ChalisaReader';
import { TRANSLATIONS } from './types';
import type { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('gu');
  const [activeTab, setActiveTab] = useState<'darshan' | 'history' | 'chalisa'>('darshan');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isVividBg, setIsVividBg] = useState<boolean>(false);
  const t = TRANSLATIONS[lang];

  // Auto-cycle background Dada images softly every 10s
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % DADA_IMAGES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Compute side flanking images (alternating images for left and right margins)
  const leftSideImg = DADA_IMAGES[(selectedIndex + 1) % DADA_IMAGES.length];
  const rightSideImg = DADA_IMAGES[(selectedIndex + 2) % DADA_IMAGES.length];

  // Split the 12 names into left (1-6) and right (7-12) columns for side-by-side display
  const leftCol = t.namesList.slice(0, 6);
  const rightCol = t.namesList.slice(6, 12);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--cream)',
      position: 'relative',
    }}>

      {/* ── Translucent Background Watermarks & Golden Aura ── */}
      <div className="ambient-dada-backdrop" aria-hidden="true">
        {/* Golden divine sunburst aura */}
        <div className="golden-sunburst-aura" />

        {/* Central translucent Dada layer */}
        {DADA_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            className={`ambient-dada-layer ${isVividBg ? 'vivid' : ''} ${selectedIndex === idx ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${img.fallback || img.src}')`,
            }}
          />
        ))}

        {/* Left Side Flanking Watermark Panel (Desktop) */}
        <div
          className="side-watermark-left"
          style={{
            backgroundImage: `url('${leftSideImg.fallback || leftSideImg.src}')`,
            opacity: isVividBg ? 0.38 : 0.24,
          }}
        />

        {/* Right Side Flanking Watermark Panel (Desktop) */}
        <div
          className="side-watermark-right"
          style={{
            backgroundImage: `url('${rightSideImg.fallback || rightSideImg.src}')`,
            opacity: isVividBg ? 0.38 : 0.24,
          }}
        />

        <div className="ambient-dada-overlay" />
      </div>

      {/* ── Header ── */}
      <header className="app-header" style={{
        position: 'relative',
        zIndex: 2,
        padding: '18px clamp(16px, 4vw, 40px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1.5px solid rgba(212, 149, 10, 0.3)',
        backdropFilter: 'blur(6px)',
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
            GUJ
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
            ENG
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
            HIN
          </button>
          <span style={{ color: 'rgba(212, 149, 10, 0.3)', fontSize: '0.75rem' }}>|</span>
          {/* Background Ambiance Toggle Button */}
          <button
            onClick={() => setIsVividBg(!isVividBg)}
            title={isVividBg ? 'Switch to Soft Background' : 'Switch to Vivid Background'}
            style={{
              background: isVividBg ? 'rgba(196, 84, 26, 0.15)' : 'none',
              border: '1px solid rgba(212, 149, 10, 0.4)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: isVividBg ? 'var(--sindoor)' : 'var(--stone)',
              padding: '2px 8px',
              fontFamily: 'system-ui',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '0.75rem' }}>✨</span>
            <span>{isVividBg ? (lang === 'en' ? 'VIVID BG' : 'સ્પષ્ટ બેકગ્રાઉન્ડ') : (lang === 'en' ? 'SOFT BG' : 'શાંત બેકગ્રાઉન્ડ')}</span>
          </button>
        </div>

        {/* Location — top right corner */}
        <span className="caption" style={{ color: 'var(--stone)', fontWeight: 700, letterSpacing: '0.2em' }}>
          {t.location}
        </span>
      </header>

      {/* ── Navigation Tabs ── */}
      <nav className="tab-navigation" style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        background: 'rgba(244, 236, 216, 0.4)',
        borderBottom: '1.5px solid rgba(212, 149, 10, 0.2)',
        padding: '0 16px',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        backdropFilter: 'blur(6px)',
      }}>
        {[
          { id: 'darshan', label: t.tabDarshan },
          { id: 'history', label: t.tabHistory },
          { id: 'chalisa', label: t.tabChalisa },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '14px clamp(10px, 3vw, 24px)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: isActive ? 800 : 600,
                color: isActive ? 'var(--sindoor)' : 'var(--stone)',
                borderBottom: isActive ? '3.5px solid var(--sindoor)' : '3.5px solid transparent',
                transition: 'all 0.2s ease',
                fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                letterSpacing: '0.04em',
                marginBottom: '-1.5px',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* ── Main ── */}
      <main style={{
        position: 'relative',
        zIndex: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 40px) clamp(48px, 8vw, 96px)',
        gap: '40px',
      }}>
        {activeTab === 'darshan' && (
          <>
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
                <DarshanCard
                  t={t}
                  lang={lang}
                  selectedIndex={selectedIndex}
                  onSelectImage={(idx) => setSelectedIndex(idx)}
                />
              </div>
            </div>

            {/* Divider Threshold between Darshan and Names */}
            <div style={{ width: '100%', maxWidth: '640px', marginTop: '16px' }}>
              <hr className="threshold" />
            </div>

            {/* ── SECTION 2: 12 Names of Hanuman & Benefits (Responsive Grid) ── */}
            <section className="names-benefits-section" style={{
              width: '100%',
              maxWidth: '850px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              paddingTop: '8px',
              alignItems: 'stretch',
            }}>
              
              {/* Left Column: 12 Names Card */}
              <div className="temple-frame" style={{
                padding: 'clamp(20px, 4vw, 32px)',
                background: 'rgba(244, 236, 216, 0.4)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                textAlign: 'center',
              }}>
                <div>
                  <h2 style={{
                    fontFamily: lang === 'en' ? "'Cormorant Garamond', Georgia, serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                    fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
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

                <div className="names-container" style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                  {/* Left Column (1-6) */}
                  <div className="names-column" style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    textAlign: 'left',
                    minWidth: 0,
                  }}>
                    {leftCol.map((name, index) => (
                      <div
                        key={index}
                        className="name-item"
                        style={{
                          fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                          fontSize: lang === 'en' ? 'clamp(0.72rem, 1.8vw, 0.85rem)' : 'clamp(0.85rem, 2.2vw, 0.95rem)',
                          fontWeight: 600,
                          color: 'var(--drapery)',
                          letterSpacing: '0.03em',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word',
                          lineHeight: 1.3,
                        }}
                      >
                        {name}
                      </div>
                    ))}
                  </div>

                  {/* Middle Divider Line */}
                  <div className="names-divider" style={{
                    width: '1.5px',
                    backgroundColor: 'rgba(212, 149, 10, 0.25)',
                    alignSelf: 'stretch',
                    margin: '0 12px',
                  }} />

                  {/* Right Column (7-12) */}
                  <div className="names-column" style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    textAlign: 'left',
                    minWidth: 0,
                  }}>
                    {rightCol.map((name, index) => (
                      <div
                        key={index}
                        className="name-item"
                        style={{
                          fontFamily: lang === 'en' ? "'DM Sans', sans-serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                          fontSize: lang === 'en' ? 'clamp(0.72rem, 1.8vw, 0.85rem)' : 'clamp(0.85rem, 2.2vw, 0.95rem)',
                          fontWeight: 600,
                          color: 'var(--drapery)',
                          letterSpacing: '0.03em',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word',
                          lineHeight: 1.3,
                        }}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Chanting Benefits Card */}
              <div className="temple-frame" style={{
                padding: 'clamp(20px, 4vw, 32px)',
                background: 'rgba(244, 236, 216, 0.4)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{
                    fontFamily: lang === 'en' ? "'Cormorant Garamond', Georgia, serif" : "'Tiro Devanagari', 'Noto Serif Devanagari', serif",
                    fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--drapery)',
                  }}>
                    {t.benefitsHeading}
                  </h2>
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--stone-lt)',
                    margin: '4px 0 0 0',
                    fontStyle: 'italic',
                  }}>
                    {t.benefitsSub}
                  </p>
                  <div style={{
                    width: '50px',
                    height: '2.5px',
                    backgroundColor: 'var(--sindoor)',
                    margin: '10px auto 0',
                  }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
                  {[
                    { label: t.benefitsMorning, desc: t.benefitsMorningDesc, time: t.timeMorning },
                    { label: t.benefitsAfternoon, desc: t.benefitsAfternoonDesc, time: t.timeAfternoon },
                    { label: t.benefitsEvening, desc: t.benefitsEveningDesc, time: t.timeEvening },
                    { label: t.benefitsNight, desc: t.benefitsNightDesc, time: t.timeNight },
                    { label: t.benefitsTravel, desc: t.benefitsTravelDesc, time: t.timeTravel },
                  ].map((benefit, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      paddingBottom: '10px',
                      borderBottom: idx < 4 ? '1px solid rgba(212, 149, 10, 0.12)' : 'none',
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: 700, color: 'var(--sindoor)' }}>{benefit.label}</span>
                        <span style={{ color: 'var(--stone)', fontSize: '0.82rem' }}>{benefit.desc}</span>
                      </div>
                      <span className="caption" style={{
                        fontSize: '0.65rem',
                        background: 'rgba(212, 149, 10, 0.08)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        color: 'var(--marigold)',
                        whiteSpace: 'nowrap',
                        fontWeight: 700,
                      }}>{benefit.time}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{
                  width: '100%',
                  height: '1.5px',
                  backgroundColor: 'rgba(212, 149, 10, 0.15)',
                  margin: '8px 0'
                }} />

                {/* Devotional Note */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textAlign: 'justify',
                  fontSize: '0.82rem',
                  lineHeight: '1.6',
                  color: 'var(--stone)',
                  padding: '16px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.45)',
                  border: '1px dashed rgba(212, 149, 10, 0.15)',
                }}>
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    {t.benefitsBeliefText}
                  </p>
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    {t.benefitsKaliyugText}
                  </p>
                  <div style={{ 
                    marginTop: '4px',
                    fontWeight: 700, 
                    color: 'var(--sindoor)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    fontSize: '0.88rem',
                    textAlign: 'center'
                  }}>
                    <span>{t.benefitsSalutation1}</span>
                    <span>{t.benefitsSalutation2}</span>
                  </div>
                </div>
              </div>

            </section>

            {/* Divider Threshold between Names and Directions */}
            <div style={{ width: '100%', maxWidth: '640px', marginTop: '16px' }}>
              <hr className="threshold" />
            </div>

            {/* ── SECTION 3: Directions ── */}
            <Directions t={t} />
          </>
        )}

        {activeTab === 'history' && (
          <HistorySection t={t} />
        )}

        {activeTab === 'chalisa' && (
          <ChalisaReader lang={lang} />
        )}

      </main>

      {/* Media queries overrides to manage sizes and layouts across mobile vs desktop */}
      <style>{`
        /* Desktop/Tablet standard spacing */
        .names-container {
          flex-direction: row;
          justify-content: space-between;
        }
        .names-column {
          text-align: left;
        }
        .name-item {
          font-size: 1.05rem;
        }
        .names-divider {
          display: block;
        }

        /* Mobile viewport changes (like s21 ultra and standard phones) */
        @media (max-width: 600px) {
          .app-footer {
            padding: 12px 16px !important;
            font-size: 0.7rem !important;
          }
          .app-footer .script-deva {
            font-size: 0.85rem !important;
          }
          .app-footer .caption {
            font-size: 0.65rem !important;
          }
          .names-container {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
          }
          .names-column {
            text-align: center !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .name-item {
            font-size: 0.95rem !important; /* Slightly smaller to guarantee no line wrapping on thin viewports */
          }
          .names-divider {
            display: none !important; /* Remove center line when stacked */
          }
        }
      `}</style>

      {/* ── Footer ── */}
      <footer className="app-footer" style={{
        position: 'relative',
        zIndex: 2,
        padding: '16px clamp(16px, 4vw, 40px)',
        borderTop: '1.5px solid rgba(212, 149, 10, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '12px',
        backdropFilter: 'blur(6px)',
      }}>
        <span
          className="script-deva"
          style={{ fontSize: '1.0625rem', color: 'var(--stone)', fontWeight: 600, letterSpacing: '0.05em' }}
        >
          {t.footerSalutation}
        </span>
        <VisitorCounter t={t} />
        <span className="caption" style={{ color: 'var(--stone-lt)', letterSpacing: '0.2em' }}>
          {t.footerBrand}
        </span>
      </footer>

    </div>
  );
}

export default App;
