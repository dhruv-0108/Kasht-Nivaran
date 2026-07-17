import React, { useState, useRef } from 'react';
import { BookOpen, Play, RotateCcw, Type, ChevronUp, Info } from 'lucide-react';
import { CHALISA_VERSES } from '../chalisaData';
import type { Language } from '../types';

interface ChalisaReaderProps {
  lang: Language;
}

export const ChalisaReader: React.FC<ChalisaReaderProps> = ({ lang }) => {
  const [activeVerseIdx, setActiveVerseIdx] = useState<number>(0);
  const [fontSize, setFontSize] = useState<'base' | 'lg' | 'xl'>('lg');
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  };

  const startAutoScroll = () => {
    setIsAutoScrolling(true);
    if (scrollContainerRef.current) {
      scrollIntervalRef.current = window.setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop += 1;
        }
      }, 45);
    }
  };

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const handleVerseClick = (idx: number) => {
    stopAutoScroll();
    setActiveVerseIdx(idx);
    
    isProgrammaticScrollRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 600);

    const container = scrollContainerRef.current;
    if (container) {
      const child = container.children[idx] as HTMLElement;
      if (child) {
        const containerRect = container.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();
        const relativeOffset = childRect.top - containerRect.top + container.scrollTop;

        container.scrollTo({
          top: relativeOffset - 20,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (isProgrammaticScrollRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const children = container.children;
    const containerTop = container.getBoundingClientRect().top;
    const containerHeight = container.clientHeight;
    const targetY = containerTop + containerHeight / 4;

    let closestIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const rect = child.getBoundingClientRect();
      const childCenter = rect.top + rect.height / 2;
      const distance = Math.abs(childCenter - targetY);

      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    }

    if (closestIdx !== activeVerseIdx) {
      setActiveVerseIdx(closestIdx);
    }
  };

  const getLocalizedVerseNum = (numStr: string) => {
    const parts = numStr.split(' ');
    const type = parts[0];
    const num = parts[1] || '';

    if (lang === 'gu') {
      const typeStr = type === 'Doha' ? 'દોહા' : 'ચોપાઈ';
      return `${typeStr} ${num}`;
    }
    if (lang === 'hi') {
      const typeStr = type === 'Doha' ? 'दोहा' : 'चौपाई';
      return `${typeStr} ${num}`;
    }
    return numStr;
  };

  const activeVerse = CHALISA_VERSES[activeVerseIdx];
  const activeLangData = activeVerse[lang];

  return (
    <section style={{
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '8px 0',
    }}>
      {/* Controls Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(244, 236, 216, 0.4)',
        padding: '12px 20px',
        borderRadius: '12px',
        border: '1px solid rgba(212, 149, 10, 0.2)',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={18} style={{ color: 'var(--sindoor)', marginTop: '2px' }} />
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--stone)' }}>
            {lang === 'gu' ? 'હનુમાન ચાલીસા પઠન' : lang === 'hi' ? 'हनुमान चालीसा पठन' : 'Hanuman Chalisa Reader'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Play/Pause */}
          <button
            onClick={toggleAutoScroll}
            style={{
              padding: '6px 14px',
              backgroundColor: isAutoScrolling ? 'var(--sindoor)' : 'transparent',
              border: '1.5px solid var(--sindoor)',
              color: isAutoScrolling ? '#fff' : 'var(--sindoor)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Play size={12} fill={isAutoScrolling ? '#fff' : 'transparent'} />
            {isAutoScrolling ? (lang === 'gu' ? 'સ્થગિત' : lang === 'hi' ? 'रोकें' : 'Pause') : (lang === 'gu' ? 'ઓટો સ્ક્રોલ' : lang === 'hi' ? 'ऑटो स्क्रॉल' : 'Auto Scroll')}
          </button>

          {/* Reset */}
          <button
            onClick={() => {
              stopAutoScroll();
              if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
              setActiveVerseIdx(0);
            }}
            style={{
              padding: '6px 12px',
              background: 'transparent',
              border: '1.5px solid var(--stone)',
              color: 'var(--stone)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RotateCcw size={12} />
            {lang === 'gu' ? 'ફરીથી શરૂ' : lang === 'hi' ? 'पुनः आरंभ' : 'Reset'}
          </button>

          {/* Font Size Toggle */}
          <button
            onClick={() => {
              if (fontSize === 'base') setFontSize('lg');
              else if (fontSize === 'lg') setFontSize('xl');
              else setFontSize('base');
            }}
            style={{
              padding: '6px 10px',
              background: 'transparent',
              border: '1.5px solid var(--stone)',
              color: 'var(--stone)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <Type size={12} style={{ marginRight: '4px' }} />
            {fontSize.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Main Dual Grid View */}
      <div className="chalisa-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '24px',
        alignItems: 'stretch',
        minHeight: '480px',
      }}>
        {/* Left Side: Scrollable Verses */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{
            maxHeight: '520px',
            overflowY: 'auto',
            paddingRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
          className="custom-scrollbar"
        >
          {CHALISA_VERSES.map((verse, idx) => {
            const isActive = activeVerseIdx === idx;
            const langData = verse[lang];
            return (
              <div
                key={verse.num}
                onClick={() => handleVerseClick(idx)}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: isActive ? '1.5px solid var(--sindoor)' : '1px dashed rgba(212, 149, 10, 0.25)',
                  background: isActive ? 'rgba(212, 149, 10, 0.06)' : 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(212, 149, 10, 0.08)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--marigold)', letterSpacing: '0.08em' }}>
                    {getLocalizedVerseNum(verse.num).toUpperCase()}
                  </span>
                  {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--sindoor)' }} />}
                </div>

                <p style={{
                  fontSize: fontSize === 'base' ? '1rem' : fontSize === 'lg' ? '1.15rem' : '1.3rem',
                  fontWeight: 650,
                  color: 'var(--drapery)',
                  textAlign: 'center',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line',
                  margin: '0 0 6px 0',
                }}>
                  {langData.sanskrit}
                </p>

                {/* Mobile-only inline translation */}
                <div className="mobile-meaning" style={{
                  display: 'none',
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(212, 149, 10, 0.15)',
                }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--sindoor)', display: 'block', marginBottom: '4px' }}>
                    {lang === 'gu' ? 'સરળ અર્થ' : lang === 'hi' ? 'भावार्थ' : 'MEANING'}
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--stone)', margin: 0, lineHeight: '1.5' }}>
                    {langData.translation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Visual Meaning Panel (Sticky / Desktop only) */}
        <div className="desktop-meaning-panel" style={{
          position: 'sticky',
          top: '20px',
          height: 'fit-content',
        }}>
          <div className="temple-frame" style={{
            padding: '24px',
            background: 'rgba(244, 236, 216, 0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
              <Info size={16} style={{ color: 'var(--sindoor)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--sindoor)', letterSpacing: '0.08em' }}>
                {lang === 'gu' ? `અર્થ · ${getLocalizedVerseNum(activeVerse.num)}` : lang === 'hi' ? `भावार्थ · ${getLocalizedVerseNum(activeVerse.num)}` : `MEANING · ${activeVerse.num.toUpperCase()}`}
              </span>
            </div>

            <div style={{
              width: '40px',
              height: '1.5px',
              backgroundColor: 'var(--marigold)',
              margin: '0 auto'
            }} />

            <div style={{
              padding: '12px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(212, 149, 10, 0.1)',
            }}>
              <p style={{
                fontSize: '1rem',
                fontWeight: 650,
                color: 'var(--drapery)',
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
                margin: '0 0 6px 0'
              }}>
                {activeLangData.sanskrit}
              </p>
            </div>

            <p style={{
              fontSize: '0.9rem',
              color: 'var(--stone)',
              lineHeight: '1.6',
              textAlign: 'justify',
              margin: 0,
            }}>
              {activeLangData.translation}
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Floating Helper inside list */}
      <div style={{
        alignSelf: 'center',
        marginTop: '10px'
      }}>
        <button
          onClick={() => {
            if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
          }}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(212, 149, 10, 0.3)',
            color: 'var(--stone)',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ChevronUp size={12} />
          {lang === 'gu' ? 'ટોચ પર જાઓ' : lang === 'hi' ? 'ऊपर जाएं' : 'Back to Top'}
        </button>
      </div>

      {/* Media queries inject for responsive layout */}
      <style>{`
        @media (max-width: 768px) {
          .chalisa-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-meaning-panel {
            display: none !important;
          }
          .mobile-meaning {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ChalisaReader;
