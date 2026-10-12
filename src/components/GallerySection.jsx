import React, { useState, useEffect, useRef } from 'react';
import { 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  MapPin 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const { t, lang } = useLanguage();

  const galleryItems = [
    {
      id: 1,
      title: lang === 'hi' ? 'भव्य धार्मिक आयोजन एवं मंदिर द्वार दर्शन' : 'Grand Dharmik Aayojan & Mandir Dwar Darshan',
      category: 'dharmik',
      categoryName: lang === 'hi' ? 'धार्मिक आयोजन' : 'Dharmik Aayojan',
      image: './assets/dharmik_aayojan.png',
      location: lang === 'hi' ? 'छतरपुर' : 'Chhatarpur',
      desc: lang === 'hi'
        ? 'रामनवमी व श्रीराम जन्मोत्सव के पावन अवसर पर भव्य पुष्प सज्जा एवं श्रद्धालुओं का दर्शन प्रवाह।'
        : 'Ram Navami aur Shri Ram Janmotsav par grand floral decoration aur bhakto ki bheed.',
    },
    {
      id: 2,
      title: lang === 'hi' ? 'समाज सेवा एवं विशाल महाप्रसाद भंडारा' : 'Samaj Seva & Grand Mahaprasad Bhandara',
      category: 'seva',
      categoryName: lang === 'hi' ? 'समाज सेवा' : 'Samaj Seva',
      image: './assets/samaj_seva.png',
      location: lang === 'hi' ? 'छतरपुर सेवा प्रांगण' : 'Chhatarpur Seva Ground',
      desc: lang === 'hi'
        ? 'समिति के स्वयंसेवकों द्वारा श्रद्धालुओं एवं जनसामान्य हेतु निष्काम भाव से महाप्रसाद वितरण।'
        : 'Samiti ke volunteers dwara devotees aur common public ke liye selfless prasad distribution.',
    },
    {
      id: 3,
      title: lang === 'hi' ? 'ऐतिहासिक रामनवमी शोभायात्रा एवं भगवा वाहिनी' : 'Historic Ram Navami Shobhayatra & Saffron Rally',
      category: 'shobhayatra',
      categoryName: lang === 'hi' ? 'शोभायात्रा व ध्वज' : 'Shobhayatra & Dhwaj',
      image: './assets/gallery_thumb.png',
      location: lang === 'hi' ? 'छत्रसाल चौक, छतरपुर' : 'Chhatrasal Chowk, Chhatarpur',
      desc: lang === 'hi'
        ? 'भगवा साफा, धर्म ध्वज और श्रीराम के जयकारों के साथ नगर भ्रमण करती विशाल शोभायात्रा।'
        : 'Saffron safa, Dharma Dhwaj aur Jai Shri Ram naaro ke sath shahar mein nikali grand shobhayatra.',
    },
    {
      id: 4,
      title: lang === 'hi' ? 'समिति बैठक एवं आगामी आयोजनों की रूपरेखा' : 'Samiti Meeting & Upcoming Event Planning',
      category: 'baithak',
      categoryName: lang === 'hi' ? 'संगठनात्मक बैठकें' : 'Samiti Meetings',
      image: './assets/hamse_judein.png',
      location: lang === 'hi' ? 'समिति कार्यालय, छतरपुर' : 'Samiti Office, Chhatarpur',
      desc: lang === 'hi'
        ? 'पदाधिकारियों एवं कार्यकर्ताओं द्वारा रामनवमी जन्मोत्सव की तैयारियों को लेकर विचार-विमर्श।'
        : 'Officers aur members dwara Ram Navami Janmotsav ki taiyariyo par discussion meeting.',
    },
    {
      id: 5,
      title: lang === 'hi' ? 'श्री राम सेवा समिति आधिकारिक प्रतीक चिह्न' : 'Shri Ram Seva Samiti Official Logo Emblem',
      category: 'dharmik',
      categoryName: lang === 'hi' ? 'धार्मिक आयोजन' : 'Dharmik Aayojan',
      image: './assets/logo.jpg',
      location: lang === 'hi' ? 'छतरपुर (मध्य प्रदेश)' : 'Chhatarpur (Madhya Pradesh)',
      desc: lang === 'hi'
        ? 'सेवा, संस्कार और समर्पण के ध्येय के साथ प्रभु श्रीराम की पावन छवि युक्त अधिकृत लोगो।'
        : 'Seva, Sanskar aur Samarpan motto ke sath Prabhu Shri Ram ka divine official logo.',
    },
    {
      id: 6,
      title: lang === 'hi' ? 'श्रावण मास पवित्र कांवड़ यात्रा' : 'Shravan Maas Sacred Kanwar Yatra',
      category: 'shobhayatra',
      categoryName: lang === 'hi' ? 'शोभायात्रा व ध्वज' : 'Shobhayatra & Dhwaj',
      image: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?q=80&w=1000&auto=format&fit=crop',
      location: lang === 'hi' ? 'पन्ना नाका से महाकालेश्वर' : 'Panna Naka se Mahakaleshwar',
      desc: lang === 'hi'
        ? 'बोल बम एवं हर-हर महादेव के जयकारों के साथ पवित्र जलाभिषेक हेतु कांवड़ियों का उत्साह।'
        : 'Bol Bam aur Har Har Mahadev ke naaro ke sath jalabhishek karne nikle kanwariyas ka josh.',
    },
    {
      id: 7,
      title: lang === 'hi' ? 'सामूहिक दीपोत्सव एवं आरती संकीर्तन' : 'Grand Deepotsav & Aarti Sankirtan',
      category: 'dharmik',
      categoryName: lang === 'hi' ? 'धार्मिक आयोजन' : 'Dharmik Aayojan',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
      location: lang === 'hi' ? 'राम मंदिर प्रांगण, छतरपुर' : 'Ram Mandir Campus, Chhatarpur',
      desc: lang === 'hi'
        ? 'हजारों दीपों की दिव्य ज्योति में संपन्न महाआरती एवं संकीर्तन का अलौकिक दृश्य।'
        : 'Hazaron deepako ki divine light mein hui Maha Aarti aur bhajan sandhya ka scene.',
    },
    {
      id: 8,
      title: lang === 'hi' ? 'अन्नक्षेत्र एवं सामाजिक समरसता सेवा' : 'Annakshetra & Social Harmony Service',
      category: 'seva',
      categoryName: lang === 'hi' ? 'समाज सेवा' : 'Samaj Seva',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop',
      location: lang === 'hi' ? 'छतरपुर' : 'Chhatarpur',
      desc: lang === 'hi'
        ? 'समिति द्वारा निरंतर संचालित दीन-दुखियों व श्रद्धालुओं की सेवा में समर्पित अन्नक्षेत्र।'
        : 'Samiti dwara regularly chalaaya jaane wala food distribution camp.',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current ? gridRef.current.children : [],
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter, lang]);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedImage.id);
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIdx]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedImage.id);
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIdx]);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-poppins"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs mb-3">
          <Images className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.gallery.badge}</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
          {t.gallery.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 text-sm sm:text-base">
          {t.gallery.desc}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {t.gallery.filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === f.key
                ? 'bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-red-950/40 text-amber-200/80 hover:bg-red-900/40 border border-amber-500/20 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Image Gallery Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative rounded-2xl overflow-hidden bg-[#1c0404] border border-amber-500/25 hover:border-amber-400/60 shadow-lg hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] cursor-pointer transition-all duration-400 transform hover:-translate-y-1.5"
          >
            {/* Image Container with Smooth Fade & Zoom */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-black/40">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150202] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity"></div>

              {/* View Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-3 rounded-full bg-amber-500/80 text-stone-950 backdrop-blur-xs transform scale-75 group-hover:scale-100 transition-transform shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>

              {/* Category Tag Badge */}
              <div className="absolute top-3 left-3 bg-red-950/90 text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-amber-500/40 backdrop-blur-xs">
                {item.categoryName}
              </div>
            </div>

            {/* Caption */}
            <div className="p-4">
              <h4 className={`text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                {item.title}
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] text-amber-300/70 mt-1">
                <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{item.location}</span>
              </div>
              <p className="mt-2 text-xs text-amber-100/70 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Fade-In Effect */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#180404] border border-amber-500/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-red-950/80 hover:bg-red-800 text-amber-300 hover:text-white border border-amber-500/40 transition shadow"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-red-950/80 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 transition shadow"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-red-950/80 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 transition shadow"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image View */}
            <div className="max-h-[70vh] w-full flex items-center justify-center bg-black overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain transition-all duration-500 transform"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-gradient-to-t from-[#140202] to-[#1f0505] border-t border-amber-500/20">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-xs text-amber-400 bg-red-950 px-3 py-0.5 rounded-full border border-amber-500/30">
                  {selectedImage.categoryName}
                </span>
                <span className="text-xs text-amber-300/80 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedImage.location}</span>
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold text-white ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-sm text-amber-100/85 leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
