import React from 'react';
import { TEMPLE_INFO } from '../data/templeData';
import { Phone, Mail, MapPin, Youtube, Facebook, Instagram, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenSewa: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenSewa,
  onNavigateSection,
}) => {
  return (
    <footer className="bg-[#002D33] text-[#FDFBF7] border-t border-[#006D77]/40 pt-16 pb-24 md:pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#006D77]/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#006D77] border border-[#FF9933] flex items-center justify-center text-white font-bold text-lg shadow-md">
                ੴ
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#FF9933]">
                  {TEMPLE_INFO.name}
                </h3>
                <span className="text-xs text-stone-300 font-medium">
                  {TEMPLE_INFO.branchName}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Inaugurated in 1822 CE. Serving millions of pilgrims with daily golden shringar darshan, pure sattvic mahaprasad, and comfortable Yatri Nivas guest house lodging.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={TEMPLE_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#00383D] hover:bg-[#FF9933] text-stone-300 hover:text-white transition-colors"
                title="YouTube Live Stream"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={TEMPLE_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#00383D] hover:bg-[#FF9933] text-stone-300 hover:text-white transition-colors"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={TEMPLE_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#00383D] hover:bg-[#FF9933] text-stone-300 hover:text-white transition-colors"
                title="Instagram Darshan"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={TEMPLE_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#FF9933] hover:bg-[#e08220] text-white transition-colors flex items-center gap-1.5 text-xs font-bold px-4 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FF9933] uppercase tracking-wider">
              Quick Pilgrim Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigateSection('darshan')} className="hover:text-[#FF9933] transition-colors">
                  Daily Darshan Today
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('timings')} className="hover:text-[#FF9933] transition-colors">
                  Aarti Schedule (5 Times)
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#FF9933] transition-colors text-[#FF9933] font-bold">
                  Yatri Nivas Room Reservation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('experiences')} className="hover:text-[#FF9933] transition-colors">
                  Things To Do & Heritage Walk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('history')} className="hover:text-[#FF9933] transition-colors">
                  200-Year Mandir History
                </button>
              </li>
            </ul>
          </div>

          {/* Stay & Sewa */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FF9933] uppercase tracking-wider">
              Hospitality & Sewa
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#FF9933] transition-colors">
                  AC Family Suites & Cottages
                </button>
              </li>
              <li>
                <button onClick={onOpenSewa} className="hover:text-[#FF9933] transition-colors">
                  Annadan Mahaprasad Sewa
                </button>
              </li>
              <li>
                <button onClick={onOpenSewa} className="hover:text-[#FF9933] transition-colors">
                  Gauseva Offering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('location')} className="hover:text-[#FF9933] transition-colors">
                  Temple Dress Code & Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-[#FF9933] uppercase tracking-wider">
              Contact Branch Desk
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5" />
                <span>{TEMPLE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF9933] shrink-0" />
                <span>{TEMPLE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#006D77] shrink-0" />
                <span>{TEMPLE_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-400 gap-4">
          <div>
            © 2026 {TEMPLE_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-[#FF9933]">
            <ShieldCheck className="w-4 h-4 text-[#FF9933]" />
            <span>Official Swaminarayan Branch Web App</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
