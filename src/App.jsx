import React, { useState, useEffect } from 'react';
import MouseTrailCanvas from './components/MouseTrailCanvas';
import FloatingWatermarks from './components/FloatingWatermarks';
import HeaderNavbar from './components/HeaderNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FourPillarsSection from './components/FourPillarsSection';
import MandalsSection from './components/MandalsSection';
import EventsTwoColumns from './components/EventsTwoColumns';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';
import VolunteerModal from './components/VolunteerModal';
import QuickEventModal from './components/QuickEventModal';
import DharmaDhwajPage from './components/DharmaDhwajPage';
import TempleDoorEntrance from './components/TempleDoorEntrance';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainLayout() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'dharma-dhwaj'
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [selectedQuickEvent, setSelectedQuickEvent] = useState(null);
  const [isDoorIntroOpen, setIsDoorIntroOpen] = useState(true); // Divine Temple Doors Opening Animation on Entry

  // Sync with browser URL hash for direct links and browser back/forward buttons
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#dharma-dhwaj' || hash === '#/dharma-dhwaj') {
        setCurrentPage('dharma-dhwaj');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '' || hash === '#' || hash === '#/') {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenDharmaDhwaj = () => {
    window.location.hash = 'dharma-dhwaj';
    setCurrentPage('dharma-dhwaj');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectQuickEvent = (item) => {
    // If Dharma Dhwaj was selected, open the dedicated full page!
    if (item?.id === 'dharmadhwaj') {
      handleOpenDharmaDhwaj();
    } else {
      setSelectedQuickEvent(item);
    }
  };

  const handleOpenDoorAnimation = () => {
    setIsDoorIntroOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#110202] text-amber-50 selection:bg-amber-600 selection:text-white overflow-x-hidden">
      {/* 1. Interactive Mouse Particle Trail */}
      <MouseTrailCanvas />

      {/* 2. Floating Background Watermark */}
      <FloatingWatermarks />

      {/* 3. Divine Temple Doors Opening Experience (कपाट दर्शन) */}
      <TempleDoorEntrance
        isOpen={isDoorIntroOpen}
        onClose={() => setIsDoorIntroOpen(false)}
      />

      {/* 4. Sticky Header with Language Switcher & Door Darshan Trigger */}
      <HeaderNavbar
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
        onOpenDharmaDhwaj={handleOpenDharmaDhwaj}
        onOpenDoorAnimation={handleOpenDoorAnimation}
      />

      {currentPage === 'dharma-dhwaj' ? (
        /* Dedicated 100% Full Width Dharma Dhwaj Yatra Page */
        <DharmaDhwajPage
          onBackToHome={handleNavigateHome}
          onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
        />
      ) : (
        /* Main Home Page Sections */
        <main className="relative z-10 space-y-6 md:space-y-12">
          {/* Hero Section with AI-style Ram Mandir & 2006 History Animation */}
          <HeroSection
            onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
            onOpenDharmaDhwaj={handleOpenDharmaDhwaj}
            onSelectQuickEvent={handleSelectQuickEvent}
            onOpenDoorAnimation={handleOpenDoorAnimation}
          />

          {/* Section 4: Key Pillars */}
          <FourPillarsSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

          {/* Mandals Section: All 13 Mandals */}
          <MandalsSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

          {/* Two Column Events Section: Past vs Upcoming */}
          <EventsTwoColumns onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

          {/* About Section */}
          <AboutSection />

          {/* Timeline & Transparency Section */}
          <TimelineSection />

          {/* Photo and Video Gallery */}
          <GallerySection />
        </main>
      )}

      {/* Footer Section */}
      <FooterSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

      {/* Volunteer / Join Us Modal */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />

      {/* Quick Event Modal for other items (Ramalaya, Prabhat Pheri, Ram Darbar) */}
      <QuickEventModal
        isOpen={!!selectedQuickEvent && selectedQuickEvent.id !== 'dharmadhwaj'}
        item={selectedQuickEvent}
        onClose={() => setSelectedQuickEvent(null)}
        onOpenVolunteerModal={() => {
          setSelectedQuickEvent(null);
          setIsVolunteerModalOpen(true);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
