import React, { useEffect, useRef } from 'react';
import { Target, Compass, Shield, Sun } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-poppins"
    >
      <div
        ref={cardRef}
        className="rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-[#200505] via-[#1a0404] to-[#120202] border border-amber-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
      >
        {/* Decorative Golden Corner Accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs mb-3">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
            {t.about.title}
          </h2>

          <p className="mt-2 text-base sm:text-lg font-bold saffron-gradient-text">
            {t.about.motto}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-2"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center md:text-justify text-base sm:text-lg text-amber-100/90 leading-relaxed space-y-5">
          <p className="indent-0 md:indent-8">
            {t.about.p1}
          </p>
          <p>
            {t.about.p2}
          </p>
        </div>

        {/* Core Pillars Grid: Sankalp, Motto, Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-amber-500/20">
          {/* Card 1: Sankalp */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              {t.about.sankalpTitle}
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              {t.about.sankalpDesc}
            </p>
          </div>

          {/* Card 2: Dhyeya Vakya */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-amber-300 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              {t.about.mottoTitle}
            </h3>
            <p className="saffron-gradient-text text-base sm:text-lg leading-relaxed font-bold">
              {t.about.motto}
            </p>
            <p className="text-xs text-amber-200/60 mt-2">
              {t.about.mottoDesc}
            </p>
          </div>

          {/* Card 3: Location */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              {t.about.locationTitle}
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              {t.about.locationDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
