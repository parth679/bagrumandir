import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickAccessBar } from './components/QuickAccessBar';
import { DailyDarshanGallery } from './components/DailyDarshanGallery';
import { YatriNivasBooking } from './components/YatriNivasBooking';
import { SpiritualExperiences } from './components/SpiritualExperiences';
import { TimingsPanchang } from './components/TimingsPanchang';
import { LocationVisitorGuide } from './components/LocationVisitorGuide';
import { AudioChanterBar } from './components/AudioChanterBar';
import { DonationSewaModal } from './components/DonationSewaModal';
import { Footer } from './components/Footer';
import { Language, ThemeMode, YatriRoom } from './types';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('stone');
  const [language, setLanguage] = useState<Language>('EN');
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<YatriRoom | null>(null);
  const [isSewaModalOpen, setIsSewaModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (themeMode === 'meditation') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode(prev => (prev === 'stone' ? 'meditation' : 'stone'));
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      themeMode === 'meditation'
        ? 'bg-[#002D33] text-[#FDFBF7]'
        : 'bg-[#FDFBF7] text-[#1A1A1A]'
    }`}>
      {/* Header */}
      <Header
        theme={themeMode}
        onToggleTheme={handleToggleTheme}
        language={language}
        onSelectLanguage={setLanguage}
        onOpenBooking={() => {
          setSelectedRoomForBooking(null);
          setIsBookingModalOpen(true);
        }}
        onOpenSewa={() => setIsSewaModalOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => {
          setSelectedRoomForBooking(null);
          setIsBookingModalOpen(true);
        }}
        onNavigateSection={scrollToSection}
        audioPlaying={audioPlaying}
        onToggleAudio={() => setAudioPlaying(!audioPlaying)}
      />

      {/* Quick Access Bar */}
      <QuickAccessBar
        onOpenBooking={() => {
          setSelectedRoomForBooking(null);
          setIsBookingModalOpen(true);
        }}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Modules */}
      <main className="space-y-4">
        {/* Daily Darshan, History, Video & Scripture Hub */}
        <DailyDarshanGallery />

        {/* Yatri Nivas Accommodations & Room Booking */}
        <YatriNivasBooking
          isBookingModalOpen={isBookingModalOpen}
          onCloseBookingModal={() => setIsBookingModalOpen(false)}
          selectedRoomForBooking={selectedRoomForBooking}
          onSelectRoomForBooking={(room) => {
            setSelectedRoomForBooking(room);
            if (room) setIsBookingModalOpen(true);
          }}
        />

        {/* Things To Do & Spiritual Experiences */}
        <SpiritualExperiences />

        {/* Aarti Timings Schedule & Panchang Calendar */}
        <TimingsPanchang />

        {/* Interactive Location Map & Visitor Etiquette Guide */}
        <LocationVisitorGuide />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => {
          setSelectedRoomForBooking(null);
          setIsBookingModalOpen(true);
        }}
        onOpenSewa={() => setIsSewaModalOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Ambient Audio Chanter Player */}
      <AudioChanterBar
        isPlaying={audioPlaying}
        onTogglePlay={() => setAudioPlaying(!audioPlaying)}
      />

      {/* Sewa / Offering Modal */}
      <DonationSewaModal
        isOpen={isSewaModalOpen}
        onClose={() => setIsSewaModalOpen(false)}
      />
    </div>
  );
}
