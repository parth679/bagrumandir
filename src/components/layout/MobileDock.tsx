import React from 'react';
import { Home, Sparkles, BedDouble, Clock, MapPin } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MobileDockProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const MobileDock: React.FC<MobileDockProps> = ({
  activeSection,
  onNavigateSection
}) => {
  const dockButtons = [
    { id: 'hero', label: 'Mandir', icon: Home },
    { id: 'darshan', label: 'Darshan', icon: Sparkles },
    { id: 'yatrinivas', label: 'Stay', icon: BedDouble, hasBadge: true },
    { id: 'timings', label: 'Aarti', icon: Clock },
    { id: 'visitor', label: 'Guide', icon: MapPin },
  ];

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 lg:hidden pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-1 px-3 py-2 rounded-2xl bg-[#1A1615]/95 backdrop-blur-xl border border-[#D97706]/30 shadow-2xl shadow-black/80 max-w-sm w-full">
        {dockButtons.map((btn) => {
          const Icon = btn.icon;
          const isActive = activeSection === btn.id;

          return (
            <button
              key={btn.id}
              onClick={() => onNavigateSection(btn.id)}
              className={cn(
                "relative flex-1 py-1 px-1.5 rounded-xl flex flex-col items-center justify-center transition-all",
                isActive
                  ? "text-white bg-white/10 font-bold"
                  : "text-stone-300 hover:text-white"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-4 h-4 mb-0.5", isActive ? "text-[#E2A752]" : "text-stone-400")} />
                {btn.hasBadge && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <span className="text-[10px] tracking-tight">{btn.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
