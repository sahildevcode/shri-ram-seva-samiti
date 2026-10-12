import React, { useEffect, useRef } from 'react';
import { Calendar, ShieldCheck, Users, Flame, ChevronDown, Sparkles, Award } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection({ onOpenVolunteerModal }) {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const mottoRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
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
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      {/* Radiant golden backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Sacred Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-tiro tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>॥ ॐ नमो भगवते रामचन्द्राय • सनातन संस्कृति व धर्म रक्षा ॥</span>
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
              src="/assets/logo.jpg"
              alt="श्री राम सेवा समिति, छतरपुर का आधिकारिक प्रतीक चिह्न"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>

        {/* Title */}
        <div ref={titleRef} className="space-y-3 max-w-4xl">
          <h1 className="font-rozha text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            <span className="gold-gradient-text block mb-1">श्री राम सेवा समिति</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-tiro text-amber-200 block font-normal">
              छतरपुर (मध्य प्रदेश)
            </span>
          </h1>

          {/* Slogan Pill */}
          <div
            ref={mottoRef}
            className="flex items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl font-yatra saffron-gradient-text py-2"
          >
            <span>🚩 सेवा</span>
            <span className="text-amber-500/60">•</span>
            <span>संस्कार 🚩</span>
            <span className="text-amber-500/60">•</span>
            <span>🚩 समर्पण</span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-amber-100/90 font-tiro max-w-3xl mx-auto leading-relaxed pt-2">
            भगवान श्रीराम के आदर्शों, सनातन संस्कृति और धार्मिक परंपराओं से प्रेरित एक सामाजिक एवं धार्मिक समिति।
            धार्मिक आयोजनों, भव्य धर्म ध्वज यात्रा और सामाजिक सेवा के माध्यम से जनचेतना का संवर्धन।
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#events"
            className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>कार्यक्रम विवरण (पिछले व आगामी)</span>
          </a>

          <a
            href="#pillars"
            className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-red-950/70 hover:bg-red-900 border border-amber-500/40 text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow"
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span>चार प्रमुख स्तंभ देखिए</span>
          </a>

          <button
            onClick={onOpenVolunteerModal}
            className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-transparent hover:bg-amber-500/10 border border-amber-400/50 text-amber-300 hover:text-amber-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Users className="w-5 h-5 text-amber-400" />
            <span>स्वयंसेवक बनें</span>
          </button>
        </div>

        {/* Highlight Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-12 pt-8 border-t border-amber-500/20"
        >
          <div className="p-4 rounded-xl bg-gradient-to-b from-red-950/50 to-stone-950/80 border border-amber-500/20 text-center hover:border-amber-400/40 transition">
            <div className="font-rozha text-2xl sm:text-3xl text-amber-300">19+ वर्ष</div>
            <div className="text-xs sm:text-sm text-amber-100/70 font-tiro mt-1">श्रीराम जन्मोत्सव परंपरा</div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-red-950/50 to-stone-950/80 border border-amber-500/20 text-center hover:border-amber-400/40 transition">
            <div className="font-rozha text-2xl sm:text-3xl text-amber-300">धर्म ध्वज</div>
            <div className="text-xs sm:text-sm text-amber-100/70 font-tiro mt-1">विशाल शोभायात्रा व संकीर्तन</div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-red-950/50 to-stone-950/80 border border-amber-500/20 text-center hover:border-amber-400/40 transition">
            <div className="font-rozha text-2xl sm:text-3xl text-amber-300">कांवड़ यात्रा</div>
            <div className="text-xs sm:text-sm text-amber-100/70 font-tiro mt-1">श्रावण मास जलाभिषेक</div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-red-950/50 to-stone-950/80 border border-amber-500/20 text-center hover:border-amber-400/40 transition">
            <div className="font-rozha text-2xl sm:text-3xl text-amber-300">सेवा व संस्कार</div>
            <div className="text-xs sm:text-sm text-amber-100/70 font-tiro mt-1">सामाजिक समरसता व सद्भाव</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-10 flex flex-col items-center gap-1 text-amber-400/60 hover:text-amber-300 transition animate-bounce text-xs font-tiro"
          aria-label="नीचे स्क्रॉल करें"
        >
          <span>नीचे देखें</span>
          <ChevronDown className="w-5 h-5 text-amber-400" />
        </a>
      </div>
    </section>
  );
}
