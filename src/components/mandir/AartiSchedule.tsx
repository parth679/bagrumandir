import React, { useState, useEffect } from 'react';
import { getTempleTimeStatus, TempleTimeStatus, OFFICIAL_AARTI_SCHEDULE } from '../../utils/templeTime';
import { TEMPLE_TIMINGS_CONFIG } from '../../config/templeTimingsConfig';
import { Clock, Flame, Bell } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';
import { cn } from '../../utils/cn';

export const AartiSchedule: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  const [timeStatus, setTimeStatus] = useState<TempleTimeStatus>(() =>
    getTempleTimeStatus(undefined, undefined, language)
  );

  const getAartiMeaning = (id: string, fallback: string) => {
    switch (id) {
      case 'mangla': return t.aarti.manglaMeaning || fallback;
      case 'shangar': return t.aarti.shangarMeaning || fallback;
      case 'rajbhog': return t.aarti.rajbhogMeaning || fallback;
      case 'sandhya': return t.aarti.sandhyaMeaning || fallback;
      case 'shayan': return t.aarti.shayanMeaning || fallback;
      default: return fallback;
    }
  };

  useEffect(() => {
    setTimeStatus(getTempleTimeStatus(undefined, undefined, language));
    const timer = setInterval(() => {
      setTimeStatus(getTempleTimeStatus(undefined, undefined, language));
    }, 30000);
    return () => clearInterval(timer);
  }, [language]);

  return (
    <section
      id="timings"
      className="py-16 sm:py-24 px-4 border-t text-left transition-colors"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
        color: 'var(--text-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-2">
              <Clock className="w-4 h-4" />
              <span>{t.darshan.scheduleLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
              {t.darshan.scheduleHeading}
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {t.darshan.scheduleDesc}
            </p>
          </div>

          {/* Real-time IST Status Badge */}
          <div
            className="p-4 rounded-2xl border shadow-xl text-xs shrink-0 max-w-xs w-full transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-gold)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center justify-between text-[var(--text-subtle)] text-[11px] mb-1">
              <span>{t.darshan.jaipurTime}</span>
              <span className="font-mono text-[#D97706] font-semibold">{timeStatus.formattedISTTime}</span>
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${timeStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-500'}`} />
              <span>{timeStatus.statusLabel}</span>
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">
              {t.darshan.nextLabel} <strong className="text-[#D97706]">{timeStatus.nextAarti.name}</strong> ({timeStatus.nextAarti.countdownLabel})
            </div>
          </div>
        </div>

        {/* 5 Aartis Cards Grid with TBC badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {OFFICIAL_AARTI_SCHEDULE.map((aarti, idx) => {
            const isNext = aarti.confirmed && timeStatus.nextAarti.name === (language === 'HI' ? aarti.devanagariName : language === 'GU' ? aarti.gujaratiName : aarti.name);
            const aartiDisplayName = language === 'HI' ? aarti.devanagariName : language === 'GU' ? aarti.gujaratiName : aarti.name;

            return (
              <div
                key={aarti.id}
                className={cn(
                  "p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden border",
                  isNext
                    ? "border-2 border-[#D97706] shadow-xl scale-[1.02]"
                    : "hover:border-[#D97706]/40"
                )}
                style={{
                  backgroundColor: isNext ? 'rgba(184, 93, 54, 0.12)' : 'var(--bg-card)',
                  borderColor: isNext ? 'var(--accent-gold)' : 'var(--border-subtle)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {isNext && (
                  <div className="absolute top-0 right-0 bg-[#D97706] text-white font-bold text-[10px] px-2.5 py-0.5 rounded-bl-lg uppercase tracking-wider">
                    {t.common.nextAarti}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--text-subtle)]">0{idx + 1}</span>
                    <Flame className={cn("w-4 h-4", isNext ? "text-[#D97706]" : "text-[var(--text-subtle)]")} />
                  </div>

                  <h3 className="text-lg font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                    {aartiDisplayName}
                  </h3>
                  <div className="text-xs text-[#D97706] font-['Noto_Serif_Devanagari',serif] mt-0.5 font-medium">
                    {aarti.devanagariName}
                  </div>
                  <div className="text-xs text-[var(--text-subtle)] font-medium">
                    {aarti.gujaratiName}
                  </div>

                  <div className="my-3">
                    {aarti.confirmed && aarti.timeString ? (
                      <div className="text-xl font-bold font-mono text-[var(--text-primary)]">
                        {aarti.timeString}
                      </div>
                    ) : (
                      <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                        {t.common.timingTBC}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {getAartiMeaning(aarti.id, aarti.meaning)}
                  </p>
                </div>

                {isNext && (
                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] font-semibold text-[#D97706] flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 animate-bounce" />
                    <span>{t.darshan.startsIn} {timeStatus.nextAarti.countdownLabel}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Daily Darshan Sessions Breakdown */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl border text-xs"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {TEMPLE_TIMINGS_CONFIG.darshanSessions.map((session, idx) => {
            const sessionTitle =
              language === 'HI'
                ? session.devanagariSession
                : language === 'GU'
                ? session.gujaratiSession
                : session.session;

            const sessionNote =
              language === 'HI' && (session as any).devanagariNote
                ? (session as any).devanagariNote
                : language === 'GU' && (session as any).gujaratiNote
                ? (session as any).gujaratiNote
                : session.note;

            return (
              <div
                key={idx}
                className="space-y-1.5 p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div className="text-[var(--text-subtle)] uppercase tracking-widest text-[10px]">
                  {t.common.session} {idx + 1}
                </div>
                <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center justify-between">
                  <span>{sessionTitle}</span>
                  <span className="text-[#D97706] font-mono font-bold">{session.time}</span>
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  {sessionNote}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
