import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SanctumDarshan } from '../components/mandir/SanctumDarshan';
import { AartiSchedule } from '../components/mandir/AartiSchedule';
import { Sparkles, Clock, Sun, Moon } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n/useTranslation';

export const DarshanPage: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  return (
    <PageTransition className="relative z-10 pt-24 pb-16 space-y-16">
      {/* Page Title Header */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t.darshan.sectionLabel}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
            {t.darshan.heading}
          </h1>
          <p className="font-['Noto_Serif_Devanagari',serif] text-lg sm:text-xl text-[#D97706] font-medium mt-2">
            {t.darshan.devanagari}
          </p>
          <p className="text-[var(--text-muted)] text-base sm:text-lg mt-4 leading-relaxed">
            {t.darshan.description}
          </p>
        </div>
      </section>

      {/* Sanctum Darshan Section */}
      <SanctumDarshan />

      {/* 5 Daily Aartis & Schedule */}
      <AartiSchedule />

      {/* Daily Operating Hours Strip */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div
          className="p-8 sm:p-10 rounded-3xl border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>{t.common.morningSessions} & {t.common.eveningSessions}</span>
            </div>
            <div className="text-lg font-bold text-[var(--text-primary)]">
              {SITE_CONFIG.openingHours.fullScheduleText}
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              {t.common.afternoonRepose}: {SITE_CONFIG.openingHours.afternoonRepose}
            </p>
          </div>

          <div className="text-xs text-[var(--text-muted)] border-t md:border-t-0 md:border-l border-[var(--border-subtle)] pt-4 md:pt-0 md:pl-6 max-w-sm">
            <span className="font-semibold text-[var(--text-primary)] block mb-1">
              {language === 'HI' ? 'दर्शनार्थियों के लिए सूचना:' : language === 'GU' ? 'દર્શન માટે સૂચના:' : 'Notice for Visitors:'}
            </span>
            {language === 'HI'
              ? 'मंगला आरती सुबह ०६:०० बजे एवं संध्या आरती शाम ०६:३० बजे निश्चित समय पर होती हैं। अन्य आरतियों का समय उत्सव अनुसार निर्धारित होता है।'
              : language === 'GU'
              ? 'મંગળા આરતી સવારે ૦૬:૦૦ વાગ્યે અને સંધ્યા આરતી સાંજે ૦૬:૩૦ વાગ્યે નિશ્ચિત સમયે યોજાય છે. અન્ય આરતીઓનો સમય ઉત્સવ મુજબ નક્કી થાય છે.'
              : 'Mangla Aarti (06:00 AM) and Sandhya Aarti (06:30 PM) are confirmed daily timings. Other aartis follow festive ritual timings.'}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
