import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  HeartHandshake, 
  QrCode, 
  ChevronDown, 
  Flag, 
  Layers, 
  Calendar, 
  Building2, 
  Info, 
  Flame, 
  Users, 
  Sparkles
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { logoImg } from '../assets/images';

export default function HeaderNavbar({ 
  onOpenVolunteerModal, 
  onOpenDonationModal,
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

  // Icon mapping helper
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Info':
        return <Info className="w-4 h-4 text-amber-400 shrink-0" />;
      case 'Building2':
        return <Building2 className="w-4 h-4 text-amber-400 shrink-0" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4 text-amber-400 shrink-0" />;
      case 'Flag':
        return <Flag className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-amber-400 shrink-0" />;
      case 'Users':
        return <Users className="w-4 h-4 text-amber-400 shrink-0" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Glassmorphic Navigation Bar */}
      <div className="backdrop-blur-md bg-[#180404]/95 border-b border-amber-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between min-h-[3.6rem] sm:min-h-[4rem] py-1.5 gap-2 sm:gap-3">
            
            {/* 1. LEFT SIDE: Logo & Brand Title */}
            <a 
              href="#" 
              onClick={handleBrandClick} 
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
              title="श्री राम सेवा समिति, छतरपुर"
            >
              <div className="relative shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-red-600 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_16px_rgba(245,158,11,0.8)] transition-all duration-300">
                  <img
                    src={logoImg}
                    alt="Shri Ram Seva Samiti Logo"
                    className="w-full h-full object-cover rounded-full"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-red-950 rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold text-[8px] shadow">
                  ॐ
                </div>
              </div>

              <div className="flex flex-col text-left justify-center min-w-0">
                <span className={`text-sm sm:text-base xl:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors whitespace-nowrap leading-tight ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {t.nav.brand}
                </span>
                <span className="text-[10px] sm:text-[11px] font-poppins text-amber-400/90 flex items-center gap-1.5 whitespace-nowrap leading-tight">
                  <span>{t.nav.city}</span>
                  <span className="hidden 2xl:inline-flex items-center gap-1.5 text-amber-200/70">
                    <span className="inline-block w-1 h-1 rounded-full bg-amber-500"></span>
                    <span>{t.nav.motto}</span>
                  </span>
                </span>
              </div>
            </a>

            {/* 2. CENTER: Clean Navigation Links with Hover Dropdown Menus */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {t.nav.categories ? (
                t.nav.categories.map((cat) => {
                  const hasDropdown = cat.items && cat.items.length > 0;

                  if (!hasDropdown) {
                    return (
                      <a
                        key={cat.id}
                        href={cat.href}
                        onClick={(e) => handleLinkClick(e, cat.href)}
                        className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-amber-100 hover:text-white hover:bg-red-950/60 border border-transparent hover:border-amber-500/30 transition-all duration-200 whitespace-nowrap"
                      >
                        {cat.label}
                      </a>
                    );
                  }

                  return (
                    <div key={cat.id} className="relative group">
                      <a
                        href={cat.href || '#'}
                        onClick={(e) => {
                          if (cat.href) {
                            handleLinkClick(e, cat.href);
                          } else {
                            e.preventDefault();
                          }
                        }}
                        className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                          cat.id === 'events' && currentPage === 'dharma-dhwaj'
                            ? 'text-amber-300 bg-amber-500/20 border border-amber-500/50'
                            : 'text-amber-100 hover:text-white hover:bg-red-950/60 border border-transparent hover:border-amber-500/30'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <ChevronDown className="w-3 h-3 text-amber-400 group-hover:rotate-180 transition-transform duration-200" />
                      </a>

                      {/* Dropdown Menu on Hover */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 min-w-[250px] xl:min-w-[270px]">
                        <div className="backdrop-blur-xl bg-[#1d0303]/98 border border-amber-500/40 rounded-xl p-2 shadow-[0_12px_40px_rgba(0,0,0,0.85)] space-y-1">
                          {cat.items.map((item, idx) => {
                            if (item.action === 'dharmaDhwaj') {
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => onOpenDharmaDhwaj?.()}
                                  className={`w-full text-left p-2.5 rounded-lg flex items-start gap-2.5 transition-all duration-150 cursor-pointer ${
                                    currentPage === 'dharma-dhwaj'
                                      ? 'bg-gradient-to-r from-red-900 to-amber-950 border border-amber-400/60 text-white shadow-sm'
                                      : 'hover:bg-red-950/80 border border-transparent hover:border-amber-500/30 text-amber-100 hover:text-white'
                                  }`}
                                >
                                  <div className="mt-0.5">{renderIcon(item.icon)}</div>
                                  <div className="min-w-0">
                                    <div className="text-xs xl:text-sm font-bold text-amber-300 flex items-center gap-1.5">
                                      <span>{item.name}</span>
                                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-600/60 text-amber-200 border border-amber-400/30 font-semibold">
                                        विशेष
                                      </span>
                                    </div>
                                    {item.desc && (
                                      <div className="text-[11px] text-amber-200/70 truncate">
                                        {item.desc}
                                      </div>
                                    )}
                                  </div>
                                </button>
                              );
                            }

                            if (item.action === 'doorAnimation') {
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => onOpenDoorAnimation?.()}
                                  className="w-full text-left p-2.5 rounded-lg flex items-start gap-2.5 hover:bg-red-950/80 border border-transparent hover:border-amber-500/30 text-amber-100 hover:text-white transition-all duration-150 cursor-pointer"
                                >
                                  <div className="mt-0.5">{renderIcon(item.icon)}</div>
                                  <div className="min-w-0">
                                    <div className="text-xs xl:text-sm font-bold text-amber-300">
                                      {item.name}
                                    </div>
                                    {item.desc && (
                                      <div className="text-[11px] text-amber-200/70 truncate">
                                        {item.desc}
                                      </div>
                                    )}
                                  </div>
                                </button>
                              );
                            }

                            return (
                              <a
                                key={idx}
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="w-full text-left p-2.5 rounded-lg flex items-start gap-2.5 hover:bg-red-950/80 border border-transparent hover:border-amber-500/30 text-amber-100 hover:text-white transition-all duration-150 block"
                              >
                                <div className="mt-0.5">{renderIcon(item.icon)}</div>
                                <div className="min-w-0">
                                  <div className="text-xs xl:text-sm font-semibold text-amber-200">
                                    {item.name}
                                  </div>
                                  {item.desc && (
                                    <div className="text-[11px] text-amber-200/70 truncate">
                                      {item.desc}
                                    </div>
                                  )}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                /* Fallback */
                t.nav.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-amber-100 hover:text-white hover:bg-red-950/60 transition"
                  >
                    {link.name}
                  </a>
                ))
              )}
            </nav>

            {/* 3. RIGHT SIDE: Donation Button + Volunteer Form Button + Language Switcher */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0">
              
              {/* Donation / Sahyog Button (Opens Demo QR Modal) */}
              <button
                type="button"
                onClick={onOpenDonationModal}
                className="group relative overflow-hidden px-2.5 xl:px-3 py-1.5 rounded-full font-bold text-xs xl:text-sm bg-gradient-to-r from-red-950 via-[#3a0606] to-red-950 border border-amber-400/80 hover:border-amber-300 text-amber-300 hover:text-white shadow-[0_0_12px_rgba(245,158,11,0.25)] hover:shadow-[0_0_18px_rgba(245,158,11,0.5)] transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
                title={lang === 'hi' ? 'दान एवं पावन सहयोग (Demo QR)' : 'Donation & Contribution (Demo QR)'}
              >
                <QrCode className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="hidden xl:inline">{t.nav.donateBtn || 'दान / सहयोग'}</span>
                <span className="xl:hidden">{lang === 'hi' ? 'दान' : 'Donate'}</span>
              </button>

              {/* Volunteer CTA Button ("bolinder matlab kidi or jord ne kaa form") */}
              <button
                type="button"
                onClick={onOpenVolunteerModal}
                className="relative group overflow-hidden px-3 xl:px-3.5 py-1.5 rounded-full font-bold text-xs xl:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_12px_rgba(245,158,11,0.35)] hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
                title={lang === 'hi' ? 'स्वयंसेवक के रूप में जुड़ें' : 'Join as a Volunteer'}
              >
                <HeartHandshake className="w-3.5 h-3.5 text-stone-950 group-hover:text-amber-200 transition-colors shrink-0" />
                <span className="hidden xl:inline">{t.nav.joinBtn}</span>
                <span className="xl:hidden">{lang === 'hi' ? 'स्वयंसेवक' : 'Volunteer'}</span>
              </button>

              {/* Language Switcher (Compact single toggle) */}
              <LanguageSwitcher />
            </div>

            {/* Mobile Header Actions (visible on mobile / small screens) */}
            <div className="flex items-center gap-1.5 lg:hidden shrink-0">
              {/* Quick Donation Button on Mobile */}
              <button
                type="button"
                onClick={onOpenDonationModal}
                className="px-2 py-1 rounded-full bg-red-950 border border-amber-400/80 text-amber-300 text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer shrink-0"
                title="दान / सहयोग"
              >
                <QrCode className="w-3 h-3 text-amber-400" />
                <span>दान</span>
              </button>

              {/* Quick Volunteer Button on Mobile */}
              <button
                type="button"
                onClick={onOpenVolunteerModal}
                className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-xs font-bold flex items-center gap-1 shadow-sm cursor-pointer shrink-0"
                title="स्वयंसेवक बनें"
              >
                <HeartHandshake className="w-3 h-3 text-stone-950" />
                <span>जुड़ें</span>
              </button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-red-950/60 border border-amber-500/30 text-amber-300 hover:text-white focus:outline-none cursor-pointer shrink-0"
                aria-label="Navigation menu toggle"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#150303] border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3">
            {/* Action Buttons in Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-amber-500/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonationModal?.();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-950 border border-amber-400/70 text-amber-200 text-xs font-bold shadow cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.nav.donateBtn || 'दान / सहयोग'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteerModal?.();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 text-xs font-bold shadow cursor-pointer"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-stone-950" />
                <span>{t.nav.joinBtn}</span>
              </button>
            </div>

            {/* Special Dharma Dhwaj Yatra link */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDharmaDhwaj?.();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-sm ${
                currentPage === 'dharma-dhwaj'
                  ? 'bg-red-800 border border-amber-300 text-white'
                  : 'bg-gradient-to-r from-red-950 to-[#2e0505] border border-amber-400/50 text-amber-200'
              }`}
            >
              <Flag className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <span>{lang === 'hi' ? '🚩 धर्म ध्वजा यात्रा (विशेष आलेख)' : '🚩 Dharma Dhwaj Yatra'}</span>
            </button>

            {/* Door animation trigger */}
            {onOpenDoorAnimation && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDoorAnimation?.();
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-amber-200 bg-red-950/40 border border-amber-500/20 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? '🚩 कपाट दर्शन एनिमेशन देखें' : '🚩 View Temple Door Darshan'}</span>
              </button>
            )}

            {/* Categorized Links in Mobile Drawer */}
            <div className="space-y-1 pt-1">
              {t.nav.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link.href);
                  }}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-amber-100 hover:bg-red-900/40 hover:text-amber-300 border border-transparent hover:border-amber-500/20"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* 13 Mandals quick pill */}
            <div className="pt-2 border-t border-amber-500/20">
              <a
                href="#mandals"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold text-xs bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:text-white shadow"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'hi' ? '🚩 समस्त १३ मंडल विवरण' : '🚩 All 13 Mandals Details'}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
