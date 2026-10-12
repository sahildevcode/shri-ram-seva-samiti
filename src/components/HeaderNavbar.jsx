import React, { useState } from 'react';
import { Menu, X, HeartHandshake, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import AudioChimePlayer from './AudioChimePlayer';

export default function HeaderNavbar({ onOpenVolunteerModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Parichay', href: '#about' },
    { name: '4 Mukhya Pillars', href: '#pillars' },
    { name: 'Karyakram (Past & Upcoming)', href: '#events' },
    { name: 'Itihas & Reference', href: '#timeline' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Official Records', href: '#records' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Sacred Top Ribbon */}
      <div className="bg-gradient-to-r from-red-950 via-amber-900 to-red-950 text-amber-200/90 text-xs py-1.5 px-4 border-b border-amber-500/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-poppins tracking-wide">
            <span className="text-amber-400 font-bold">|| Om Shri Ramchandraaya Namah ||</span>
            <span className="hidden md:inline text-amber-300/60">|</span>
            <span className="hidden md:inline text-amber-200/80">Sanatan Sanskriti • Seva • Sanskar • Samarpan</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-poppins">
            <div className="flex items-center gap-1 text-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Chhatarpur, Madhya Pradesh</span>
            </div>
            <span className="text-amber-500/40">•</span>
            <div className="flex items-center gap-1 text-amber-200 hover:text-amber-300">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>Contact: +91 94251 XXXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="backdrop-blur-md bg-[#180404]/90 border-b border-amber-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Title */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-red-600 to-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_22px_rgba(245,158,11,0.8)] transition-all duration-300">
                  <img
                    src="/assets/logo.jpg"
                    alt="Shri Ram Seva Samiti Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-red-950 rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px] shadow">
                  ॐ
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  Shri Ram Seva Samiti
                </span>
                <span className="text-[12px] sm:text-xs font-poppins text-amber-400/90 flex items-center gap-1.5">
                  <span>Chhatarpur (M.P.)</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-amber-200/70 hidden sm:inline">Seva • Sanskar • Samarpan</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-amber-100/90 hover:text-white hover:bg-red-950/60 border border-transparent hover:border-amber-500/30 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Sound & Volunteer Button */}
            <div className="hidden sm:flex items-center gap-3">
              <AudioChimePlayer />

              <button
                onClick={onOpenVolunteerModal}
                className="relative group overflow-hidden px-4 py-2 rounded-full font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white font-semibold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-stone-950 group-hover:text-amber-200 transition-colors" />
                  <span>Humse Judein</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <AudioChimePlayer />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-red-950/60 border border-amber-500/30 text-amber-300 hover:text-white focus:outline-none"
                aria-label="Navigation menu toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#150303] border-b border-amber-500/30 px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:bg-red-900/40 hover:text-amber-300 border border-transparent hover:border-amber-500/20"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-amber-500/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteerModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white shadow"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Humse Judein / Volunteer Banein</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
