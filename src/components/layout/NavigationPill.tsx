import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MAIN_NAV_ITEMS } from '../../config/navigationConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { Language } from '../../types';
import { Sun, Moon, Phone, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';
import { cn } from '../../utils/cn';

export const NavigationPill: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme, language, setLanguage, audioPlaying, toggleAudio } = useApp();
  const t = useT();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSubTitle = () => {
    if (language === 'HI') return 'जयपुर (बगरू)';
    if (language === 'GU') return 'જયપુર (બગરૂ)';
    return 'Jaipur (Bagru)';
  };

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 shadow-2xl border",
            isScrolled ? "py-1.5 backdrop-blur-2xl" : "backdrop-blur-xl"
          )}
          style={{
            backgroundColor: 'var(--bg-nav)',
            borderColor: 'var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
            color: 'var(--text-primary)',
          }}
        >
          {/* Sacred Brand Emblem */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 pr-2.5 sm:pr-3 border-r border-[var(--border-subtle)] group focus:outline-none"
            title="Shree Swaminarayan Mandir, Jaipur (Bagru)"
          >
            <div className="w-8 h-8 rounded-full bg-[#B85D36]/20 border border-[#D97706]/40 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform p-0.5">
              <img
                src="/assets/logo/tilak-logo.svg"
                alt="Shree Swaminarayan Mandir Tilak"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block text-left">
              <div className="text-[11px] font-['Cinzel',serif] tracking-wider font-bold leading-tight text-[var(--text-primary)]">
                SWAMINARAYAN
              </div>
              <div className="text-[9px] text-[#D97706] font-['Noto_Serif_Devanagari',serif] leading-tight font-semibold">
                {getSubTitle()}
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              const label =
                language === 'HI'
                  ? item.devanagariLabel
                  : language === 'GU'
                  ? item.gujaratiLabel
                  : item.label;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full transition-all text-left flex items-center gap-1.5",
                    isActive
                      ? "text-white font-semibold shadow-sm bg-gradient-to-r from-[#B85D36] to-[#D97706]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <span>{label}</span>
                  {item.badge && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Utilities: Audio, Language & Theme Controls */}
          <div className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-[var(--border-subtle)]">
            {/* Ambient Audio Chanter Toggle */}
            <button
              onClick={toggleAudio}
              className={cn(
                "p-1.5 sm:p-2 rounded-full transition-colors",
                audioPlaying
                  ? "bg-[#B85D36] text-white shadow-md shadow-[#B85D36]/40"
                  : "bg-black/5 dark:bg-white/5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/10 dark:hover:bg-white/10"
              )}
              title={audioPlaying ? t.audio.pause : t.audio.play}
              aria-label={audioPlaying ? t.audio.pause : t.audio.play}
            >
              {audioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Actual Working Language Selector */}
            <div className="hidden sm:flex items-center bg-black/10 dark:bg-black/40 p-0.5 rounded-full text-[11px] border border-[var(--border-subtle)]">
              {(['EN', 'GU', 'HI'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "px-2 py-0.5 rounded-full font-medium transition-all",
                    language === lang
                      ? "bg-[#D97706] text-white shadow-sm font-bold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Theme Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-[#E2A752]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-stone-700" />
              )}
            </button>

            {/* Quick Helpline Call Button */}
            <a
              href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white text-[12px] font-semibold tracking-wide hover:brightness-110 shadow-md shadow-[#B85D36]/25 transition-all"
              title="Call Mandir Reception"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden xl:inline">{t.common.callDesk.split(' ')[0]}:</span>
              <span>{SITE_CONFIG.yatriNivasInquiryPhone}</span>
            </a>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-full bg-black/10 dark:bg-white/10 text-[var(--text-primary)] lg:hidden"
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
            className="fixed inset-x-4 top-20 z-50 rounded-2xl p-5 shadow-2xl lg:hidden space-y-4 border backdrop-blur-2xl transition-colors"
            style={{
              backgroundColor: 'var(--bg-glass)',
              borderColor: 'var(--border-gold)',
              boxShadow: 'var(--shadow-card)',
              color: 'var(--text-primary)',
            }}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#B85D36]/20 border border-[#D97706]/40 flex items-center justify-center overflow-hidden shadow-inner p-0.5 shrink-0">
                  <img
                    src="/assets/logo/tilak-logo.svg"
                    alt="Tilak"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                    Shree Swaminarayan Mandir
                  </div>
                  <div className="text-xs text-[#D97706] font-['Noto_Serif_Devanagari',serif]">
                    {getSubTitle()} • {t.common.vishranthiGruh}
                  </div>
                </div>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center bg-black/10 dark:bg-black/40 p-1 rounded-full text-xs border border-[var(--border-subtle)]">
                {(['EN', 'GU', 'HI'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={cn(
                      "px-2.5 py-1 rounded-full font-medium transition-colors",
                      language === lang ? "bg-[#D97706] text-white font-bold" : "text-[var(--text-muted)]"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav list */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                const label =
                  language === 'HI'
                    ? item.devanagariLabel
                    : language === 'GU'
                    ? item.gujaratiLabel
                    : item.label;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.path)}
                    className={cn(
                      "p-2.5 rounded-xl text-left font-medium transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-bold"
                        : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-primary)]"
                    )}
                  >
                    <span>{label}</span>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Helpline Action */}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)]">{t.footer.helpline}</span>
              <a
                href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
                className="text-xs font-semibold text-[#D97706] flex items-center gap-1.5"
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
