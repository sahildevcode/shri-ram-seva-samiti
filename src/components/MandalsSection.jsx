import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Search, 
  Phone, 
  MapPin, 
  UserCheck, 
  Users, 
  Sparkles, 
  Flame, 
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function MandalsSection({ onOpenVolunteerModal }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all' or 'hasPhone'
  const [showAll, setShowAll] = useState(false);

  const mandalsData = t.mandals?.list || [];

  // Filter mandals based on search query & filter type
  const filteredMandals = mandalsData.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.coordinator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.phone && item.phone.includes(searchQuery)) ||
      (item.area && item.area.toLowerCase().includes(searchQuery.toLowerCase()));

    if (filterType === 'hasPhone') {
      return matchesSearch && Boolean(item.phone);
    }
    return matchesSearch;
  });

  // Show only 8 mandals by default; reveal all 13 on "See More" click
  const visibleMandals = showAll || searchQuery ? filteredMandals : filteredMandals.slice(0, 8);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [lang, visibleMandals.length]);

  return (
    <section
      id="mandals"
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-poppins"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs mb-3 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.mandals?.badge || 'छतरपुर नगर संगठनात्मक विस्तार'}</span>
        </div>

        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
          {t.mandals?.title || 'श्री राम सेवा समिति - समस्त मंडल'}
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>

        <p className="text-amber-100/85 text-sm sm:text-base leading-relaxed">
          {t.mandals?.subtitle || 'छतरपुर नगर के समस्त १३ संगठनात्मक मंडल, उनके अधिकृत संयोजक एवं सेवा क्षेत्र'}
        </p>
      </div>

      {/* Featured Highlight Card: Total 13 Mandals Counter */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#290707] via-[#1f0505] to-[#140202] border-2 border-amber-500/40 shadow-[0_0_35px_rgba(245,158,11,0.2)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.mandals?.totalCountBadge || 'कुल १३ अधिकृत मंडल'}</span>
            </div>

            <h3 className={`text-2xl sm:text-3xl font-bold text-white ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              {lang === 'hi' ? '🚩 छतरपुर नगर में १३ मंडलों का पावन संगठन 🚩' : '🚩 13 Sacred Mandals Across Chhatarpur 🚩'}
            </h3>

            <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
              {t.mandals?.countDesc}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-200 text-xs">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.mandals?.statUnits || '१३ क्षेत्रीय मंडल'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-200 text-xs">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.mandals?.statSevadar || '२०+ समर्पित संयोजक व सेवादार'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-200 text-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.mandals?.statArea || 'समस्त छतरपुर नगर क्षेत्र'}</span>
              </span>
            </div>
          </div>

          {/* Grand Highlight Badge (Number 13) */}
          <div className="shrink-0 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-red-950/50 to-amber-500/10 border-2 border-amber-500/50 shadow-inner text-center min-w-[160px]">
            <span className="text-4xl sm:text-6xl font-black gold-gradient-text font-cinzel leading-none drop-shadow">
              {lang === 'hi' ? '१३' : '13'}
            </span>
            <span className="text-xs sm:text-sm font-bold text-amber-300 mt-2 uppercase tracking-wider">
              {lang === 'hi' ? 'समस्त मंडल' : 'Total Mandals'}
            </span>
            <span className="text-[11px] text-amber-100/70 mt-0.5">
              {lang === 'hi' ? 'छतरपुर (म.प्र.)' : 'Chhatarpur (M.P.)'}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Search & Filter Bar */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#1c0404] via-[#240606] to-[#1c0404] border border-amber-500/25">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.mandals?.searchPlaceholder || 'मंडल या संयोजक का नाम खोजें...'}
            className="w-full bg-[#120202] border border-amber-500/30 rounded-xl pl-10 pr-4 py-2 text-sm text-amber-100 placeholder-amber-400/40 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-amber-400/60 hover:text-amber-200"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills & Result Count */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                filterType === 'all'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-red-950/60 text-amber-200 hover:bg-red-900/60 border border-amber-500/30'
              }`}
            >
              {t.mandals?.filterAll || 'सभी १३ मंडल'}
            </button>
            <button
              onClick={() => setFilterType('hasPhone')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
                filterType === 'hasPhone'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-red-950/60 text-amber-200 hover:bg-red-900/60 border border-amber-500/30'
              }`}
            >
              <Phone className="w-3 h-3" />
              <span>{lang === 'hi' ? 'फोन संपर्क' : 'With Phone'}</span>
            </button>
          </div>

          <span className="text-xs text-amber-300/80 bg-black/40 px-2.5 py-1 rounded-md border border-amber-500/20">
            {filteredMandals.length} {t.mandals?.resultsFound || 'मंडल'}
          </span>
        </div>
      </div>

      {/* Grid of the 13 Mandals */}
      {filteredMandals.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-2xl bg-[#1a0404]/60 border border-amber-500/20 text-amber-200">
          <p className="text-base font-semibold">कोई मंडल नहीं मिला।</p>
          <p className="text-xs text-amber-400/70 mt-1">कृपया अन्य नाम या शब्द से खोजें।</p>
          <button
            onClick={() => { setSearchQuery(''); setFilterType('all'); }}
            className="mt-3 px-4 py-1.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400 transition"
          >
            सभी मंडल देखें
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleMandals.map((mandal, idx) => (
            <div
              key={mandal.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative rounded-2xl p-5 bg-gradient-to-br from-[#1e0505] via-[#240808] to-[#140202] border border-amber-500/25 hover:border-amber-400/70 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle radiant background glow on hover */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none"></div>

              <div>
                {/* Top Badge: Number and Location */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold font-cinzel">
                    {lang === 'hi' ? `मंडल ${mandal.num}` : `Mandal ${mandal.num}`}
                  </span>
                  <span className="text-[10px] text-amber-200/70 bg-red-950/70 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                    <span>छतरपुर</span>
                  </span>
                </div>

                {/* Mandal Title */}
                <h3 className={`text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {mandal.name}
                </h3>

                {/* Area Tag */}
                {mandal.area && (
                  <p className="text-[11px] text-amber-300/80 mb-3 flex items-start gap-1 leading-snug">
                    <span className="text-amber-400 font-semibold shrink-0">📍</span>
                    <span>{mandal.area}</span>
                  </p>
                )}

                {/* Description */}
                {mandal.desc && (
                  <p className="text-xs text-amber-100/75 leading-relaxed mb-4">
                    {mandal.desc}
                  </p>
                )}
              </div>

              {/* Bottom Section: Coordinator & Contact */}
              <div className="pt-3 border-t border-amber-500/20 space-y-2.5 mt-auto">
                {/* Coordinator Name */}
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5 text-amber-400 text-xs">
                    👤
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-medium block">
                      {t.mandals?.coordinatorLabel || 'संयोजक / सेवा प्रभारी'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors block truncate">
                      {mandal.coordinator}
                    </span>
                  </div>
                </div>

                {/* Phone Call / In-charge Badge */}
                {mandal.phone ? (
                  <a
                    href={`tel:${mandal.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-700/80 to-green-600/80 hover:from-emerald-600 hover:to-green-500 text-white text-xs font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-200 animate-pulse" />
                    <span>{mandal.phone} ({t.mandals?.callBtn || 'कॉल करें'})</span>
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-between py-1 px-2.5 rounded-lg bg-red-950/40 border border-amber-500/20 text-[11px] text-amber-300/80">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      <span>{lang === 'hi' ? 'समिति अधिकृत' : 'Authorized Unit'}</span>
                    </span>
                    <span className="text-[10px] text-amber-400/70">
                      {lang === 'hi' ? 'सक्रिय मंडल' : 'Active'}
                    </span>
                  </div>
                )}

                {/* Volunteer Action */}
                {onOpenVolunteerModal && (
                  <button
                    onClick={onOpenVolunteerModal}
                    className="w-full text-center text-[11px] text-amber-400/90 hover:text-amber-200 py-1 font-medium transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <HeartHandshake className="w-3 h-3" />
                    <span>{t.mandals?.joinMandalBtn || 'इस मंडल से जुड़ें'}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Centered "See More" Button */}
      {!searchQuery && filteredMandals.length > 8 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-3 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 cursor-pointer border border-amber-400/40"
          >
            <span>{showAll ? 'See Less' : 'See More'}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
