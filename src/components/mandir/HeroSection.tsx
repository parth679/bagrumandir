import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getTempleTimeStatus, TempleTimeStatus } from '../../utils/templeTime';
import { SITE_CONFIG } from '../../config/siteConfig';
import { YATRI_NIVAS_STATUS } from '../../config/yatriNivasConfig';
import { ArrowRight, BedDouble, Compass, Clock, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

interface HeroSectionProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const navigate = useNavigate();
  const { language } = useApp();
  const t = useT();

  const [timeStatus, setTimeStatus] = useState<TempleTimeStatus>(() =>
    getTempleTimeStatus(undefined, undefined, language)
  );

  // Periodically refresh the IST clock every 30 seconds
  useEffect(() => {
    setTimeStatus(getTempleTimeStatus(undefined, undefined, language));
    const timer = setInterval(() => {
      setTimeStatus(getTempleTimeStatus(undefined, undefined, language));
    }, 30000);
    return () => clearInterval(timer);
  }, [language]);

  const locationSubtitle =
    language === 'HI'
      ? `${t.hero.subName} — जयपुर (बगरू)`
      : language === 'GU'
      ? `${t.hero.subName} — જયપુર (બગરૂ)`
      : `${t.hero.subName} — Jaipur (Bagru)`;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 transition-colors"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Architectural Photo with Atmospheric Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/mandir/mandir_exterior.jpg"
          alt="Shree Swaminarayan Mandir, Jaipur (Bagru)"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08] scale-105 transition-transform duration-[12000ms] ease-out hover:scale-100"
          loading="eager"
          decoding="async"
        />
        {/* Layered Vignettes for Visual Depth */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-[var(--bg-primary)]/75"
        />
        <div
          className="absolute inset-0 bg-radial from-transparent via-[var(--bg-primary)]/30 to-[var(--bg-primary)]/90"
        />
      </div>

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
        {/* Sacred Affiliation Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#D97706]/35 text-[#E2A752] text-xs font-medium mb-6 shadow-lg shadow-black/40"
        >
          <span className="w-2 h-2 rounded-full bg-[#E2A752] animate-pulse" />
          <span className="font-['Noto_Serif_Devanagari',serif] tracking-normal normal-case text-xs sm:text-sm font-medium">
            {SITE_CONFIG.affiliationDevanagari}
          </span>
        </motion.div>

        {/* Regal Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-['Cinzel',serif] font-bold text-white tracking-tight leading-[1.12] mb-3 text-balance shadow-sm"
        >
          {SITE_CONFIG.name}
        </motion.h1>

        {/* Subtitle with Correct Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-['Noto_Serif_Devanagari',serif] text-xl sm:text-2xl text-[#E2A752]/90 font-medium tracking-wide mb-6"
        >
          {locationSubtitle}
        </motion.p>

        {/* Informative Description (Accurate, Non-misleading) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-white/85 font-light leading-relaxed mb-10 text-balance"
        >
          {t.hero.description}
        </motion.p>

        {/* Purposeful Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              navigate('/yatri-nivas');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-medium text-sm tracking-wide shadow-lg shadow-[#B85D36]/30 hover:brightness-110 hover:-translate-y-0.5 transition-all group"
          >
            <BedDouble className="w-4 h-4 text-white" />
            <span>{t.hero.exploreStay}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              navigate('/about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/20 transition-all group"
          >
            <Compass className="w-4 h-4 text-[#E2A752]" />
            <span>{t.hero.sacredArchitecture}</span>
            <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Live IST Status Strip (Evaluated strictly in Asia/Kolkata) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#1A1615]/85 backdrop-blur-xl border border-white/15 text-xs shadow-2xl text-left"
        >
          {/* Status 1: Open / Closed in IST */}
          <div className="sm:border-r border-white/10 pr-2 pb-2 sm:pb-0 border-b sm:border-b-0">
            <div className="text-white/60 uppercase tracking-wider text-[10px] flex items-center justify-between">
              <span>{t.common.templeStatus}</span>
              <span className="text-[9px] text-[#E2A752] font-mono">{timeStatus.formattedISTTime}</span>
            </div>
            <div className="font-semibold mt-1 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${timeStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-500'}`} />
              <span className={timeStatus.isOpen ? 'text-emerald-400' : 'text-amber-300'}>
                {timeStatus.statusLabel}
              </span>
            </div>
            <div className="text-[10px] text-white/65 mt-0.5 truncate">
              {timeStatus.statusSubtext}
            </div>
          </div>

          {/* Status 2: Next Upcoming Aarti */}
          <div className="sm:border-r border-white/10 px-0 sm:px-2 py-2 sm:py-0 border-b sm:border-b-0">
            <div className="text-white/60 uppercase tracking-wider text-[10px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#E2A752]" />
              <span>{t.common.nextAarti}</span>
            </div>
            <div className="text-white font-semibold mt-1 truncate">
              {timeStatus.nextAarti.name}
            </div>
            <div className="text-[10px] text-[#E2A752] mt-0.5">
              {timeStatus.nextAarti.timeString} ({timeStatus.nextAarti.countdownLabel})
            </div>
          </div>

          {/* Status 3: Vishranti Gruh Informational Status */}
          <div className="pl-0 sm:pl-2 pt-2 sm:pt-0">
            <div className="text-white/60 uppercase tracking-wider text-[10px] flex items-center justify-between">
              <span>{t.common.vishranthiGruh}</span>
              <span className="text-[9px] text-emerald-400 font-semibold">{t.common.available}</span>
            </div>
            <div className="text-white font-semibold mt-1 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#E2A752]" />
              <span>
                {language === 'HI' ? 'कमरे उपलब्ध' : language === 'GU' ? 'ઓરડા ઉપલબ્ધ' : YATRI_NIVAS_STATUS.statusLabel}
              </span>
            </div>
            <a
              href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
              className="text-[10px] text-[#E2A752] hover:underline mt-0.5 inline-flex items-center gap-1"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>{t.common.callDesk}: {SITE_CONFIG.yatriNivasInquiryPhone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
