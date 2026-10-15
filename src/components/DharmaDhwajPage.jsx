import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Flag, 
  Sparkles, 
  Calendar, 
  Building2, 
  Sun, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  MapPin, 
  Share2, 
  ArrowUp,
  Bookmark,
  Scroll
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { galleryImg, logoImg, dharmikImg } from '../assets/images';

export default function DharmaDhwajPage({ onBackToHome, onOpenVolunteerModal }) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'छतरपुर की रामनवमी की शोभायात्रा (धर्म ध्वजा यात्रा)',
        text: 'श्री राम सेवा समिति, छतरपुर द्वारा आयोजित भव्य धर्म ध्वजा यात्रा का ऐतिहासिक आलेख एवं प्रेस संकलन।',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#110202] text-amber-50 font-poppins selection:bg-amber-600 selection:text-white">
      {/* 1. Top Sub-Navigation Bar */}
      <div className="sticky top-0 z-30 bg-[#190404]/95 backdrop-blur-md border-b border-amber-500/30 px-4 sm:px-6 lg:px-8 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Back Button */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950 via-[#330707] to-red-950 hover:from-red-900 hover:to-amber-950 text-amber-200 hover:text-white border border-amber-400/50 hover:border-amber-300 text-xs sm:text-sm font-semibold transition-all duration-200 shadow cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>{lang === 'hi' ? '← मुख्य पृष्ठ पर वापस जाएँ' : '← Back to Home'}</span>
          </button>

          {/* Quick Page Indicator */}
          <div className="hidden md:flex items-center gap-2 text-xs text-amber-300/80">
            <span className="text-amber-400">🚩</span>
            <span className="font-semibold">{lang === 'hi' ? 'धर्म ध्वजा यात्रा विशेष आलेख' : 'Dharma Dhwaja Yatra History'}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-medium transition flex items-center gap-1.5 cursor-pointer"
              title="शेयर करें"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{copied ? (lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Copied!') : (lang === 'hi' ? 'शेयर' : 'Share')}</span>
            </button>

            <button
              onClick={onOpenVolunteerModal}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(245,158,11,0.4)] transition cursor-pointer"
            >
              {lang === 'hi' ? 'स्वयंसेवक बनें' : 'Join Seva'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Full Width Grand Hero Header */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-amber-500/25 overflow-hidden bg-gradient-to-b from-[#220505] via-[#1a0404] to-[#110202]">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-6xl mx-auto text-center relative z-10">
          {/* Sacred Ribbon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-semibold mb-5 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>
              {lang === 'hi' 
                ? '॥ महाराजा छत्रसाल की पावन नगरी छतरपुर • ऐतिहासिक दस्तावेज व प्रेस संकलन ॥' 
                : '॥ Sacred Land of Maharaja Chhatrasal • Historical Press Archive ॥'}
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          {/* Main Title */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold gold-gradient-text tracking-wide leading-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
            {lang === 'hi' 
              ? 'छतरपुर की रामनवमी की शोभायात्रा' 
              : 'Chhatarpur Ram Navami Shobhayatra'}
            <span className="block text-2xl sm:text-3xl md:text-4xl text-amber-200/90 mt-2 font-bold font-poppins">
              {lang === 'hi' ? '(भव्य धर्म ध्वजा यात्रा)' : '(Grand Dharma Dhwaj Yatra)'}
            </span>
          </h1>

          {/* Golden Divider Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-5"></div>

          {/* Byline & Author Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-950/80 via-[#2f0707] to-red-950/80 border border-amber-500/40 shadow-lg text-amber-100 text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-semibold">
              <Scroll className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300">
                {lang === 'hi' ? 'आलेख एवं ऐतिहासिक संकलन:' : 'Article & Historical Compilation:'}
              </span>
              <span className="text-white font-bold">पंकज पहारिया</span>
              <span className="text-amber-400">एवं</span>
              <span className="text-white font-bold">राकेश तिवारी</span>
            </div>
            <span className="text-amber-500/60 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-amber-300/90">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'सन् २००६ से अनवरत सनातन सेवा' : 'Since 2006 Continuous Seva'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full Width Article Body (Simple Smooth Fade-in) */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Featured Image & Highlights Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] mb-12 group">
          <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden relative">
            <img 
              src={galleryImg} 
              alt="Dharma Dhwaja Yatra Chhatarpur" 
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#110202] via-[#110202]/50 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 bg-gradient-to-t from-[#120202] via-[#120202]/90 to-transparent">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-2">
              <Flag className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{lang === 'hi' ? 'छतरपुर नगर की ऐतिहासिक धर्म ध्वजा यात्रा' : 'Historical Dharma Dhwaj Yatra'}</span>
            </div>
            <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed max-w-3xl">
              {lang === 'hi' 
                ? '५१ फीट ऊंचा विशाल धर्म ध्वज, सुसज्जित रथ, रामभक्तों की भगवा वाहिनी और छतरपुर के जन-जन का अटूट श्रद्धा भाव।'
                : '51-ft majestic Dharma Dhwaj, decorated chariots, saffron-clad devotees, and the deep devotion of Chhatarpur citizens.'}
            </p>
          </div>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#240606] to-[#170303] border border-amber-500/30 text-center shadow">
            <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-2 text-amber-400">
              <Flag className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha">५१+ फीट</div>
            <div className="text-xs text-amber-200/80 font-medium mt-0.5">{lang === 'hi' ? 'विशाल धर्म ध्वज पताका' : 'Majestic Dharma Flag'}</div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#240606] to-[#170303] border border-amber-500/30 text-center shadow">
            <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-2 text-amber-400">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha">१३ संगठनात्मक मंडल</div>
            <div className="text-xs text-amber-200/80 font-medium mt-0.5">{lang === 'hi' ? 'संपूर्ण छतरपुर नगर में विस्तार' : 'Covering All 13 Mandals'}</div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#240606] to-[#170303] border border-amber-500/30 text-center shadow">
            <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-2 text-amber-400">
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha">१९+ वर्ष</div>
            <div className="text-xs text-amber-200/80 font-medium mt-0.5">{lang === 'hi' ? 'सन् २००६ से अनवरत मिसाल' : 'Since 2006 Continuous Seva'}</div>
          </div>
        </div>

        {/* Complete Historical Narrative (Clean Smooth Fade-in, No Typewriter Delay) */}
        <article className="space-y-8 text-base sm:text-lg leading-relaxed text-amber-100/90 font-poppins">
          
          {/* Section 1: प्रभु श्री राम: भारत की आत्मा */}
          <div className="bg-[#1b0404]/90 p-6 sm:p-8 rounded-2xl border border-amber-500/25 shadow-lg space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha flex items-center gap-2.5 pb-2 border-b border-amber-500/20">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span>प्रभु श्री राम: भारत की आत्मा और रामनवमी का अनादि पर्व</span>
            </h2>
            <p className="text-amber-100/95 leading-relaxed">
              भगवान राम केवल एक नाम ही नहीं, बल्कि हमारे देश की आत्मा हैं। वे जन-जन के कंठहार हैं, मनप्राण हैं और हमारे जीवन का पावन आधार हैं। उनसे भारत है, और भारत के प्रतिरूप के रूप में प्रभु श्री राम में ही इस देश के कोटि-कोटि जन अपने जीवन की सार्थकता पाते हैं।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              भगवान विष्णु के सातवें अवतार प्रभु श्री राम के जन्म दिवस यानी रामनवमी का पर्व हमारे देश में अनादिकाल से धूमधाम और उत्साह से मनाया जाता है। उनके जन्म दिवस पर शोभायात्रा का प्रचलन भी पूर्व काल से ही है। बुंदेलखंड की पावन धरा और महाराजा छत्रसाल की नगरी छतरपुर में भी रामनवमी की शोभायात्रा का इतिहास पुराना है।
            </p>
          </div>

          {/* Section 2: साल 2006 का पावन मोड़ */}
          <div className="bg-[#1b0404]/90 p-6 sm:p-8 rounded-2xl border border-amber-500/25 shadow-lg space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha flex items-center gap-2.5 pb-2 border-b border-amber-500/20">
              <Flag className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
              <span>साल २००६: वह ऐतिहासिक मोड़ जिसने छतरपुर को पूरे देश में मिसाल बना दिया</span>
            </h2>
            
            {/* Highlighted Quote Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/20 via-red-950/70 to-amber-500/15 border-l-4 border-amber-500 text-amber-200 font-semibold leading-relaxed shadow-inner">
              🚩 लेकिन साल २००६ में एक ऐसा परिवर्तन हुआ, जिसके परिणामस्वरूप आज छतरपुर की रामनवमी बुंदेलखंड ही नहीं, बल्कि समूचे देश में जानी-पहचानी जाने लगी है।
            </div>

            <p className="text-amber-100/95 leading-relaxed">
              दरअसल, साल २००६ में छतरपुर के हिंदुओं के मन में एक ऐसा विचार आया, जो धीरे-धीरे विशाल वटवृक्ष में तब्दील हो गया, और छतरपुर की रामनवमी अब उस मुकाम पर पहुंच चुकी है, जहां देश भर के लिए यह एक मिसाल के रूप में जानी जाने लगी है।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              पहले भी छतरपुर में रामनवमी की शोभायात्रा निकाली जाती थी, लेकिन इसे देखकर छतरपुर के लोगों—खासकर <strong>राम गली, बजरिया और चौक बाजार के व्यापारियों</strong> ने सोचा कि क्यों न शोभायात्रा को भव्य और दिव्य बनाया जाए? और इसी समय व्यापारियों ने मिलकर एक बैठक की, जिसमें <strong>श्री राम सेवा समिति</strong> का गठन हुआ।
            </p>

            {/* Sacred Dedication Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-red-950/70 border border-amber-500/30 text-amber-100 leading-relaxed">
              <p className="font-semibold text-amber-300 mb-1">॥ श्री हनुमान जी महाराज के चरणों में समर्पण ॥</p>
              समिति का प्रमुख प्रभु श्री राम के अनन्य भक्त और हम सब के आराध्य <strong>श्री हनुमान जी महाराज</strong> को मानकर शोभायात्रा की समूची रूपरेखा तय की गई। हिंदू समाज के हर वर्ग और हर संगठन के प्रमुखों को बुलाकर बैठकों का दौर शुरू हुआ, और सभी ने छतरपुर की रामनवमी की शोभायात्रा को भव्य और दिव्य बनाने का पावन संकल्प लिया।
            </div>

            <p className="text-amber-100/90 leading-relaxed">
              यही वह साल था कि छतरपुर में पहली बार बहुत बड़ी शोभायात्रा निकाली गई, जिसमें हजारों-हजारों लोग शामिल हुए। धीरे-धीरे यह शोभायात्रा हिंदुओं की एक प्रमुख पहचान बन गई, और साल दर साल शोभायात्रा में नए-नए प्रयोग किए गए।
            </p>

            <div className="p-3.5 rounded-lg bg-amber-500/15 border border-amber-400/40 text-amber-200 font-bold text-sm sm:text-base text-center">
              ✨ आज उसी का परिणाम है कि हम छतरपुर की श्री रामनवमी की शोभायात्रा को जगन्नाथ पुरी की शोभायात्रा जैसा विश्व प्रसिद्ध बनाने का सपना संजोए हुए हैं।
            </div>
          </div>

          {/* Section 3: हनुमान टौरिया में ध्वज फहराकर शुरू होता है महोत्सव */}
          <div className="bg-[#1b0404]/90 p-6 sm:p-8 rounded-2xl border border-amber-500/25 shadow-lg space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha flex items-center gap-2.5 pb-2 border-b border-amber-500/20">
              <Sun className="w-5 h-5 text-amber-400 shrink-0" />
              <span>हनुमान टौरिया में ध्वज फहराकर शुरू होता है महोत्सव</span>
            </h2>
            <p className="text-amber-100/95 leading-relaxed">
              छतरपुर में श्री रामनवमी उत्सव और शोभायात्रा की तैयारी को लेकर सबसे पहले छतरपुर की प्रसिद्ध धार्मिक आस्था का केंद्र <strong>श्री हनुमान टौरिया</strong> में एक विशाल ध्वज पताका फहराई जाती है।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              इस ध्वज पताका को ढोल-नगाड़ों के साथ एवं संतों के सानिध्य में <strong>चौक बाजार से हनुमान टौरिया तक पैदल चलकर</strong>, ध्वज पताका को सिर पर रखकर, पुष्प वर्षा होते हुए यह यात्रा हनुमान टौरिया पहुंचती है, जिससे शोभायात्रा उत्सव का मंगल उद्घोष होता है।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              चूंकि छतरपुर के लोगों का मानना है कि प्रभु श्री राम के जन्म दिवस रामनवमी की शोभायात्रा श्री हनुमान जी महाराज के नेतृत्व और आशीर्वाद से ही संपन्न होती है। इसलिए शोभायात्रा में शांति, सुख, समृद्धि बनी रहे तथा नकारात्मक ऊर्जा समाप्त होकर सभी हिन्दू भाइयों में सकारात्मक ऊर्जा का संचार हो सके, इसलिए हनुमान टौरिया में ध्वज पताका फहराकर इस बड़े महोत्सव का शुभारंभ होता है।
            </p>
          </div>

          {/* Section 4: रामालय: 20-25 दिन पूर्व संतों द्वारा शुभारंभ */}
          <div className="bg-[#1b0404]/90 p-6 sm:p-8 rounded-2xl border border-amber-500/25 shadow-lg space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha flex items-center gap-2.5 pb-2 border-b border-amber-500/20">
              <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>रामालय: 20-25 दिन पूर्व पूज्य संतों द्वारा पावन शुभारंभ</span>
            </h2>
            <p className="text-amber-100/95 leading-relaxed">
              श्री रामनवमी की शोभायात्रा से २० से २५ दिन पहले पूज्य संतों द्वारा <strong>"रामालय"</strong> कार्यालय का शुभारंभ किया जाता है एवं पिछले वर्ष का आय-व्यय संपूर्ण पारदर्शिता के साथ प्रस्तुत किया जाता है।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              शोभायात्रा को लेकर आगामी रूपरेखा बनाई जाती है। पिछले साल की सजावट करने वालों का सम्मान भी किया जाता है, जिससे आने वाली शोभायात्रा के लिए वे उत्साह से कार्य पर लग जाते हैं। और इसी दिन से रामालय से कार्य विधिवत प्रारंभ हो जाता है।
            </p>
          </div>

          {/* Section 5: प्रभात फेरी: 10 दिन पूर्व से नगर में शंखनाद */}
          <div className="bg-[#1b0404]/90 p-6 sm:p-8 rounded-2xl border border-amber-500/25 shadow-lg space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold gold-gradient-text font-rozha flex items-center gap-2.5 pb-2 border-b border-amber-500/20">
              <Sun className="w-5 h-5 text-amber-400 shrink-0" />
              <span>प्रभात फेरी: 10 दिन पूर्व से छतरपुर नगर में पावन शंखनाद</span>
            </h2>
            <p className="text-amber-100/95 leading-relaxed">
              श्री रामनवमी की शोभायात्रा के लगभग १० दिन पूर्व से ही पूरे छतरपुर शहर में प्रतिदिन प्रभात फेरी निकाली जाती है। जिसका उद्देश्य सभी हिंदू भाइयों में इस बात का शंखनाद करना है कि रामनवमी की शोभायात्रा जल्द ही आने वाली है और अधिक से अधिक संख्या में पूरे उत्साह, जोश और उमंग के साथ सभी लोग शोभायात्रा में शामिल हों।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              यह प्रभात फेरी प्रतिदिन सुबह के समय शहर के किसी मंदिर या चौक बाजार से शुरू होकर रोज अलग-अलग क्षेत्र में जाती है और इसमें बड़ी संख्या में शहर के लोग शामिल होते हैं, जिनमें युवाओं की संख्या सबसे अधिक होती है।
            </p>
            <p className="text-amber-100/90 leading-relaxed">
              प्रभात फेरी के दौरान भगवान श्री राम के भजनों का पाठ किया जाता है। शहर भर में जगह-जगह प्रभात फेरी के स्वागत के लिए लोग तरह-तरह की मिठाइयां खिलाते हैं और ढोल-नगाड़ों के साथ फूलों की वर्षा की जाती है।
            </p>

            {/* Chhatrasal Tribute Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950 via-[#350808] to-red-950 border border-amber-400/40 flex items-center gap-3 text-amber-200">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-semibold text-sm sm:text-base">
                इसी पावन क्रम के बीच में एक दिन महाराजा छत्रसाल की मूर्ति पर माल्यार्पण कर बुंदेलखंड के गौरव को नमन किया जाता है।
              </span>
            </div>
          </div>
        </article>

        {/* 4. Bottom Action Banner & Navigation */}
        <div className="mt-14 pt-8 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-950/80 via-[#260606] to-red-950/80 p-6 sm:p-8 rounded-2xl border border-amber-500/30">
          <div>
            <h3 className="text-lg sm:text-xl font-bold gold-gradient-text font-rozha">
              {lang === 'hi' ? 'श्री राम सेवा समिति से जुड़ें' : 'Join Shri Ram Seva Samiti'}
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              {lang === 'hi' 
                ? 'आगामी रामनवमी महोत्सव एवं धर्म ध्वजा यात्रा में अपनी सेवा समर्पित करें।'
                : 'Dedicate your voluntary service in the upcoming Ram Navami festival.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onBackToHome}
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? 'मुख्य पृष्ठ पर लौटें' : 'Back to Home'}</span>
            </button>

            <button
              onClick={onOpenVolunteerModal}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] transition cursor-pointer flex items-center gap-1.5"
            >
              <HeartHandshake className="w-4 h-4 text-stone-950 group-hover:text-amber-200" />
              <span>{lang === 'hi' ? 'स्वयंसेवक फॉर्म भरें' : 'Join as Volunteer'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-red-950 border border-amber-500/40 text-amber-300 hover:text-white transition cursor-pointer"
              title="शीर्ष पर जाएं"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Source citation */}
        <div className="text-center mt-8 text-xs text-amber-400/60 font-poppins">
          © श्री राम सेवा समिति, छतरपुर (म.प्र.) • आलेख संकलन: पंकज पहारिया एवं राकेश तिवारी
        </div>
      </main>
    </div>
  );
}
