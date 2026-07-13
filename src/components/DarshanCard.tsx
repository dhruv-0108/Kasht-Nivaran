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
    setTilt({ x: normalizedX * 12, y: -normalizedY * 12 });
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
      {/* Card */}
      <div
        className="relative w-full overflow-hidden rounded-3xl bg-white transition-all duration-200 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
          boxShadow: isHovered
            ? '0 32px 64px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.03), 0 0 0 1px rgba(0,0,0,0.03)'
            : '0 8px 32px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02), 0 0 0 1px rgba(0,0,0,0.02)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle gold halo on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-10"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(184,146,83,0.12) 0%, transparent 65%)',
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Image */}
        <img
          src={isLive ? '/darshan.gif' : '/frame.png'}
          alt="Kashtbhanjan Dev — Salangpur"
          className="w-full h-full object-cover block transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
          draggable={false}
        />

        {/* Still / Live pill — bottom-right */}
        <div className="absolute bottom-4 right-4 z-20 flex space-x-1.5 p-1 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] shadow-sm">
          <button
            onClick={() => setIsLive(false)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-smooth ${
              !isLive
                ? 'bg-black text-white shadow-sm'
                : 'text-[#111111]/50 hover:text-[#111111]'
            }`}
          >
            Still
          </button>
          <button
            onClick={() => setIsLive(true)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-smooth ${
              isLive
                ? 'bg-[#B89253] text-white shadow-sm'
                : 'text-[#111111]/50 hover:text-[#111111]'
            }`}
          >
            Live
          </button>
        </div>

        {/* Name tag — top-left */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] shadow-sm flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89253] animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#111111]/80">
            Kashtbhanjan Dev · Salangpur
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarshanCard;
