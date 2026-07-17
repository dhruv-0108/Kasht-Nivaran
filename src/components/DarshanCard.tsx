import React from 'react';
import type { Translations } from '../types';

interface DarshanCardProps {
  t: Translations;
}

export const DarshanCard: React.FC<DarshanCardProps> = ({ t }) => {
  return (
    <div className="relative w-full select-none">
      {/* Temple frame card */}
      <div className="temple-frame w-full overflow-hidden">
        {/* The murti image — always live gif */}
        <img
          src="/darshan.gif"
          alt={t.name}
          className="block w-full h-auto transition-transform duration-700 ease-out hover:scale-[1.025]"
          draggable={false}
        />

        {/* Warm sindoor gradient at base */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-t from-[rgba(196,84,26,0.12)] to-transparent"
        />

        {/* Name tag — top left, high contrast */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '7px 13px',
          background: 'rgba(244, 236, 216, 0.95)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--sindoor)',
            flexShrink: 0,
          }} aria-hidden />
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--drapery)',
          }}>
            {t.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarshanCard;
