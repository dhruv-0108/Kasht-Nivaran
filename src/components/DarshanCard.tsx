import React, { useState } from 'react';
import type { Translations, Language } from '../types';

export interface DadaImage {
  id: string;
  src: string;
  fallback?: string;
  titleGu: string;
  titleEn: string;
  titleHi: string;
}

export const DADA_IMAGES: DadaImage[] = [
  { id: 'live', src: '/darshan.webp', fallback: '/darshan.gif', titleGu: 'મૂળ દિવ્ય દર્શન', titleEn: 'Original Live Darshan', titleHi: 'मूल दिव्य दर्शन' },
  { id: 'dada1', src: '/images/dada/dada1.jpg', titleGu: 'દિવ્ય દર્શન ૧', titleEn: 'Divine Darshan 1', titleHi: 'दिव्य दर्शन 1' },
  { id: 'dada2', src: '/images/dada/dada2.jpg', titleGu: 'દિવ્ય દર્શન ૨', titleEn: 'Divine Darshan 2', titleHi: 'दिव्य दर्शन 2' },
  { id: 'dada3', src: '/images/dada/dada3.jpg', titleGu: 'દિવ્ય દર્શન ૩', titleEn: 'Divine Darshan 3', titleHi: 'दिव्य दर्शन 3' },
  { id: 'dada4', src: '/images/dada/dada4.jpg', titleGu: 'દિવ્ય દર્શન ૪', titleEn: 'Divine Darshan 4', titleHi: 'दिव्य दर्शन 4' },
];

interface DarshanCardProps {
  t: Translations;
  lang: Language;
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export const DarshanCard: React.FC<DarshanCardProps> = ({ t, lang, selectedIndex, onSelectImage }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeImg = DADA_IMAGES[selectedIndex] || DADA_IMAGES[0];

  const handlePrev = () => {
    const nextIdx = (selectedIndex - 1 + DADA_IMAGES.length) % DADA_IMAGES.length;
    onSelectImage(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % DADA_IMAGES.length;
    onSelectImage(nextIdx);
  };

  const getImageTitle = (img: DadaImage) => {
    if (lang === 'en') return img.titleEn;
    if (lang === 'hi') return img.titleHi;
    return img.titleGu;
  };

  return (
    <div className="relative w-full select-none flex flex-col items-center gap-4">
      {/* Temple frame card */}
      <div className="temple-frame w-full overflow-hidden relative group rounded-sm bg-[#1C1612]/5">
        {/* Main Image Container */}
        <div className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-auto flex items-center justify-center bg-black/5">
          {activeImg.fallback ? (
            <picture>
              <source srcSet={activeImg.src} type="image/webp" />
              <img
                src={activeImg.fallback}
                alt={t.name}
                className="block w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                draggable={false}
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          ) : (
            <img
              src={activeImg.src}
              alt={t.name}
              className="block w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              draggable={false}
              loading="eager"
              fetchPriority="high"
            />
          )}

          {/* Previous / Next Overlay Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Darshan"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(28, 22, 18, 0.55)',
              backdropFilter: 'blur(4px)',
              color: 'var(--cream)',
              border: '1px solid rgba(212, 149, 10, 0.4)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--sindoor)';
              e.currentTarget.style.borderColor = 'var(--marigold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(28, 22, 18, 0.55)';
              e.currentTarget.style.borderColor = 'rgba(212, 149, 10, 0.4)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Darshan"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(28, 22, 18, 0.55)',
              backdropFilter: 'blur(4px)',
              color: 'var(--cream)',
              border: '1px solid rgba(212, 149, 10, 0.4)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--sindoor)';
              e.currentTarget.style.borderColor = 'var(--marigold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(28, 22, 18, 0.55)';
              e.currentTarget.style.borderColor = 'rgba(212, 149, 10, 0.4)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Zoom / Lightbox Expand Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Expand Image"
            title="Expand Full View"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(244, 236, 216, 0.9)',
              backdropFilter: 'blur(4px)',
              color: 'var(--drapery)',
              border: '1px solid rgba(212, 149, 10, 0.4)',
              padding: '6px 10px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.05em',
              transition: 'all 0.2s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--cream)';
              e.currentTarget.style.color = 'var(--sindoor)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(244, 236, 216, 0.9)';
              e.currentTarget.style.color = 'var(--drapery)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
            <span>{lang === 'en' ? 'FULL VIEW' : lang === 'hi' ? 'पूर्ण रूप' : 'પૂર્ણ દર્શન'}</span>
          </button>

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
              {getImageTitle(activeImg)}
            </span>
          </div>
        </div>
      </div>

      {/* ── Thumbnail Selector Strip ── */}
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '6px 0',
        overflowX: 'auto',
      }}>
        {DADA_IMAGES.map((img, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={img.id}
              onClick={() => onSelectImage(idx)}
              title={getImageTitle(img)}
              style={{
                position: 'relative',
                width: '56px',
                height: '56px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: isSelected ? '2.5px solid var(--sindoor)' : '1.5px solid rgba(212, 149, 10, 0.3)',
                boxShadow: isSelected ? '0 0 10px rgba(196, 84, 26, 0.35)' : 'none',
                cursor: 'pointer',
                opacity: isSelected ? 1 : 0.65,
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.25s ease',
                flexShrink: 0,
                background: 'var(--parchment)',
                padding: 0,
              }}
            >
              <img
                src={img.fallback || img.src}
                alt={getImageTitle(img)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid var(--marigold)',
                  pointerEvents: 'none',
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Lightbox Modal ── */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(28, 22, 18, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(244, 236, 216, 0.2)',
              border: '1px solid rgba(244, 236, 216, 0.4)',
              color: 'var(--cream)',
              fontSize: '1.5rem',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
            }}
          >
            ✕
          </button>

          {/* Lightbox Main Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <img
              src={activeImg.fallback || activeImg.src}
              alt={getImageTitle(activeImg)}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '4px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                border: '2px solid var(--marigold)',
              }}
            />

            <div style={{
              textAlign: 'center',
              color: 'var(--cream)',
              fontFamily: lang === 'en' ? "'Cormorant Garamond', serif" : "'Tiro Devanagari', serif",
              fontSize: '1.25rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
            }}>
              {getImageTitle(activeImg)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarshanCard;
