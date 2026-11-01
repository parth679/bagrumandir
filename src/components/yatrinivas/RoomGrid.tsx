import React, { useState } from 'react';
import { YATRI_ROOMS_INFO, YATRI_NIVAS_STATUS, YatriRoomInfo } from '../../config/yatriNivasConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { SpotlightCard } from '../common/SpotlightCard';
import { RoomDetailModal } from './RoomDetailModal';
import { Check, Phone, ShieldCheck, Images, Users, Building2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';

export const RoomGrid: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<YatriRoomInfo | null>(null);
  const { language } = useApp();
  const t = useT();

  return (
    <section
      id="yatrinivas"
      className="py-16 sm:py-24 px-4 border-t border-b transition-colors text-left"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
        color: 'var(--text-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-2">
              <Building2 className="w-4 h-4" />
              <span>{t.yatriNivas.sectionLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
              {t.yatriNivas.heading}
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {t.yatriNivas.description}
            </p>
          </div>

          {/* Informational Status Card */}
          <div
            className="p-4 rounded-2xl border shadow-xl max-w-sm flex items-start gap-3 transition-colors shrink-0"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-gold)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                <span>{t.yatriNivas.statusLabel}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[var(--text-muted)] text-[11px] mt-0.5 leading-normal">
                {t.yatriNivas.statusSubtext}
              </p>
              <a
                href={`tel:${YATRI_NIVAS_STATUS.inquiryPhone}`}
                className="inline-flex items-center gap-1.5 text-[#D97706] font-semibold hover:underline mt-2 text-xs"
              >
                <Phone className="w-3 h-3" />
                <span>{t.common.callDesk}: {YATRI_NIVAS_STATUS.inquiryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Room Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {YATRI_ROOMS_INFO.map((room) => {
            const roomTitle =
              language === 'HI'
                ? room.devanagariTitle
                : language === 'GU'
                ? room.gujaratiTitle
                : room.title;

            const roomRateDisplay =
              room.id === 'standard-room'
                ? t.yatriNivas.rate1500
                : t.yatriNivas.rate2500;

            const capacityDisplay =
              room.id === 'standard-room'
                ? `${t.yatriNivas.capacity23} • ${t.yatriNivas.beds23}`
                : `${t.yatriNivas.capacity56} • ${t.yatriNivas.beds56}`;

            const roomDescription =
              room.id === 'standard-room'
                ? t.yatriNivas.standardDesc
                : t.yatriNivas.largerDesc;

            return (
              <SpotlightCard key={room.id} className="text-left">
                <div>
                  {/* Real Photography with Zero Distortion & Aspect-Ratio Preservation */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedRoom(room)}
                  >
                    <img
                      src={room.primaryImage}
                      alt={roomTitle}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                        {roomTitle}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#D97706]/30 backdrop-blur-md text-[11px] font-medium text-amber-200 border border-[#D97706]/40">
                        {t.yatriNivas.actualPhoto}
                      </span>
                    </div>

                    {/* Photo Count Pill */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/20 flex items-center gap-1">
                      <Images className="w-3.5 h-3.5 text-[#E2A752]" />
                      <span>{room.detailImages.length} Photos</span>
                    </div>

                    {/* Sleeping Configuration Tag */}
                    <div className="absolute bottom-3 left-4 text-xs text-white font-medium flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#E2A752]" />
                      <span>{capacityDisplay}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-baseline justify-between mb-3 gap-2">
                      <h3 className="text-2xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
                        {roomTitle}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-[var(--text-subtle)] block uppercase tracking-wider">
                          {t.yatriNivas.maintenance}
                        </span>
                        <span className="text-sm font-bold text-[#D97706]">
                          {roomRateDisplay}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                      {roomDescription}
                    </p>

                    {/* Verified Amenities Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs text-[var(--text-primary)] border-t border-b border-[var(--border-subtle)] py-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{t.yatriNivas.ac}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{t.yatriNivas.attachedBathroom}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{t.yatriNivas.geyser}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{t.yatriNivas.openKitchen}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[var(--text-subtle)] italic mb-4">
                      {room.id === 'standard-room' ? t.yatriNivas.floorNote1 : t.yatriNivas.floorNote2}
                    </div>
                  </div>
                </div>

                {/* Action Buttons: View Details & Call Desk */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full sm:flex-1 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-primary)] font-medium text-xs tracking-wide border border-[var(--border-subtle)] flex items-center justify-center gap-2 transition-all"
                  >
                    <Images className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{t.common.viewPhotos}</span>
                  </button>

                  <a
                    href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
                    className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-[#B85D36] to-[#D97706] hover:brightness-110 text-white font-semibold text-xs tracking-wide shadow-md shadow-[#B85D36]/25 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.common.inquireAtDesk}</span>
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Ethical Transparency Note */}
        <div
          className="p-5 rounded-2xl border text-center max-w-3xl mx-auto text-xs text-[var(--text-muted)] transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <p>{t.yatriNivas.transparencyNote}</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};
