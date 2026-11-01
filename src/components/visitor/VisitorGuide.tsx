import React from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { MapPin, Phone, Mail, Navigation, Car, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

export const VisitorGuide: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  return (
    <section
      id="visitor"
      className="py-16 sm:py-24 px-4 max-w-7xl mx-auto text-left transition-colors"
      style={{ color: 'var(--text-primary)' }}
    >
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-2">
          <MapPin className="w-4 h-4" />
          <span>{t.visit.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
          {t.visit.heading}
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 leading-relaxed">
          {t.visit.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Coordinates (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Address Card */}
          <div
            className="p-6 sm:p-8 rounded-3xl border shadow-xl space-y-4 transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-gold)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B85D36]/15 border border-[#D97706]/35 flex items-center justify-center text-[#D97706] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                  {t.visit.addressHeading}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  {SITE_CONFIG.address.fullAddress}
                </p>
                <div className="text-xs text-[#D97706] mt-1 font-medium">
                  {t.visit.landmark} {SITE_CONFIG.address.landmark}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-4 items-center justify-between">
              <a
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white text-xs font-semibold shadow-md hover:brightness-110 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.common.openGoogleMaps}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.helplinePhone}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] hover:text-[#D97706] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>{SITE_CONFIG.helplinePhone}</span>
              </a>
            </div>
          </div>

          {/* Transportation & Transit Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="p-5 rounded-2xl border transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-wider mb-2">
                <Car className="w-4 h-4" />
                <span>{t.visit.byRoad}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.visit.byRoadDesc}
              </p>
            </div>

            <div
              className="p-5 rounded-2xl border transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-wider mb-2">
                <Navigation className="w-4 h-4" />
                <span>{t.visit.byTrain}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.visit.byTrainDesc}
              </p>
            </div>
          </div>

          {/* Contact Direct Strip */}
          <div
            className="p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Mail className="w-4 h-4 text-[#D97706]" />
              <span>{t.visit.generalInquiries} {SITE_CONFIG.email}</span>
            </div>
            <a
              href={SITE_CONFIG.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D97706] font-semibold hover:underline flex items-center gap-1"
            >
              <span>{t.common.connectWhatsApp}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Etiquette & Guidelines (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className="p-6 sm:p-8 rounded-3xl border shadow-xl space-y-4 transition-colors"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#D97706]">
              <ShieldCheck className="w-5 h-5" />
              <span>{t.visit.etiquetteLabel}</span>
            </div>

            <h3 className="text-xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
              {t.visit.etiquetteHeading}
            </h3>

            <div className="space-y-3.5 text-xs text-[var(--text-muted)] leading-relaxed pt-2">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[var(--text-primary)] block">{t.visit.attire}</strong>
                  {t.visit.attireDesc}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[var(--text-primary)] block">{t.visit.photography}</strong>
                  {t.visit.photographyDesc}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[var(--text-primary)] block">{t.visit.silence}</strong>
                  {t.visit.silenceDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
