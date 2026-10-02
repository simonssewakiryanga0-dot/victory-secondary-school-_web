import React from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Heart,
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { slots } = useImageSlots();

  const handleLinkClick = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-purple-900/60 pt-16 pb-12">
      {/* Top Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-purple-950 to-indigo-950 p-8 sm:p-10 border border-purple-700/50 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2025/2026 Academic Year Enrollment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-crest">
                Join Kassanda's Leading Secondary School
              </h3>
              <p className="text-sm text-purple-200 max-w-xl">
                Vacancies available for Senior 1, Senior 2, Senior 3, and Senior 5. Both Boarding and Day sections with balanced academic discipline, sports, and spiritual growth.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => handleLinkClick('admissions')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Apply for Admission Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-colors"
              >
                WhatsApp Director
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: School Identity & Crest */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 shadow-md bg-white p-1 shrink-0">
                <img
                  src={slots.logo}
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white font-crest">
                  {SCHOOL_INFO.name}
                </h4>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Motto: "{SCHOOL_INFO.badgeMotto}"
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              A premier co-educational boarding and day secondary school in Kassanda District offering holistic Uganda National Examinations Board (UNEB) O & A Level education. Founded in 1999, breakthrough in 2003, and ranked No. 1 in Kassanda district from 2021 to date.
            </p>

            <div className="pt-1 text-xs text-purple-300 space-y-1">
              <p className="font-semibold text-slate-300">
                Director: <span className="text-amber-400">{SCHOOL_INFO.directorName}</span>
              </p>
              <p className="text-slate-400">
                School Uniform: Royal Purple & Dark Navy Blue with Gold Trim
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Our School
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('admissions')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Admission Application
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('student-portal')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Student Resource Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('parent-portal')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Secure Parent Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academics & Co-Curricular */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Campus Life
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('events')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Events & Term Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('gallery')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Photo Gallery & Functions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('teachers')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Teachers Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Sports Cups & Fieldworks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Location & Campus Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contacts */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Campus Location
            </h5>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {SCHOOL_INFO.physicalAddress}, {SCHOOL_INFO.postalAddress}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <a href={`tel:${SCHOOL_INFO.phonePrimary}`} className="hover:text-white">
                    {SCHOOL_INFO.phonePrimary}
                  </a>{' '}
                  /{' '}
                  <a href={`tel:${SCHOOL_INFO.phoneSecondary}`} className="hover:text-white">
                    {SCHOOL_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white truncate">
                  {SCHOOL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Admin Office: Mon–Sat 8:00am–5:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved. Kassanda Town, Uganda.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              UNEB Center No. U3428
            </span>
            <span>·</span>
            <span>Director: {SCHOOL_INFO.directorName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
