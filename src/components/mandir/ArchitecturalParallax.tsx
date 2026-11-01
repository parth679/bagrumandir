import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const ArchitecturalParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven GPU transforms across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Layer speeds: background moves subtly, midground moves faster for authentic depth
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-6%', '6%']
  );

  const midgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['8%', '-8%']
  );

  return (
    <section
      id="architecture"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 max-w-7xl mx-auto overflow-hidden bg-[#12100E]"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#E2A752] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#E2A752]" />
          <span>Living Heritage & Sacred Stone</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold text-white tracking-tight">
          Crafted in Devotion
        </h2>
        <p className="text-white/70 text-sm sm:text-base mt-3 leading-relaxed">
          Rooted in ancient Nagara traditions and Swaminarayan architectural heritage. Hand-carved sandstone columns bearing the sacred Tilak-Chandlo frame the tranquil paths connecting the prayer sanctum to the Vishranti Gruh.
        </p>
      </div>

      {/* 2.5D Parallax Architectural Stage with Zero-CLS aspect ratio reservation */}
      <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/20 bg-[#1A1615] shadow-2xl aspect-[4/3] sm:aspect-[16/9] max-h-[640px]">
        
        {/* Layer 1: Background Shikhara & Starry Night (Deepest Layer) */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-[-10%] z-0 will-change-transform"
        >
          <img
            src="/assets/images/mandir/mandir_exterior.jpg"
            alt="Illuminated Temple Shikhara at Night"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
            loading="lazy"
          />
        </motion.div>

        {/* Layer 2: Midground Carved Sandstone Veranda Arcade with Tilak Capitals */}
        <motion.div
          style={{ y: midgroundY }}
          className="absolute inset-y-0 right-0 w-full sm:w-2/3 md:w-3/5 z-10 will-change-transform pointer-events-none"
        >
          <img
            src="/assets/images/mandir/veranda_pillars.jpg"
            alt="Hand-Carved Sandstone Veranda with Tilak Pillars"
            className="w-full h-full object-cover object-top filter brightness-[0.9] contrast-105"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 28%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%)'
            }}
            loading="lazy"
          />
        </motion.div>

        {/* Ambient Twilight Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-[#12100E]/40 z-20 pointer-events-none" />

        {/* Layer 3: Foreground Contextual Architectural Story Card */}
        <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-30 p-6 sm:p-8 rounded-2xl bg-[#1A1615]/90 backdrop-blur-xl border border-white/15 shadow-2xl text-left">
          <div className="flex items-center gap-2 text-xs text-[#E2A752] font-semibold tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-[#E2A752]" />
            <span>Verified Temple Architecture</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-['Cinzel',serif] font-bold text-white mb-2">
            The Sandstone Veranda
          </h3>

          <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-4">
            Each Rajasthani sandstone pillar is hand-carved with the sacred Swaminarayan Tilak-Chandlo emblem upon its capital. The scalloped arches and granite stone flooring create an acoustic buffer of silence around the campus.
          </p>

          <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
            <span>Location: Ground Courtyard Walkway</span>
            <span className="text-[#E2A752] font-medium">Bagru Dham Campus</span>
          </div>
        </div>

      </div>

      {/* Architectural Pillars Triad Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
        <div className="p-6 rounded-2xl bg-[#1A1615]/70 border border-white/10 hover:border-[#D97706]/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/20 border border-[#D97706]/30 flex items-center justify-center text-[#E2A752] font-bold text-lg mb-3">
            १
          </div>
          <h4 className="text-lg font-['Cinzel',serif] font-bold text-white mb-1.5">
            Nagara Shikhara
          </h4>
          <p className="text-xs text-white/70 leading-relaxed">
            Multi-tiered stone spires crowned with golden kalash, geometrically aligned toward the rising morning sun over Jaipur.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#1A1615]/70 border border-white/10 hover:border-[#D97706]/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/20 border border-[#D97706]/30 flex items-center justify-center text-[#E2A752] font-bold text-lg mb-3">
            २
          </div>
          <h4 className="text-lg font-['Cinzel',serif] font-bold text-white mb-1.5">
            Tilak-Chandlo Capitals
          </h4>
          <p className="text-xs text-white/70 leading-relaxed">
            Authentic U-shaped saffron Tilak and red Chandlo engraved into every supporting pillar across the residential arcades.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#1A1615]/70 border border-white/10 hover:border-[#D97706]/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/20 border border-[#D97706]/30 flex items-center justify-center text-[#E2A752] font-bold text-lg mb-3">
            ३
          </div>
          <h4 className="text-lg font-['Cinzel',serif] font-bold text-white mb-1.5">
            Ceremonial Elephant
          </h4>
          <p className="text-xs text-white/70 leading-relaxed">
            Monumental life-sized sculpture of Bhagwan Swaminarayan mounted upon an adorned ceremonial elephant welcoming visitors.
          </p>
        </div>
      </div>

    </section>
  );
};
