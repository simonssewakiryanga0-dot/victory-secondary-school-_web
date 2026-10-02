import React, { useState } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  Menu,
  X,
  Phone,
  GraduationCap,
  Sparkles,
  Calendar,
  Image as ImageIcon,
  UserCheck,
  BookOpen,
  Users,
  Compass,
  MapPin,
  Camera,
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { slots, openSlotModal } = useImageSlots();

  const navLinks: { id: PageTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'admissions', label: 'Admissions', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'student-portal', label: 'Student Resources', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'parent-portal', label: 'Parent Portal', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'events', label: 'Events & Calendar', icon: <Calendar className="w-4 h-4" /> },
    { id: 'gallery', label: 'Image Gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'teachers', label: 'Teachers Directory', icon: <Users className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact & Map', icon: <MapPin className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-md border-b border-purple-100">
      {/* Top Academic Ribbon */}
      <div className="bg-purple-950 text-purple-100 px-4 py-1.5 text-xs font-medium border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Ranked No. 1 Secondary School in Kassanda (2021–Date)</span>
            </span>
            <span className="hidden md:inline text-purple-400">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Kassanda Town, Along Kikandwa Rd, Next to Kyato Hotel
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${SCHOOL_INFO.phonePrimary}`}
              className="flex items-center gap-1 text-purple-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-semibold">{SCHOOL_INFO.phonePrimary}</span>
            </a>
            <span className="text-purple-400">·</span>
            <button
              onClick={() => handleNavClick('parent-portal')}
              className="text-amber-300 hover:text-amber-200 font-semibold underline decoration-amber-400/60 transition-colors"
            >
              Parent Portal Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Zone with requested circular logo */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              {/* Circular Logo Container */}
              <button
                onClick={() => handleNavClick('home')}
                className="relative block w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-md ring-2 ring-purple-900/10 bg-white p-1 shrink-0 focus:outline-none focus:ring-4 focus:ring-purple-300"
                title="Victory Secondary School Home"
              >
                <img
                  src={slots.logo}
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </button>

              {/* Slot quick swap button */}
              <button
                onClick={() => openSlotModal('logo')}
                className="absolute -bottom-1 -right-1 bg-purple-900 hover:bg-purple-800 text-amber-300 p-1 rounded-full border border-amber-400 shadow text-[9px] opacity-0 group-hover:opacity-100 transition-opacity"
                title="Change Logo"
              >
                <Camera className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* School Title Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-purple-950 font-crest uppercase">
                  Victory Sec. School
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-wider uppercase">
                Kassanda · Est. 1999 · O & A Level Boarding & Day
              </p>
            </button>
          </div>

          {/* Desktop Navigation Links (Clean unboxed text with active indicators) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 relative text-xs 2xl:text-sm font-semibold ${
                  activeTab === link.id
                    ? 'text-purple-900 font-bold'
                    : 'text-slate-600 hover:text-purple-800'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action: Universal Admission Button (required on all pages) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('admissions')}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] border border-purple-700 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Apply for Admission</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('admissions')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-purple-900 rounded-lg sm:hidden shadow"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-purple-950 hover:bg-purple-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-purple-100 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-3 duration-200">
          <div className="p-3 mb-2 rounded-xl bg-purple-50 border border-purple-100">
            <p className="text-xs font-bold text-purple-950">Victory Secondary School Kassanda</p>
            <p className="text-[11px] text-purple-700">Registration in progress for 2025/2026</p>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                activeTab === link.id
                  ? 'bg-purple-900 text-white'
                  : 'text-slate-700 hover:bg-purple-50 hover:text-purple-900'
              }`}
            >
              <span className={activeTab === link.id ? 'text-amber-300' : 'text-purple-700'}>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
            <button
              onClick={() => handleNavClick('admissions')}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow text-center"
            >
              Fill Online Admission Form
            </button>

            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <span>WhatsApp Director: {SCHOOL_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
