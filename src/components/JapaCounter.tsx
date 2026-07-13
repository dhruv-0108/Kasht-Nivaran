import React, { useState, useEffect, useRef } from 'react';
import { JapaLog } from '../types';
import { Volume2, VolumeX, Sparkles, Hash, Activity } from 'lucide-react';

interface JapaCounterProps {
  japaLog: JapaLog;
  onIncrementChant: (count: number) => void;
}

const MANTRAS = [
  { text: "ॐ हं हनुमते नमः", English: "Om Ham Hanumate Namah", desc: "Mantra for protection, strength, and removal of obstacles." },
  { text: "ॐ संकटमोचनाय नमः", English: "Om Sankatmochanaya Namah", desc: "Mantra for relieving all distresses and difficulties." },
  { text: "श्री राम दूत हनुमान", English: "Shree Ram Doot Hanuman", desc: "Invoking the supreme messenger of Sri Rama." }
];

export const JapaCounter: React.FC<JapaCounterProps> = ({ japaLog, onIncrementChant }) => {
  const [currentChant, setCurrentChant] = useState(0);
  const [activeMantraIdx, setActiveMantraIdx] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isActivelyChanting, setIsActivelyChanting] = useState(false);
  const [beadAnimate, setBeadAnimate] = useState(false);
  
  // Keep track of counts chanted in the current session
  const [sessionCount, setSessionCount] = useState(0);

  // Web Audio Context for generating wooden bead clicking sounds
  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeMantra = MANTRAS[activeMantraIdx];
  const progressPercent = (currentChant / 108) * 100;
  const completedMalas = Math.floor(japaLog.totalChants / 108);

  useEffect(() => {
    // Keyboard listener for Spacebar to increment chant
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault(); // Prevent page scroll
        incrementChant();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChant, soundEnabled]);

  // Synthesize a wood block click using Web Audio API
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      
      // Create oscillator and gain node
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      // Wooden block sound: fast envelope, triangle/sine mix, around 600Hz
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      // Pitch drop off slightly
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.07);
    } catch (err) {
      console.warn("AudioContext failed to play sound: ", err);
    }
  };

  const incrementChant = () => {
    playClickSound();
    setBeadAnimate(true);
    setTimeout(() => setBeadAnimate(false), 200);

    const nextChant = currentChant + 1;
    if (nextChant >= 108) {
      setCurrentChant(0);
    } else {
      setCurrentChant(nextChant);
    }
    
    setSessionCount((prev) => prev + 1);
    onIncrementChant(1);
    
    setIsActivelyChanting(true);
    const timer = setTimeout(() => setIsActivelyChanting(false), 300);
    return () => clearTimeout(timer);
  };

  const resetSession = () => {
    setCurrentChant(0);
    setSessionCount(0);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-black/[0.03] shadow-premium p-6 md:p-8 flex flex-col h-full justify-between space-y-6">
      {/* Top Options & Mantra Switcher */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-[#B89253] text-[10px] font-bold tracking-widest uppercase flex items-center space-x-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Mantra Meditator</span>
          </div>
          
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 rounded-full border border-black/[0.05] hover:border-black/[0.1] text-[#111111]/60 hover:text-[#111111] transition-smooth bg-white shadow-sm"
            title={soundEnabled ? "Mute Sound" : "Enable Sound"}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Mantra Selection Cards */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar py-1">
          {MANTRAS.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMantraIdx(idx)}
              className={`px-3 py-2 rounded-xl text-left border transition-smooth shrink-0 text-xs ${activeMantraIdx === idx ? 'bg-black text-white border-black shadow-sm' : 'bg-white text-[#111111]/70 border-black/[0.05] hover:border-black/[0.12]'}`}
            >
              <div className="font-serif font-bold text-sm mb-0.5">{m.text}</div>
              <div className={`text-[10px] ${activeMantraIdx === idx ? 'text-white/60' : 'text-black/40'}`}>{m.English}</div>
            </button>
          ))}
        </div>

        {/* Mantra Description */}
        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-black/[0.01]">
          <p className="text-xs text-[#111111]/60 leading-relaxed font-medium">
            {activeMantra.desc}
          </p>
        </div>
      </div>

      {/* Interactive Counter Ring (Centerpiece) */}
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div className="relative w-52 h-52 flex items-center justify-center">
          {/* Progress Ring SVG */}
          <svg className="w-full h-full transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="104"
              cy="104"
              r="90"
              stroke="rgba(0,0,0,0.02)"
              strokeWidth="5"
              fill="transparent"
            />
            {/* Progress ring */}
            <circle
              cx="104"
              cy="104"
              r="90"
              stroke="#B89253"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 90}
              strokeDashoffset={2 * Math.PI * 90 * (1 - progressPercent / 100)}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>

          {/* Large Tap Button inside the Ring */}
          <button
            onClick={incrementChant}
            className={`absolute w-40 h-40 rounded-full bg-white border border-black/[0.04] shadow-premium hover:shadow-premium-hover flex flex-col items-center justify-center transition-all duration-200 active:scale-95 group select-none outline-none ${beadAnimate ? 'scale-105 border-[#B89253]/35 ring-4 ring-[#B89253]/5' : ''}`}
          >
            {/* Sanskrit character inside bead button */}
            <div className="font-serif text-3xl font-extrabold text-[#B89253] group-hover:scale-110 transition-transform duration-300">
              हं
            </div>
            <div className="font-mono text-2xl font-bold mt-1 text-[#111111]">
              {currentChant}
            </div>
            <div className="text-[9px] font-bold tracking-widest text-[#111111]/30 uppercase mt-0.5">
              / 108 chants
            </div>
          </button>
        </div>
        
        <p className="text-[10px] text-[#111111]/40 font-semibold tracking-wider mt-4">
          Press <span className="px-1.5 py-0.5 bg-black/5 border border-black/10 rounded font-mono text-[9px] text-[#111111]/60">Spacebar</span> anywhere to count
        </p>
      </div>

      {/* Session / Lifetime Stats Grid */}
      <div className="grid grid-cols-3 gap-3 border-t border-black/[0.05] pt-5">
        <div className="p-3 bg-[#FAF8F5]/80 rounded-xl text-center border border-black/[0.01]">
          <div className="text-[#111111]/40 text-[9px] font-bold tracking-wider uppercase mb-1">
            Session
          </div>
          <div className="font-mono text-sm font-semibold text-[#111111]">
            {sessionCount}
          </div>
        </div>
        
        <div className="p-3 bg-[#FAF8F5]/80 rounded-xl text-center border border-black/[0.01] relative group">
          <div className="text-[#111111]/40 text-[9px] font-bold tracking-wider uppercase mb-1 flex items-center justify-center space-x-0.5">
            <Hash className="w-2.5 h-2.5" />
            <span>Lifetime</span>
          </div>
          <div className="font-mono text-sm font-semibold text-[#111111]">
            {japaLog.totalChants}
          </div>
        </div>

        <div className="p-3 bg-[#FAF8F5]/80 rounded-xl text-center border border-black/[0.01]">
          <div className="text-[#111111]/40 text-[9px] font-bold tracking-wider uppercase mb-1 flex items-center justify-center space-x-0.5">
            <Sparkles className="w-2.5 h-2.5 text-[#B89253]" />
            <span>Malas</span>
          </div>
          <div className="font-mono text-sm font-semibold text-[#111111]">
            {completedMalas}
          </div>
        </div>
      </div>
      
      {sessionCount > 0 && (
        <button 
          onClick={resetSession}
          className="w-full py-2 border border-dashed border-black/10 hover:border-black/30 hover:bg-black/[0.01] text-[10px] font-bold uppercase tracking-wider text-[#111111]/40 hover:text-[#111111]/60 rounded-xl transition-smooth"
        >
          Reset Session Count
        </button>
      )}
    </div>
  );
};
export default JapaCounter;
