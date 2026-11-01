import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { YatriRoomInfo } from '../../config/yatriNivasConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { X, Check, Phone, ShieldCheck, BedDouble, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';
import { motionConfig } from '../../utils/motionConfig';

interface RoomDetailModalProps {
  room: YatriRoomInfo | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useApp();
  const t = useT();

  if (!room) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.detailImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.detailImages.length) % room.detailImages.length);
  };

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={motionConfig.modalContent.initial}
          animate={motionConfig.modalContent.animate}
          exit={motionConfig.modalContent.exit}
          transition={motionConfig.modalContent.transition}
          className="relative max-w-3xl w-full rounded-3xl overflow-hidden border shadow-2xl my-8 transition-colors text-left"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Header */}
          <div
            className="p-6 border-b flex items-start justify-between"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706]">
                <BedDouble className="w-4 h-4" />
                <span>{roomTitle}</span>
              </div>
              <h3 className="text-2xl font-['Cinzel',serif] font-bold text-[var(--text-primary)] mt-1">
                {roomTitle}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{room.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Photographic Lightbox Carousel */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/90 overflow-hidden group">
            <img
              src={room.detailImages[currentImageIndex]}
              alt={`${room.title} view ${currentImageIndex + 1}`}
              className="w-full h-full object-contain object-center"
            />

            {room.detailImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
                  {room.detailImages.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImageIndex ? 'bg-[#D97706] w-4' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
              {t.yatriNivas.actualPhoto} ({currentImageIndex + 1}/{room.detailImages.length})
            </div>
          </div>

          {/* Specifications & Amenities */}
          <div className="p-6 sm:p-8 space-y-6">
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div>
                <span className="text-xs text-[var(--text-subtle)] block">
                  {t.common.facilities}
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {capacityDisplay}
                </span>
              </div>
              <div className="sm:text-right">
                <span className="text-xs text-[var(--text-subtle)] block uppercase tracking-wider">
                  {t.common.roomRate}
                </span>
                <span className="text-base font-bold text-[#D97706]">
                  {roomRateDisplay}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#D97706] uppercase tracking-wider mb-2">
                {t.common.learnMore}
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {roomDescription}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#D97706] uppercase tracking-wider mb-3">
                {t.yatriNivas.facilitiesHeading}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-primary)]">
                {room.verifiedAmenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Direct Phone Banner */}
            <div
              className="p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
              style={{
                backgroundColor: 'rgba(184, 93, 54, 0.12)',
                borderColor: 'var(--border-gold)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0" />
                <span className="text-[var(--text-primary)]">
                  {t.yatriNivas.statusSubtext}
                </span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-semibold flex items-center gap-1.5 hover:brightness-110 shadow-md transition-all shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.common.callDesk}: {SITE_CONFIG.yatriNivasInquiryPhone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
