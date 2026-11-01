import React from 'react';
import { ShieldCheck, CheckCircle2, Car, Flame, Building2, UtensilsCrossed } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

export const FacilitiesOverview: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  const facilities = [
    {
      icon: Flame,
      title: t.yatriNivas.hotWater,
      description: t.yatriNivas.hotWaterDesc,
    },
    {
      icon: Car,
      title: t.yatriNivas.parkingTitle,
      description: t.yatriNivas.parkingDesc,
    },
    {
      icon: Building2,
      title: t.yatriNivas.reception,
      description: t.yatriNivas.receptionDesc,
    },
    {
      icon: UtensilsCrossed,
      title: t.yatriNivas.atrium,
      description: t.yatriNivas.atriumDesc,
    },
    {
      icon: ShieldCheck,
      title: t.yatriNivas.sattvic,
      description: t.yatriNivas.sattvicDesc,
    },
  ];

  const guidelines = [
    t.yatriNivas.guideline1,
    t.yatriNivas.guideline2,
    t.yatriNivas.guideline3,
    t.yatriNivas.guideline4,
  ];

  return (
    <section
      className="py-16 sm:py-24 px-4 max-w-7xl mx-auto text-left transition-colors"
      style={{ color: 'var(--text-primary)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Atrium Architecture & Campus Grounds Photo Duo */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div
              className="rounded-2xl overflow-hidden border aspect-[3/4] shadow-md transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <img
                src="/assets/images/yatrinivas/atrium_architecture.jpg"
                alt="4-Storey Central Atrium"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div
              className="p-3.5 rounded-xl border text-xs transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span className="font-semibold text-[var(--text-primary)] block mb-0.5">
                {t.yatriNivas.centralAtrium}
              </span>
              <span className="text-[var(--text-muted)]">
                {t.yatriNivas.centralAtriumDesc}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-6 sm:pt-8">
            <div
              className="p-3.5 rounded-xl border text-xs transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span className="font-semibold text-[var(--text-primary)] block mb-0.5">
                {t.yatriNivas.receptionDesk}
              </span>
              <span className="text-[var(--text-muted)]">
                {t.yatriNivas.receptionDeskDesc}
              </span>
            </div>
            <div
              className="rounded-2xl overflow-hidden border aspect-[4/3] shadow-md transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <img
                src="/assets/images/yatrinivas/reception_lobby.jpg"
                alt="Yatri Nivas Front Desk Reception Lobby"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Facilities List & Guidelines */}
        <div className="space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-2">
              {t.yatriNivas.facilitiesLabel}
            </div>
            <h3 className="text-2xl sm:text-4xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
              {t.yatriNivas.facilitiesHeading}
            </h3>
            <p className="text-[var(--text-muted)] text-sm mt-2 leading-relaxed">
              {t.yatriNivas.facilitiesDesc}
            </p>
          </div>

          {/* Facilities Cards */}
          <div className="space-y-3.5">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border flex items-start gap-3.5 transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div className="p-2 rounded-xl bg-[#D97706]/15 text-[#D97706] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      {facility.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visitor Guidelines Notice */}
          <div
            className="p-5 rounded-2xl border space-y-3 transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-gold)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.yatriNivas.guidelinesLabel}</span>
            </div>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              {guidelines.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
