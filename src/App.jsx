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

export default function App() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#110202] text-amber-50 selection:bg-amber-600 selection:text-white overflow-x-hidden font-tiro">
      {/* 1. Interactive Mouse Particle Trail (Canvas red/saffron colors on mouse move) */}
      <MouseTrailCanvas />

      {/* 2. Floating Background Watermark (Committee name floating gently in background) */}
      <FloatingWatermarks />

      {/* 3. Sticky Glassmorphic Header / Navbar */}
      <HeaderNavbar onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8 md:space-y-16">
        {/* Hero Section */}
        <HeroSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

        {/* Section 4 from user screenshot: Four Key Pillars */}
        <FourPillarsSection onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

        {/* Two Column Events Section: Past Events vs Upcoming Events */}
        <EventsTwoColumns onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Timeline & Transparency Section: 2008, 2023, 2024 + Official Records */}
        <TimelineSection />

        {/* Photo and Video Gallery with Lightbox */}
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
  );
}
