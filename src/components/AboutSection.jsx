import React, { useEffect, useRef } from 'react';
import { Target, Compass, Shield, Sun } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

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
  }, []);

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
            <span>Sanstha Parichay & Values</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
            Shri Ram Seva Samiti, Chhatarpur
          </h2>

          <p className="mt-2 text-base sm:text-lg font-bold saffron-gradient-text">
            Seva • Sanskar • Samarpan
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-2"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center md:text-justify text-base sm:text-lg text-amber-100/90 leading-relaxed space-y-5">
          <p className="indent-0 md:indent-8">
            <span className="font-bold text-amber-300">Shri Ram Seva Samiti, Chhatarpur (Madhya Pradesh)</span> Bhagwan Shri Ram ke aadarsho, Sanatan Sanskriti aur religious traditions se inspired ek social & religious samiti hai. Samiti ka main mission dharmik programs ke through society mein cultural awareness, seva bhaav aur community participation ko encourage karna hai.
          </p>
          <p>
            Samiti Chhatarpur mein Shri Ram Janmotsav aur Ram Navami ke aayojano ke liye jaani jaati hai. Dharma Dhwaj Yatra jaise bade programs ke through sabhi devotees ko jodna aur Bharatiya sanskritik paramparao ko aage badhana iski main activities mein shamil raha hai.
          </p>
        </div>

        {/* Core Pillars Grid: Sankalp, Motto, Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-amber-500/20">
          {/* Card 1: Hamara Sankalp */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Hamara Sankalp
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              Sanatan sanskriti ka respect, samajik sadbhav ko promote karna aur seva ke through society se deep connection banana.
            </p>
          </div>

          {/* Card 2: Hamara Dhyeya Vakya */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-amber-300 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Hamara Dhyeya Vakya
            </h3>
            <p className="saffron-gradient-text text-lg leading-relaxed font-bold">
              Seva, Sanskar aur Samarpan
            </p>
            <p className="text-xs text-amber-200/60 mt-2">
              Humanity ki selfless service aur cultural values ki raksha.
            </p>
          </div>

          {/* Card 3: Location & Field */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Location & Work Area
            </h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              <strong className="text-amber-300">Chhatarpur, Madhya Pradesh, Bharat.</strong>
              <br />
              Bhagwan Shri Ram ke Janmotsav, dharmik aayojano aur Sanatan activities mein leading participation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
