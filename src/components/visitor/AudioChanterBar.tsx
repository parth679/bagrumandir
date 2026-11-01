import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AUDIO_TRACKS } from '../../data/templeData';
import { Play, Pause, Music, SkipForward, X, Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n/useTranslation';
import { cn } from '../../utils/cn';

export const AudioChanterBar: React.FC = () => {
  const { audioPlaying, toggleAudio, showAudioPanel, setShowAudioPanel } = useApp();
  const t = useT();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrack = AUDIO_TRACKS[currentTrackIndex] || AUDIO_TRACKS[0];

  useEffect(() => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioPlaying, currentTrackIndex]);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length);
  };

  return (
    <>
      {/* Persistent Audio Engine */}
      <audio
        ref={audioRef}
        src={activeTrack.audioUrl}
        loop
        onEnded={handleNextTrack}
      />

      {/* Elegant Controls Panel - Displayed above dock or bottom-right */}
      <AnimatePresence>
        {showAudioPanel && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-88 rounded-2xl backdrop-blur-2xl p-3.5 shadow-2xl border transition-colors"
            style={{
              backgroundColor: 'var(--bg-glass)',
              borderColor: 'var(--border-gold)',
              boxShadow: 'var(--shadow-card)',
              color: 'var(--text-primary)',
            }}
          >
            <div className="flex items-center justify-between gap-3 text-left">
              {/* Track Details */}
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: 'rgba(184, 93, 54, 0.15)',
                    borderColor: 'var(--border-gold)',
                  }}
                >
                  <Music
                    className={cn("w-5 h-5", audioPlaying ? "animate-spin text-[#D97706]" : "text-[var(--text-secondary)]")}
                    style={{ animationDuration: '8s' }}
                  />
                </div>

                <div className="overflow-hidden">
                  <div className="text-xs font-bold truncate text-[var(--text-secondary)]">
                    {activeTrack.title}
                  </div>
                  <div className="text-[10px] text-[var(--text-subtle)] truncate">
                    {activeTrack.artist} ({activeTrack.duration})
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={toggleAudio}
                  className="p-2.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white hover:scale-105 transition-transform shadow-md"
                  title={audioPlaying ? t.audio.pause : t.audio.play}
                  aria-label={audioPlaying ? t.audio.pause : t.audio.play}
                >
                  {audioPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                </button>

                <button
                  onClick={handleNextTrack}
                  className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-muted)] transition-colors"
                  title={t.audio.next}
                  aria-label={t.audio.next}
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setShowAudioPanel(false)}
                  className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors"
                  title={t.audio.minimize}
                  aria-label={t.audio.minimize}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
