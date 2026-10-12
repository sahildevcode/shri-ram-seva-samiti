import React, { useState, useEffect, useRef } from 'react';
import { 
  CalendarCheck, 
  CalendarClock, 
  MapPin, 
  Calendar as CalendarIcon, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Bell, 
  Share2, 
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventsTwoColumns({ onOpenVolunteerModal }) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [remindedEvents, setRemindedEvents] = useState({});

  const handleReminder = (eventId, eventTitle) => {
    setRemindedEvents((prev) => ({ ...prev, [eventId]: true }));
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#ef4444', '#fbbf24']
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
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

  const pastEvents = [
    {
      id: 'past-1',
      title: '19वां भव्य श्रीराम जन्मोत्सव एवं धर्म ध्वज यात्रा',
      date: '23 मार्च 2024',
      location: 'छत्रसाल चौक से राम मंदिर परिसर, छतरपुर',
      status: 'सफलतापूर्वक संपन्न',
      badge: 'ऐतिहासिक सहभागिता',
      description:
        'भगवान श्रीराम के 19वें जन्मोत्सव की तैयारियों के साथ विशाल धर्म ध्वज यात्रा निकाली गई। हजारों श्रद्धालुओं ने नगर में पुष्पवर्षा कर यात्रा का स्वागत किया।',
      highlights: ['19वां वर्ष का आयोजन', 'विशाल धर्म ध्वज यात्रा', 'महाप्रसाद भंडारा'],
    },
    {
      id: 'past-2',
      title: 'श्रावण मास भव्य कांवड़ यात्रा एवं जलाभिषेक',
      date: 'अगस्त 2023',
      location: 'पन्ना नाका से महाकालेश्वर मंदिर, छतरपुर',
      status: 'सफलतापूर्वक संपन्न',
      badge: 'धार्मिक व सांस्कृतिक',
      description:
        'अगस्त 2023 में समिति द्वारा भव्य कांवड़ यात्रा का आयोजन किया गया, जिसमें छतरपुर व आसपास के सैकड़ों शिवभक्तों ने पवित्र जल लेकर जलाभिषेक किया।',
      highlights: ['सैकड़ों कांवड़िए', 'कांवड़ सेवा शिविर', 'विशाल जलाभिषेक'],
    },
    {
      id: 'past-3',
      title: 'रामनवमी शोभायात्रा एवं धर्म ध्वज स्थापन',
      date: '14 अप्रैल 2008 (प्रारंभिक सार्वजनिक संदर्भ)',
      location: 'छतरपुर नगर के मुख्य मार्ग',
      status: 'प्रारंभिक सार्वजनिक संदर्भ',
      badge: 'ऐतिहासिक प्रसंग',
      description:
        '14 अप्रैल 2008 की समाचार रिपोर्ट में छतरपुर की रामनवमी शोभायात्रा के आयोजक के रूप में श्री राम सेवा समिति का उल्लेख दर्ज है।',
      highlights: ['नगर शोभायात्रा', 'सनातन जनजागरण', 'समाचार पत्रों में उल्लेख'],
    },
    {
      id: 'past-4',
      title: 'सामूहिक सुंदरकांड पाठ एवं विशाल अन्नक्षेत्र',
      date: 'श्री हनुमान जन्मोत्सव',
      location: 'मोटे के महावीर मंदिर परिसर, छतरपुर',
      status: 'सफलतापूर्वक संपन्न',
      badge: 'सेवा एवं संकीर्तन',
      description:
        'समिति द्वारा सामूहिक सुंदरकांड पाठ एवं 5000+ श्रद्धालुओं हेतु महाप्रसाद अन्नक्षेत्र का सुव्यवस्थित आयोजन संपन्न कराया गया।',
      highlights: ['5000+ श्रद्धालु', 'अन्नक्षेत्र सेवा', 'अखंड संकीर्तन'],
    },
  ];

  const upcomingEvents = [
    {
      id: 'upcoming-1',
      title: '20वां भव्य श्रीराम जन्मोत्सव एवं धर्म ध्वज महायात्रा',
      date: 'आगामी रामनवमी महापर्व (चैत्र शुक्ल नवमी)',
      location: 'छत्रसाल चौक एवं संपूर्ण नगर, छतरपुर',
      status: 'भव्य तैयारियां जारी',
      badge: 'सर्वप्रमुख वार्षिक आयोजन',
      description:
        '20वें वर्ष के उपलक्ष्य में ऐतिहासिक धर्म ध्वज महायात्रा, 101 फीट ध्वज, दिव्य राम रथ, संतों का सानिध्य और नगर भर में भव्य स्वागत महाकुंभ।',
      highlights: ['101 फीट धर्म ध्वज', 'संत सानिध्य', 'विशाल महाप्रसाद महाभंडारा'],
      isMain: true,
    },
    {
      id: 'upcoming-2',
      title: 'जन्मोत्सव पूर्व प्रभात फेरी एवं सुंदरकांड संकीर्तन',
      date: 'रामनवमी से 7 दिवस पूर्व (प्रातः 6:00 बजे)',
      location: 'विभिन्न वार्ड एवं मोहल्ले, छतरपुर',
      status: 'पंजीकरण एवं रूपरेखा तैयार',
      badge: 'जनजागरण अभियान',
      description:
        'नगर के प्रत्येक मोहल्ले में सुबह प्रभात फेरी, रामधुन संकीर्तन और घर-घर धर्म ध्वज वितरण का पावन अभियान।',
      highlights: ['घर-घर धर्म ध्वज', 'प्रभात फेरी संकीर्तन', 'युवा सहभागिता'],
    },
    {
      id: 'upcoming-3',
      title: 'निःशुल्क स्वास्थ्य परीक्षण एवं रक्तदान महाशिविर',
      date: 'आगामी माह का प्रथम रविवार',
      location: 'समिति सेवा केंद्र, छतरपुर',
      status: 'स्वयंसेवक आमंत्रण खुला',
      badge: 'सामाजिक सेवा विंग',
      description:
        'मानव सेवा ही माधव सेवा के ध्येय के साथ वरिष्ठ चिकित्सकों की उपस्थिति में निःशुल्क परामर्श, दवा वितरण एवं स्वैच्छिक रक्तदान शिविर।',
      highlights: ['निःशुल्क दवाएं', 'रक्तदान महादान', 'विशेषज्ञ चिकित्सक'],
    },
    {
      id: 'upcoming-4',
      title: 'श्रावण कांवड़ यात्रा एवं निःशुल्क सेवा शिविर',
      date: 'आगामी श्रावण मास (प्रथम सोमवार)',
      location: 'छतरपुर संगम मार्ग',
      status: 'योजनाबद्ध',
      badge: 'कांवड़ सेवा',
      description:
        'कांवड़ यात्रियों के लिए 24 घंटे फलाहार, विश्राम, चिकित्सा और जल सेवा शिविर का संचालन श्री राम सेवा समिति द्वारा किया जाएगा।',
      highlights: ['24 घंटे सेवा शिविर', 'चिकित्सा सहायता', 'श्रद्धालु स्वागत'],
    },
  ];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs font-tiro mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>समिति की गतिविधियों का व्यवस्थित विवरण</span>
        </div>
        <h2 className="font-rozha text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
          कार्यक्रम विवरण: पिछले एवं आगामी
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 font-tiro text-sm sm:text-base">
          समिति द्वारा सफलतापूर्वक संपन्न किए गए ऐतिहासिक धार्मिक-सामाजिक कार्यक्रम एवं आगामी भव्य आयोजनों की रूपरेखा
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* COLUMN 1: पिछले कार्यक्रम (Past Events) */}
        <div
          ref={leftColRef}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#1c0404] via-[#170303] to-[#110202] border border-amber-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)] relative"
        >
          {/* Header of Column 1 */}
          <div className="flex items-center justify-between pb-6 border-b border-amber-500/20 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-900/40 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow">
                <CalendarCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-rozha text-2xl sm:text-3xl font-bold text-white">
                  पिछले कार्यक्रम
                </h3>
                <p className="text-xs sm:text-sm font-tiro text-amber-300/80">
                  सफलतापूर्वक संपन्न व ऐतिहासिक आयोजन
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>सत्यापित विवरण</span>
            </span>
          </div>

          {/* List of Past Events */}
          <div className="space-y-5">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group p-5 rounded-2xl bg-[#240606]/70 hover:bg-[#2b0808] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-medium font-tiro text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {event.badge}
                  </span>
                  <span className="text-xs font-tiro text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{event.status}</span>
                  </span>
                </div>

                <h4 className="font-rozha text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {event.title}
                </h4>

                <div className="mt-2 space-y-1 text-xs text-amber-200/80 font-tiro">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium text-amber-300">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-amber-100/75 font-tiro leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-3 pt-3 border-t border-amber-500/10 flex flex-wrap gap-2">
                  {event.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-amber-300/80 bg-red-950/60 px-2 py-0.5 rounded border border-amber-500/15"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: आगामी कार्यक्रम (Upcoming Events) */}
        <div
          ref={rightColRef}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#220606] via-[#1a0404] to-[#120202] border border-amber-500/40 shadow-[0_15px_45px_rgba(245,158,11,0.15)] relative"
        >
          {/* Subtle Top Right Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header of Column 2 */}
          <div className="flex items-center justify-between pb-6 border-b border-amber-500/20 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/30 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow">
                <CalendarClock className="w-6 h-6 text-amber-300 animate-pulse" />
              </div>
              <div>
                <h3 className="font-rozha text-2xl sm:text-3xl font-bold text-white">
                  आगामी कार्यक्रम
                </h3>
                <p className="text-xs sm:text-sm font-tiro text-amber-300/80">
                  आने वाले पावन आयोजन एवं जनसहभागिता
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center gap-1 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>सहभागिता आमंत्रण</span>
            </span>
          </div>

          {/* List of Upcoming Events */}
          <div className="space-y-5">
            {upcomingEvents.map((event) => {
              const isReminded = remindedEvents[event.id];

              return (
                <div
                  key={event.id}
                  className={`group p-5 rounded-2xl transition-all duration-300 shadow-sm ${
                    event.isMain
                      ? 'bg-gradient-to-r from-red-950/90 via-[#2f0808] to-red-950/90 border-2 border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                      : 'bg-[#260707]/70 hover:bg-[#300909] border border-amber-500/25 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold font-tiro text-amber-300 bg-gradient-to-r from-red-900 to-amber-900 px-2.5 py-0.5 rounded-full border border-amber-400/40 shadow-xs">
                      🚩 {event.badge}
                    </span>
                    <span className="text-xs font-tiro text-amber-300 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.status}</span>
                    </span>
                  </div>

                  <h4 className="font-rozha text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h4>

                  <div className="mt-2 space-y-1 text-xs text-amber-200/90 font-tiro">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-semibold text-amber-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-amber-100/80 font-tiro leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {event.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-amber-200 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-500/20"
                        >
                          ★ {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleReminder(event.id, event.title)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                          isReminded
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-400/40 hover:text-white'
                        }`}
                      >
                        <Bell className="w-3.5 h-3.5" />
                        <span>{isReminded ? 'स्मरण दर्ज!' : 'स्मरण रखें'}</span>
                      </button>

                      <button
                        onClick={onOpenVolunteerModal}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white transition shadow flex items-center gap-1"
                      >
                        <span>सहभागिता</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
