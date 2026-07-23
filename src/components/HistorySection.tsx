import React from 'react';
import { Hourglass } from 'lucide-react';
import type { Translations } from '../types';

interface HistorySectionProps {
  t: Translations;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ t }) => {
  return (
    <section style={{
      width: '100%',
      maxWidth: '600px',
      margin: '40px auto',
      textAlign: 'center',
    }}>
      <div className="temple-frame" style={{
        padding: '60px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <Hourglass size={32} style={{ color: 'var(--marigold)', animation: 'spin 8s linear infinite' }} />
        
        <h2 style={{
          fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--drapery)',
          margin: 0,
        }}>
          {t.historyComingSoon}
        </h2>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HistorySection;
