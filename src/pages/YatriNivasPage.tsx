import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { RoomGrid } from '../components/yatrinivas/RoomGrid';
import { FacilitiesOverview } from '../components/yatrinivas/FacilitiesOverview';
import { SITE_CONFIG } from '../config/siteConfig';
import { YATRI_NIVAS_STATUS } from '../config/yatriNivasConfig';
import { Building2, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n/useTranslation';

export const YatriNivasPage: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  return (
    <PageTransition className="relative z-10 pt-24 pb-16 space-y-16">
      {/* Page Title Header */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-3">
            <Building2 className="w-4 h-4" />
            <span>{t.yatriNivas.sectionLabel}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
            {t.yatriNivas.heading}
          </h1>
          <p className="font-['Noto_Serif_Devanagari',serif] text-lg sm:text-xl text-[#D97706] font-medium mt-2">
            {t.common.vishranthiGruh} — {language === 'HI' ? 'जयपुर (बगरू)' : language === 'GU' ? 'જયપુર (બગરૂ)' : 'Jaipur (Bagru)'}
          </p>
          <p className="text-[var(--text-muted)] text-base sm:text-lg mt-4 leading-relaxed">
            {t.yatriNivas.description}
          </p>
        </div>
      </section>

      {/* Room Showcase & Categories */}
      <RoomGrid />

      {/* Campus Facilities & Visitor Guidelines */}
      <FacilitiesOverview />

      {/* Reception Call & Inquiries Banner */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div
          className="p-8 sm:p-12 rounded-3xl border shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706]">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.yatriNivas.statusLabel}</span>
            </div>
            <h3 className="text-2xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
              {language === 'HI' ? 'सीधे स्वागत कक्ष से संपर्क करें' : language === 'GU' ? 'સ્વાગત ડેસ્ક પર સીધો સંપર્ક કરો' : 'Direct Reception Desk Inquiries'}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl">
              {t.yatriNivas.transparencyNote}
            </p>
          </div>

          <a
            href={`tel:${YATRI_NIVAS_STATUS.inquiryPhone}`}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-bold text-sm shadow-lg shadow-[#B85D36]/25 hover:brightness-110 transition-all flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>{t.common.callDesk}: {YATRI_NIVAS_STATUS.inquiryPhone}</span>
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

