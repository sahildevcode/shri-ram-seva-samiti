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
  ChevronRight,
  Flame
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

  const handleReminder = (eventId) => {
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
      title: '19va Bhavya Shri Ram Janmotsav & Dharma Dhwaj Yatra',
      date: '23 March 2024',
      location: 'Chhatrasal Chowk se Ram Mandir Parisar, Chhatarpur',
      status: 'Successfully Completed',
      badge: 'Historic Participation',
      description:
        'Bhagwan Shri Ram ke 19ve Janmotsav ke mauke par grand Dharma Dhwaj Yatra nikali gayi. Hazaron bhakto ne poore shahar mein phool barsakar yatra ka grand swagat kiya.',
      highlights: ['19th Year Celebration', 'Grand Dharma Dhwaj Yatra', 'Mahaprasad Bhandara'],
    },
    {
      id: 'past-2',
      title: 'Shravan Maas Bhavya Kanwar Yatra & Jalabhishek',
      date: 'August 2023',
      location: 'Panna Naka se Mahakaleshwar Mandir, Chhatarpur',
      status: 'Successfully Completed',
      badge: 'Religious & Cultural',
      description:
        'August 2023 mein samiti dwara grand Kanwar Yatra aayojit ki gayi, jisme Chhatarpur aur aas-paas ke saikado shivbhakto ne pavitra jal lekar shivling par jalabhishek kiya.',
      highlights: ['Hundreds of Kanwariyas', 'Kanwar Seva Camp', 'Grand Jalabhishek'],
    },
    {
      id: 'past-3',
      title: 'Ram Navami Shobhayatra & Dharma Dhwaj Sthapana',
      date: '14 April 2008 (Initial Public Reference)',
      location: 'Chhatarpur Main Market & Old City',
      status: 'Historic Public Reference',
      badge: 'Historic Record',
      description:
        '14 April 2008 ki news report mein Chhatarpur ki Ram Navami Shobhayatra ke organizer ke roop mein Shri Ram Seva Samiti ka official mention darj hai.',
      highlights: ['Nagar Shobhayatra', 'Sanatan Awareness', 'Newspaper Published Reference'],
    },
    {
      id: 'past-4',
      title: 'Samuhik Sunderkand Path & Annakshetra Mahaprasad',
      date: 'Shri Hanuman Janmotsav',
      location: 'Mote Ke Mahavir Mandir Parisar, Chhatarpur',
      status: 'Successfully Completed',
      badge: 'Seva & Sankirtan',
      description:
        'Samiti dwara samuhik Sunderkand path aur 5000+ devotees ke liye pure desi ghee ka mahaprasad bhandara successfully organize kiya gaya.',
      highlights: ['5000+ Devotees', 'Annakshetra Seva', 'Akhand Sankirtan'],
    },
  ];

  const upcomingEvents = [
    {
      id: 'upcoming-1',
      title: '20va Bhavya Shri Ram Janmotsav & Dharma Dhwaj Mahayatra',
      date: 'Upcoming Ram Navami Mahaparva (Chaitra Shukla Navami)',
      location: 'Chhatrasal Chowk & Poora Nagar, Chhatarpur',
      status: 'Grand Preparations Going On',
      badge: 'Main Annual Festival',
      description:
        '20ve saal ke celebration par historic Dharma Dhwaj Mahayatra, 101 feet dhwaj, divine Ram Rath, saints ka blessings aur poore shahar mein grand welcome.',
      highlights: ['101 Feet Dharma Dhwaj', 'Saint Blessings', 'Grand Mahaprasad Bhandara'],
      isMain: true,
    },
    {
      id: 'upcoming-2',
      title: 'Janmotsav Se Pehle Prabhat Pheri & Sunderkand Sankirtan',
      date: 'Ram Navami se 7 Din Pehle (Morning 6:00 AM)',
      location: 'Different Wards & Mohallas, Chhatarpur',
      status: 'Planning Ready',
      badge: 'Public Awareness Drive',
      description:
        'City ke alag-alag mohallo mein morning prabhat pheri, Ram Dhun sankirtan aur ghar-ghar Dharma Dhwaj distribute karne ka sacred mission.',
      highlights: ['Ghar-Ghar Dharma Dhwaj', 'Prabhat Pheri Sankirtan', 'Youth Participation'],
    },
    {
      id: 'upcoming-3',
      title: 'Free Health Checkup & Blood Donation Mega Camp',
      date: 'Upcoming Month Ka First Sunday',
      location: 'Samiti Seva Kendra, Chhatarpur',
      status: 'Volunteer Registration Open',
      badge: 'Social Service Wing',
      description:
        'Manav Seva Hi Madhav Seva ke vision ke sath senior doctors ki team dwara free consultation, medicine distribution aur voluntary blood donation camp.',
      highlights: ['Free Medicines', 'Raktdaan Mahadaan', 'Specialist Doctors'],
    },
    {
      id: 'upcoming-4',
      title: 'Shravan Kanwar Yatra & Free Seva Camp',
      date: 'Upcoming Shravan Month (First Monday)',
      location: 'Chhatarpur Sangam Route',
      status: 'Planned',
      badge: 'Kanwar Seva',
      description:
        'Kanwar yatriyo ke liye 24 ghante refreshment, rest rooms, first-aid aur drinking water seva camp Shri Ram Seva Samiti dwara lagaya jayega.',
      highlights: ['24-Hour Seva Camp', 'Medical Support', 'Devotee Hospitality'],
    },
  ];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-poppins"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Samiti Activities Ka Systematic Record</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide">
          Karyakram Details: Pichhle & Aagami
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 text-sm sm:text-base">
          Samiti dwara safalta se sampann kiye gaye historic events aur aane wale grand programs ki complete list
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* COLUMN 1: Pichhle Karyakram (Past Events) */}
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
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  Pichhle Karyakram
                </h3>
                <p className="text-xs sm:text-sm text-amber-300/80">
                  Successfully completed historic events
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Details</span>
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
                  <span className="text-[11px] font-medium text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {event.badge}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{event.status}</span>
                  </span>
                </div>

                <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {event.title}
                </h4>

                <div className="mt-2 space-y-1 text-xs text-amber-200/80">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium text-amber-300">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-amber-100/75 leading-relaxed">
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

        {/* COLUMN 2: Aagami Karyakram (Upcoming Events) */}
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
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  Aagami Karyakram
                </h3>
                <p className="text-xs sm:text-sm text-amber-300/80">
                  Upcoming grand events & participation
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center gap-1 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Invitation Open</span>
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
                    <span className="text-[11px] font-semibold text-amber-300 bg-gradient-to-r from-red-900 to-amber-900 px-2.5 py-0.5 rounded-full border border-amber-400/40 shadow-xs">
                      🚩 {event.badge}
                    </span>
                    <span className="text-xs text-amber-300 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.status}</span>
                    </span>
                  </div>

                  <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h4>

                  <div className="mt-2 space-y-1 text-xs text-amber-200/90">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-semibold text-amber-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-amber-100/80 leading-relaxed">
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
                        onClick={() => handleReminder(event.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                          isReminded
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-400/40 hover:text-white'
                        }`}
                      >
                        <Bell className="w-3.5 h-3.5" />
                        <span>{isReminded ? 'Reminder Set!' : 'Remind Me'}</span>
                      </button>

                      <button
                        onClick={onOpenVolunteerModal}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white transition shadow flex items-center gap-1"
                      >
                        <span>Join</span>
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
