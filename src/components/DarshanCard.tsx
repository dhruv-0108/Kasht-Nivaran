import React, { memo } from 'react';
import type { Translations } from '../types';

interface DarshanCardProps {
  t: Translations;
}

export const DarshanCard: React.FC<DarshanCardProps> = memo(({ t }) => {
  return (
    <div className="relative w-full select-none">
      {/* Temple frame card */}
      <div className="temple-frame w-full overflow-hidden relative rounded-sm bg-[#1C1612]/5">
        {/* The live murti image — picture negotiator for optimized webp/gif */}
        <picture>
          <source srcSet="/darshan.webp" type="image/webp" />
          <img
            src="/darshan.gif"
            alt={t.name}
            className="block w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
            draggable={false}
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Warm sindoor gradient at base */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-t from-[rgba(196,84,26,0.15)] via-transparent to-transparent"
        />

        {/* Name tag — top left */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '7px 13px',
          background: 'rgba(244, 236, 216, 0.95)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 10,
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
            fontSize: '0.72rem',
            fontWeight: 700,
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
});

export default DarshanCard;
