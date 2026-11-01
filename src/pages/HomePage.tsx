import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { HeroSection } from '../components/mandir/HeroSection';
import { SanctumDarshan } from '../components/mandir/SanctumDarshan';
import { AartiSchedule } from '../components/mandir/AartiSchedule';
import { RoomGrid } from '../components/yatrinivas/RoomGrid';
import { ArrowRight, Compass, BedDouble, MapPin, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n/useTranslation';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useApp();
  const t = useT();

  return (
    <PageTransition className="relative z-10 space-y-12 sm:space-y-20">
      {/* 1. Cinematic Hero Section with Live IST Status Strip */}
      <HeroSection />

      {/* 2. Sanctum Darshan Section */}
      <SanctumDarshan />

      {/* Quick Navigation Portal Banner */}
      <section className="px-4 max-w-7xl mx-auto">
        <div
          className="p-8 sm:p-12 rounded-3xl border shadow-xl transition-colors text-left"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: About Mandir */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#B85D36]/15 border border-[#D97706]/30 flex items-center justify-center text-[#D97706]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                {t.about.sectionLabel}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.about.description}
              </p>
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97706] hover:underline pt-1"
              >
                <span>{t.common.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Yatri Nivas */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#B85D36]/15 border border-[#D97706]/30 flex items-center justify-center text-[#D97706]">
                <BedDouble className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                {t.yatriNivas.heading}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.yatriNivas.description}
              </p>
              <button
                onClick={() => {
                  navigate('/yatri-nivas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97706] hover:underline pt-1"
              >
                <span>{t.hero.exploreStay}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Visit & Map */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#B85D36]/15 border border-[#D97706]/30 flex items-center justify-center text-[#D97706]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                {t.visit.heading}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.visit.description}
              </p>
              <button
                onClick={() => {
                  navigate('/visit');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97706] hover:underline pt-1"
              >
                <span>{t.nav.visit}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Daily Aarti Schedule */}
      <AartiSchedule />

      {/* 4. Yatri Nivas Highlights */}
      <RoomGrid />
    </PageTransition>
  );
};
