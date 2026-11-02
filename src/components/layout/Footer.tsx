import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { MAIN_NAV_ITEMS } from '../../config/navigationConfig';
import { OFFICIAL_AARTI_SCHEDULE } from '../../utils/templeTime';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

export const Footer: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const { language } = useApp();
  const t = useT();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const locationSubtitle =
    language === 'HI'
      ? 'जयपुर (बगरू) • विश्रांति गृह'
      : language === 'GU'
      ? 'જયપુર (બગરૂ) • વિશ્રાંતિ ગૃહ'
      : 'Jaipur (Bagru) • Yatri Nivas';

  return (
    <footer
      className="relative z-10 border-t pt-16 pb-24 lg:pb-12 px-4 text-left transition-colors"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
        color: 'var(--text-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Affiliation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B85D36]/25 border border-[#D97706]/40 flex items-center justify-center overflow-hidden shadow-inner p-1 shrink-0">
                <img
                  src="/assets/logo/tilak-logo.svg"
                  alt="Shree Swaminarayan Mandir Tilak"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-['Cinzel',serif] text-base font-bold tracking-wide text-[var(--text-primary)]">
                  {SITE_CONFIG.name}
                </h3>
                <div className="text-xs text-[#D97706] font-['Noto_Serif_Devanagari',serif] font-semibold">
                  {locationSubtitle}
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {t.footer.description}{' '}
              <span className="font-devanagari tracking-normal font-medium text-[var(--text-primary)]">
                {SITE_CONFIG.affiliationDevanagari}
              </span>
              .
            </p>

            <div className="pt-2 text-[11px] text-[#D97706] font-medium">
              {SITE_CONFIG.affiliationEnglish}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-4">
              {t.footer.exploreMandir}
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              {MAIN_NAV_ITEMS.map((item) => {
                const label =
                  language === 'HI'
                    ? item.devanagariLabel
                    : language === 'GU'
                    ? item.gujaratiLabel
                    : item.label;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="hover:text-[#D97706] transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Daily Aarti Timetable */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-4">
              {t.footer.dailyAarti}
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              {OFFICIAL_AARTI_SCHEDULE.map((aarti) => {
                const aartiName =
                  language === 'HI'
                    ? aarti.devanagariName
                    : language === 'GU'
                    ? aarti.gujaratiName
                    : aarti.name;

                return (
                  <li key={aarti.id} className="flex justify-between border-b border-[var(--border-subtle)] pb-1">
                    <span>{aartiName}</span>
                    <span
                      className={`font-mono text-xs ${
                        aarti.confirmed ? 'text-[#D97706] font-bold' : 'text-[var(--text-subtle)]'
                      }`}
                    >
                      {aarti.confirmed && aarti.timeString ? aarti.timeString : t.common.timingTBC}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-4">
              {t.footer.contactInquiries}
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${SITE_CONFIG.helplinePhone}`} className="hover:underline">
                  {t.footer.helpline} {SITE_CONFIG.helplinePhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`} className="hover:underline text-[#D97706]">
                  {t.footer.stayDesk} {SITE_CONFIG.yatriNivasInquiryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-subtle)]">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.complexName}, Jaipur (Bagru). {t.footer.allRights}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[#D97706] hover:text-[var(--text-primary)] transition-colors"
          >
            <span>{t.nav.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
