import React, { useState } from 'react';
import { YATRI_ROOMS_INFO, YATRI_NIVAS_STATUS, YatriRoomInfo } from '../../config/yatriNivasConfig';
import { SITE_CONFIG } from '../../config/siteConfig';
import { SpotlightCard } from '../common/SpotlightCard';
import { RoomDetailModal } from './RoomDetailModal';
import { BedDouble, Check, Phone, ShieldCheck, Images, Users, Sparkles, Building2 } from 'lucide-react';

export const RoomGrid: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<YatriRoomInfo | null>(null);

  return (
    <section id="yatrinivas" className="py-24 px-4 bg-[#14110F] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E2A752] mb-2">
              <Building2 className="w-4 h-4 text-[#E2A752]" />
              <span>विश्रांति गृह • Yatri Nivas Accommodations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Cinzel',serif] font-bold text-white tracking-tight">
              Serene Living for Devotees
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Quiet, pristine rooms located inside the sacred mandir grounds for traveling families, yatra sanghs, and spiritual seekers. Equipped with attached modern washrooms and electric hot water.
            </p>
          </div>

          {/* Informational Status Card (No fake booking forms) */}
          <div className="p-4 rounded-2xl bg-[#1A1615] border border-[#D97706]/30 shadow-xl max-w-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span>{YATRI_NIVAS_STATUS.statusLabel}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-white/60 text-[11px] mt-0.5 leading-normal">
                {YATRI_NIVAS_STATUS.statusSubtext}
              </p>
              <a
                href={`tel:${YATRI_NIVAS_STATUS.inquiryPhone}`}
                className="inline-flex items-center gap-1.5 text-[#E2A752] font-semibold hover:underline mt-2 text-xs"
              >
                <Phone className="w-3 h-3" />
                <span>Call Desk: {YATRI_NIVAS_STATUS.inquiryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Room Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {YATRI_ROOMS_INFO.map((room) => (
            <SpotlightCard key={room.id} className="text-left">
              <div>
                {/* Real Photography with Zero-CLS aspect ratio reservation */}
                <div className="relative aspect-[16/10] overflow-hidden group cursor-pointer" onClick={() => setSelectedRoom(room)}>
                  <img
                    src={room.primaryImage}
                    alt={room.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-transparent to-black/30" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10">
                      {room.devanagariTitle}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#D97706]/20 backdrop-blur-md text-[11px] font-medium text-[#E2A752] border border-[#D97706]/30">
                      Actual Campus Photo
                    </span>
                  </div>

                  {/* Photo Count Pill */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/10 flex items-center gap-1">
                    <Images className="w-3.5 h-3.5 text-[#E2A752]" />
                    <span>{room.detailImages.length} Photos</span>
                  </div>

                  {/* Sleeping Configuration Tag */}
                  <div className="absolute bottom-3 left-4 text-xs text-white/90 font-medium flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#E2A752]" />
                    <span>{room.capacityLabel} • {room.bedConfiguration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-baseline justify-between mb-3 gap-2">
                    <h3 className="text-2xl font-['Cinzel',serif] font-bold text-white">
                      {room.title}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-white/50 block uppercase tracking-wider">Maintenance</span>
                      <span className="text-sm font-semibold text-[#E2A752]">{room.maintenanceContribution}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Verified Amenities Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs text-white/80 border-t border-b border-white/10 py-4 mb-6">
                    {room.verifiedAmenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-white/50 italic mb-4">
                    {room.floorPlanNote}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Details & Call Desk */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-white/8 hover:bg-white/15 text-white font-medium text-xs tracking-wide border border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <Images className="w-3.5 h-3.5 text-[#E2A752]" />
                  <span>View Photos & Amenities</span>
                </button>

                <a
                  href={`tel:${SITE_CONFIG.yatriNivasInquiryPhone}`}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-[#B85D36] to-[#D97706] hover:brightness-110 text-white font-semibold text-xs tracking-wide shadow-md shadow-[#B85D36]/30 flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Inquire at Desk</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="p-5 rounded-2xl bg-[#1A1615] border border-white/10 text-center max-w-3xl mx-auto text-xs text-white/60">
          <p>
            {YATRI_NIVAS_STATUS.note}
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};
