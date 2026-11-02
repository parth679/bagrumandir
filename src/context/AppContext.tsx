import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, ThemeMode } from '../types';

export interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  audioPlaying: boolean;
  setAudioPlaying: (playing: boolean) => void;
  toggleAudio: () => void;
  showAudioPanel: boolean;
  setShowAudioPanel: (show: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  language: 'EN',
  setLanguage: () => {},
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
  audioPlaying: false,
  setAudioPlaying: () => {},
  toggleAudio: () => {},
  showAudioPanel: false,
  setShowAudioPanel: () => {},
});

export const useApp = () => useContext(AppContext);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // 1. Language state with localStorage persistence
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mandir_language');
    if (saved === 'EN' || saved === 'GU' || saved === 'HI') return saved;
    return 'EN';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mandir_language', lang);
  };

  // 2. Theme state with localStorage & dark class sync
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('mandir_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('mandir_theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 3. Audio state
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [showAudioPanel, setShowAudioPanel] = useState<boolean>(false);

  const toggleAudio = () => {
    setAudioPlaying((prev) => {
      const next = !prev;
      if (next) setShowAudioPanel(true);
      return next;
    });
  };

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      toggleTheme,
      audioPlaying,
      setAudioPlaying,
      toggleAudio,
      showAudioPanel,
      setShowAudioPanel,
    }),
    [language, theme, audioPlaying, showAudioPanel]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

