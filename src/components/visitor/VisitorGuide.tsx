import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { MapPin, Phone, Mail, Navigation, Car, ShieldCheck, HeartHandshake } from 'lucide-react';

export const VisitorGuide: React.FC = () => {
  return (
    <section id="visitor" className="py-24 px-4 bg-[#12100E] max-w-7xl mx-auto text-left">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E2A752] mb-2">
          <MapPin className="w-4 h-4 text-[#E2A752]" />
          <span>Location & Practical Pilgrim Guide</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold text-white tracking-tight">
          Reaching the Mandir
        </h2>
        <p className="text-white/70 text-sm sm:text-base mt-2 leading-relaxed">
          Situated on the historic Jaipur-Ajmer highway corridor in Bagru, easily accessible by car, bus, or taxi from Jaipur city and railway station.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact Cards & Coordinates (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Address Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1615] border border-[#D97706]/30 shadow-xl space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B85D36]/20 border border-[#D97706]/35 flex items-center justify-center text-[#E2A752] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-['Cinzel',serif] font-bold text-white">
                  Shree Swaminarayan Mandir Bagru
                </h3>
                <p className="text-sm text-white/80 mt-1 leading-relaxed">
                  {SITE_CONFIG.address.fullAddress}
                </p>
                <div className="text-xs text-[#E2A752] mt-1 font-medium">
                  Landmark: {SITE_CONFIG.address.landmark}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <a
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white text-xs font-semibold shadow-md hover:brightness-110 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.helplinePhone}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-[#E2A752] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E2A752]" />
                <span>{SITE_CONFIG.helplinePhone}</span>
              </a>
            </div>
          </div>

          {/* Transportation & Transit Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#1A1615] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E2A752] uppercase tracking-wider mb-2">
                <Car className="w-4 h-4" />
                <span>By Road & Highway</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Located ~28 km from Jaipur city center along NH-48. Direct access from Jaipur bypass and Ajmer expressway.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1A1615] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E2A752] uppercase tracking-wider mb-2">
                <Navigation className="w-4 h-4" />
                <span>By Train & Airport</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Jaipur Junction Railway Station (30 km) and Jaipur International Airport (32 km) connect via taxis and auto-rickshaws.
              </p>
            </div>
          </div>

          {/* Contact Direct Strip */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-4 h-4 text-[#E2A752]" />
              <span>General Inquiries: {SITE_CONFIG.email}</span>
            </div>
            <a
              href={SITE_CONFIG.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E2A752] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Connect on WhatsApp →</span>
            </a>
          </div>

        </div>

        {/* Right Column: Etiquette & Guidelines (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1615] border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#E2A752]">
              <ShieldCheck className="w-5 h-5" />
              <span>Temple Etiquette & Visitor Protocol</span>
            </div>

            <h3 className="text-xl font-['Cinzel',serif] font-bold text-white">
              Preserving Sacred Sanctity
            </h3>

            <div className="space-y-3.5 text-xs text-white/75 leading-relaxed pt-2">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2A752] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Respectful Attire:</strong>
                  Please wear modest attire covering shoulders and knees. Traditional Indian clothing is encouraged.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2A752] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Footwear Stand:</strong>
                  Footwear must be deposited at the complimentary shoe stand near the main Toran gate before ascending to the prayer halls.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2A752] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Sanctum Photography:</strong>
                  Photography inside the inner Garbhagriha is prohibited. Exterior campus and courtyard photography is permitted.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2A752] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white block">Quiet Meditation:</strong>
                  Please silence mobile devices in the assembly sabha and prayer corridors.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
