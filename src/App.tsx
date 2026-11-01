import React, { useState, useEffect } from 'react';
import { NavigationPill } from './components/layout/NavigationPill';
import { MobileDock } from './components/layout/MobileDock';
import { HeroSection } from './components/mandir/HeroSection';
import { SanctumDarshan } from './components/mandir/SanctumDarshan';
import { ArchitecturalParallax } from './components/mandir/ArchitecturalParallax';
import { RoomGrid } from './components/yatrinivas/RoomGrid';
import { FacilitiesOverview } from './components/yatrinivas/FacilitiesOverview';
import { AartiSchedule } from './components/mandir/AartiSchedule';
import { VisitorGuide } from './components/visitor/VisitorGuide';
import { Footer } from './components/layout/Footer';
import { AudioChanterBar } from './components/visitor/AudioChanterBar';
import { Language, ThemeMode } from './types';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('stone');
  const [language, setLanguage] = useState<Language>('EN');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Sync dark class on root html element
  useEffect(() => {
    if (themeMode === 'meditation') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'stone' ? 'meditation' : 'stone'));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'top' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // IntersectionObserver to dynamically highlight active section
  useEffect(() => {
    const sections = ['hero', 'darshan', 'architecture', 'yatrinivas', 'timings', 'visitor'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        themeMode === 'meditation'
          ? 'bg-[#0E0D0C] text-[#FDFBF7]'
          : 'bg-[#12100E] text-[#FDFBF7]'
      }`}
    >
      {/* 3D Adaptive Frosted Navigation Pill Header */}
      <NavigationPill
        theme={themeMode}
        onToggleTheme={handleToggleTheme}
        language={language}
        onSelectLanguage={setLanguage}
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
        audioPlaying={audioPlaying}
        onToggleAudio={() => setAudioPlaying(!audioPlaying)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Cinematic Hero Section with Live IST Status Strip */}
        <HeroSection onNavigateSection={scrollToSection} />

        {/* 2. Sanctum Darshan & Sacred Annakut Offering */}
        <SanctumDarshan />

        {/* 3. 2.5D Carved Sandstone Veranda Parallax Architecture */}
        <ArchitecturalParallax />

        {/* 4. Yatri Nivas Accommodations (Anand Nilayam Usability & Real Photography) */}
        <RoomGrid />

        {/* 5. Yatri Nivas Facilities, Atrium & Guidelines */}
        <FacilitiesOverview />

        {/* 6. Daily Aarti Timetable & IST Real-Time Schedule */}
        <AartiSchedule />

        {/* 7. Visitor Directions, Map, & Guidelines */}
        <VisitorGuide />
      </main>

      {/* Heritage Footer */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Persistent Ambient Devotional Audio Player */}
      <AudioChanterBar
        isPlaying={audioPlaying}
        onTogglePlay={() => setAudioPlaying(!audioPlaying)}
      />

      {/* Floating Bottom Quick Dock (Mobile Devices) */}
      <MobileDock
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
      />
    </div>
  );
}
