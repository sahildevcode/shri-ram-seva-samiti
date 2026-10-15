import React, { useState } from 'react';
import { Menu, X, HeartHandshake, MapPin, PhoneCall, Layers, Flag } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { logoImg } from '../assets/images';

export default function HeaderNavbar({ 
  onOpenVolunteerModal, 
  onOpenDharmaDhwaj, 
  currentPage = 'home', 
  onNavigateHome,
  onOpenDoorAnimation
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang } = useLanguage();

  const handleBrandClick = (e) => {
    if (currentPage !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const handleLinkClick = (e, href) => {
    if (currentPage !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Glassmorphic Navigation Bar */}
      <div className="backdrop-blur-md bg-[#180404]/95 border-b border-amber-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[3.6rem] sm:min-h-[4rem] py-1.5 sm:py-2 gap-2 sm:gap-4">
            {/* Logo and Brand Title */}
            <a href="#" onClick={handleBrandClick} className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-red-600 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_18px_rgba(245,158,11,0.8)] transition-all duration-300">
                  <img
                    src={logoImg}
                    alt="Shri Ram Seva Samiti Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-red-950 rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center font-bold text-[8px] sm:text-[9px] shadow">
                  ॐ
                </div>
              </div>

              <div className="flex flex-col text-left justify-center">
                <span className={`text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors whitespace-nowrap leading-tight ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {t.nav.brand}
                </span>
                <span className="text-[10px] sm:text-[11px] font-poppins text-amber-400/90 flex items-center gap-1.5 whitespace-nowrap leading-tight">
                  <span>{t.nav.city}</span>
                  <span className="hidden xl:inline-flex items-center gap-1.5 text-amber-200/70">
                    <span className="inline-block w-1 h-1 rounded-full bg-amber-500"></span>
                    <span>{t.nav.motto}</span>
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Single Horizontal Line */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {t.nav.links.map((link) => {
                const isMandal = link.href === '#mandals';
                return (
                  <React.Fragment key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                        isMandal
                          ? 'text-amber-300 bg-amber-500/15 border border-amber-500/40 hover:bg-amber-500/30 font-semibold'
                          : 'text-amber-100/90 hover:text-white hover:bg-red-950/60 border border-transparent hover:border-amber-500/30'
                      }`}
                    >
                      {isMandal && <span className="mr-1">🚩</span>}
                      {link.name}
                    </a>
                    {isMandal && (
                      <button
                        onClick={onOpenDharmaDhwaj}
                        className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                          currentPage === 'dharma-dhwaj'
                            ? 'text-white bg-gradient-to-r from-red-800 to-amber-700 border border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                            : 'text-amber-200 bg-gradient-to-r from-red-950 via-[#380606] to-red-950 border border-amber-400/60 hover:border-amber-300 hover:text-white hover:bg-red-900/60 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                        }`}
                        title={lang === 'hi' ? 'धर्म ध्वजा यात्रा विशेष आलेख' : 'Dharma Dhwaj Yatra Article'}
                      >
                        <Flag className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                        <span>{lang === 'hi' ? 'धर्म ध्वजा यात्रा' : 'Dharma Dhwaj'}</span>
                      </button>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            {/* Actions: Language Switcher, Door Animation & Volunteer CTA */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              {onOpenDoorAnimation && (
                <button
                  onClick={onOpenDoorAnimation}
                  className="whitespace-nowrap px-2.5 py-1.5 rounded-full text-xs font-bold text-amber-200 bg-red-950/80 hover:bg-red-900 border border-amber-400/50 hover:border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)] flex items-center gap-1 cursor-pointer transition"
                  title="मंदिर के कपाट खुलने का एनीमेशन देखें"
                >
                  <span>🚩 कपाट दर्शन</span>
                </button>
              )}

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Volunteer CTA */}
              <button
                onClick={onOpenVolunteerModal}
                className="relative group overflow-hidden px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                  <HeartHandshake className="w-3.5 h-3.5 text-stone-950 group-hover:text-amber-200 transition-colors shrink-0" />
                  <span className="whitespace-nowrap">{t.nav.joinBtn}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {onOpenDoorAnimation && (
                <button
                  onClick={onOpenDoorAnimation}
                  className="px-2 py-1 rounded-full bg-red-950/90 border border-amber-400/60 text-amber-200 text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer"
                  title="कपाट दर्शन"
                >
                  <span>🚩 कपाट</span>
                </button>
              )}
              <button
                onClick={onOpenDharmaDhwaj}
                className={`px-2 py-1 rounded-full border text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer ${
                  currentPage === 'dharma-dhwaj'
                    ? 'bg-red-800 border-amber-300 text-white'
                    : 'bg-gradient-to-r from-red-950 to-amber-950 border-amber-400/60 text-amber-200'
                }`}
              >
                <Flag className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>यात्रा</span>
              </button>
              <a
                href="#mandals"
                onClick={(e) => handleLinkClick(e, '#mandals')}
                className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-1"
              >
                <Layers className="w-3 h-3 text-amber-400" />
                <span>मंडल</span>
              </a>
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-red-950/60 border border-amber-500/30 text-amber-300 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Navigation menu toggle"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#150303] border-b border-amber-500/30 px-4 pt-3 pb-5 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDharmaDhwaj?.();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-bold flex items-center gap-2 cursor-pointer shadow-sm mb-2 ${
                currentPage === 'dharma-dhwaj'
                  ? 'bg-red-800 border border-amber-300 text-white'
                  : 'bg-gradient-to-r from-red-950 to-[#2e0505] border border-amber-400/50 text-amber-200'
              }`}
            >
              <Flag className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{lang === 'hi' ? '🚩 धर्म ध्वजा यात्रा (विशेष इतिहास व आलेख)' : '🚩 Dharma Dhwaj Yatra (History)'}</span>
            </button>
            {t.nav.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, link.href);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:bg-red-900/40 hover:text-amber-300 border border-transparent hover:border-amber-500/20"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-amber-500/20 flex flex-col gap-2">
              <a
                href="#mandals"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-red-950 via-[#3a0909] to-red-950 border border-amber-500/40 text-amber-300 hover:text-white shadow"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? '🚩 समस्त १३ मंडल' : '🚩 All 13 Mandals'}</span>
              </a>
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
