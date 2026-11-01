import React from 'react';
import { SPIRITUAL_EXPERIENCES, NEARBY_ATTRACTIONS } from '../data/templeData';
import { Compass, Clock, CheckCircle2, MapPin, ArrowRight, Utensils, BookOpen, Music } from 'lucide-react';

export const SpiritualExperiences: React.FC = () => {
  return (
    <section id="experiences" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-md shadow-[#FF9933]/20">
          ★ Pilgrim Activities & Things To Do
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#006D77] dark:text-[#E6C887]">
          Spiritual Experiences At The Shrine
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300">
          Enrich your stay with daily heritage walks, sattvic mahaprasad dining, evening kirtan sabhas, and nearby heritage explorations.
        </p>
      </div>

      {/* Grid of 4 Core Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SPIRITUAL_EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="group bg-white dark:bg-[#00383D] rounded-3xl overflow-hidden border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
          >
            <div className="sm:w-2/5 relative aspect-video sm:aspect-auto overflow-hidden bg-stone-900">
              <img
                src={exp.imageUrl}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 to-transparent" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006D77] text-white text-[10px] font-bold uppercase tracking-wider">
                {exp.category}
              </span>
            </div>

            <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#FF9933] font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{exp.time} • {exp.duration}</span>
                </div>

                <h3 className="font-bold text-lg text-[#006D77] dark:text-[#FDFBF7] group-hover:text-[#FF9933] transition-colors">
                  {exp.title}
                </h3>

                <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-3 border-t border-[#006D77]/10 dark:border-[#006D77]/30 text-[11px] text-stone-600 dark:text-stone-300">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006D77] dark:text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NEARBY SACRED ATTRACTIONS / SIGHTSEEING */}
      <div className="bg-white dark:bg-[#00383D] p-6 sm:p-10 rounded-3xl border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 border-b border-[#006D77]/10 dark:border-[#006D77]/30 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9933] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4" />
              <span>Explore Kalupur Heritage Zone</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#006D77] dark:text-[#E6C887]">
              Nearby Places To Visit During Your Stay
            </h3>
          </div>

          <span className="text-xs text-stone-500 font-medium">
            Walking distance & quick cab routes from Mandir Gate
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {NEARBY_ATTRACTIONS.map((att, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#FDFBF7] dark:bg-stone-800/80 border border-[#006D77]/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#006D77] dark:text-teal-300 uppercase tracking-wider block mb-1">
                  📍 {att.distance}
                </span>
                <h4 className="font-bold text-sm text-[#006D77] dark:text-[#FDFBF7]">
                  {att.name}
                </h4>
                <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {att.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
