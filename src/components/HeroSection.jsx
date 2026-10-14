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
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden font-poppins"
    >
      {/* Radiant golden backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Sacred Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{t.hero.badge}</span>
        </div>

        {/* Grand 3D Glowing Circular Logo */}
        <div
          ref={logoRef}
          className="relative group mb-6 cursor-pointer"
        >
          {/* Animated Halo Rings */}
          <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 via-red-600 to-amber-400 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse-glow"></div>
          <div className="absolute -inset-1 rounded-full border border-amber-400/50 animate-spin" style={{ animationDuration: '24s' }}></div>

          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-b from-amber-400 via-amber-700 to-red-950 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transform transition-transform duration-500 group-hover:scale-105">
            <img
              src={logoImg}
              alt="Shri Ram Seva Samiti Logo"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>

        {/* Title */}
        <div ref={titleRef} className="space-y-3 max-w-4xl">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
            <span className="gold-gradient-text block mb-1">{t.hero.title}</span>
            <span className="text-2xl sm:text-3xl md:text-4xl text-amber-200 block font-normal">
              {t.hero.city}
            </span>
          </h1>

          {/* Slogan Pill */}
          <div
            ref={mottoRef}
            className={`flex items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl font-bold saffron-gradient-text py-2 ${lang === 'hi' ? 'font-yatra' : ''}`}
          >
            <span>{t.hero.mottoLeft}</span>
            <span className="text-amber-500/60">•</span>
            <span>{t.hero.mottoMid}</span>
            <span className="text-amber-500/60">•</span>
            <span>{t.hero.mottoRight}</span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-amber-100/90 max-w-3xl mx-auto leading-relaxed pt-2">
            {t.hero.desc}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#events"
            className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.hero.btnEvents}</span>
          </a>

          <a
            href="#pillars"
            className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-red-950/70 hover:bg-red-900 border border-amber-500/40 text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow cursor-pointer"
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span>{t.hero.btnPillars}</span>
          </a>

          <button
            onClick={onOpenVolunteerModal}
            className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-transparent hover:bg-amber-500/10 border border-amber-400/50 text-amber-300 hover:text-amber-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
          >
            <Users className="w-5 h-5 text-amber-400" />
            <span>{t.hero.btnVolunteer}</span>
          </button>
        </div>

        {/* Prestigious Since 2006 Seva Sankalp Ribbon */}
        <div className="w-full max-w-5xl mt-12 pt-8 border-t border-amber-500/20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-950 via-[#350707] to-red-950 border border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.3)] text-amber-200 text-xs sm:text-sm font-semibold tracking-wide mb-3 animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="gold-gradient-text font-bold tracking-wide">
              {t.hero.sinceBadge}
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-xs sm:text-sm text-amber-200/80 max-w-2xl text-center mb-6 font-poppins">
            {t.hero.sinceSubtitle}
          </p>

          {/* 4 Interactive Buttons Row (Converted from Cards) */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            {t.hero.quickButtons.map((btn) => {
              const cfg = itemConfig[btn.id] || {};
              const IconComp = cfg.icon || Sparkles;

              return (
                <button
                  key={btn.id}
                  onClick={() => setSelectedItem(btn)}
                  className="group relative flex flex-col items-center justify-between p-5 rounded-2xl bg-gradient-to-b from-[#2b0707] via-[#1a0404] to-[#100202] border-2 border-amber-500/35 hover:border-amber-400 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer text-center overflow-hidden"
                >
                  {/* Subtle top golden light line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>

                  {/* Top Badge */}
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400/80 mb-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {cfg.badge}
                  </div>

                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr ${cfg.color || 'from-amber-400 to-red-600'} shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300 mb-3 flex items-center justify-center`}>
                    <div className="w-full h-full rounded-full bg-[#1b0303] flex items-center justify-center text-amber-300">
                      <IconComp className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Button Title */}
                  <h3 className={`text-base sm:text-lg font-bold text-amber-200 group-hover:text-amber-100 transition-colors leading-snug mb-1 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                    {btn.title}
                  </h3>

                  {/* Button Subtitle */}
                  <p className="text-xs text-amber-100/70 font-poppins leading-relaxed mb-4">
                    {btn.subtitle}
                  </p>

                  {/* Bottom Action Indicator */}
                  <div className="mt-auto w-full pt-2 border-t border-amber-500/20 flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-200 group-hover:gap-2.5 transition-all">
                    <span>{lang === 'hi' ? 'विवरण व दर्शन देखें' : 'View Details & Darshan'}</span>
                    <ChevronRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-1" />
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
