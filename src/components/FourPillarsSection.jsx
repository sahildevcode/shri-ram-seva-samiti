import React, { useEffect, useRef } from 'react';
import { Calendar, Heart, Image as ImageIcon, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourPillarsSection({ onOpenVolunteerModal, onOpenGalleryModal }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const pillars = [
    {
      id: 'dharmik-aayojan',
      title: 'धार्मिक आयोजन',
      desc: 'रामनवमी, श्रीराम जन्मोत्सव, धर्म ध्वज यात्रा और अन्य सत्यापित आयोजनों का विवरण, तारीख एवं तस्वीरें।',
      image: '/assets/dharmik_aayojan.png',
      icon: Calendar,
      actionText: 'आयोजन विवरण देखें',
      badge: 'सनातन परंपरा',
      target: '#events',
    },
    {
      id: 'samaj-seva',
      title: 'समाज सेवा',
      desc: 'समिति द्वारा वास्तव में किए गए सेवा कार्यों, सामाजिक अभियानों और जनभागीदारी की जानकारी।',
      image: '/assets/samaj_seva.png',
      icon: Heart,
      actionText: 'सेवा कार्य विस्तार',
      badge: 'मानव सेवा ही माधव सेवा',
      target: '#about',
    },
    {
      id: 'gallery-pillar',
      title: 'फोटो एवं वीडियो गैलरी',
      desc: 'पिछले आयोजनों, यात्राओं, धार्मिक कार्यक्रमों और सांस्कृतिक गतिविधियों का संग्रह।',
      image: '/assets/gallery_thumb.png',
      icon: ImageIcon,
      actionText: 'पूरी गैलरी देखें',
      badge: 'ऐतिहासिक क्षण',
      target: '#gallery',
    },
    {
      id: 'hamse-judein',
      title: 'हमसे जुड़ें',
      desc: 'समिति से संपर्क करने, स्वयंसेवक बनने और आगामी आयोजनों की जानकारी प्राप्त करने का विकल्प।',
      image: '/assets/hamse_judein.png',
      icon: UserCheck,
      actionText: 'सदस्यता / स्वयंसेवक फॉर्म',
      badge: 'सहभागिता',
      onClick: onOpenVolunteerModal,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll with stagger and fade-in
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 45,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pillars"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      {/* Section Header matching User's 2nd Screenshot */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs font-tiro mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>वेबसाइट के लिए उपयोगी मुख्य स्तंभ</span>
        </div>
        <h2 className="font-rozha text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
          ४. वेबसाइट के लिए अन्य उपयोगी सेक्शन
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 font-tiro text-sm sm:text-base">
          समिति की गतिविधियों, जनसेवा और सांस्कृतिक चेतना को सुगमता से प्रस्तुत करने वाले चार आधारभूत स्तंभ
        </p>
      </div>

      {/* Grid of the 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#1e0505] via-[#240808] to-[#140202] border border-amber-500/25 hover:border-amber-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.2)] transition-all duration-400 flex flex-col sm:flex-row items-center sm:items-start gap-5 overflow-hidden"
            >
              {/* Subtle radiant background glow on hover */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none"></div>

              {/* Exact Thumbnail Image with Rounded Borders & Fade-In Styling */}
              <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-500/40 via-red-600/40 to-amber-300/40 shadow-md">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-red-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/40">
                  {idx + 1}
                </div>
              </div>

              {/* Card Details */}
              <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                    <span className="text-[11px] font-medium font-tiro text-amber-400/90 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-rozha text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-center sm:justify-start gap-2">
                    <Icon className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </h3>

                  <p className="mt-2 text-sm text-amber-100/80 font-tiro leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Action Link / Button */}
                <div className="mt-4 pt-3 border-t border-amber-500/15 flex items-center justify-center sm:justify-between">
                  {pillar.onClick ? (
                    <button
                      onClick={pillar.onClick}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-200 transition-colors group/btn"
                    >
                      <span>{pillar.actionText}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <a
                      href={pillar.target}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-200 transition-colors group/btn"
                    >
                      <span>{pillar.actionText}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}

                  <span className="hidden sm:inline text-xs font-tiro text-amber-400/50">
                    श्री राम सेवा समिति
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
