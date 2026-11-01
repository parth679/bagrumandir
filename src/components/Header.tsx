import React, { useState } from 'react';
import { TEMPLE_INFO } from '../data/templeData';
import { Language, ThemeMode } from '../types';
import { 
  Sun, 
  Moon, 
  Phone, 
  MapPin, 
  Calendar, 
  BedDouble, 
  Camera, 
  Clock, 
  Menu, 
  X, 
  Compass, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenSewa: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  language,
  onSelectLanguage,
  onOpenBooking,
  onOpenSewa,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'darshan', label: 'Daily Darshan', icon: Camera },
    { id: 'timings', label: 'Aarti Timings', icon: Clock },
    { id: 'stay', label: 'Yatri Nivas / Stay', icon: BedDouble },
    { id: 'experiences', label: 'Things To Do', icon: Compass },
    { id: 'history', label: 'History', icon: Sparkles },
    { id: 'location', label: 'Location & Guide', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-300">
      {/* Top Announcement Ticker */}
      <div className="bg-[#006D77] text-white text-xs py-2 px-4 flex justify-between items-center border-b border-[#FF9933]/20">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-[#FF9933] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse">
              Live
            </span>
            <span className="text-stone-100">
              ⚡ Evening Sandhya Aarti at <strong className="text-[#FF9933]">06:45 PM IST</strong> • Yatri Nivas Room Bookings open for Janmashtami Utsav
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs">
            <a 
              href={`tel:${TEMPLE_INFO.phone}`} 
              className="flex items-center gap-1 hover:text-[#FF9933] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FF9933]" />
              <span>{TEMPLE_INFO.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a 
              href={`tel:${TEMPLE_INFO.yatriNivasHelpline}`} 
              className="flex items-center gap-1 text-[#FF9933] hover:underline"
            >
              <BedDouble className="w-3 h-3" />
              <span>Stay Helpline: {TEMPLE_INFO.yatriNivasHelpline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding Navigation Bar */}
      <div className={`backdrop-blur-md border-b transition-colors duration-300 ${
        theme === 'meditation'
          ? 'bg-[#002D33]/95 border-[#006D77]/40 text-[#FDFBF7]'
          : 'bg-white/95 border-[#006D77]/10 text-[#1A1A1A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Temple Title */}
          <button 
            onClick={() => onNavigateSection('top')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {/* Natural Tones Symbol Emblem */}
            <div className="w-10 h-10 bg-[#FF9933] rounded-full flex items-center justify-center shadow-lg shadow-[#FF9933]/20 group-hover:scale-105 transition-transform shrink-0">
              <span className="text-white font-bold text-xl">ॐ</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#006D77] dark:text-[#E6C887]">
                  Shree Swaminarayan Mandir
                </h1>
                <span className="hidden lg:inline-block bg-[#FF9933] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Heritage Branch
                </span>
              </div>
              <p className="text-xs text-[#006D77]/70 dark:text-stone-300 font-medium">
                & Yatri Nivas (Guest House) • Kalupur
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#006D77]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigateSection(item.id)}
                className="hover:text-[#FF9933] dark:hover:text-[#FF9933] transition-colors py-2 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Controls & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-full text-xs font-semibold">
              {(['EN', 'GU', 'HI'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full transition-colors ${
                    language === lang 
                      ? 'bg-[#006D77] text-white shadow-sm' 
                      : 'text-[#006D77] dark:text-stone-300 hover:text-black'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              title="Toggle Day/Evening Meditation Mode"
              className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-[#006D77] dark:text-amber-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              {theme === 'meditation' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Sewa Button */}
            <button
              onClick={onOpenSewa}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#006D77] dark:text-[#FF9933] border border-[#006D77]/20 dark:border-[#FF9933]/40 hover:bg-[#006D77]/5 transition-colors"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>Sewa / Offering</span>
            </button>

            {/* Book Stay CTA Button */}
            <button
              onClick={onOpenBooking}
              className="bg-[#006D77] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#005a63] transition-all shadow-md shadow-[#006D77]/20 flex items-center gap-1.5"
            >
              <BedDouble className="w-4 h-4" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-amber-300"
            >
              {theme === 'meditation' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#80000A] text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] dark:bg-[#12141D] border-b border-[#C5A059]/30 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigateSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-xs font-semibold text-stone-800 dark:text-stone-200 text-left"
                >
                  <IconComp className="w-4 h-4 text-[#E65100]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-stone-800">
            <span className="text-xs text-stone-500 font-medium">Select Language:</span>
            <div className="flex gap-1 text-xs">
              {(['EN', 'GU', 'HI'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLanguage(lang)}
                  className={`px-2 py-1 rounded ${
                    language === lang ? 'bg-[#80000A] text-white' : 'bg-stone-200 dark:bg-stone-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                onOpenSewa();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-bold text-[#0D5C63] dark:text-[#E6C887] border border-[#0D5C63] rounded-lg text-center flex items-center justify-center gap-1"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Sewa Offering</span>
            </button>

            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#E65100] rounded-lg text-center flex items-center justify-center gap-1 shadow-sm"
            >
              <BedDouble className="w-4 h-4" />
              <span>Book Stay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
