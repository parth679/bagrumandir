import React, { useState, useEffect } from 'react';
import { TEMPLE_INFO, AARTI_TIMINGS } from '../data/templeData';
import { 
  Clock, 
  BedDouble, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  ArrowRight,
  ShieldCheck,
  Building2,
  CalendarDays
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
  audioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigateSection,
  audioPlaying,
  onToggleAudio,
}) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const heroBanners = [
    {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1920&q=80',
      title: 'Sacred Heritage & Modern Serenity',
      subtitle: 'Experience 200 years of Swaminarayan tradition paired with immaculate Yatri Nivas accommodations.'
    },
    {
      url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80',
      title: 'Daily Shringar & Divine Darshan',
      subtitle: 'Behold today’s golden deity adornments and partake in peaceful morning & evening Aartis.'
    },
    {
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80',
      title: 'Yatri Nivas Pilgrim Stay',
      subtitle: 'Clean AC & Non-AC family rooms with pure sattvic dining, steps away from the temple sanctum.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBanners.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroBanners.length]);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#12141D] text-[#FDFCF0]">
      {/* Background Image Carousel with Overlay */}
      {heroBanners.map((banner, index) => (
        <div
          key={banner.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
        >
          <img
            src={banner.url}
            alt={banner.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Atmospheric Radial Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002D33] via-[#002D33]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#006D77]/80 via-transparent to-[#FF9933]/30" />

      {/* Top Banner Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#002D33]/80 backdrop-blur-md p-3.5 rounded-2xl border border-[#006D77]/30">
          
          {/* Opening Status Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9933] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF9933]"></span>
            </span>
            <span className="text-xs font-semibold text-[#FF9933] uppercase tracking-wider">
              We are currently Open
            </span>
            <span className="text-stone-300 text-xs hidden sm:inline">
              ({TEMPLE_INFO.openingHours.fullText})
            </span>
          </div>

          {/* Quick Aarti Timer & Audio Toggle */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-white bg-[#006D77] px-3.5 py-1 rounded-full border border-[#FF9933]/30">
              <Clock className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>Next Aarti: <strong>Sandhya Aarti @ 06:45 PM</strong></span>
            </div>

            <button
              onClick={onToggleAudio}
              className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#006D77]/60 text-white border border-[#006D77] hover:bg-[#006D77] transition-colors"
              title="Play Ambient Swaminarayan Dhun"
            >
              {audioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#FF9933] animate-pulse" />
                  <span>Dhun On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Ambient Audio</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-12 md:my-20 flex flex-col items-start justify-center">
        
        {/* Heritage Tag */}
        <div className="inline-block bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 shadow-lg shadow-[#FF9933]/20">
          ★ Daily Darshan Live • Kalupur Heritage Branch
        </div>

        {/* Hero Main Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl tracking-tight text-white drop-shadow-md">
          {heroBanners[currentBgIndex].title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-2xl font-normal leading-relaxed">
          {heroBanners[currentBgIndex].subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#006D77] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#005a63] shadow-lg shadow-[#006D77]/30 transition-all flex items-center justify-center gap-2"
          >
            <BedDouble className="w-4 h-4" />
            <span>Book Yatri Nivas Room</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={() => onNavigateSection('darshan')}
            className="w-full sm:w-auto bg-[#FF9933] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#e68a2e] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#FF9933]/20"
          >
            <Camera className="w-4 h-4 text-white" />
            <span>Daily Darshan Today</span>
          </button>

          <button
            onClick={() => onNavigateSection('timings')}
            className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-medium text-stone-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
          >
            <Clock className="w-4 h-4 text-[#FF9933]" />
            <span>Aarti Schedule</span>
          </button>
        </div>

        {/* Key Temple Features Pills */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-stone-200">100% Verified Stay</div>
              <div className="text-[10px] text-stone-400">Official Mandir Guest House</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <Building2 className="w-5 h-5 text-[#E65100] shrink-0" />
            <div>
              <div className="text-xs font-bold text-stone-200">AC & Non-AC Rooms</div>
              <div className="text-[10px] text-stone-400">Attached Bath & Hot Water</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <Sparkles className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-stone-200">Pure Sattvic Dining</div>
              <div className="text-[10px] text-stone-400">Annakut & Mahaprasad</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <CalendarDays className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-stone-200">5 Daily Aartis</div>
              <div className="text-[10px] text-stone-400">Live Kirtan & Katha</div>
            </div>
          </div>
        </div>

      </div>

      {/* Carousel Indicator Dots */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {heroBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBgIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentBgIndex ? 'w-8 bg-[#E65100]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <span className="text-xs text-stone-400 font-mono">
          0{currentBgIndex + 1} / 0{heroBanners.length}
        </span>
      </div>
    </section>
  );
};
