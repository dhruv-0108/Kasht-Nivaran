import React, { useState, useRef } from 'react';

export const DarshanCard: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;
    setTilt({ x: normalizedX * 8, y: -normalizedY * 8 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full select-none"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Temple frame card */}
      <div
        className="temple-frame tilt-card w-full overflow-hidden"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.012 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* The murti image — fills the frame completely */}
        <img
          src={isLive ? '/darshan.gif' : '/frame.png'}
          alt="Kasht Nivaran Dada, Gola Gaam Olpad"
          className="block w-full h-auto"
          style={{
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
          draggable={false}
        />

        {/* Warm sindoor gradient — pools at base like sanctum lamplight */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(196,84,26,0.10) 0%, transparent 40%)',
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease',
            opacity: isHovered ? 1 : 0.5,
          }}
        />

        {/* Name tag — top left */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '6px 11px',
          background: 'rgba(244, 236, 216, 0.88)',
          backdropFilter: 'blur(6px)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--sindoor)',
            flexShrink: 0,
          }} aria-hidden />
          <span className="inscription" style={{
            fontSize: '0.625rem',
            color: 'var(--drapery)',
            letterSpacing: '0.2em',
          }}>
            Kasht Nivaran Dada
          </span>
        </div>

        {/* Still / Live — bottom right, underline selector */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '7px 12px',
          background: 'rgba(244, 236, 216, 0.88)',
          backdropFilter: 'blur(6px)',
        }}>
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
