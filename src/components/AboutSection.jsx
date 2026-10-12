import React, { useEffect, useRef } from 'react';
import { Target, Compass, Heart, Shield, BookOpen, Sun, Sparkles } from 'lucide-react';
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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
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
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs font-tiro mb-3">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>संस्था परिचय एवं आदर्श</span>
          </div>

          <h2 className="font-rozha text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
            श्री राम सेवा समिति, छतरपुर
          </h2>

          <p className="mt-2 text-base sm:text-lg font-yatra saffron-gradient-text">
            सेवा • संस्कार • समर्पण
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-2"></div>
        </div>

        {/* Main Editorial Content from User's Prompt */}
        <div className="max-w-4xl mx-auto text-center md:text-justify font-tiro text-base sm:text-lg text-amber-100/90 leading-relaxed space-y-5">
          <p className="indent-0 md:indent-8">
            <span className="font-bold text-amber-300">श्री राम सेवा समिति, छतरपुर (मध्य प्रदेश)</span> भगवान श्रीराम के आदर्शों, सनातन संस्कृति और धार्मिक परंपराओं से प्रेरित एक सामाजिक एवं धार्मिक समिति है। समिति का मुख्य उद्देश्य धार्मिक आयोजनों के माध्यम से समाज में सांस्कृतिक चेतना, सेवा भावना और सामूहिक सहभागिता को प्रोत्साहित करना है।
          </p>
          <p>
            समिति छतरपुर में श्रीराम जन्मोत्सव एवं रामनवमी से जुड़े आयोजनों के लिए प्रतिष्ठित है। धर्म ध्वज यात्रा जैसे विराट कार्यक्रमों के माध्यम से श्रद्धालुओं को जोड़ना और भारतीय सांस्कृतिक परंपराओं को आगे बढ़ाना इसकी प्रमुख गतिविधियों में शामिल रहा है।
          </p>
        </div>

        {/* Core Pillars Grid: संकल्प, ध्येय वाक्य, स्थान */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-amber-500/20">
          {/* Card 1: हमारा संकल्प */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-rozha text-xl font-bold text-white mb-2">
              हमारा संकल्प
            </h3>
            <p className="text-sm font-tiro text-amber-100/80 leading-relaxed">
              सनातन संस्कृति का सम्मान, सामाजिक सद्भाव को प्रोत्साहन और सेवा के माध्यम से समाज से जुड़ाव।
            </p>
          </div>

          {/* Card 2: हमारा ध्येय वाक्य */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-amber-300 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-rozha text-xl font-bold text-white mb-2">
              हमारा ध्येय वाक्य
            </h3>
            <p className="text-sm font-yatra saffron-gradient-text text-lg leading-relaxed font-bold">
              सेवा, संस्कार और समर्पण
            </p>
            <p className="text-xs font-tiro text-amber-200/60 mt-2">
              मानव मात्र के प्रति सेवा एवं सांस्कृतिक मूल्यों का संरक्षण
            </p>
          </div>

          {/* Card 3: मुख्य पहचान व स्थान */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2a0808]/80 to-[#1c0404]/80 border border-amber-500/25 hover:border-amber-400/50 transition shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-rozha text-xl font-bold text-white mb-2">
              स्थान एवं कार्यक्षेत्र
            </h3>
            <p className="text-sm font-tiro text-amber-100/80 leading-relaxed">
              <strong className="text-amber-300">छतरपुर, मध्य प्रदेश, भारत।</strong>
              <br />
              भगवान श्रीराम के जन्मोत्सव, धार्मिक आयोजनों और सनातन संस्कृति की गतिविधियों में अग्रणी सहभागिता।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
