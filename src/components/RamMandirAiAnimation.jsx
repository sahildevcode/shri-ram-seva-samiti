import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Flag, 
  Play, 
  Pause, 
  RotateCcw, 
  Calendar, 
  Building2, 
  Users, 
  Award,
  ChevronRight,
  ChevronDown,
  Sun
} from 'lucide-react';
import { ramMandirImg, galleryImg, ramWalkingSideProfileImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

export default function RamMandirAiAnimation({ 
  onOpenDoorAnimation, 
  onOpenDharmaDhwaj, 
  onOpenVolunteerModal 
}) {
  const { lang, t } = useLanguage();
  const [activeStage, setActiveStage] = useState(0); // 0: Ram Mandir, 1: 2006 History, 2: Seva Sankalp
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasHeroVideo, setHasHeroVideo] = useState(true);

  const stages = [
    {
      id: 'mandir',
      badge: lang === 'hi' ? '✨ AI दिव्य दर्शन • ५०० वर्षों की तपस्या का सुफल' : '✨ AI Divine Darshan • 500-Year Sacred Heritage',
      tag: lang === 'hi' ? 'अयोध्या धाम • ऐतिहासिक प्राण-प्रतिष्ठा' : 'Ayodhya Dham • Historic Consecration',
      title: lang === 'hi' ? 'भव्य श्री राम जन्मभूमि मंदिर' : 'Grand Shri Ram Janmabhoomi Temple',
      subtitle: lang === 'hi' ? 'मर्यादा पुरुषोत्तम प्रभु श्रीराम का दिव्य प्राकट्य' : 'Divine Abode of Maryada Purushottam Shri Ram',
      desc: lang === 'hi' 
        ? 'सनातन संस्कृति का गौरव, कोटि-कोटि सनातनियों की आस्था का पावन केंद्र और अयोध्या धाम में प्रभु श्रीराम का भव्य मंदिर।'
        : 'The eternal pride of Sanatan culture, epicenter of faith for billions, and the majestic Ayodhya Ram Mandir.',
      img: ramMandirImg,
      icon: Sparkles,
      features: lang === 'hi' 
        ? ['५०० वर्षों का संकल्प', 'दिव्य रामलला प्राकट्य', 'नागर शैली का अद्वितीय वास्तु']
        : ['500-Year Sacred Vow', 'Divine Ram Lalla Manifest', 'Nagara Style Sacred Architecture'],
    },
    {
      id: 'history',
      badge: lang === 'hi' ? '🚩 सन् २००६ से अनवरत सनातन सेवा' : '🚩 Since 2006 Continuous Sanatan Seva',
      tag: lang === 'hi' ? 'महाराजा छत्रसाल नगरी छतरपुर (म.प्र.)' : 'Maharaja Chhatrasal City Chhatarpur (M.P.)',
      title: lang === 'hi' ? 'श्री राम सेवा समिति, छतरपुर' : 'Shri Ram Seva Samiti, Chhatarpur',
      subtitle: lang === 'hi' ? 'दो दशकों से अखंड धर्म ध्वजा यात्रा व जनसेवा' : 'Two Decades of Dharma Dhwaj Yatra & Seva',
      desc: lang === 'hi' 
        ? 'साल २००६ में व्यापारियों व रामभक्तों द्वारा स्थापित, ५१+ फीट धर्म ध्वजा यात्रा व १३ संगठनात्मक मंडलों का विशाल सेवा परिवार।'
        : 'Founded in 2006 by devotees and traders, home to 51+ ft Dharma Dhwaj Yatra and 13 organizational mandals.',
      img: galleryImg,
      icon: Flag,
      features: lang === 'hi' 
        ? ['१९+ वर्षों की अनवरत सेवा', '५१+ फीट विशाल धर्म ध्वज', '१३ संगठनात्मक मंडल']
        : ['19+ Years Unbroken Seva', '51+ Feet Grand Dharma Flag', '13 Regional Mandals'],
    },
    {
      id: 'sankalp',
      badge: lang === 'hi' ? '🏛️ १३ संगठनात्मक मंडल • समस्त नगर सहभागिता' : '🏛️ 13 Mandals • Dedicated Community Service',
      tag: lang === 'hi' ? 'त्रिसूत्रीय पावन संकल्प' : 'Three Sacred Pillars of Samiti',
      title: lang === 'hi' ? 'सेवा • संस्कार • समर्पण' : 'Seva • Sanskar • Samarpan',
      subtitle: lang === 'hi' ? 'प्रभु श्रीराम के आदर्शों का जन-जन में संवर्धन' : 'Promoting Values & Ideals of Lord Ram',
      desc: lang === 'hi' 
        ? 'प्रभु श्रीराम के आदर्शों से प्रेरित होकर धार्मिक आयोजन, प्रभात फेरी, रामालय संकुल एवं सामाजिक समरसता का निरंतर संवर्धन।'
        : 'Inspired by Lord Ram: religious ceremonies, morning processions, Ramalaya complex, and community harmony.',
      img: ramMandirImg,
      icon: Sun,
      features: lang === 'hi' 
        ? ['अखंड सनातन सेवा संकल्प', 'प्रातः जागरण प्रभात फेरी', 'रामालय केंद्रीय संकुल']
        : ['Sanatan Seva Vow', 'Morning Awakening Prabhat Pheri', 'Central Ramalaya Complex'],
    },
  ];

  // 3 second stage loop for snappy AI animation
  const STAGE_DURATION = 3000; // ms
  const TICK_INTERVAL = 50; // ms

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_INTERVAL / STAGE_DURATION) * 100;
        if (next >= 100) {
          setActiveStage((current) => (current + 1) % stages.length);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const selectStage = (index) => {
    setActiveStage(index);
    setProgress(0);
  };

  const current = stages[activeStage];
  const IconComp = current.icon;

  return (
    <div className="relative w-full flex flex-col font-poppins">
      
      {/* =========================================================================
          1. TOP HERO SCREEN: 100% PURE IMAGE (FUTURE VIDEO REPLACEMENT SLOT)
          No text or big buttons obstructing the view. Ready for future <video>.
          ========================================================================= */}
      <div className="relative w-full h-[80vh] sm:h-[88vh] lg:h-[92vh] overflow-hidden bg-black flex flex-col justify-between border-b-2 border-amber-500/20 shadow-2xl">
        
        {hasHeroVideo ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster={ramWalkingSideProfileImg}
            onError={() => setHasHeroVideo(false)}
            className="w-full h-full object-cover filter brightness-[0.95] contrast-105"
          >
            <source src="/ram_darshan.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={ramWalkingSideProfileImg}
            alt="Lord Ram Walking Side Profile - Ayodhya Ram Mandir"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-105 animate-tracking-shot"
            style={{ willChange: 'transform' }}
          />
        )}

        {/* Subtle Ambient Vignette & Bottom Blend to Page Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#110202] via-transparent to-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(17,2,2,0.6)_100%)] pointer-events-none"></div>

        {/* Floating Golden Particles / Divine Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-red-600/15 rounded-full blur-3xl"></div>
        </div>

        {/* Top-Right Corner Floating Trigger: कपाट दर्शन (Door Darshan) */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20 flex items-center gap-2">
          {onOpenDoorAnimation && (
            <button
              onClick={onOpenDoorAnimation}
              className="px-4 py-2 rounded-full bg-red-950/90 hover:bg-red-900 border border-amber-400/70 text-amber-200 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] transition flex items-center gap-2 cursor-pointer backdrop-blur-md"
              title="मंदिर के कपाट खुलने का एनीमेशन देखें"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>🚩 कपाट दर्शन</span>
            </button>
          )}
        </div>

        {/* Bottom Center Indicator: Guiding the user down to text & buttons */}
        <div className="absolute bottom-6 inset-x-0 z-20 flex flex-col items-center justify-center text-center pointer-events-auto">
          <a
            href="#hero-details"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b0303]/90 hover:bg-[#2b0707] border border-amber-400/60 text-amber-300 text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span>{lang === 'hi' ? 'विवरण व सेवा संकल्प देखें' : 'View Details & Seva Sankalp'}</span>
            <ChevronDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform animate-bounce" />
          </a>
        </div>
      </div>

      {/* =========================================================================
          2. SHIFTED DOWN BELOW: PURE TEXT, BADGES, AND ACTION BUTTONS
          All previously overlapping text & buttons are now cleanly structured here!
          ========================================================================= */}
      <div id="hero-details" className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 text-center">
        
        {/* Stage Switcher Tabs & Progress bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stg.id}
                onClick={() => selectStage(idx)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 shadow-[0_0_15px_rgba(245,158,11,0.6)] scale-105'
                    : 'bg-red-950/60 text-amber-200/80 hover:text-white border border-amber-500/30 hover:bg-red-900/60'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-stone-950' : 'bg-amber-400'}`}></span>
                <span>{idx + 1}. {stg.title.split(' ')[0]} {stg.title.split(' ')[1] || ''}</span>
              </button>
            );
          })}

          <div className="flex items-center gap-1.5 ml-1">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-amber-500/40 text-amber-300 transition cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => selectStage(0)}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-amber-500/40 text-amber-300 transition cursor-pointer"
              title="Restart"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dynamic Progress Line */}
        <div className="w-48 sm:w-64 h-1.5 mx-auto rounded-full bg-stone-900 border border-amber-500/30 overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 transition-all ease-linear shadow-[0_0_10px_#f59e0b]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow">
          <IconComp className="w-4 h-4 text-amber-400" />
          <span>{current.tag}</span>
        </div>

        {/* Grand Title */}
        <h1 className={`text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text tracking-wide leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] mb-3 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
          {current.title}
        </h1>

        {/* Subtitle */}
        <div className="text-base sm:text-xl md:text-2xl text-amber-200 font-semibold mb-3 drop-shadow">
          {current.subtitle}
        </div>

        {/* Description Paragraph */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-amber-100/90 leading-relaxed font-normal mb-6 drop-shadow">
          {current.desc}
        </p>

        {/* Three Glowing Highlights / Runes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {current.features.map((feat, idx) => (
            <div
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-red-950/80 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Primary Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {/* Flagship Dharma Dhwaj Yatra Button */}
          <button
            onClick={onOpenDharmaDhwaj}
            className="group relative overflow-hidden px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 text-stone-950 hover:text-white shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:shadow-[0_0_35px_rgba(245,158,11,0.95)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border-2 border-amber-300 animate-pulse"
          >
            <Flag className="w-4 h-4 fill-stone-950 text-stone-950 group-hover:text-amber-200 group-hover:fill-amber-200 transition-colors shrink-0" />
            <span className="tracking-wide">{lang === 'hi' ? '🚩 धर्म ध्वजा यात्रा' : '🚩 Dharma Dhwaj Yatra'}</span>
            <span className="text-[10px] bg-red-950 text-amber-300 px-2 py-0.5 rounded-full font-extrabold border border-amber-400/50 shadow-xs">
              {lang === 'hi' ? 'विशेष इतिहास' : 'History'}
            </span>
          </button>

          <a
            href="#events"
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.hero.btnEvents}</span>
          </a>

          <a
            href="#pillars"
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm bg-red-950/70 hover:bg-red-900 border border-amber-500/40 text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 shadow cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.hero.btnPillars}</span>
          </a>

          <button
            onClick={onOpenVolunteerModal}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm bg-transparent hover:bg-amber-500/10 border border-amber-400/50 text-amber-300 hover:text-amber-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>{t.hero.btnVolunteer}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
