import React, { useState, useRef, useEffect } from 'react';
import { AUDIO_TRACKS } from '../../data/templeData';
import { Play, Pause, Music, SkipForward, X, Volume2 } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AudioChanterBarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioChanterBar: React.FC<AudioChanterBarProps> = ({
  isPlaying,
  onTogglePlay,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrack = AUDIO_TRACKS[currentTrackIndex] || AUDIO_TRACKS[0];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_TRACKS.length);
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-20 right-4 z-40 p-3 rounded-full bg-[#1A1615] text-white shadow-2xl hover:scale-105 transition-all border border-[#D97706]/40 flex items-center gap-2 text-xs font-semibold"
        title="Open Devotional Dhun Player"
      >
        <Music className="w-4 h-4 text-[#E2A752] animate-bounce" />
        <span className="hidden sm:inline">Sacred Dhun</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:right-6 z-40 max-w-sm w-full bg-[#1A1615]/95 backdrop-blur-xl p-3.5 rounded-2xl border border-[#D97706]/35 text-white shadow-2xl transition-all">
      <audio
        ref={audioRef}
        src={activeTrack.audioUrl}
        loop
        onEnded={handleNextTrack}
      />

      <div className="flex items-center justify-between gap-3 text-left">
        {/* Track Details */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#B85D36]/25 flex items-center justify-center shrink-0 border border-[#D97706]/40">
            <Music className={cn("w-5 h-5 text-[#E2A752]", isPlaying ? "animate-spin" : "")} style={{ animationDuration: '8s' }} />
          </div>

          <div className="overflow-hidden">
            <div className="text-xs font-bold text-[#E2A752] truncate">
              {activeTrack.title}
            </div>
            <div className="text-[10px] text-stone-300 truncate">
              {activeTrack.artist} ({activeTrack.duration})
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onTogglePlay}
            className="p-2.5 rounded-full bg-gradient-to-r from-[#B85D36] to-[#D97706] text-white hover:scale-105 transition-transform shadow-md"
            title={isPlaying ? 'Pause Audio' : 'Play Audio'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
          </button>

          <button
            onClick={handleNextTrack}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 transition-colors"
            title="Next Track"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMinimized(true)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white transition-colors"
            title="Minimize Player"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
