import React, { useState, useRef } from 'react';

export const DarshanCard: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [over, setOver] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const r = frameRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;   // –0.5 to 0.5
    const ny = (e.clientY - r.top)  / r.height - 0.5;
    // Subtle tilt — 6° max. Temples don't shake.
    setTilt({ x: nx * 6, y: -ny * 6 });
  };

  const onLeave = () => { setOver(false); setTilt({ x: 0, y: 0 }); };

  return (
    <div
      ref={frameRef}
      className="relative w-full select-none"
      style={{ perspective: '900px' }}
      onMouseEnter={() => setOver(true)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* ── Temple frame ── */}
      <div
        className="temple-frame tilt-card w-full overflow-hidden"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ── Murti image ── */}
        <img
          src={isLive ? '/darshan.gif' : '/frame.png'}
          alt="Kashtbhanjan Dev Hanumanji, Salangpur"
          className="block w-full h-auto"
          style={{
            transform: over ? 'scale(1.025)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
          draggable={false}
        />

        {/*
          Subtle sindoor gradient at the bottom — like the warm light
          that pools at the base of a murti in a sanctum.
        */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(196,84,26,0.08) 0%, transparent 35%)',
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease',
            opacity: over ? 1 : 0.5,
          }}
        />

        {/* ── Still / Live selector — underline, not pill ── */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '6px 10px',
            background: 'rgba(244, 236, 216, 0.82)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <button
            className={`darshan-toggle${!isLive ? ' active' : ''}`}
            onClick={() => setIsLive(false)}
          >
            स्थिर
          </button>
          <span style={{ width: '1px', height: '10px', background: 'var(--stone-lt)' }} aria-hidden />
          <button
            className={`darshan-toggle${isLive ? ' active' : ''}`}
            onClick={() => setIsLive(true)}
          >
            चल
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarshanCard;
