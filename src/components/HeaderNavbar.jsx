import React, { useState } from 'react';
import { Menu, X, HeartHandshake, MapPin, PhoneCall } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { logoImg } from '../assets/images';

export default function HeaderNavbar({ onOpenVolunteerModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Sacred Top Ribbon */}
      <div className="bg-gradient-to-r from-red-950 via-amber-900 to-red-950 text-amber-200/90 text-[11px] sm:text-xs py-1 px-4 border-b border-amber-500/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-1.5">
          <div className="flex items-center gap-2 font-poppins tracking-wide">
            <span className="text-amber-400 font-bold">{t.ribbon.mantra}</span>
            <span className="hidden md:inline text-amber-300/60">|</span>
            <span className="hidden md:inline text-amber-200/80">{t.ribbon.sub}</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-poppins">
            <div className="flex items-center gap-1 text-amber-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{t.ribbon.location}</span>
            </div>
            <span className="text-amber-500/40">•</span>
            <div className="flex items-center gap-1 text-amber-200 hover:text-amber-300">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>{t.ribbon.contact}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="backdrop-blur-md bg-[#180404]/90 border-b border-amber-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[3.8rem] sm:min-h-[4.2rem] py-1.5 sm:py-2 gap-3">
            {/* Logo and Brand Title */}
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-red-600 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_18px_rgba(245,158,11,0.8)] transition-all duration-300">
                  <img
                    src={logoImg}
                    alt="Shri Ram Seva Samiti Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-red-950 rounded-full w-4 h-4 flex items-center justify-center font-bold text-[8px] sm:text-[9px] shadow">
                  ॐ
                </div>
              </div>

              <div className="flex flex-col text-left justify-center">
                <span className={`text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors whitespace-nowrap leading-tight ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {t.nav.brand}
                </span>
                <span className="text-[10px] sm:text-[11px] font-poppins text-amber-400/90 flex items-center gap-1.5 whitespace-nowrap leading-tight">
                  <span>{t.nav.city}</span>
                  <span className="hidden md:inline-flex items-center gap-1.5 text-amber-200/70">
                    <span className="inline-block w-1 h-1 rounded-full bg-amber-500"></span>
                    <span>{t.nav.motto}</span>
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {t.nav.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-amber-100/90 hover:text-white hover:bg-red-950/60 border border-transparent hover:border-amber-500/30 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Language Switcher & Volunteer Button */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Volunteer CTA */}
              <button
                onClick={onOpenVolunteerModal}
                className="relative group overflow-hidden px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-stone-950 group-hover:text-amber-200 transition-colors" />
                  <span>{t.nav.joinBtn}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-red-950/60 border border-amber-500/30 text-amber-300 hover:text-white focus:outline-none cursor-pointer"
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
            {t.nav.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:bg-red-900/40 hover:text-amber-300 border border-transparent hover:border-amber-500/20"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-amber-500/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteerModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white shadow cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{t.nav.joinBtn}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
