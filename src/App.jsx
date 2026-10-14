import React, { useState } from 'react';
import MouseTrailCanvas from './components/MouseTrailCanvas';
import FloatingWatermarks from './components/FloatingWatermarks';
import HeaderNavbar from './components/HeaderNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FourPillarsSection from './components/FourPillarsSection';
import EventsTwoColumns from './components/EventsTwoColumns';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';
import VolunteerModal from './components/VolunteerModal';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#110202] text-amber-50 selection:bg-amber-600 selection:text-white overflow-x-hidden">
        {/* 1. Interactive Mouse Particle Trail */}
        <MouseTrailCanvas />

        {/* 2. Floating Background Watermark */}
        <FloatingWatermarks />

        {/* 3. Sticky Header with Language Switcher & Audio Player */}
        <HeaderNavbar onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10 space-y-6 md:space-y-12">
          {/* Hero Section */}
          <HeroSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

          {/* Section 4: Four Key Pillars */}
          <FourPillarsSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

          {/* Two Column Events Section: Past vs Upcoming */}
          <EventsTwoColumns onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

          {/* About Section */}
          <AboutSection />

          {/* Timeline & Transparency Section */}
          <TimelineSection />

          {/* Photo and Video Gallery */}
          <GallerySection />
        </main>

        {/* Footer Section */}
        <FooterSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

        {/* Volunteer / Join Us Modal */}
        <VolunteerModal
          isOpen={isVolunteerModalOpen}
          onClose={() => setIsVolunteerModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
