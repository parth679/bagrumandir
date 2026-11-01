import React from 'react';
import { TEMPLE_INFO } from '../data/templeData';
import { MapPin, Navigation, Train, Plane, Bus, ShieldAlert, Sparkles, Phone, ExternalLink } from 'lucide-react';

export const LocationVisitorGuide: React.FC = () => {
  return (
    <section id="location" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-md shadow-[#FF9933]/20">
          ★ Location & Visitor Guidelines
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#006D77] dark:text-[#E6C887]">
          Visit Us & Travel Directions
        </h2>
        <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-300">
          Located in the heart of historic Kalupur, Ahmedabad. Easily accessible via auto-rickshaw, metro, and taxi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: SIMULATED GOOGLE MAP CONTAINER */}
        <div className="lg:col-span-7 bg-white dark:bg-[#00383D] rounded-3xl overflow-hidden border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-xl flex flex-col justify-between">
          
          {/* Map Image Representation */}
          <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
              alt="Map view of Swaminarayan Mandir Kalupur"
              className="w-full h-full object-cover opacity-80"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Map Pin Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#002D33]/90 backdrop-blur-md p-4 rounded-2xl border border-[#006D77]/40 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#FF9933] font-bold">
                  <MapPin className="w-4 h-4 text-[#FF9933]" />
                  <span>{TEMPLE_INFO.name}</span>
                </div>
                <p className="text-xs text-stone-300 mt-0.5">
                  {TEMPLE_INFO.address}
                </p>
              </div>

              <a
                href={TEMPLE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#006D77] hover:bg-[#005a63] transition-all shadow-md flex items-center gap-1.5 shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Transportation Hub Info */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FDFBF7] dark:bg-stone-800 border border-[#006D77]/10">
              <Train className="w-5 h-5 text-[#006D77] dark:text-teal-300 shrink-0" />
              <div>
                <div className="font-bold text-stone-800 dark:text-stone-200">Railway Station</div>
                <div className="text-stone-500">1.2 km (Kalupur Station)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FDFBF7] dark:bg-stone-800 border border-[#006D77]/10">
              <Plane className="w-5 h-5 text-[#006D77] dark:text-teal-400 shrink-0" />
              <div>
                <div className="font-bold text-stone-800 dark:text-stone-200">Ahmedabad Airport</div>
                <div className="text-stone-500">9.5 km (SVP Intl)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FDFBF7] dark:bg-stone-800 border border-[#006D77]/10">
              <Bus className="w-5 h-5 text-[#FF9933] shrink-0" />
              <div>
                <div className="font-bold text-stone-800 dark:text-stone-200">Gheekanta Metro</div>
                <div className="text-stone-500">0.5 km (Walking dist)</div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: VISITOR ETIQUETTE & TEMPLE GUIDELINES */}
        <div className="lg:col-span-5 bg-white dark:bg-[#00383D] p-6 sm:p-8 rounded-3xl border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9933] uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Temple Code of Conduct</span>
            </div>

            <h3 className="font-heading text-xl font-bold text-[#006D77] dark:text-[#E6C887] mb-4">
              Visitor Guidelines & Etiquette
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="p-3.5 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800/80 border border-[#006D77]/10 flex items-start gap-3">
                <span className="text-lg">👗</span>
                <div>
                  <strong className="text-[#006D77] dark:text-[#E6C887] block">Traditional Modest Attire</strong>
                  Pilgrims are requested to wear clothes covering shoulders and knees. Traditional Indian attire (kurta/dhoti/saree/salwar) is highly appreciated.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800/80 border border-[#006D77]/10 flex items-start gap-3">
                <span className="text-lg">👟</span>
                <div>
                  <strong className="text-[#006D77] dark:text-[#E6C887] block">Free Footwear Counter</strong>
                  Footwear deposit counter is located right at the main entrance gate. Free service maintained by sevadars.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800/80 border border-[#006D77]/10 flex items-start gap-3">
                <span className="text-lg">📷</span>
                <div>
                  <strong className="text-[#006D77] dark:text-[#E6C887] block">Photography Rules</strong>
                  Photography is permitted in the courtyard and wooden heritage walkways. Photography inside the inner sanctum during Aarti is strictly prohibited.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800/80 border border-[#006D77]/10 flex items-start gap-3">
                <span className="text-lg">🌱</span>
                <div>
                  <strong className="text-[#006D77] dark:text-[#E6C887] block">Pure Sattvic Environment</strong>
                  Tobacco, alcohol, non-vegetarian food, and plastic bags are strictly prohibited inside temple and Yatri Nivas premises.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#006D77]/10 dark:border-[#006D77]/30 flex items-center justify-between text-xs text-stone-500">
            <span>Help Desk Office: <strong>Room #101 Near Gate</strong></span>
            <span className="text-[#FF9933] font-bold">Wheelchair Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
