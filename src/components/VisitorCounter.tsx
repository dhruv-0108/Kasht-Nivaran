import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import type { Translations } from '../types';

interface VisitorCounterProps {
  t: Translations;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ t }) => {
  const [totalDarshans, setTotalDarshans] = useState<number | null>(null);

  useEffect(() => {
    const counterRef = doc(db, 'visitors', 'counters');
    
    const initializeAndIncrement = async () => {
      const sessionVisited = sessionStorage.getItem('has_visited_kasht_nivaran');
      if (sessionVisited) return;

      try {
        const docSnap = await getDoc(counterRef);
        if (!docSnap.exists()) {
          // Initialize with starting number 1
          await setDoc(counterRef, { total_visits: 1 });
        } else {
          await updateDoc(counterRef, { total_visits: increment(1) });
        }
        sessionStorage.setItem('has_visited_kasht_nivaran', 'true');
      } catch (e) {
        console.error("Failed to update total visit counter:", e);
      }
    };

    initializeAndIncrement();

    // Listen to live total visit updates
    const unsubVisits = onSnapshot(counterRef, (snapshot) => {
      if (snapshot.exists()) {
        setTotalDarshans(snapshot.data().total_visits);
      }
    }, (error) => {
      console.error("Visits listener error:", error);
    });

    return () => {
      unsubVisits();
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(212, 149, 10, 0.08)',
      padding: '5px 12px',
      borderRadius: '12px',
      border: '1px solid rgba(212, 149, 10, 0.15)',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'var(--stone-lt)',
    }}>
      <Eye size={12} style={{ color: 'var(--sindoor)', opacity: 0.8 }} />
      <span>
        {totalDarshans !== null ? totalDarshans.toLocaleString() : '—'} {t.visitors}
      </span>
    </div>
  );
};

export default VisitorCounter;
