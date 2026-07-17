import React from 'react';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import type { Translations } from '../types';

interface HistorySectionProps {
  t: Translations;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ t }) => {
  return (
    <section style={{
      width: '100%',
      maxWidth: '850px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      padding: '8px 0',
    }}>
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: 'var(--drapery)',
        }}>
          {t.historyTitle}
        </h2>
        <div style={{
          width: '60px',
          height: '2.5px',
          backgroundColor: 'var(--sindoor)',
          margin: '10px auto 0',
        }} />
      </div>

      {/* Grid Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        alignItems: 'stretch',
      }}>
        {/* Left Card: History Description */}
        <div className="temple-frame" style={{
          padding: 'clamp(20px, 4vw, 32px)',
          background: 'rgba(244, 236, 216, 0.4)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} style={{ color: 'var(--sindoor)' }} />
            <h3 style={{
              fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--drapery)',
            }}>
              {t.tabHistory}
            </h3>
          </div>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.7',
            color: 'var(--stone)',
            textAlign: 'justify',
          }}>
            {t.historyText}
          </p>
        </div>

        {/* Right Card: Timings & Worship Schedule */}
        <div className="temple-frame" style={{
          padding: 'clamp(20px, 4vw, 32px)',
          background: 'rgba(244, 236, 216, 0.4)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={20} style={{ color: 'var(--sindoor)' }} />
            <h3 style={{
              fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--drapery)',
            }}>
              {t.timingsTitle}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(212, 149, 10, 0.15)',
            }}>
              <Calendar size={18} style={{ color: 'var(--marigold)', marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--stone)' }}>Daily Open Schedule</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--stone-lt)', marginTop: '4px' }}>
                  {t.timingsDarshan}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Clock size={18} style={{ color: 'var(--marigold)', marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--stone)' }}>Aarti & Prayers</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--stone-lt)', marginTop: '4px', lineHeight: '1.5' }}>
                  {t.timingsAarti}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
