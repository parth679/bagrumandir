import React, { useState, useEffect } from 'react';
import { getTempleTimeStatus, TempleTimeStatus, OFFICIAL_AARTI_SCHEDULE } from '../../utils/templeTime';
import { TEMPLE_TIMINGS_CONFIG } from '../../config/templeTimingsConfig';
import { Clock, Sun, Flame, Moon, Bell, CheckCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

export const AartiSchedule: React.FC = () => {
  const [timeStatus, setTimeStatus] = useState<TempleTimeStatus>(() => getTempleTimeStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStatus(getTempleTimeStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="timings" className="py-24 px-4 bg-[#14110F] border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E2A752] mb-2">
              <Clock className="w-4 h-4 text-[#E2A752]" />
              <span>नित्य आरती एवं दर्शन समय • Daily Timetable</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold text-white tracking-tight">
              Aarti Timings & Schedule
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              All timings are strictly evaluated in Indian Standard Time (Asia/Kolkata, UTC+05:30). Devotees staying at Vishranti Gruh have direct morning access to Mangla Aarti.
            </p>
          </div>

          {/* Real-time IST Status Badge */}
          <div className="p-4 rounded-2xl bg-[#1A1615] border border-[#D97706]/35 shadow-xl text-xs shrink-0 max-w-xs w-full">
            <div className="flex items-center justify-between text-white/50 text-[11px] mb-1">
              <span>Jaipur Local Time</span>
              <span className="font-mono text-[#E2A752] font-semibold">{timeStatus.formattedISTTime}</span>
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${timeStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-500'}`} />
              <span>{timeStatus.statusLabel}</span>
            </div>
            <div className="text-[11px] text-white/60 mt-1">
              Next: <strong className="text-[#E2A752]">{timeStatus.nextAarti.name}</strong> ({timeStatus.nextAarti.countdownLabel})
            </div>
          </div>
        </div>

        {/* 5 Aartis Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
          {OFFICIAL_AARTI_SCHEDULE.map((aarti, idx) => {
            const isNext = timeStatus.nextAarti.name === aarti.name;

            return (
              <div
                key={aarti.id}
                className={cn(
                  "p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden",
                  isNext
                    ? "bg-gradient-to-b from-[#B85D36]/25 to-[#1A1615] border-2 border-[#D97706] shadow-xl shadow-[#B85D36]/20 scale-[1.02]"
                    : "bg-[#1A1615] border border-white/10 hover:border-white/20"
                )}
              >
                {isNext && (
                  <div className="absolute top-0 right-0 bg-[#D97706] text-black font-bold text-[10px] px-2.5 py-0.5 rounded-bl-lg uppercase tracking-wider">
                    Next Aarti
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                    <Flame className={cn("w-4 h-4", isNext ? "text-[#E2A752]" : "text-white/30")} />
                  </div>

                  <h3 className="text-lg font-['Cinzel',serif] font-bold text-white">
                    {aarti.name}
                  </h3>
                  <div className="text-xs font-['Noto_Serif_Devanagari',serif] text-[#E2A752] mt-0.5">
                    {aarti.devanagariName}
                  </div>
                  <div className="text-xs text-white/40 font-medium">
                    {aarti.gujaratiName}
                  </div>

                  <div className="text-xl font-bold font-mono text-white my-3">
                    {aarti.timeString}
                  </div>

                  <p className="text-[11px] text-white/65 leading-relaxed">
                    {aarti.meaning}
                  </p>
                </div>

                {isNext && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-[#E2A752] flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 animate-bounce" />
                    <span>Starts {timeStatus.nextAarti.countdownLabel}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Daily Darshan Sessions Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-[#1A1615] border border-white/10 text-xs">
          {TEMPLE_TIMINGS_CONFIG.darshanSessions.map((session, idx) => (
            <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="text-white/40 uppercase tracking-widest text-[10px]">Session {idx + 1}</div>
              <div className="text-sm font-semibold text-white flex items-center justify-between">
                <span>{session.session}</span>
                <span className="text-[#E2A752] font-mono">{session.time}</span>
              </div>
              <div className="text-[11px] text-[#E2A752] font-['Noto_Serif_Devanagari',serif]">
                {session.devanagariSession}
              </div>
              <div className="text-[11px] text-white/60">
                {session.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
