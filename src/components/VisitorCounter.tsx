import React, { useState, useEffect } from 'react';
import { Users, Eye } from 'lucide-react';
import { doc, getDoc, setDoc, updateDoc, increment, collection, onSnapshot, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import type { Translations } from '../types';

interface VisitorCounterProps {
  t: Translations;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ t }) => {
  const [activeDevotees, setActiveDevotees] = useState(1);
  const [totalDarshans, setTotalDarshans] = useState(18432);

  useEffect(() => {
    // ── 1. Total Visits Counter Logic ──
    const counterRef = doc(db, 'visitors', 'counters');
    
    const initializeAndIncrement = async () => {
      // Check if session already registered a visit to avoid double increments on hot-reload/navigation
      const sessionVisited = sessionStorage.getItem('has_visited_kasht_nivaran');
      if (sessionVisited) return;

      try {
        const docSnap = await getDoc(counterRef);
        if (!docSnap.exists()) {
          // Initialize with a realistic starting number
          await setDoc(counterRef, { total_visits: 18432 });
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

    // ── 2. Realtime Active Devotees Presence Logic ──
    // Use sessionStorage to persist sessionId across tabs/reloads in the same session
    let sessionId = sessionStorage.getItem('kasht_nivaran_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('kasht_nivaran_session_id', sessionId);
    }

    const sessionDocRef = doc(db, 'active_sessions', sessionId);

    // Function to update heartbeat
    const sendHeartbeat = async () => {
      try {
        await setDoc(sessionDocRef, {
          lastActive: serverTimestamp()
        });
      } catch (e) {
        console.error("Failed to send presence heartbeat:", e);
      }
    };

    // Send initial heartbeat
    sendHeartbeat();

    // Send periodic heartbeats every 35 seconds
    const heartbeatInterval = setInterval(sendHeartbeat, 35000);

    // Listen to all active sessions in real time
    const activeSessionsCol = collection(db, 'active_sessions');
    const unsubActive = onSnapshot(activeSessionsCol, (snapshot) => {
      const now = Date.now();
      let activeCount = 0;
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.lastActive) {
          // Convert Firebase Timestamp to milliseconds
          const lastActiveTime = data.lastActive.toDate ? data.lastActive.toDate().getTime() : data.lastActive;
          // If active in the last 70 seconds, count as active
          if (now - lastActiveTime < 70000) {
            activeCount++;
          }
        }
      });
      
      // Always guarantee at least 1 (the current user)
      setActiveDevotees(Math.max(1, activeCount));
    }, (error) => {
      console.error("Active sessions listener error:", error);
    });

    // Clean up on tab close
    const handleUnload = () => {
      // Use beacon/synchronous call or let it time out if browser kills it.
      // Firestore deleteDoc is asynchronous but we trigger it nonetheless.
      deleteDoc(sessionDocRef).catch(() => {});
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      clearInterval(heartbeatInterval);
      unsubVisits();
      unsubActive();
      window.removeEventListener('beforeunload', handleUnload);
      handleUnload();
    };
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
