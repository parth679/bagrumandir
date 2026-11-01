import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { VisitorGuide } from '../components/visitor/VisitorGuide';
import { SITE_CONFIG } from '../config/siteConfig';
import { MapPin, Navigation, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n/useTranslation';

export const VisitPage: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  return (
    <PageTransition className="relative z-10 pt-24 pb-16 space-y-16">
      {/* Page Title Header */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-3">
            <MapPin className="w-4 h-4" />
            <span>{t.visit.sectionLabel}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
            {t.visit.heading}
          </h1>
          <p className="font-['Noto_Serif_Devanagari',serif] text-lg sm:text-xl text-[#D97706] font-medium mt-2">
            {SITE_CONFIG.name} — {language === 'HI' ? 'जयपुर (बगरू)' : language === 'GU' ? 'જયપુર (બગરૂ)' : 'Jaipur (Bagru)'}
          </p>
          <p className="text-[var(--text-muted)] text-base sm:text-lg mt-4 leading-relaxed">
            {t.visit.description}
          </p>
        </div>
      </section>

      {/* Main Visitor Guide Component (Footwear rule removed) */}
      <VisitorGuide />

      {/* Campus Map & Quick Assistance Strip */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div
          className="p-8 sm:p-12 rounded-3xl border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706]">
              <Clock className="w-4 h-4" />
              <span>{t.common.morningSessions} & {t.common.eveningSessions}</span>
            </div>
            <h3 className="text-2xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
              {SITE_CONFIG.openingHours.fullScheduleText}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {SITE_CONFIG.address.fullAddress} • {t.visit.landmark} {SITE_CONFIG.address.landmark}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={SITE_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-semibold text-xs tracking-wide shadow-md hover:brightness-110 transition-all flex items-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t.common.openGoogleMaps}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.helplinePhone}`}
              className="px-6 py-3.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-primary)] font-semibold text-xs tracking-wide border border-[var(--border-subtle)] transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{t.footer.helpline} {SITE_CONFIG.helplinePhone}</span>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
