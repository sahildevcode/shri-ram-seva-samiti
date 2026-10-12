import React from 'react';
import { MapPin, Phone, Mail, Sparkles, Flame } from 'lucide-react';

export default function FooterSection({ onOpenVolunteerModal }) {
  return (
    <footer className="relative bg-[#0d0202] border-t-2 border-amber-500/40 text-amber-100 font-poppins overflow-hidden z-10">
      {/* Decorative Shloka Top Bar */}
      <div className="bg-gradient-to-r from-red-950 via-[#3a0808] to-red-950 py-4 px-4 border-b border-amber-500/20 text-center">
        <p className="font-cinzel text-sm sm:text-base md:text-lg gold-gradient-text tracking-wider">
          || Mangal Bhavan Amangal Haari • Dravahu Su Dasarath Ajara Bihaari ||
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-red-600 to-amber-300 shadow">
                <img
                  src="/assets/logo.jpg"
                  alt="Shri Ram Seva Samiti Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Shri Ram Seva Samiti
                </h4>
                <p className="text-xs text-amber-400">Chhatarpur (Madhya Pradesh)</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/75 leading-relaxed">
              Bhagwan Shri Ram ke sacred ideals, Sanatan Sanskriti aur social unity ke liye Chhatarpur shahar mein dedicated religious & social samiti.
            </p>

            <div className="text-sm saffron-gradient-text font-bold">
              Seva • Sanskar • Samarpan
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="font-cinzel text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Main Sections</span>
            </h5>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  • Sanstha Parichay & Mission
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-amber-300 transition-colors">
                  • 4 Core Pillars
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-300 transition-colors">
                  • Past & Upcoming Events
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-amber-300 transition-colors">
                  • Itihas & References
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  • Photo & Video Gallery
                </a>
              </li>
              <li>
                <a href="#records" className="hover:text-amber-300 transition-colors">
                  • Official Records Checklist
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Activities */}
          <div>
            <h5 className="font-cinzel text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Key Activities</span>
            </h5>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>• Grand Ram Navami Shobhayatra</li>
              <li>• City Dharma Dhwaj Yatra & Sankirtan</li>
              <li>• Shravan Month Holy Kanwar Yatra</li>
              <li>• Annakshetra & Mahaprasad Seva</li>
              <li>• Social Harmony & Blood Donation Camps</li>
              <li>• Sanatan Culture & Youth Sanskar</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h5 className="font-cinzel text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Contact & Address</span>
            </h5>

            <div className="text-xs sm:text-sm text-amber-100/80 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Shri Ram Seva Samiti, Chhatarpur, Madhya Pradesh, Bharat - 471001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Contact: +91 94251 XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: info@shriramsevasamiti-chhatarpur.org</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenVolunteerModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white shadow transition transform hover:-translate-y-0.5"
              >
                Volunteer Ke Roop Mein Judein
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-12 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Shri Ram Seva Samiti, Chhatarpur (Madhya Pradesh). All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-amber-400/80">
            <span>Dedicated to Sanatan Sanskriti & Samaj Seva</span>
            <span>🚩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
