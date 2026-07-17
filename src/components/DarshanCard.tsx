import React, { useState, useRef } from 'react';

/*
  DarshanCard is no longer a "card."
  It is the viewport. The murti fills your vision.
  Text is inscribed over the image, not below it.
*/

export const DarshanCard: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [over, setOver] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: nx * 4, y: -ny * 4 }); // 4° max — the world tilts slightly toward you
  };

  const onLeave = () => {
    setOver(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={heroRef}
      onMouseEnter={() => setOver(true)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(520px, 90vh, 960px)',
        overflow: 'hidden',
        perspective: '1200px',
        cursor: 'crosshair',
      }}
    >
      {/* ── The murti — fills the entire frame ── */}
      <img
        src={isLive ? '/darshan.gif' : '/frame.png'}
        alt="Kashtbhanjan Dev Hanumanji, Salangpur"
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          transform: `
            rotateY(${tilt.x}deg)
            rotateX(${tilt.y}deg)
            scale(${over ? 1.04 : 1.0})
          `,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          userSelect: 'none',
        }}
      />

      {/*
        Gradient — NOT a generic overlay.
        It pools from the bottom like the warm lamplight
        in a sanctum that illuminates the murti from below.
        Top stays clear so the deity's crown/head is visible.
      */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to top,
              rgba(28, 22, 18, 0.88) 0%,
              rgba(28, 22, 18, 0.55) 25%,
              rgba(28, 22, 18, 0.15) 50%,
              transparent 70%
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Side vignettes — depth, not decoration */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(
              ellipse at center,
              transparent 55%,
              rgba(28, 22, 18, 0.35) 100%
            )
          `,
          pointerEvents: 'none',
        }}
      />

      {/* ── Inscribed text — lives ON the image, not below it ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'clamp(24px, 5vw, 56px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {/* Nitya Darshan label */}
        <p
          className="script-deva"
          style={{
            fontSize: 'clamp(11px, 1.5vw, 13px)',
            color: 'var(--marigold)',
            margin: 0,
            letterSpacing: '0.22em',
            fontWeight: 400,
          }}
        >
          नित्य दर्शन
        </p>

        {/* Primary inscription — the name at display scale */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(40px, 7vw, 96px)',
            fontWeight: 500,
            color: 'var(--cream)',
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Kashtbhanjan
          <br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(244,236,216,0.80)' }}>
            Dev
          </span>
        </h1>

        {/* Location + toggle — same line, minimal */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(10px, 1.2vw, 12px)',
              fontWeight: 300,
              color: 'rgba(244,236,216,0.55)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Salangpur · Gujarat
          </span>

          {/* Still / Live — inline underline selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              className={`darshan-toggle${!isLive ? ' active-light' : ' muted-light'}`}
              onClick={() => setIsLive(false)}
            >
              स्थिर
            </button>
            <span style={{ width: '1px', height: '10px', background: 'rgba(244,236,216,0.25)' }} aria-hidden />
            <button
              className={`darshan-toggle${isLive ? ' active-light' : ' muted-light'}`}
              onClick={() => setIsLive(true)}
            >
              चल
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarshanCard;
