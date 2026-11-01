import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { ConstellationBackground } from './components/common/ConstellationBackground';
import { NavigationPill } from './components/layout/NavigationPill';
import { MobileDock } from './components/layout/MobileDock';
import { Footer } from './components/layout/Footer';
import { AudioChanterBar } from './components/visitor/AudioChanterBar';

// 5 Route Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DarshanPage } from './pages/DarshanPage';
import { YatriNivasPage } from './pages/YatriNivasPage';
import { VisitPage } from './pages/VisitPage';

// Auto scroll-to-top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function MainLayout() {
  const { theme } = useApp();

  return (
    <div
      className="min-h-screen transition-colors duration-300 relative overflow-x-hidden selection:bg-[#D97706]/30 selection:text-[#D97706]"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Dynamic Interactive Constellation Background */}
      <ConstellationBackground />

      {/* 3D Adaptive Frosted Navigation Pill Header */}
      <NavigationPill />

      {/* Multi-Page Route Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/darshan" element={<DarshanPage />} />
          <Route path="/yatri-nivas" element={<YatriNivasPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Heritage Footer */}
      <Footer />

      {/* Persistent Ambient Devotional Audio Player Engine & Dock Slide-Up Panel */}
      <AudioChanterBar />

      {/* Floating Bottom Quick Dock (Mobile Devices) */}
      <MobileDock />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout />
      </BrowserRouter>
    </AppProvider>
  );
}
