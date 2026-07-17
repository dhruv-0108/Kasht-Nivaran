import React, { useState, useRef } from 'react';

export const DarshanCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
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
      <div
        className="temple-frame tilt-card w-full overflow-hidden"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.012 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Always live — the GIF */}
        <img
          src="/darshan.gif"
          alt="Kasht Nivaran Dada, Gola Gaam Olpad"
          className="block w-full h-auto"
          style={{
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
          draggable={false}
        />

        {/* Warm sindoor gradient at base */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(196,84,26,0.10) 0%, transparent 40%)',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0.6,
            transition: 'opacity 0.4s ease',
          }}
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
            Kasht Nivaran Dada
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarshanCard;
