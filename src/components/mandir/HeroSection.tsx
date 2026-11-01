import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getTempleTimeStatus, TempleTimeStatus } from '../../utils/templeTime';
import { SITE_CONFIG } from '../../config/siteConfig';
import { YATRI_NIVAS_STATUS } from '../../config/yatriNivasConfig';
import { ArrowRight, BedDouble, Compass, Clock, Phone, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateSection }) => {
  const [timeStatus, setTimeStatus] = useState<TempleTimeStatus>(() => getTempleTimeStatus());

  // Periodically refresh the IST clock every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStatus(getTempleTimeStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 bg-[#12100E]">
      
      {/* Background Architectural Photo with Zero-CLS reservation & Atmospheric Overlay */}
      <div className="absolute inset-0 z-0 bg-[#12100E] overflow-hidden">
        <img
          src="/assets/images/mandir/mandir_exterior.jpg"
          alt="Shree Swaminarayan Mandir Bagru Illuminated at Night"
          className="w-full h-full object-cover object-center filter brightness-[0.60] contrast-[1.08] scale-105 transition-transform duration-[12000ms] ease-out hover:scale-100"
          loading="eager"
          decoding="async"
        />
        {/* Layered Vignettes for Visual Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-[#12100E]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#12100E]/30 to-[#12100E]/90" />
      </div>

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
        
        {/* Sacred Affiliation Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#D97706]/35 text-[#E2A752] text-xs uppercase tracking-[0.22em] font-medium mb-6 shadow-lg shadow-black/40"
        >
          <span className="w-2 h-2 rounded-full bg-[#E2A752] animate-pulse" />
          <span className="font-['Noto_Serif_Devanagari',serif]">
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

        {/* Devanagari Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-['Noto_Serif_Devanagari',serif] text-xl sm:text-2xl text-[#E2A752]/90 font-medium tracking-wide mb-6"
        >
          {SITE_CONFIG.subName} — बगरू धाम
        </motion.p>

        {/* Informative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-white/75 font-light leading-relaxed mb-10 text-balance"
        >
          A sacred sanctum of traditional Nagara stone architecture, authentic Swaminarayan devotion, and serene, hospitable accommodation for visiting families and pilgrims.
        </motion.p>

        {/* Purposeful Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigateSection('yatrinivas')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-medium text-sm tracking-wide shadow-lg shadow-[#B85D36]/30 hover:brightness-110 hover:-translate-y-0.5 transition-all group"
          >
            <BedDouble className="w-4 h-4 text-white" />
            <span>Explore Yatri Nivas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateSection('architecture')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-white/90 font-medium text-sm tracking-wide hover:bg-white/15 hover:text-white transition-all group"
          >
            <Compass className="w-4 h-4 text-[#E2A752]" />
            <span>Sacred Architecture</span>
            <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Live IST Status Strip (Evaluated strictly in Asia/Kolkata) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#1A1615]/80 backdrop-blur-xl border border-white/10 text-xs shadow-2xl text-left"
        >
          {/* Status 1: Open / Closed in IST */}
          <div className="sm:border-r border-white/10 pr-2 pb-2 sm:pb-0 border-b sm:border-b-0">
            <div className="text-white/45 uppercase tracking-wider text-[10px] flex items-center justify-between">
              <span>Temple Status</span>
              <span className="text-[9px] text-[#E2A752] font-mono">{timeStatus.formattedISTTime}</span>
            </div>
            <div className="font-semibold mt-1 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${timeStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-500'}`} />
              <span className={timeStatus.isOpen ? 'text-emerald-400' : 'text-amber-300'}>
                {timeStatus.statusLabel}
              </span>
            </div>
            <div className="text-[10px] text-white/50 mt-0.5 truncate">
              {timeStatus.statusSubtext}
            </div>
          </div>

          {/* Status 2: Next Upcoming Aarti */}
          <div className="sm:border-r border-white/10 px-0 sm:px-2 py-2 sm:py-0 border-b sm:border-b-0">
            <div className="text-white/45 uppercase tracking-wider text-[10px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#E2A752]" />
              <span>Next Aarti</span>
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
            <div className="text-white/45 uppercase tracking-wider text-[10px] flex items-center justify-between">
              <span>Vishranti Gruh</span>
              <span className="text-[9px] text-emerald-400 font-semibold">Available</span>
            </div>
            <div className="text-white font-semibold mt-1 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#E2A752]" />
              <span>{YATRI_NIVAS_STATUS.statusLabel}</span>
            </div>
            <a
              href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
              className="text-[10px] text-[#E2A752] hover:underline mt-0.5 inline-flex items-center gap-1"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>Call: {SITE_CONFIG.yatriNivasInquiryPhone}</span>
            </a>
          </div>
        </motion.div>

      </div>

    </section>
  );
};
