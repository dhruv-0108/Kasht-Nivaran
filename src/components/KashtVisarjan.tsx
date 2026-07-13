import React, { useState, useRef, useEffect } from 'react';
import { KashtItem } from '../types';
import { Eye, Check, Flame, Heart, Sparkles, BookOpen } from 'lucide-react';

interface KashtVisarjanProps {
  kashts: KashtItem[];
  onAddKasht: (title: string, description: string) => void;
  onResolveKasht: (id: string, gratitudeNote: string) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

export const KashtVisarjan: React.FC<KashtVisarjanProps> = ({ kashts, onAddKasht, onResolveKasht }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<'surrender' | 'history'>('surrender');
  
  // Resolve modal state
  const [resolvingId, setResolvingId] = useState<string | null>(null);
  const [gratitude, setGratitude] = useState('');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Particle animation loop
  useEffect(() => {
    if (!isAnimating || !canvasRef.current || !formRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = formRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Generate particles from the input fields area
    const particles: Particle[] = [];
    const particleCount = 280;

    for (let i = 0; i < particleCount; i++) {
      // Pick random starting point within the form area
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2 - 1, // Float upward
        alpha: 1,
        size: Math.random() * 2.5 + 0.5,
        // Clay orange to brass gold gradient colors
        color: Math.random() > 0.4 ? '#B89253' : '#D1A054',
      });
    }

    let animationFrameId: number;
    let elapsed = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.007; // Fade out slowly
        
        if (p.alpha > 0) {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        }
      });

      elapsed += 16; // Approx 60fps
      if (elapsed < 2000) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        setIsAnimating(false);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAnimating]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    // Start dissolution animation
    setIsAnimating(true);
    
    // Clear inputs after animation starts
    setTimeout(() => {
      onAddKasht(title, description);
      setTitle('');
      setDescription('');
    }, 500);
  };

  const handleOpenResolve = (id: string) => {
    setResolvingId(id);
    setGratitude('');
  };

  const handleConfirmResolve = () => {
    if (resolvingId) {
      onResolveKasht(resolvingId, gratitude);
      setResolvingId(null);
      setGratitude('');
    }
  };

  const activeKashts = kashts.filter(k => k.status === 'surrendered');
  const resolvedKashts = kashts.filter(k => k.status === 'resolved');

  return (
    <div className="w-full bg-white rounded-2xl border border-black/[0.03] shadow-premium p-6 md:p-8 flex flex-col h-full relative">
      {/* Tabs */}
      <div className="flex border-b border-black/[0.05] mb-6 text-sm font-semibold tracking-tight">
        <button
          onClick={() => setActiveTab('surrender')}
          className={`pb-3 pr-6 relative ${activeTab === 'surrender' ? 'text-[#B89253]' : 'text-[#111111]/40'}`}
        >
          <span>Surrender Worry</span>
          {activeTab === 'surrender' && (
            <span className="absolute bottom-[-1px] left-0 right-6 h-[2px] bg-[#B89253] rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`pb-3 px-6 relative ${activeTab === 'history' ? 'text-[#B89253]' : 'text-[#111111]/40'} flex items-center space-x-1.5`}
        >
          <span>Kripa Journal</span>
          <span className="text-[10px] bg-black/5 px-2 py-0.5 rounded-full text-black/50">
            {resolvedKashts.length}
          </span>
          {activeTab === 'history' && (
            <span className="absolute bottom-[-1px] left-6 right-6 h-[2px] bg-[#B89253] rounded-full" />
          )}
        </button>
      </div>

      {activeTab === 'surrender' ? (
        <div className="flex-1 flex flex-col space-y-6">
          {/* Submitting Form */}
          <div ref={formRef} className="relative p-5 bg-[#FAF8F5]/80 rounded-xl border border-black/[0.02] overflow-hidden">
            {isAnimating && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 z-20 pointer-events-none"
              />
            )}
            
            <form onSubmit={handleSubmit} className={`space-y-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
              <div className="text-[#B89253] text-[10px] font-bold tracking-widest uppercase mb-1 flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Kasht Visarjan Ritual</span>
              </div>
              
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="What troubles your mind?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-transparent text-lg font-serif border-b border-black/[0.08] focus:border-[#B89253] py-2 outline-none placeholder-[#111111]/30 text-[#111111]"
                  required
                />
              </div>

              <div className="space-y-1">
                <textarea
                  placeholder="Express your worries freely, then surrender them to Kashtbhanjan Dev..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-transparent text-sm min-h-[90px] py-2 outline-none resize-none placeholder-[#111111]/30 text-[#111111]/80 leading-relaxed"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={!title.trim()}
                  className="px-5 py-2.5 bg-black hover:bg-[#B89253] text-white font-semibold text-xs tracking-widest uppercase rounded-full shadow-sm hover:shadow-md active:scale-95 transition-smooth disabled:opacity-30 disabled:pointer-events-none"
                >
                  Surrender to Hanumanji
                </button>
              </div>
            </form>
          </div>

          {/* Active Surrendered list */}
          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#111111]/50 mb-1 flex items-center space-x-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Surrendered Worries ({activeKashts.length})</span>
            </h3>

            {activeKashts.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 border border-dashed border-black/[0.06] rounded-xl text-center">
                <p className="text-sm font-serif text-[#111111]/40 mb-1">Your mind is clear.</p>
                <p className="text-xs text-[#111111]/30">Write down and surrender any worries that burden your heart.</p>
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto max-h-[300px] pr-1">
                {activeKashts.map((kasht) => (
                  <div 
                    key={kasht.id} 
                    className="p-4 bg-white border border-black/[0.04] rounded-xl shadow-sm hover:shadow-md transition-smooth flex justify-between items-start space-x-4 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span className="text-xs font-bold bg-[#B89253]/10 text-[#B89253] px-2 py-0.5 rounded-full tracking-wide">
                          Under Grace
                        </span>
                        <span className="text-[10px] text-[#111111]/30">
                          {new Date(kasht.surrenderedAt!).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-serif text-base text-[#111111] mb-1 font-semibold truncate">
                        {kasht.title}
                      </h4>
                      {kasht.description && (
                        <p className="text-xs text-[#111111]/60 leading-relaxed line-clamp-2">
                          {kasht.description}
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={() => handleOpenResolve(kasht.id)}
                      className="p-2 border border-black/[0.05] hover:border-[#B89253]/35 hover:bg-[#B89253]/5 rounded-full text-[#111111]/40 hover:text-[#B89253] transition-smooth shrink-0"
                      title="Acknowledge Grace"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* History / Kripa Journal Tab */
        <div className="flex-1 flex flex-col space-y-4">
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#111111]/50 mb-1 flex items-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blessings & Resolved Obstacles ({resolvedKashts.length})</span>
          </h3>

          {resolvedKashts.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 border border-dashed border-black/[0.06] rounded-xl text-center">
              <p className="text-sm font-serif text-[#111111]/40 mb-1">No blessings recorded yet.</p>
              <p className="text-xs text-[#111111]/30">Once an obstacle is resolved, log it here to remember Hanumanji's grace.</p>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[480px] pr-1">
              {resolvedKashts.map((kasht) => (
                <div 
                  key={kasht.id} 
                  className="p-5 bg-[#FAF8F5] border border-[#B89253]/15 rounded-xl shadow-sm relative overflow-hidden group"
                >
                  {/* Delicate gold corner ribbon */}
                  <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-[#B89253]/10 rounded-bl-xl text-[#B89253]">
                    <Heart className="w-3.5 h-3.5 fill-[#B89253]" />
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-[10px] font-bold text-[#B89253] tracking-widest uppercase flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Kripa (Grace)</span>
                    </span>
                    <span className="text-[9px] text-[#111111]/30">
                      Surrendered {new Date(kasht.surrenderedAt!).toLocaleDateString()} • Resolved {new Date(kasht.resolvedAt!).toLocaleDateString()}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-[#111111] mb-1.5 font-semibold">
                    {kasht.title}
                  </h4>
                  
                  {kasht.description && (
                    <p className="text-xs text-[#111111]/50 leading-relaxed mb-3 italic">
                      "{kasht.description}"
                    </p>
                  )}

                  {kasht.gratitudeNote && (
                    <div className="pt-3 border-t border-black/[0.04] mt-2">
                      <div className="text-[9px] font-bold tracking-widest uppercase text-[#111111]/40 mb-1">
                        Gratitude Note:
                      </div>
                      <p className="text-xs text-[#111111]/80 font-medium leading-relaxed">
                        {kasht.gratitudeNote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Resolve Modal / Overlay (glassmorphic slide up) */}
      {resolvingId && (
        <div className="absolute inset-0 bg-white/95 rounded-2xl z-30 p-6 flex flex-col justify-between transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#111111] font-semibold flex items-center space-x-2">
              <span className="text-[#B89253]">Acknowledge Grace</span>
            </h3>
            <p className="text-xs text-[#111111]/60 leading-relaxed">
              Record how this obstacle was overcome. Reflecting on resolved worries converts your past anxieties into lasting columns of faith.
            </p>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#111111]/40">
                Reflection / Gratitude Note
              </label>
              <textarea
                placeholder="Write your note of gratitude or explain how this obstacle resolved..."
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-black/[0.06] focus:border-[#B89253]/40 rounded-xl p-3 text-sm min-h-[140px] outline-none resize-none placeholder-[#111111]/30 text-[#111111] leading-relaxed"
              />
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => setResolvingId(null)}
              className="flex-1 py-2.5 border border-black/[0.08] hover:bg-black/5 rounded-full text-xs font-bold tracking-widest uppercase text-[#111111]/60 transition-smooth"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmResolve}
              className="flex-1 py-2.5 bg-black hover:bg-[#B89253] text-white rounded-full text-xs font-bold tracking-widest uppercase shadow-sm hover:shadow-md transition-smooth"
            >
              Log Blessing
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default KashtVisarjan;
