import React, { useState } from 'react';
import { DARSHAN_PHOTOS, SCRIPTURE_EXCERPTS, TEMPLE_INFO } from '../data/templeData';
import { DarshanPhoto } from '../types';
import { 
  Camera, 
  History, 
  Video, 
  BookOpen, 
  Maximize2, 
  X, 
  Play, 
  Share2, 
  Calendar, 
  Sparkles,
  ChevronRight,
  Quote
} from 'lucide-react';

export const DailyDarshanGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'history' | 'video' | 'scriptures'>('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<DarshanPhoto | null>(null);
  const [photoCategory, setPhotoCategory] = useState<string>('all');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const filteredPhotos = photoCategory === 'all' 
    ? DARSHAN_PHOTOS 
    : DARSHAN_PHOTOS.filter(p => p.category === photoCategory);

  return (
    <section id="darshan" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 shadow-md shadow-[#FF9933]/20">
          ★ Sacred Visual Journey
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#006D77] dark:text-[#E6C887]">
          Daily Darshan, History & Media
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300">
          Behold the divine shringar of the day, explore our 200-year heritage, watch recorded kirtans, and read sacred scripture excerpts.
        </p>
      </div>

      {/* Main Tab Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-stone-100 dark:bg-[#00383D] p-2 rounded-full max-w-2xl mx-auto border border-[#006D77]/10">
        <button
          onClick={() => setActiveTab('photos')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'photos'
              ? 'bg-[#006D77] text-white shadow-md'
              : 'text-[#006D77] dark:text-stone-200 hover:text-black dark:hover:text-white'
          }`}
        >
          <Camera className="w-4 h-4 text-[#FF9933]" />
          <span>Daily Darshan</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'history'
              ? 'bg-[#006D77] text-white shadow-md'
              : 'text-[#006D77] dark:text-stone-200 hover:text-black dark:hover:text-white'
          }`}
        >
          <History className="w-4 h-4 text-[#FF9933]" />
          <span>Temple History</span>
        </button>

        <button
          onClick={() => setActiveTab('video')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'video'
              ? 'bg-[#006D77] text-white shadow-md'
              : 'text-[#006D77] dark:text-stone-200 hover:text-black dark:hover:text-white'
          }`}
        >
          <Video className="w-4 h-4 text-[#FF9933]" />
          <span>Video Darshan</span>
        </button>

        <button
          onClick={() => setActiveTab('scriptures')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'scriptures'
              ? 'bg-[#006D77] text-white shadow-md'
              : 'text-[#006D77] dark:text-stone-200 hover:text-black dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4 text-[#FF9933]" />
          <span>Vachanamrut</span>
        </button>
      </div>

      {/* TAB 1: DAILY DARSHAN PHOTOS */}
      {activeTab === 'photos' && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'main_deity', label: 'Main Deities' },
              { id: 'shringar', label: 'Shringar & Aarti' },
              { id: 'architecture', label: 'Wooden Architecture' },
              { id: 'utsav', label: 'Festival Offerings' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setPhotoCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full font-semibold transition-colors ${
                  photoCategory === cat.id
                    ? 'bg-[#FF9933] text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-[#00383D] text-[#006D77] dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white dark:bg-[#00383D] rounded-3xl overflow-hidden border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006D77] text-white text-[10px] font-bold uppercase tracking-wider">
                    {photo.date}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#006D77] dark:text-[#FDFBF7] group-hover:text-[#FF9933] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-600 dark:text-stone-300 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#006D77]/10 dark:border-[#006D77]/30 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                    <span>📍 {photo.location}</span>
                    <span className="text-[#FF9933] font-bold">Tap to view</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TEMPLE HISTORY */}
      {activeTab === 'history' && (
        <div className="bg-white dark:bg-[#00383D] p-6 sm:p-10 rounded-3xl border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-xl max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-[#006D77]/10 dark:border-[#006D77]/30">
            <div className="p-4 rounded-2xl bg-[#006D77] text-white shadow-lg">
              <Sparkles className="w-8 h-8 text-[#FF9933]" />
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#006D77] dark:text-[#E6C887]">
                Glorious Heritage of Kalupur Shrine
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                Inaugurated in 1822 CE by Bhagwan Swaminarayan himself as the first temple of the Swaminarayan Sampraday.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
            <p>
              The <strong>Shree Swaminarayan Mandir, Kalupur</strong> is a testament to sublime Gujarati craftsmanship, featuring Burma teakwood carvings, gold-leaf domes, and hand-painted ceiling murals. As a prominent branch and pilgrimage center, this temple has welcomed millions of spiritual seekers over two centuries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800 border border-[#006D77]/10">
                <div className="text-2xl font-bold font-heading text-[#006D77] dark:text-[#FF9933]">1822 CE</div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 mt-1">Temple Consecration</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800 border border-[#006D77]/10">
                <div className="text-2xl font-bold font-heading text-[#006D77] dark:text-teal-400">200+ Yrs</div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 mt-1">Continuous Tradition</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800 border border-[#006D77]/10">
                <div className="text-2xl font-bold font-heading text-[#FF9933]">Teakwood</div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 mt-1">Ancient Hand Carvings</div>
              </div>
            </div>

            <h4 className="font-heading text-lg font-bold text-[#006D77] dark:text-[#E6C887] pt-2">
              Attached Yatri Nivas & Hospitality Tradition
            </h4>
            <p>
              Under the guidance of the temple trust, the attached <strong>Yatri Nivas</strong> was constructed to ensure outstation pilgrims receive clean, peaceful, and affordable lodging with 24/7 security, pure sattvic food, and proximity to all 5 daily Aartis.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: VIDEO DARSHAN & KIRTANS */}
      {activeTab === 'video' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              id: 'v1',
              title: 'Live Morning Aarti & Mangla Darshan',
              duration: '18:40',
              thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
              desc: 'Relive today’s morning Mangla Aarti, traditional kirtan chants, and sacred lamps.'
            },
            {
              id: 'v2',
              title: 'Annakut Mahotsav & Katha Discourses',
              duration: '42:15',
              thumbnail: 'https://images.unsplash.com/photo-1620021617242-b301292f9824?auto=format&fit=crop&w=800&q=80',
              desc: 'Spiritual katha discourse explaining the timeless principles of devotion and duty.'
            }
          ].map((vid) => (
            <div
              key={vid.id}
              className="bg-white dark:bg-[#00383D] rounded-3xl overflow-hidden border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-video group cursor-pointer bg-black">
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#FF9933] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-xs font-mono">
                  {vid.duration}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-base text-[#006D77] dark:text-[#FDFBF7]">
                  {vid.title}
                </h3>
                <p className="mt-1 text-xs text-stone-600 dark:text-stone-300">
                  {vid.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-[#006D77]/10 dark:border-[#006D77]/30 flex justify-between items-center text-xs">
                  <span className="text-[#006D77] font-semibold">HD Quality Stream</span>
                  <button 
                    onClick={() => alert(`Streaming video: ${vid.title}`)} 
                    className="text-[#FF9933] font-bold hover:underline"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: VACHANAMRUT & SCRIPTURE READER */}
      {activeTab === 'scriptures' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SCRIPTURE_EXCERPTS.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#00383D] p-6 rounded-3xl border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-md flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-[#FF9933]/20 absolute top-4 right-4" />
              
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#006D77]/10 text-[#006D77] dark:bg-white/10 dark:text-[#FF9933] text-[10px] font-bold uppercase tracking-wider mb-3">
                  {item.book} • {item.chapter}
                </span>

                <h3 className="font-bold text-base text-[#006D77] dark:text-[#FDFBF7] mb-3">
                  {item.title}
                </h3>

                <blockquote className="text-xs sm:text-sm italic font-serif text-stone-700 dark:text-stone-300 leading-relaxed border-l-2 border-[#FF9933] pl-3 py-1">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="mt-4 pt-3 border-t border-[#006D77]/10 dark:border-[#006D77]/30 text-xs text-stone-500 dark:text-stone-400">
                <strong className="text-stone-700 dark:text-stone-300">Meaning:</strong> {item.meaning}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Photo Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#12141D] rounded-2xl overflow-hidden border border-[#C5A059]/40 text-white shadow-2xl flex flex-col max-h-[90vh]">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#80000A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#12141D] border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#E65100] tracking-wider">
                  {selectedPhoto.date} • {selectedPhoto.location}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#E6C887]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  {selectedPhoto.caption}
                </p>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Darshan link copied to clipboard!");
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Share2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Share Darshan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
