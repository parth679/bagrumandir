import React, { useState } from 'react';
import { AARTI_TIMINGS, UPCOMING_EVENTS, TEMPLE_INFO } from '../data/templeData';
import { Clock, Calendar, Bell, Check, Sparkles, AlertCircle, Volume2 } from 'lucide-react';

export const TimingsPanchang: React.FC = () => {
  const [remindedEvents, setRemindedEvents] = useState<string[]>([]);

  const handleToggleReminder = (eventId: string, title: string) => {
    if (remindedEvents.includes(eventId)) {
      setRemindedEvents(remindedEvents.filter(id => id !== eventId));
    } else {
      setRemindedEvents([...remindedEvents, eventId]);
      alert(`Reminder set for ${title}! We will send an SMS alert 1 day prior.`);
    }
  };

  return (
    <section id="timings" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: AARTI TIMINGS CARD */}
        <div className="lg:col-span-5 bg-[#002D33] text-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-[#006D77]/40 shadow-2xl flex flex-col justify-between">
          <div>
            {/* Status Header */}
            <div className="flex justify-between items-center pb-6 border-b border-[#006D77]/30">
              <div>
                <span className="text-[10px] font-bold text-[#FF9933] uppercase tracking-wider">
                  Shree Swaminarayan Mandir
                </span>
                <h3 className="font-heading text-xl font-bold text-[#FF9933]">
                  Daily Aarti Schedule
                </h3>
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF9933] text-white text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Open Now</span>
              </div>
            </div>

            <p className="text-xs text-stone-300 mt-3 mb-6">
              Temple Gates: {TEMPLE_INFO.openingHours.fullText}. Pilgrims are requested to arrive 10 minutes prior to Aarti.
            </p>

            {/* Aarti Timeline List */}
            <div className="space-y-4">
              {AARTI_TIMINGS.map((aarti, idx) => (
                <div
                  key={aarti.id}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                    idx === 3
                      ? 'bg-[#006D77] border-[#FF9933] shadow-lg scale-[1.02]'
                      : 'bg-[#00383D] border-[#006D77]/30 hover:border-[#FF9933]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-[#FF9933]">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span>{aarti.name}</span>
                        <span className="text-[10px] text-stone-300 font-normal">({aarti.gujaratiName})</span>
                      </div>
                      <div className="text-[11px] text-stone-300 line-clamp-1">
                        {aarti.meaning}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-sm font-extrabold text-[#FF9933]">
                      {aarti.time}
                    </div>
                    {idx === 3 && (
                      <span className="text-[9px] uppercase font-bold text-white">
                        Next Upcoming
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#006D77]/30 text-xs text-stone-300 flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#FF9933]" />
            <span>Bell chimes ring 5 minutes before every Aarti</span>
          </div>
        </div>

        {/* RIGHT COLUMN: FESTIVAL & PANCHANG CALENDAR */}
        <div className="lg:col-span-7 bg-white dark:bg-[#00383D] p-6 sm:p-8 rounded-3xl border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#006D77]/10 dark:border-[#006D77]/30">
              <div>
                <div className="inline-block bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-md shadow-[#FF9933]/20">
                  ★ Vedic Panchang & Festival Calendar
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#006D77] dark:text-[#E6C887]">
                  Upcoming Festival Utsavs & Kathas
                </h3>
              </div>
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {UPCOMING_EVENTS.map((ev) => {
                const isReminded = remindedEvents.includes(ev.id);
                return (
                  <div
                    key={ev.id}
                    className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800/80 border border-[#006D77]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      {/* Date Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-[#006D77] text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                        <span className="text-[10px] font-bold text-[#FF9933] uppercase">{ev.month}</span>
                        <span className="text-xl font-extrabold font-heading leading-none">{ev.date}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-base text-[#006D77] dark:text-[#FDFBF7]">
                            {ev.title}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#FF9933] text-white">
                            {ev.type}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 dark:text-stone-300 mt-1">
                          {ev.description}
                        </p>
                        <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 font-semibold">
                          ⏰ {ev.time} • 📍 {ev.venue}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleReminder(ev.id, ev.title)}
                      className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 flex items-center gap-1.5 transition-colors ${
                        isReminded
                          ? 'bg-[#006D77] text-white'
                          : 'bg-stone-100 dark:bg-stone-700 text-[#006D77] dark:text-stone-200 hover:bg-[#FF9933] hover:text-white'
                      }`}
                    >
                      {isReminded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Reminded</span>
                        </>
                      ) : (
                        <>
                          <Bell className="w-3.5 h-3.5 text-[#FF9933]" />
                          <span>Set Reminder</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#006D77]/10 dark:border-[#006D77]/30 flex items-center justify-between text-xs text-stone-500">
            <span>Next Ekadashi Vrat: <strong>23rd August (Waterless/Faral Fasting)</strong></span>
            <span className="text-[#006D77] dark:text-[#FF9933] font-bold">Full Panchang Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
