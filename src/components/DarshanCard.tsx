import React, { useState } from 'react';
import type { Translations } from '../types';

interface DarshanCardProps {
  t: Translations;
}

export const DarshanCard: React.FC<DarshanCardProps> = ({ t }) => {
  const [isLive, setIsLive] = useState(true); // Default to live

  return (
    <div className="relative w-full select-none">
      {/* Temple frame card */}
      <div className="temple-frame w-full overflow-hidden">
        {/* The murti image — toggles between live gif and static frame */}
        <img
          src={isLive ? "/darshan.gif" : "/frame.png"}
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

        {/* Still / Live option in English — bottom right corner */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '6px 12px',
          background: 'rgba(244, 236, 216, 0.95)',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}>
          <button
            onClick={() => setIsLive(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: !isLive ? 'var(--sindoor)' : 'var(--stone)',
              borderBottom: !isLive ? '1.5px solid var(--sindoor)' : '1.5px solid transparent',
              paddingBottom: '2px',
              fontFamily: 'system-ui',
              fontWeight: !isLive ? 800 : 500,
            }}
          >
            Still
          </button>
          <span style={{ color: 'rgba(212, 149, 10, 0.3)' }}>|</span>
          <button
            onClick={() => setIsLive(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isLive ? 'var(--sindoor)' : 'var(--stone)',
              borderBottom: isLive ? '1.5px solid var(--sindoor)' : '1.5px solid transparent',
              paddingBottom: '2px',
              fontFamily: 'system-ui',
              fontWeight: isLive ? 800 : 500,
            }}
          >
            Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarshanCard;
