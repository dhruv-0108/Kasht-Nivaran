import React, { useState } from 'react';
import { Sankalpa } from '../types';
import { Plus, Calendar, Compass, ShieldAlert, Award, ChevronDown, Check } from 'lucide-react';

interface SankalpaTrackerProps {
  sankalpas: Sankalpa[];
  onAddSankalpa: (title: string, description: string, type: 'japa' | 'chalisa', targetPerDay: number, targetDays: number) => void;
  onUpdateSankalpaProgress: (id: string, dateStr: string, increment: number) => void;
}

export const SankalpaTracker: React.FC<SankalpaTrackerProps> = ({
  sankalpas,
  onAddSankalpa,
  onUpdateSankalpaProgress
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'japa' | 'chalisa'>('japa');
  const [targetPerDay, setTargetPerDay] = useState(108);
  const [targetDays, setTargetDays] = useState(21);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddSankalpa(title, description, type, targetPerDay, targetDays);
    setTitle('');
    setDescription('');
    setShowAddForm(false);
  };

  const getTodayDateStr = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayStr = getTodayDateStr();

  // Helper to generate dates array for a Sankalpa
  const getSankalpaDates = (sankalpa: Sankalpa) => {
    const dates: string[] = [];
    const start = new Date(sankalpa.startDate);
    for (let i = 0; i < sankalpa.targetDays; i++) {
      const current = new Date(start);
      current.setDate(start.getDate() + i);
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, '0');
      const day = String(current.getDate()).padStart(2, '0');
      dates.push(`${year}-${month}-${day}`);
    }
    return dates;
  };

  // Helper to check streak
  const calculateStreak = (sankalpa: Sankalpa) => {
    const dates = getSankalpaDates(sankalpa);
    let streak = 0;
    
    // Check backwards from today (or yesterday if today isn't done yet)
    const todayIndex = dates.indexOf(todayStr);
    if (todayIndex === -1) return 0; // Not started or out of range
    
    let checkIndex = todayIndex;
    // If today is not completed yet, check if yesterday was. If so, start from yesterday.
    const todayProgress = sankalpa.logs[todayStr] || 0;
    if (todayProgress < sankalpa.targetPerDay) {
      checkIndex = todayIndex - 1;
    }

    while (checkIndex >= 0) {
      const date = dates[checkIndex];
      const progress = sankalpa.logs[date] || 0;
      if (progress >= sankalpa.targetPerDay) {
        streak++;
        checkIndex--;
      } else {
        break;
      }
    }

    // Add today if today is completed
    if (todayProgress >= sankalpa.targetPerDay) {
      streak++;
    }

    return streak;
  };

  // Quick preset buttons for vow duration
  const setPreset = (days: number, target: number, isJapa: boolean) => {
    setTargetDays(days);
    setTargetPerDay(target);
    setType(isJapa ? 'japa' : 'chalisa');
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-black/[0.03] shadow-premium p-6 md:p-8 flex flex-col h-full space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-[#B89253] text-[10px] font-bold tracking-widest uppercase flex items-center space-x-1">
          <Compass className="w-3.5 h-3.5" />
          <span>Sankalpa Tracker</span>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className={`flex items-center space-x-1 text-xs font-semibold py-1.5 px-3 rounded-full border transition-smooth ${showAddForm ? 'bg-black text-white border-black' : 'border-black/10 hover:border-black/25 text-[#111111]/70'}`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{showAddForm ? 'View Vows' : 'New Sankalpa'}</span>
        </button>
      </div>

      {showAddForm ? (
        /* Create Sankalpa Form */
        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Vow Title</label>
            <input
              type="text"
              placeholder="e.g. 40 Days Hanuman Chalisa Vow"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-black/[0.06] focus:border-[#B89253]/40 rounded-xl px-4 py-2.5 outline-none text-sm text-[#111111]"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Resolution Details</label>
            <textarea
              placeholder="Write the purpose or specific focus of this commitment..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-black/[0.06] focus:border-[#B89253]/40 rounded-xl px-4 py-2 text-sm outline-none resize-none h-16 text-[#111111]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Vow Type</label>
              <select
                value={type}
                onChange={(e) => {
                  const val = e.target.value as 'japa' | 'chalisa';
                  setType(val);
                  setTargetPerDay(val === 'japa' ? 108 : 7);
                }}
                className="w-full bg-[#FAF8F5] border border-black/[0.06] focus:border-[#B89253]/40 rounded-xl px-3 py-2.5 outline-none text-sm text-[#111111]"
              >
                <option value="japa">Mantra Japa</option>
                <option value="chalisa">Hanuman Chalisa</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Daily Target</label>
              <input
                type="number"
                min="1"
                value={targetPerDay}
                onChange={(e) => setTargetPerDay(Number(e.target.value))}
                className="w-full bg-[#FAF8F5] border border-black/[0.06] focus:border-[#B89253]/40 rounded-xl px-3 py-2.5 outline-none text-sm text-[#111111]"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Vow Duration (Days)</label>
            <input
              type="number"
              min="1"
              max="365"
              value={targetDays}
              onChange={(e) => setTargetDays(Number(e.target.value))}
              className="w-full bg-[#FAF8F5] border border-black/[0.06] focus:border-[#B89253]/40 rounded-xl px-3 py-2.5 outline-none text-sm text-[#111111]"
              required
            />
          </div>

          {/* Quick Presets */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Traditional Presets</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPreset(11, 7, false)}
                className="px-2.5 py-1.5 rounded-lg border border-black/[0.04] bg-[#FAF8F5] hover:bg-black/5 text-[10px] font-semibold text-[#111111]/70"
              >
                11d Chalisa (7/day)
              </button>
              <button
                type="button"
                onClick={() => setPreset(21, 11, false)}
                className="px-2.5 py-1.5 rounded-lg border border-black/[0.04] bg-[#FAF8F5] hover:bg-black/5 text-[10px] font-semibold text-[#111111]/70"
              >
                21d Chalisa (11/day)
              </button>
              <button
                type="button"
                onClick={() => setPreset(40, 108, true)}
                className="px-2.5 py-1.5 rounded-lg border border-black/[0.04] bg-[#FAF8F5] hover:bg-black/5 text-[10px] font-semibold text-[#111111]/70"
              >
                40d Japa (108/day)
              </button>
              <button
                type="button"
                onClick={() => setPreset(108, 108 * 3, true)}
                className="px-2.5 py-1.5 rounded-lg border border-black/[0.04] bg-[#FAF8F5] hover:bg-black/5 text-[10px] font-semibold text-[#111111]/70"
              >
                108d Japa (324/day)
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-[#B89253] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-smooth shadow-sm hover:shadow-md active:scale-[0.99]"
          >
            Establish Vow (Sankalpa)
          </button>
        </form>
      ) : (
        /* Sankalpa List */
        <div className="flex-1 space-y-6 overflow-y-auto max-h-[500px] pr-1">
          {sankalpas.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 border border-dashed border-black/[0.06] rounded-xl text-center">
              <Calendar className="w-8 h-8 text-[#111111]/20 mb-2" />
              <p className="text-sm font-serif text-[#111111]/40 mb-1">No active Sankalpas.</p>
              <p className="text-xs text-[#111111]/30">Set a vow to build a regular spiritual chant habit.</p>
            </div>
          ) : (
            sankalpas.map((sankalpa) => {
              const dates = getSankalpaDates(sankalpa);
              const completedDaysCount = dates.filter(d => (sankalpa.logs[d] || 0) >= sankalpa.targetPerDay).length;
              const percentComplete = Math.min((completedDaysCount / sankalpa.targetDays) * 100, 100);
              const currentStreak = calculateStreak(sankalpa);
              const todayProgress = sankalpa.logs[todayStr] || 0;
              const isTodayDone = todayProgress >= sankalpa.targetPerDay;

              return (
                <div 
                  key={sankalpa.id} 
                  className="p-5 bg-white border border-black/[0.04] rounded-xl shadow-sm space-y-4 hover:shadow-md transition-smooth"
                >
                  {/* Title & Streak Info */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#B89253] bg-[#B89253]/10 px-2 py-0.5 rounded-full">
                        {sankalpa.type === 'japa' ? 'Japa Vow' : 'Chalisa Vow'}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#111111] leading-tight">
                        {sankalpa.title}
                      </h4>
                      {sankalpa.description && (
                        <p className="text-xs text-[#111111]/60">
                          {sankalpa.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Streak Badge */}
                    <div className="text-right">
                      <div className="flex items-center space-x-1 bg-[#FAF8F5] border border-black/[0.03] px-2.5 py-1 rounded-xl shadow-xs">
                        <Award className="w-3.5 h-3.5 text-[#B89253] fill-[#B89253]/10" />
                        <span className="font-mono text-xs font-bold text-[#111111]">{currentStreak}d Streak</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold text-[#111111]/50 tracking-wide">
                      <span>PROGRESS: {completedDaysCount} / {sankalpa.targetDays} DAYS</span>
                      <span>{Math.round(percentComplete)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/[0.02] rounded-full overflow-hidden border border-black/[0.01]">
                      <div 
                        className="h-full bg-[#B89253] rounded-full transition-all duration-500" 
                        style={{ width: `${percentComplete}%` }}
                      />
                    </div>
                  </div>

                  {/* Custom Calendar Mala Beads Grid */}
                  <div className="space-y-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[#111111]/40">Vow Calendar Grid</div>
                    <div className="flex flex-wrap gap-1.5 p-3 bg-[#FAF8F5]/80 border border-black/[0.02] rounded-xl justify-start">
                      {dates.map((dateStr, idx) => {
                        const countAchieved = sankalpa.logs[dateStr] || 0;
                        const isDone = countAchieved >= sankalpa.targetPerDay;
                        const isPast = new Date(dateStr) < new Date(todayStr);
                        const isToday = dateStr === todayStr;

                        let beadClass = "border border-black/10 hover:border-black/35";
                        if (isDone) {
                          beadClass = "bg-[#B89253] border border-[#B89253] shadow-xs";
                        } else if (isToday) {
                          beadClass = "border border-[#B89253] ring-2 ring-[#B89253]/20 animate-pulse";
                        } else if (isPast) {
                          beadClass = "bg-black/5 border border-transparent text-[#111111]/30 flex items-center justify-center";
                        }

                        return (
                          <div
                            key={dateStr}
                            className={`w-6 h-6 rounded-full text-[9px] font-mono font-bold flex items-center justify-center transition-smooth select-none cursor-pointer ${beadClass}`}
                            title={`${dateStr}: ${countAchieved}/${sankalpa.targetPerDay}`}
                            onClick={() => {
                              // If it's today or in the past, let users increment progress manually
                              if (!isDone && (isToday || isPast)) {
                                onUpdateSankalpaProgress(sankalpa.id, dateStr, 1);
                              }
                            }}
                          >
                            {isDone ? (
                              <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                            ) : (
                              idx + 1
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Manual Log Progress for Today */}
                  {!isTodayDone && (
                    <div className="flex items-center justify-between p-3 border border-[#B89253]/15 bg-[#FAF8F5] rounded-xl">
                      <div className="text-left">
                        <div className="text-[10px] font-bold tracking-wider text-[#B89253] uppercase">Today's Progress</div>
                        <div className="font-mono text-xs font-semibold text-[#111111]">
                          {todayProgress} / {sankalpa.targetPerDay} {sankalpa.type === 'japa' ? 'chants' : 'recitations'}
                        </div>
                      </div>
                      <button
                        onClick={() => onUpdateSankalpaProgress(sankalpa.id, todayStr, sankalpa.type === 'japa' ? 108 : 1)}
                        className="px-3.5 py-1.5 bg-black hover:bg-[#B89253] text-white rounded-lg text-[10px] font-bold tracking-widest uppercase shadow-sm transition-smooth"
                      >
                        Log {sankalpa.type === 'japa' ? '108 Chants' : '1 Recitation'}
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
export default SankalpaTracker;
