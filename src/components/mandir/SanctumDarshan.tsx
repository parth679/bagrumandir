import React from 'react';
import { Sparkles, Sun, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

export const SanctumDarshan: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  const sanctumSub =
    language === 'HI'
      ? 'अन्नकूट एवं शाकोत्सव दर्शन • जयपुर (बगरू) मंदिर'
      : language === 'GU'
      ? 'અન્નકૂટ દર્શન • જયપુર (બગરૂ) મંદિર'
      : 'Annakut & Shakotsav Darshan • Jaipur (Bagru) Mandir';

  return (
    <section id="darshan" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto text-left">
      <div
        className="relative rounded-3xl overflow-hidden border p-6 sm:p-12 shadow-2xl transition-colors"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-gold)',
          boxShadow: 'var(--shadow-card)',
          color: 'var(--text-primary)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/15 border border-[#D97706]/30 text-[#D97706] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.darshan.sectionLabel}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold tracking-tight leading-tight text-[var(--text-primary)]">
              {t.darshan.heading}
            </h2>

            <p className="font-['Noto_Serif_Devanagari',serif] text-base sm:text-lg text-[#D97706] font-medium">
              {t.darshan.devanagari}
            </p>

            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              {t.darshan.description}
            </p>

            {/* Spiritual Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div
                className="p-4 rounded-2xl border flex items-start gap-3"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <Sun className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[var(--text-primary)] block mb-0.5">
                    {t.darshan.nitya}
                  </span>
                  <span className="text-[var(--text-muted)]">{t.darshan.nityaDesc}</span>
                </div>
              </div>

              <div
                className="p-4 rounded-2xl border flex items-start gap-3"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <Flame className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[var(--text-primary)] block mb-0.5">
                    {t.darshan.panchaamrut}
                  </span>
                  <span className="text-[var(--text-muted)]">{t.darshan.panchaamrutDesc}</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-[var(--text-subtle)] pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span>{SITE_CONFIG.affiliationDevanagari}</span>
              <span className="text-[#D97706] font-semibold">Jaipur (Bagru)</span>
            </div>
          </div>

          {/* Right Photographic Column (5 cols) with Aspect-Ratio protection */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-3xl overflow-hidden border shadow-2xl aspect-[3/4] group"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-gold)',
              }}
            >
              <img
                src="/assets/images/mandir/mandir_sanctum.jpg"
                alt="Sacred Murti of Bhagwan Swaminarayan on Golden Sinhasan with Annakut Offerings"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E2A752] mb-1">
                  {t.darshan.sanctumPhoto}
                </div>
                <div className="text-sm font-['Cinzel',serif] font-bold text-white leading-snug">
                  {t.darshan.sanctumPhotoCaption}
                </div>
                <div className="text-[11px] text-white/80 font-['Noto_Serif_Devanagari',serif] mt-0.5">
                  {sanctumSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
