import React, { useEffect, useRef } from 'react';
import { 
  History, 
  AlertCircle, 
  FileText, 
  CheckCircle, 
  Newspaper, 
  ShieldAlert, 
  Calendar,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const timelineItemsRef = useRef([]);

  const timelineData = [
    {
      year: '2008',
      title: 'प्रारंभिक सार्वजनिक संदर्भ',
      source: 'Hindi Oneindia समाचार रिपोर्ट',
      date: '14 अप्रैल 2008',
      desc: '14 अप्रैल 2008 की समाचार रिपोर्ट में छतरपुर की रामनवमी शोभायात्रा के आयोजक के रूप में श्री राम सेवा समिति का सार्वजनिक उल्लेख मिलता है। यह समिति की ऐतिहासिक गतिविधियों का एक मुख्य प्रमाण है।',
      tag: 'शोभायात्रा संदर्भ',
    },
    {
      year: '2023',
      title: 'धार्मिक एवं सांस्कृतिक गतिविधियाँ',
      source: 'मध्य प्रदेश राज्य समाचार संदर्भ',
      date: 'अगस्त 2023',
      desc: 'अगस्त 2023 में छतरपुर में समिति द्वारा भव्य कांवड़ यात्रा आयोजित किए जाने की रिपोर्ट प्रकाशित हुई, जिसमें सनातन संस्कृति व सामाजिक समरसता का भव्य स्वरूप परिलक्षित हुआ।',
      tag: 'कांवड़ यात्रा',
    },
    {
      year: '2024',
      title: 'धर्म ध्वज यात्रा एवं 19वां जन्मोत्सव',
      source: 'Hindi News Portal रिपोर्ट',
      date: '23 मार्च 2024',
      desc: '23 मार्च 2024 की रिपोर्ट में रामनवमी के 19वें वर्ष के आयोजन की तैयारियों और भव्य धर्म ध्वज यात्रा का उल्लेख है। (जिससे जन्मोत्सव आयोजन का आरंभ लगभग 2006 के आसपास होने का संकेत मिलता है)।',
      tag: '19वां जन्मोत्सव',
    },
  ];

  const verificationChecklist = [
    {
      item: 'समिति का पंजीकरण प्रमाणपत्र एवं पंजीकरण संख्या',
      detail: 'फर्म्स एवं सोसायटीज अधिनियम के अंतर्गत आधिकारिक पंजीकरण संख्या (यदि पंजीकृत है)।',
    },
    {
      item: 'गठन की तिथि अथवा प्रथम बैठक का अधिकृत रिकॉर्ड',
      detail: 'संस्थापकों की प्रथम बैठक का कार्यवृत्त (Minutes of Meeting) अथवा संकल्प पत्र।',
    },
    {
      item: 'पुराने रामनवमी आयोजनों के निमंत्रण-पत्र व समाचार कटिंग',
      detail: 'वर्षवार प्रकाशित समाचार पत्र कतरनें, आमंत्रण पत्र एवं आधिकारिक स्मारिकाएं।',
    },
    {
      item: 'समिति के आधिकारिक पदाधिकारियों से स्वीकृत इतिहास',
      detail: 'वर्तमान एवं पूर्व अध्यक्ष/सचिव/संरक्षकों द्वारा हस्ताक्षरित प्रमाणित विवरण।',
    },
    {
      item: 'आधिकारिक संपर्क विवरण और संस्था का सत्यापित स्थायी पता',
      detail: 'समिति का छतरपुर में पंजीकृत कार्यालय, अधिकृत ईमेल एवं संपर्क दूरभाष।',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineItemsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
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
      id="timeline"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs font-tiro mb-3">
          <History className="w-3.5 h-3.5 text-amber-400" />
          <span>इतिहास एवं सार्वजनिक गतिविधियों के संदर्भ</span>
        </div>
        <h2 className="font-rozha text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
          ३. वेबसाइट पर इतिहास व गतिविधि संदर्भ
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 font-tiro text-sm sm:text-base">
          उपलब्ध समाचार संदर्भों के अनुसार समिति के आयोजनों का कालक्रम (गतिविधि संदर्भ)
        </p>
      </div>

      {/* Crucial Advisory Box (महत्त्वपूर्ण पारदर्शी सूचना) */}
      <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-amber-950/40 border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col md:flex-row items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-1.5 font-tiro">
          <div className="flex items-center gap-2">
            <h3 className="font-rozha text-lg sm:text-xl font-bold text-amber-300">
              महत्त्वपूर्ण पारदर्शी सूचना (तथ्यपरक स्पष्टीकरण):
            </h3>
          </div>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            ये उपलब्ध गतिविधियों के संदर्भ हैं, समिति की कानूनी स्थापना के वर्ष का औपचारिक प्रमाण नहीं।
            वेबसाइट पर “स्थापना वर्ष २००६” तभी अधिकृत रूप से लिखा जाए जब समिति के मुख्य पदाधिकारी व अभिलेख इसकी पूर्ण पुष्टि करें।
            समिति की स्थापना की तारीख और उसके धार्मिक एवं सामाजिक कार्यों की जानकारी को पूर्णतः अलग व पारदर्शी रखा गया है ताकि किसी भी प्रकार की भ्रामक जानकारी प्रकाशित न हो।
          </p>
        </div>
      </div>

      {/* Chronological Timeline Cards */}
      <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 my-12">
        {timelineData.map((item, idx) => (
          <div
            key={item.year}
            ref={(el) => (timelineItemsRef.current[idx] = el)}
            className="relative group"
          >
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-900 border-2 border-amber-400 text-amber-300 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.7)] group-hover:scale-125 transition-transform duration-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            </div>

            {/* Timeline Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#200505] via-[#280808] to-[#1a0404] border border-amber-500/30 hover:border-amber-400/60 shadow-lg hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="font-rozha text-2xl sm:text-3xl font-extrabold text-amber-400">
                  वर्ष {item.year}
                </span>
                <span className="text-xs font-tiro text-amber-300/80 bg-red-950/70 px-3 py-1 rounded-full border border-amber-500/20">
                  {item.tag}
                </span>
              </div>

              <h4 className="font-rozha text-xl sm:text-2xl text-white mb-2">
                {item.title}
              </h4>

              <div className="flex items-center gap-2 text-xs font-tiro text-amber-300/80 mb-3">
                <Newspaper className="w-4 h-4 text-amber-400 shrink-0" />
                <span>स्रोत: {item.source} ({item.date})</span>
              </div>

              <p className="text-sm sm:text-base font-tiro text-amber-100/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 5: आधिकारिक रिकॉर्ड और सत्यापन हेतु आवश्यकताएं */}
      <div
        id="records"
        className="mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1b0404] via-[#210606] to-[#120202] border border-amber-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-rozha text-2xl sm:text-3xl font-bold text-white">
              ५. आधिकारिक रिकॉर्ड के लिए आवश्यक जानकारी
            </h3>
            <p className="text-xs sm:text-sm font-tiro text-amber-300/80">
              समिति की स्थापना का सही वर्ष और अधिक विस्तृत इतिहास जुटाने हेतु उपयोगी दस्तावेज
            </p>
          </div>
        </div>

        <p className="text-amber-100/90 font-tiro text-sm sm:text-base mb-6 leading-relaxed">
          सार्वजनिक वेब खोजों में समिति के गौरवशाली आयोजनों का उल्लेख 2008 से निरंतर मिलता है। समिति के पंजीकरण का आधिकारिक रिकॉर्ड व अधिकृत इतिहास संकलित करने हेतु निम्नलिखित अभिलेख मान्य होंगे:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {verificationChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-red-950/40 border border-amber-500/20 flex items-start gap-3 hover:border-amber-400/40 transition"
            >
              <div className="mt-0.5 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold border border-amber-500/30">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h5 className="font-rozha text-base text-amber-200 font-semibold">
                  {item.item}
                </h5>
                <p className="text-xs font-tiro text-amber-100/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-4 text-xs font-tiro text-amber-300/70">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>पारदर्शिता एवं प्रामाणिकता श्री राम सेवा समिति का मूल सिद्धांत है।</span>
          </div>
          <span>छतरपुर, मध्य प्रदेश</span>
        </div>
      </div>
    </section>
  );
}
