import React, { useState, useEffect } from 'react';
import { Users, Eye } from 'lucide-react';
import type { Translations } from '../types';

interface VisitorCounterProps {
  t: Translations;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ t }) => {
  const [activeDevotees, setActiveDevotees] = useState(12);
  const [totalDarshans, setTotalDarshans] = useState(18432);

  useEffect(() => {
    // Simulated live devotee fluctuations
    const devoteeInterval = setInterval(() => {
      setActiveDevotees(prev => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        const nextVal = prev + delta;
        return Math.max(5, Math.min(25, nextVal)); // clamp between 5 and 25
      });
    }, 4000);

    // Persist total visits with local storage
    const storageKey = 'kasht_nivaran_darshan_visits';
    const savedVisits = localStorage.getItem(storageKey);
    const initialBase = 18432;

    if (savedVisits) {
      const current = parseInt(savedVisits, 10);
      const updated = current + 1;
      setTotalDarshans(updated);
      localStorage.setItem(storageKey, updated.toString());
    } else {
      localStorage.setItem(storageKey, initialBase.toString());
      setTotalDarshans(initialBase);
    }

    return () => clearInterval(devoteeInterval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'var(--stone-lt)',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {/* Active Devotees */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(212, 149, 10, 0.08)',
        padding: '4px 10px',
        borderRadius: '12px',
        border: '1px solid rgba(212, 149, 10, 0.15)',
      }}>
        {/* Pulsing indicator */}
        <span style={{
          position: 'relative',
          display: 'flex',
          height: '8px',
          width: '8px',
        }}>
          <span className="animate-ping" style={{
            position: 'absolute',
            display: 'inline-flex',
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            backgroundColor: '#10B981',
            opacity: 0.75,
          }} />
          <span style={{
            position: 'relative',
            display: 'inline-flex',
            borderRadius: '50%',
            height: '8px',
            width: '8px',
            backgroundColor: '#10B981',
          }} />
        </span>
        <Users size={12} style={{ color: 'var(--sindoor)', opacity: 0.8 }} />
        <span>
          {activeDevotees} {t.onlineDevotees}
        </span>
      </div>

      {/* Total Darshans */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(212, 149, 10, 0.08)',
        padding: '4px 10px',
        borderRadius: '12px',
        border: '1px solid rgba(212, 149, 10, 0.15)',
      }}>
        <Eye size={12} style={{ color: 'var(--sindoor)', opacity: 0.8 }} />
        <span>
          {totalDarshans.toLocaleString()} {t.totalDarshans}
        </span>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default VisitorCounter;
