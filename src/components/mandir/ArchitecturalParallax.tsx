import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

export const ArchitecturalParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language } = useApp();
  const t = useT();

  // Scroll-driven GPU transforms across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-5%', '5%']
  );

  const midgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['6%', '-6%']
  );

  return (
    <section
      id="architecture"
      ref={containerRef}
      className="relative py-16 sm:py-28 px-4 max-w-7xl mx-auto overflow-hidden transition-colors"
      style={{ color: 'var(--text-primary)' }}
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#D97706] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.about.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
          {t.about.heading}
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base mt-3 leading-relaxed">
          {t.about.description}
        </p>
      </div>

      {/* 2.5D Parallax Architectural Stage with Protected Framing */}
      <div
        className="relative rounded-3xl overflow-hidden border shadow-2xl aspect-[4/3] sm:aspect-[16/9] max-h-[600px] transition-colors"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-gold)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        {/* Layer 1: Background Shikhara & Sky */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-[-10%] z-0 will-change-transform"
        >
          <img
            src="/assets/images/mandir/bagru_temple_facade.jpg"
            alt="Temple Shikhara Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-105"
            loading="lazy"
          />
        </motion.div>

        {/* Layer 2: Midground Veranda Arcade with Pillars */}
        <motion.div
          style={{ y: midgroundY }}
          className="absolute inset-y-0 right-0 w-full sm:w-2/3 md:w-3/5 z-10 will-change-transform pointer-events-none"
        >
          <img
            src="/assets/images/mandir/veranda_pillars.jpg"
            alt="Handcrafted Veranda Pillars and Arches"
            className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-105"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)'
            }}
            loading="lazy"
          />
        </motion.div>

        {/* Ambient Vignettes */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-20 pointer-events-none"
        />

        {/* Layer 3: Foreground Contextual Story Card */}
        <div
          className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-30 p-6 sm:p-7 rounded-2xl border shadow-2xl text-left backdrop-blur-xl"
          style={{
            backgroundColor: 'var(--bg-glass)',
            borderColor: 'var(--border-gold)',
            color: 'var(--text-primary)',
          }}
        >
          <div className="flex items-center gap-2 text-xs text-[#D97706] font-semibold tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.about.verifiedLabel}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-['Cinzel',serif] font-bold text-[var(--text-primary)] mb-2">
            {t.about.cardHeading}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            {t.about.cardDesc}
          </p>

          <div className="flex items-center justify-between text-[11px] text-[var(--text-subtle)] border-t border-[var(--border-subtle)] pt-3">
            <span>{t.about.locationNote}</span>
            <span className="text-[#D97706] font-medium">{t.about.campus}</span>
          </div>
        </div>
      </div>

      {/* Architectural Pillars Triad Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
        <div
          className="p-6 rounded-2xl border transition-all hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/15 border border-[#D97706]/30 flex items-center justify-center text-[#D97706] font-bold text-lg mb-3">
            १
          </div>
          <h4 className="text-lg font-['Cinzel',serif] font-bold text-[var(--text-primary)] mb-1.5">
            {t.about.nagara}
          </h4>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {t.about.nagaraDesc}
          </p>
        </div>

        <div
          className="p-6 rounded-2xl border transition-all hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/15 border border-[#D97706]/30 flex items-center justify-center text-[#D97706] font-bold text-lg mb-3">
            २
          </div>
          <h4 className="text-lg font-['Cinzel',serif] font-bold text-[var(--text-primary)] mb-1.5">
            {t.about.pillarCraft}
          </h4>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {t.about.pillarCraftDesc}
          </p>
        </div>

        <div
          className="p-6 rounded-2xl border transition-all hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/15 border border-[#D97706]/30 flex items-center justify-center text-[#D97706] font-bold text-lg mb-3">
            ३
          </div>
          <h4 className="text-lg font-['Cinzel',serif] font-bold text-[var(--text-primary)] mb-1.5">
            {t.about.elephantDepiction}
          </h4>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {t.about.elephantDepictionDesc}
          </p>
        </div>
      </div>
    </section>
  );
};
