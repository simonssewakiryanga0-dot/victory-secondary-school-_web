import React, { useState } from 'react';
import { PageTab, SchoolEvent } from '../types';
import { SCHOOL_EVENTS, SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Sparkles,
  Trophy,
  GraduationCap,
  Filter,
  CheckCircle,
  Bell,
  Camera,
} from 'lucide-react';

interface EventsCalendarViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const EventsCalendarView: React.FC<EventsCalendarViewProps> = ({ setActiveTab }) => {
  const { slots, openSlotModal } = useImageSlots();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [reminderAdded, setReminderAdded] = useState<string | null>(null);

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Examination', 'Fieldwork'];

  const filteredEvents = SCHOOL_EVENTS.filter(
    (ev) => selectedCategory === 'All' || ev.category === selectedCategory
  );

  const handleSetReminder = (eventTitle: string) => {
    setReminderAdded(eventTitle);
    setTimeout(() => {
      setReminderAdded(null);
    }, 3000);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* 1. Header with Students in the Photo on the Background (as requested by user) */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
        {/* The students photo background */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src={slots.eventsHeroBackdrop}
            alt="Victory Secondary School Students"
            className="w-full h-full object-cover object-center filter saturate-110"
            referrerPolicy="no-referrer"
          />
          {/* Measured optical contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-slate-950/75 to-purple-950/80" />
        </div>

        {/* Change background button */}
        <button
          onClick={() => openSlotModal('eventsHeroBackdrop')}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-slate-950/80 text-amber-300 rounded-xl text-xs font-semibold border border-amber-400/40 hover:bg-purple-900 transition-colors flex items-center gap-1.5 shadow"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Change Background Photo</span>
        </button>

        {/* Hero Content on top of background */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Academic & Co-Curricular Calendar</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-crest text-white tracking-tight">
            School Events & Term Schedule
          </h1>

          <p className="text-xs sm:text-base text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Stay informed with our official term dates, visitation days, UNEB briefings, inter-house sports competitions, and cultural celebrations.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow transition-transform hover:scale-105"
            >
              Apply for Admission
            </button>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Contact Director
            </a>
          </div>
        </div>
      </section>

      {/* 2. Events Directory & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-purple-900" />
            <span className="text-xs font-bold text-slate-700">Filter Event Types:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-900 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reminder Notification Toast */}
        {reminderAdded && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Reminder alert set for "{reminderAdded}"! You will receive updates via WhatsApp.</span>
          </div>
        )}

        {/* Events Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-lg uppercase tracking-wider ${
                      ev.category === 'Sports'
                        ? 'bg-amber-100 text-amber-900'
                        : ev.category === 'Examination'
                        ? 'bg-red-100 text-red-900'
                        : ev.category === 'Fieldwork'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-purple-100 text-purple-900'
                    }`}
                  >
                    {ev.category}
                  </span>

                  <span className="text-xs font-bold text-slate-900">{ev.date}</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {ev.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ev.description}
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{ev.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Event Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ev.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleSetReminder(ev.title)}
                  className="px-3 py-1.5 text-xs font-bold text-purple-900 hover:text-purple-950 hover:bg-purple-50 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Set Event Reminder</span>
                </button>

                <button
                  onClick={() => setActiveTab('admissions')}
                  className="px-3.5 py-1.5 bg-purple-900 hover:bg-purple-800 text-white text-xs font-bold rounded-xl shadow"
                >
                  Join Victory
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Universal Admission CTA Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900">Plan Ahead for Next Term’s Admission</h4>
            <p className="text-xs text-slate-600">Secure hostel slots and classroom places in Kassanda town early.</p>
          </div>
          <button
            onClick={() => setActiveTab('admissions')}
            className="px-5 py-2.5 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow"
          >
            Fill Admission Form
          </button>
        </div>
      </section>
    </div>
  );
};
