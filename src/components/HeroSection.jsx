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

export default function HeroSection({ onOpenVolunteerModal }) {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const mottoRef = useRef(null);
  const statsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { t, lang } = useLanguage();

  const itemConfig = {
    dharmadhwaj: {
      icon: Flag,
      img: galleryImg,
      color: 'from-amber-500 to-red-600',
      badge: lang === 'hi' ? '१. मुख्य शोभायात्रा' : '1. Main Shobhayatra',
    },
    ramalaya: {
      icon: Building2,
      img: hamseJudeinImg,
      color: 'from-orange-500 to-amber-600',
      badge: lang === 'hi' ? '२. केंद्रीय संकुल' : '2. Central Office',
    },
    prabhatpheri: {
      icon: Sun,
      img: dharmikImg,
      color: 'from-amber-400 to-yellow-600',
      badge: lang === 'hi' ? '३. प्रातः जागरण' : '3. Morning Awakening',
    },
    ramdarbar: {
      icon: Crown,
      img: logoImg,
      color: 'from-red-600 to-amber-500',
      badge: lang === 'hi' ? '४. दिव्य दर्शन' : '4. Divine Darshan',
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

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'back.out(1.5)' },
        '-=0.4'
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      )
      .fromTo(
        mottoRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        statsRef.current ? statsRef.current.children : [],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center pt-4 pb-8 sm:pt-6 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center overflow-hidden font-poppins"
    >
      {/* Radiant golden backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Sacred Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-amber-500/40 text-amber-300 text-[11px] sm:text-xs font-medium tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.2)] mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{t.hero.badge}</span>
        </div>

        {/* Grand 3D Glowing Circular Logo */}
        <div
          ref={logoRef}
          className="relative group mb-4 cursor-pointer"
        >
          {/* Animated Halo Rings */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-red-600 to-amber-400 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse-glow"></div>
          <div className="absolute -inset-1 rounded-full border border-amber-400/50 animate-spin" style={{ animationDuration: '24s' }}></div>

          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-b from-amber-400 via-amber-700 to-red-950 shadow-[0_8px_30px_rgba(0,0,0,0.8)] transform transition-transform duration-500 group-hover:scale-105">
            <img
              src={logoImg}
              alt="Shri Ram Seva Samiti Logo"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>

        {/* Title */}
        <div ref={titleRef} className="space-y-2 max-w-4xl">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
            <span className="gold-gradient-text block mb-0.5">{t.hero.title}</span>
            <span className="text-base sm:text-lg md:text-xl text-amber-200/90 block font-normal">
              {t.hero.city}
            </span>
          </h1>

          {/* Slogan Pill */}
          <div
            ref={mottoRef}
            className={`flex items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm md:text-base font-bold saffron-gradient-text py-1 ${lang === 'hi' ? 'font-yatra' : ''}`}
          >
            <span>{t.hero.mottoLeft}</span>
            <span className="text-amber-500/60">•</span>
            <span>{t.hero.mottoMid}</span>
            <span className="text-amber-500/60">•</span>
            <span>{t.hero.mottoRight}</span>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-amber-100/80 max-w-2xl mx-auto leading-relaxed pt-1">
            {t.hero.desc}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-5">
          <a
            href="#events"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.hero.btnEvents}</span>
          </a>

          <a
            href="#pillars"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-red-950/70 hover:bg-red-900 border border-amber-500/40 text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 shadow cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.hero.btnPillars}</span>
          </a>

          <button
            onClick={onOpenVolunteerModal}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-transparent hover:bg-amber-500/10 border border-amber-400/50 text-amber-300 hover:text-amber-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>{t.hero.btnVolunteer}</span>
          </button>
        </div>

        {/* Prestigious Since 2006 Seva Sankalp Ribbon */}
        <div className="w-full max-w-5xl mt-8 pt-6 border-t border-amber-500/20 flex flex-col items-center">
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
                  onClick={() => setSelectedItem(btn)}
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

        {/* Dedicated Portal-based Sacred Detail Modal */}
        <QuickEventModal
          isOpen={!!selectedItem}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onOpenVolunteerModal={onOpenVolunteerModal}
        />

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
