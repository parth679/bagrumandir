import React, { useState } from 'react';
import { YatriRoomInfo } from '../../config/yatriNivasConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { X, Check, Phone, ShieldCheck, BedDouble, ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomDetailModalProps {
  room: YatriRoomInfo | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.detailImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.detailImages.length) % room.detailImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-3xl w-full bg-[#1A1615] rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl text-white my-8">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#14110F]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E2A752]">
              <BedDouble className="w-4 h-4" />
              <span>{room.devanagariTitle}</span>
            </div>
            <h3 className="text-2xl font-['Cinzel',serif] font-bold text-white mt-1">
              {room.title}
            </h3>
            <p className="text-xs text-white/60 mt-0.5">{room.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Photographic Lightbox Carousel */}
        <div className="relative aspect-video w-full bg-black/80 overflow-hidden group">
          <img
            src={room.detailImages[currentImageIndex]}
            alt={`${room.title} view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
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
                      i === currentImageIndex ? 'bg-[#E2A752] w-4' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15">
            Verified Campus Asset ({currentImageIndex + 1}/{room.detailImages.length})
          </div>
        </div>

        {/* Specifications & Amenities */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <span className="text-xs text-white/50 block">Capacity & Sleeping Configuration</span>
              <span className="text-sm font-semibold text-white">{room.capacityLabel} • {room.bedConfiguration}</span>
            </div>
            <div className="sm:text-right">
              <span className="text-xs text-white/50 block">Nominal Maintenance Contribution</span>
              <span className="text-base font-bold text-[#E2A752]">{room.maintenanceContribution}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#E2A752] uppercase tracking-wider mb-2">
              Description & Comfort
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              {room.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#E2A752] uppercase tracking-wider mb-3">
              Verified Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
              {room.verifiedAmenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Direct Phone Banner */}
          <div className="p-4 rounded-2xl bg-[#B85D36]/15 border border-[#B85D36]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#E2A752] shrink-0" />
              <span>For availability inquiries, contact the Mandir Reception Desk directly.</span>
            </div>
            <a
              href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white font-semibold flex items-center gap-1.5 hover:brightness-110 shadow-md transition-all shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Reception: {SITE_CONFIG.yatriNivasInquiryPhone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
