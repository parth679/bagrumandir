import React from 'react';
import { Camera, Clock, BedDouble, Compass, ArrowUpRight } from 'lucide-react';

interface QuickAccessBarProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickAccessBar: React.FC<QuickAccessBarProps> = ({
  onOpenBooking,
  onNavigateSection,
}) => {
  const cards = [
    {
      id: 'darshan',
      title: 'Daily Darshan Today',
      subtitle: 'View morning & evening deity shringar',
      icon: Camera,
      badge: 'Live Daily',
      badgeBg: 'bg-[#FF9933] text-white',
      onClick: () => onNavigateSection('darshan'),
    },
    {
      id: 'timings',
      title: 'Aarti & Temple Timings',
      subtitle: '5 Daily Aartis schedule & guidelines',
      icon: Clock,
      badge: '05:00 AM - 08:30 PM',
      badgeBg: 'bg-[#006D77] text-white',
      onClick: () => onNavigateSection('timings'),
    },
    {
      id: 'stay',
      title: 'Yatri Nivas Room Booking',
      subtitle: 'AC & Non-AC guest rooms with hot water',
      icon: BedDouble,
      badge: 'Available Now',
      badgeBg: 'bg-[#FF9933] text-white',
      onClick: onOpenBooking,
    },
    {
      id: 'experiences',
      title: 'Things To Do & Experiences',
      subtitle: 'Heritage walk, Mahaprasad & Kirtan',
      icon: Compass,
      badge: 'Pilgrim Activities',
      badgeBg: 'bg-[#006D77] text-white',
      onClick: () => onNavigateSection('experiences'),
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => {
          const IconComp = card.icon;
          return (
            <div
              key={card.id}
              onClick={card.onClick}
              className="group bg-white dark:bg-[#00383D] p-6 rounded-3xl shadow-lg hover:shadow-2xl border border-[#006D77]/10 dark:border-[#006D77]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#006D77]/10 text-[#006D77] dark:bg-white/10 dark:text-[#FF9933] flex items-center justify-center group-hover:bg-[#006D77] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${card.badgeBg}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#006D77] dark:text-[#FDFBF7] group-hover:text-[#FF9933] transition-colors">
                  {card.title}
                </h3>

                <p className="mt-1 text-xs text-stone-500 dark:text-stone-300 font-normal leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#006D77]/10 dark:border-[#006D77]/30 flex items-center justify-between text-xs font-semibold text-[#006D77] dark:text-[#FF9933] group-hover:text-[#FF9933]">
                <span>Explore Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
