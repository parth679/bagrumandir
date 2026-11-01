import React from 'react';
import { GENERAL_FACILITIES, VISITOR_GUIDELINES } from '../../config/yatriNivasConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { ShieldCheck, CheckCircle2, Car, Flame, Building2, SunMedium } from 'lucide-react';

export const FacilitiesOverview: React.FC = () => {
  const facilityIcons = [Flame, Car, Building2, SunMedium, ShieldCheck];

  return (
    <section className="py-20 px-4 bg-[#12100E] max-w-7xl mx-auto text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Atrium Architecture & Campus Grounds Photo Duo */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-[#1A1615]">
              <img
                src="/assets/images/yatrinivas/atrium_architecture.jpg"
                alt="4-Storey Central Atrium"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
              <span className="font-semibold text-white block mb-0.5">Central Atrium</span>
              Four-storey interior courtyard providing natural skylight and air circulation.
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
              <span className="font-semibold text-white block mb-0.5">Reception Desk</span>
              Ground-floor check-in office with physical registration ledger and lounge.
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-[#1A1615]">
              <img
                src="/assets/images/yatrinivas/reception_lobby.jpg"
                alt="Yatri Nivas Front Desk Reception"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Facilities List & Guidelines */}
        <div className="space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2A752] mb-2">
              Campus Amenities & Care
            </div>
            <h3 className="text-2xl sm:text-4xl font-['Cinzel',serif] font-bold text-white tracking-tight">
              Hospitality for Sacred Pilgrims
            </h3>
            <p className="text-white/70 text-sm mt-2 leading-relaxed">
              Every facility has been designed to support peace of mind and bodily cleanliness before morning darshan and prayer.
            </p>
          </div>

          {/* Facilities Cards */}
          <div className="space-y-3.5">
            {GENERAL_FACILITIES.map((facility, idx) => {
              const Icon = facilityIcons[idx % facilityIcons.length];
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#1A1615] border border-white/10 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-[#D97706]/15 text-[#E2A752] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{facility.title}</h4>
                    <p className="text-xs text-white/65 mt-0.5 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visitor Guidelines Notice */}
          <div className="p-5 rounded-2xl bg-black/40 border border-[#D97706]/25 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E2A752] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Campus Etiquette & Check-in Rules</span>
            </div>
            <ul className="space-y-2 text-xs text-white/75">
              {VISITOR_GUIDELINES.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
