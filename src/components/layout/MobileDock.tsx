import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Landmark, Sparkles, BedDouble, MapPin, Music } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';
import { cn } from '../../utils/cn';

export const MobileDock: React.FC = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { audioPlaying, toggleAudio, showAudioPanel, setShowAudioPanel } = useApp();
  const t = useT();

  const dockButtons = [
    { path: '/', label: t.nav.mandir, icon: Home },
    { path: '/about', label: t.nav.about, icon: Landmark },
    { path: '/darshan', label: t.nav.darshanShort, icon: Sparkles },
    { path: '/yatri-nivas', label: t.nav.stayShort, icon: BedDouble, hasBadge: true },
    { path: '/visit', label: t.nav.guideShort, icon: MapPin },
  ];

  const handleDhunClick = () => {
    if (!audioPlaying) {
      toggleAudio();
      setShowAudioPanel(true);
    } else {
      setShowAudioPanel(!showAudioPanel);
    }
  };

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-3 lg:hidden pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center justify-between gap-0.5 px-2 py-1.5 rounded-2xl backdrop-blur-xl border shadow-2xl max-w-md w-full transition-colors"
        style={{
          backgroundColor: 'var(--bg-glass)',
          borderColor: 'var(--border-gold)',
          boxShadow: 'var(--shadow-card)',
          color: 'var(--text-primary)',
        }}
      >
        {dockButtons.map((btn) => {
          const Icon = btn.icon;
          const isActive = location.pathname === btn.path;

          return (
            <button
              key={btn.path}
              onClick={() => navigate(btn.path)}
              className={cn(
                "relative flex-1 py-1 px-1 rounded-xl flex flex-col items-center justify-center transition-all",
                isActive
                  ? "bg-black/10 dark:bg-white/10 font-bold text-[var(--accent-gold)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "w-4 h-4 mb-0.5",
                    isActive ? "text-[#D97706]" : "text-[var(--text-muted)]"
                  )}
                />
                {btn.hasBadge && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </div>
              <span className="text-[9px] tracking-tight truncate max-w-14">
                {btn.label}
              </span>
            </button>
          );
        })}

        {/* 6th Button: Integrated Sacred Dhun */}
        <button
          onClick={handleDhunClick}
          className={cn(
            "relative flex-1 py-1 px-1 rounded-xl flex flex-col items-center justify-center transition-all",
            audioPlaying
              ? "bg-[#B85D36]/20 font-bold text-[#D97706]"
              : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          )}
          title={audioPlaying ? t.audio.pause : t.audio.play}
        >
          <div className="relative">
            <Music
              className={cn(
                "w-4 h-4 mb-0.5 transition-transform",
                audioPlaying ? "text-[#D97706] animate-pulse" : "text-[var(--text-muted)]"
              )}
            />
            {audioPlaying && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            )}
          </div>
          <span className="text-[9px] tracking-tight text-[#D97706]">
            {t.audio.sacredDhun}
          </span>
        </button>
      </nav>
    </div>
  );
});

MobileDock.displayName = 'MobileDock';
