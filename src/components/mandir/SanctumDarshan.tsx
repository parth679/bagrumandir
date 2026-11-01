import React from 'react';
import { Sparkles, Sun, Heart, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const SanctumDarshan: React.FC = () => {
  return (
    <section id="darshan" className="py-24 px-4 bg-[#12100E] max-w-7xl mx-auto text-left">
      <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/25 bg-[#181412] p-6 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/15 border border-[#D97706]/30 text-[#E2A752] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Garbhagriha • Central Sanctum</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold text-white tracking-tight leading-tight">
              Nitya Darshan & Sacred Annakut
            </h2>

            <p className="font-['Noto_Serif_Devanagari',serif] text-base sm:text-lg text-[#E2A752]/90 font-medium">
              श्री स्वामिनारायण भगवान — नित्य दर्शन एवं शाकोत्सव अन्नकूट महाप्रसाद
            </p>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              At the heart of the mandir resides the sacred murti of Bhagwan Swaminarayan, seated upon an intricately sculpted golden sinhasan adorned with traditional royal umbrellas (chhatra). The deities are offered freshly harvested vegetables, grains, and sattvic delicacies cooked with pure desi ghee according to sacred Vedic tradition.
            </p>

            {/* Spiritual Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Sun className="w-4 h-4 text-[#E2A752] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white block mb-0.5">Nitya Shringar</span>
                  Handcrafted silk vastras and fresh fragrant flower garlands unveiled daily during Shangar Aarti.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Flame className="w-4 h-4 text-[#E2A752] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white block mb-0.5">Panchaamrut & Camphor</span>
                  Pure ghee and camphor wicks illuminate the golden sanctum during Sandhya Aarti at dusk.
                </div>
              </div>
            </div>

            <div className="text-xs text-white/50 pt-2 border-t border-white/10 flex items-center justify-between">
              <span>Under: {SITE_CONFIG.affiliationDevanagari}</span>
              <span className="text-[#E2A752] font-mono">Jaipur Dham</span>
            </div>
          </div>

          {/* Right Photographic Column (5 cols) with Zero-CLS reservation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/40 shadow-2xl aspect-[3/4] bg-[#1A1615] group">
              <img
                src="/assets/images/mandir/mandir_sanctum.jpg"
                alt="Sacred Murti of Bhagwan Swaminarayan in Golden Sinhasan with Annakut Offerings"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E2A752] mb-1">
                  Actual Sanctum Photograph
                </div>
                <div className="text-sm font-['Cinzel',serif] font-bold text-white leading-snug">
                  Bhagwan Swaminarayan on Golden Sinhasan
                </div>
                <div className="text-[11px] text-white/70 font-['Noto_Serif_Devanagari',serif] mt-0.5">
                  अन्नकूट एवं शाकोत्सव दर्शन • बगरू मंदिर
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
