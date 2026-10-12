import React, { useEffect, useRef } from 'react';
import { 
  History, 
  FileText, 
  CheckCircle, 
  Newspaper, 
  ShieldAlert
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
      title: 'Initial Public Reference',
      source: 'Hindi Oneindia News Report',
      date: '14 April 2008',
      desc: '14 April 2008 ki news report mein Chhatarpur ki Ram Navami Shobhayatra ke organizer ke roop mein Shri Ram Seva Samiti ka public mention milta hai. Ye samiti ke historic work ka verified proof hai.',
      tag: 'Shobhayatra Reference',
    },
    {
      year: '2023',
      title: 'Dharmik & Cultural Activities',
      source: 'Madhya Pradesh State News Report',
      date: 'August 2023',
      desc: 'August 2023 mein Chhatarpur mein samiti dwara grand Kanwar Yatra organize karne ki news report aayi, jisme Sanatan culture aur social harmony ka grand roop dekhne ko mila.',
      tag: 'Kanwar Yatra',
    },
    {
      year: '2024',
      title: 'Dharma Dhwaj Yatra & 19th Janmotsav',
      source: 'Hindi News Portal Report',
      date: '23 March 2024',
      desc: '23 March 2024 ki report mein Ram Navami ke 19ve saal ke aayojan ki taiyariyo aur grand Dharma Dhwaj Yatra ka mention hai (jis se indication milta hai ki Janmotsav lagbhag 2006 ke aaspaas shuru hua tha).',
      tag: '19th Janmotsav',
    },
  ];

  const verificationChecklist = [
    {
      item: 'Samiti ka Registration Certificate & Registration Number',
      detail: 'Firms & Societies Act ke under official registration number (agar registered ho).',
    },
    {
      item: 'Establishment Date ya First Meeting ka Official Record',
      detail: 'Founders ki pehli meeting ka record (Minutes of Meeting) ya resolution paper.',
    },
    {
      item: 'Purane Ram Navami Events ke Invitation Cards & News Cuttings',
      detail: 'Year-wise published newspaper clippings, invitation cards aur official records.',
    },
    {
      item: 'Samiti ke Official Padadhikariyo dwara Verified History',
      detail: 'Present aur former President/Secretary dwara signed verified details.',
    },
    {
      item: 'Official Contact Details aur Sanstha ka Verified Permanent Address',
      detail: 'Samiti ka Chhatarpur mein registered office, official email aur contact numbers.',
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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-poppins"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs mb-3">
          <History className="w-3.5 h-3.5 text-amber-400" />
          <span>Itihas & Public Activity References</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
          3. Website Par Itihas & Timeline
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 text-sm sm:text-base">
          Available news reports ke anusar samiti ke events ka chronological timeline
        </p>
      </div>

      {/* Crucial Advisory Box (Important Notice) */}
      <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-amber-950/40 border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col md:flex-row items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-amber-300">
              Important Notice (Transparency & Verification):
            </h3>
          </div>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            Ye available news reports aur events ke references hain, samiti ke legal establishment year ka certified proof nahi hain.
            Website par "Establishment Year 2006" tabhi likhein jab samiti ke official padadhikari isko officially confirm karein.
            Samiti ki establishment date aur uske dharmik/samajik karyo ki details ko completely separate rakha gaya hai taaki koi galat information publish na ho.
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
                <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-400">
                  Year {item.year}
                </span>
                <span className="text-xs text-amber-300/80 bg-red-950/70 px-3 py-1 rounded-full border border-amber-500/20">
                  {item.tag}
                </span>
              </div>

              <h4 className="font-cinzel text-xl sm:text-2xl text-white mb-2">
                {item.title}
              </h4>

              <div className="flex items-center gap-2 text-xs text-amber-300/80 mb-3">
                <Newspaper className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Source: {item.source} ({item.date})</span>
              </div>

              <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 5: Official Records Checklist */}
      <div
        id="records"
        className="mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1b0404] via-[#210606] to-[#120202] border border-amber-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              5. Official Records Ke Liye Kaun-Si Jankari Chahiye?
            </h3>
            <p className="text-xs sm:text-sm text-amber-300/80">
              Samiti ki exact establishment date aur certified history collect karne ke liye ye documents useful honge
            </p>
          </div>
        </div>

        <p className="text-amber-100/90 text-sm sm:text-base mb-6 leading-relaxed">
          Public web search mein samiti ke programs 2008 se regularly milte hain. Samiti ke legal registration record aur official history ke liye ye 5 documents required hain:
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
                <h5 className="font-semibold text-base text-amber-200">
                  {item.item}
                </h5>
                <p className="text-xs text-amber-100/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-4 text-xs text-amber-300/70">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Transparency aur authenticity Shri Ram Seva Samiti ka core rule hai.</span>
          </div>
          <span>Chhatarpur, Madhya Pradesh</span>
        </div>
      </div>
    </section>
  );
}
