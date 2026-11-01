import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { MAIN_NAV_ITEMS } from '../../config/navigationConfig';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-[#0C0B0A] text-white border-t border-white/10 pt-16 pb-12 px-4 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Identity & Affiliation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B85D36]/25 border border-[#D97706]/40 flex items-center justify-center text-[#E2A752] text-lg font-bold shadow-inner">
                ॐ
              </div>
              <div>
                <h3 className="font-['Cinzel',serif] text-base font-bold text-white tracking-wide">
                  {SITE_CONFIG.name}
                </h3>
                <div className="text-xs text-[#E2A752] font-['Noto_Serif_Devanagari',serif]">
                  बगरू धाम • विश्रांति गृह
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              A sacred seat of spiritual peace, devotion, and hospitality under the divine lineage of {SITE_CONFIG.affiliationDevanagari}.
            </p>

            <div className="pt-2 text-[11px] text-[#E2A752] font-medium">
              {SITE_CONFIG.affiliationEnglish}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2A752] mb-4">
              Explore Mandir
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigateSection(item.id)}
                    className="hover:text-[#E2A752] transition-colors"
                  >
                    {item.label} ({item.devanagariLabel})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Daily Aarti Timetable */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2A752] mb-4">
              Daily Aarti Timings
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Mangla Aarti</span>
                <span className="font-mono text-[#E2A752]">05:30 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Shangar Aarti</span>
                <span className="font-mono text-[#E2A752]">08:05 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Rajbhog Aarti</span>
                <span className="font-mono text-[#E2A752]">10:30 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sandhya Aarti</span>
                <span className="font-mono text-[#E2A752]">06:45 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Shayan Aarti</span>
                <span className="font-mono text-[#E2A752]">08:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2A752] mb-4">
              Contact & Inquiries
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E2A752] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E2A752] shrink-0" />
                <a href={`tel:${SITE_CONFIG.helplinePhone}`} className="hover:underline">
                  Helpline: {SITE_CONFIG.helplinePhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E2A752] shrink-0" />
                <a href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`} className="hover:underline text-[#E2A752]">
                  Stay Desk: {SITE_CONFIG.yatriNivasInquiryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E2A752] shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.complexName}, Bagru. All Rights Reserved.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[#E2A752] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
