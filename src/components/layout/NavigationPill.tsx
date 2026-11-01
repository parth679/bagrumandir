import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MAIN_NAV_ITEMS } from '../../config/navigationConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { ThemeMode, Language } from '../../types';
import { Sun, Moon, Phone, Menu, X, BedDouble, Volume2, VolumeX } from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavigationPillProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  audioPlaying: boolean;
  onToggleAudio: () => void;
}

export const NavigationPill: React.FC<NavigationPillProps> = ({
  theme,
  onToggleTheme,
  language,
  onSelectLanguage,
  activeSection,
  onNavigateSection,
  audioPlaying,
  onToggleAudio
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 shadow-2xl",
            isScrolled
              ? "bg-[#181412]/92 backdrop-blur-xl border border-[#D97706]/35 shadow-black/70 py-1.5"
              : "bg-[#1A1615]/85 backdrop-blur-md border border-[#D97706]/20 shadow-black/50"
          )}
        >
          {/* Sacred Brand Emblem */}
          <button
            onClick={() => onNavigateSection('hero')}
            className="flex items-center gap-2 pr-2.5 sm:pr-3 border-r border-white/10 group focus:outline-none"
            title="Shree Swaminarayan Mandir Bagru"
          >
            <div className="w-8 h-8 rounded-full bg-[#B85D36]/25 border border-[#D97706]/40 flex items-center justify-center text-[#E2A752] text-sm font-bold shadow-inner group-hover:scale-105 transition-transform">
              ॐ
            </div>
            <div className="hidden md:block text-left">
              <div className="text-[11px] font-['Cinzel',serif] tracking-wider text-white font-semibold leading-tight">
                SWAMINARAYAN
              </div>
              <div className="text-[9px] text-[#E2A752] font-['Noto_Serif_Devanagari',serif] leading-tight">
                बगरू धाम
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-white/80">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigateSection(item.id)}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full transition-colors text-left flex items-center gap-1.5",
                    isActive
                      ? "text-white bg-white/12 font-semibold shadow-sm"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>
                    {language === 'HI' ? item.devanagariLabel : item.label}
                  </span>
                  {item.badge && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Utilities: Audio, Language & Theme Controls */}
          <div className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-white/10">
            
            {/* Ambient Audio Chanter Toggle */}
            <button
              onClick={onToggleAudio}
              className={cn(
                "p-1.5 sm:p-2 rounded-full transition-colors",
                audioPlaying
                  ? "bg-[#B85D36] text-white shadow-md shadow-[#B85D36]/40"
                  : "bg-white/5 text-stone-300 hover:text-white hover:bg-white/10"
              )}
              title={audioPlaying ? "Mute Ambient Chant" : "Play Sacred Chant"}
            >
              {audioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
              )}
            </button>

            {/* Language Selector */}
            <div className="hidden sm:flex items-center bg-black/40 p-0.5 rounded-full text-[11px] border border-white/10">
              {(['EN', 'GU', 'HI'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLanguage(lang)}
                  className={cn(
                    "px-2 py-0.5 rounded-full font-medium transition-all",
                    language === lang
                      ? "bg-[#D97706] text-white shadow-sm"
                      : "text-stone-300 hover:text-white"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Theme Mode Switcher */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
              title={theme === 'meditation' ? 'Switch to Stone Day Mode' : 'Switch to Sanctum Night Mode'}
            >
              {theme === 'meditation' ? (
                <Sun className="w-3.5 h-3.5 text-[#E2A752]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-stone-300" />
              )}
            </button>

            {/* Quick Helpline Call Button */}
            <a
              href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white text-[12px] font-semibold tracking-wide hover:brightness-110 shadow-md shadow-[#B85D36]/25 transition-all"
              title="Call Mandir Reception"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden xl:inline">Inquiry:</span>
              <span>{SITE_CONFIG.yatriNivasInquiryPhone}</span>
            </a>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 text-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl bg-[#1A1615]/95 backdrop-blur-2xl border border-[#D97706]/30 p-5 shadow-2xl text-white lg:hidden space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <div className="text-sm font-['Cinzel',serif] font-bold text-white">
                  Shree Swaminarayan Mandir
                </div>
                <div className="text-xs text-[#E2A752] font-['Noto_Serif_Devanagari',serif]">
                  बगरू धाम • विश्रांति गृह
                </div>
              </div>
              
              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center bg-black/40 p-1 rounded-full text-xs">
                {(['EN', 'GU', 'HI'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => onSelectLanguage(lang)}
                    className={cn(
                      "px-2.5 py-1 rounded-full font-medium transition-colors",
                      language === lang ? "bg-[#D97706] text-white" : "text-stone-300"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav list */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {MAIN_NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigateSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-left font-medium transition-colors flex items-center justify-between"
                >
                  <span>{language === 'HI' ? item.devanagariLabel : item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Helpline Action */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60">Reception Helpline:</span>
              <a
                href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
                className="text-xs font-semibold text-[#E2A752] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.yatriNivasInquiryPhone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
