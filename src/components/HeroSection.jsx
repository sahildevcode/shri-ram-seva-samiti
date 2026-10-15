import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Users, 
  ChevronDown, 
  Sparkles, 
  Award,
  Flag,
  Building2,
  Sun,
  Crown,
  ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import { logoImg, dharmikImg, samajSevaImg, galleryImg, hamseJudeinImg } from '../assets/images';
import QuickEventModal from './QuickEventModal';
import RamMandirAiAnimation from './RamMandirAiAnimation';

export default function HeroSection({ onOpenVolunteerModal, onOpenDharmaDhwaj, onSelectQuickEvent, onOpenDoorAnimation }) {
  const heroRef = useRef(null);
  const aiAnimRef = useRef(null);
  const statsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { t, lang } = useLanguage();

  const itemConfig = {
    dharmadhwaj: {
      icon: Flag,
      img: galleryImg,
      color: 'from-amber-500 to-red-600',
      badge: lang === 'hi' ? 'मुख्य शोभायात्रा' : 'Main Shobhayatra',
    },
    ramalaya: {
      icon: Building2,
      img: hamseJudeinImg,
      color: 'from-orange-500 to-amber-600',
      badge: lang === 'hi' ? 'केंद्रीय संकुल' : 'Central Office',
    },
    prabhatpheri: {
      icon: Sun,
      img: dharmikImg,
      color: 'from-amber-400 to-yellow-600',
      badge: lang === 'hi' ? 'प्रातः जागरण' : 'Morning Awakening',
    },
    ramdarbar: {
      icon: Crown,
      img: logoImg,
      color: 'from-red-600 to-amber-500',
      badge: lang === 'hi' ? 'दिव्य दर्शन' : 'Divine Darshan',
    },
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (aiAnimRef.current) {
        tl.fromTo(
          aiAnimRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }

      if (statsRef.current && statsRef.current.children) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          '-=0.4'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full flex flex-col items-center justify-start text-center overflow-hidden font-poppins pt-0 pb-12"
    >
      {/* Radiant golden backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 100% Full Width & Height Sacred AI-style Ram Mandir & History Animation Showcase */}
      <div ref={aiAnimRef} className="w-full">
        <RamMandirAiAnimation 
          onOpenDoorAnimation={onOpenDoorAnimation}
          onOpenDharmaDhwaj={onOpenDharmaDhwaj}
          onOpenVolunteerModal={onOpenVolunteerModal}
        />
      </div>

      {/* Lower Section: Prestigious Since 2006 Seva Sankalp Ribbon & 4 Quick Darshan Buttons */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 flex flex-col items-center">
        {/* Prestigious Since 2006 Seva Sankalp Ribbon */}
        <div className="w-full pt-4 border-t border-amber-500/20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950 via-[#350707] to-red-950 border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] text-amber-200 text-xs sm:text-sm font-semibold tracking-wide mb-2 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="gold-gradient-text font-bold tracking-wide">
              {t.hero.sinceBadge}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <p className="text-[11px] sm:text-xs text-amber-200/80 max-w-2xl text-center mb-4 font-poppins">
            {t.hero.sinceSubtitle}
          </p>

          {/* 4 Interactive Buttons Row (Converted from Cards) */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 w-full"
          >
            {t.hero.quickButtons.map((btn) => {
              const cfg = itemConfig[btn.id] || {};
              const IconComp = cfg.icon || Sparkles;

              return (
                <button
                  key={btn.id}
                  onClick={() => {
                    if (onSelectQuickEvent) {
                      onSelectQuickEvent(btn);
                    } else {
                      setSelectedItem(btn);
                    }
                  }}
                  className="group relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#2b0707] via-[#1a0404] to-[#100202] border border-amber-500/35 hover:border-amber-400 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-center overflow-hidden"
                >
                  {/* Subtle top golden light line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>

                  {/* Top Badge */}
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-400/80 mb-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {cfg.badge}
                  </div>

                  {/* Icon Circle */}
                  <div className={`w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr ${cfg.color || 'from-amber-400 to-red-600'} shadow-[0_0_12px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform duration-300 mb-2 flex items-center justify-center`}>
                    <div className="w-full h-full rounded-full bg-[#1b0303] flex items-center justify-center text-amber-300">
                      <IconComp className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Button Title */}
                  <h3 className={`text-sm sm:text-base font-bold text-amber-200 group-hover:text-amber-100 transition-colors leading-snug mb-0.5 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                    {btn.title}
                  </h3>

                  {/* Button Subtitle */}
                  <p className="text-[11px] sm:text-xs text-amber-100/70 font-poppins leading-relaxed mb-2.5">
                    {btn.subtitle}
                  </p>

                  {/* Bottom Action Indicator */}
                  <div className="mt-auto w-full pt-1.5 border-t border-amber-500/20 flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-amber-400 group-hover:text-amber-200 transition-all">
                    <span>{lang === 'hi' ? 'विवरण व दर्शन देखें' : 'View Details & Darshan'}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dedicated Portal-based Sacred Detail Modal (Fallback if not handled by root App) */}
        {!onSelectQuickEvent && (
          <QuickEventModal
            isOpen={!!selectedItem}
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onOpenVolunteerModal={onOpenVolunteerModal}
          />
        )}

        {/* Scroll Indicator */}
        <a
          href="#pillars"
          className="mt-10 flex flex-col items-center gap-1 text-amber-400/60 hover:text-amber-300 transition animate-bounce text-xs"
          aria-label="Scroll down"
        >
          <span>{t.hero.scrollDown}</span>
          <ChevronDown className="w-5 h-5 text-amber-400" />
        </a>
      </div>
    </section>
  );
}
