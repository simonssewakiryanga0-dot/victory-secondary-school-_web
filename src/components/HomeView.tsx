import React, { useState } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO, NEWS_FEED } from '../data/schoolData';
import { TriangularDirectorCard } from './TriangularDirectorCard';
import { useImageSlots } from '../context/CustomImageContext';
import {
  Sparkles,
  Trophy,
  BookOpen,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Camera,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  const { slots, openSlotModal } = useImageSlots();
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950 via-slate-900 to-purple-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Decorative ambient elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Pill Announcement */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>2025/2026 Registration in Progress · O & A Level</span>
              <button
                onClick={() => setActiveTab('admissions')}
                className="underline hover:text-white font-bold ml-1"
              >
                Apply Now →
              </button>
            </div>
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 shadow-2xl border-2 border-amber-400 shrink-0">
                    <img
                      src={slots.logo}
                      alt={SCHOOL_INFO.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-widest block">
                      Kassanda District’s Academic Flagship · Founded 1999
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-crest">
                      Victory Secondary School
                    </h1>
                  </div>
                </div>

                <p className="text-lg sm:text-xl font-bold text-amber-300 font-editorial italic text-center lg:text-left">
                  "{SCHOOL_INFO.badgeMotto}" — Co-educational Boarding & Day School
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Located in Kassanda town along Kikandwa Road next to Kyato Hotel. Recognized as the{' '}
                <strong className="text-white font-bold underline decoration-amber-400">
                  Best Secondary School in Kassanda from 2021 to date
                </strong>
                . We empower learners with intellectual rigor, championship sports discipline,
                creative arts, and real-world fieldwork excursions under the visionary stewardship of
                Director <strong className="text-amber-300">{SCHOOL_INFO.directorName}</strong>.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('admissions')}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 fill-slate-950" />
                  <span>Online Admission Form</span>
                </button>

                <button
                  onClick={() => setActiveTab('parent-portal')}
                  className="px-5 py-3.5 rounded-xl bg-purple-900/90 hover:bg-purple-800 text-white font-bold text-sm border border-purple-600 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>Parent Portal Login</span>
                </button>

                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Director</span>
                </a>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-purple-900/80">
                {SCHOOL_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-purple-900/30 border border-purple-800/40">
                    <div className="text-xl sm:text-2xl font-black text-amber-400 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: School Visual Showcase with interactive slot button */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-700/60 group bg-slate-900">
                <img
                  src={slots.campusOverview}
                  alt="Victory Secondary School Students"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    School Identity & Uniform
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Royal Purple & Navy Blue Uniform
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Secondary learners on campus along Kikandwa Road, Kassanda Town.
                  </p>
                </div>

                {/* Change photo button */}
                <button
                  onClick={() => openSlotModal('campusOverview')}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-purple-900 text-amber-300 rounded-xl border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold flex items-center gap-1.5"
                  title="Swap Campus Photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Swap Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TRIANGULAR DIRECTOR PHOTO SPACE (SPECIFIED IN USER REQUEST) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TriangularDirectorCard />
      </section>

      {/* 3. QUICK ACCESS TILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800">
            Student & Parent Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-crest">
            Quick Portals & Directories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Access admissions, academic past papers, student attendance, and faculty contacts in one click.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Quick Link 1: Admission Form */}
          <div
            onClick={() => setActiveTab('admissions')}
            className="group p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-600 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center group-hover:bg-purple-900 group-hover:text-amber-400 transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-900">
                Online Admission Form
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the official enrollment form for S.1, S.2, S.3, or S.5. Day scholars & boarding slots.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-purple-800 group-hover:translate-x-1 transition-transform">
              <span>Apply Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Quick Link 2: Parent Portal */}
          <div
            onClick={() => setActiveTab('parent-portal')}
            className="group p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-600 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-900">
                Secure Parent Portal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitor student daily attendance, term report cards, grading for O & A Level, and fee balances.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
              <span>Check Student Progress</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Quick Link 3: Student Academic Support Resources */}
          <div
            onClick={() => setActiveTab('student-portal')}
            className="group p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-600 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-900">
                Student Resource Portal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download past UNEB papers, laboratory practical guides, revision handouts, and syllabi.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-blue-800 group-hover:translate-x-1 transition-transform">
              <span>Access Study Materials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Quick Link 4: Teacher Directory */}
          <div
            onClick={() => setActiveTab('teachers')}
            className="group p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-600 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-900">
                Teacher Contact Directory
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with department heads for Sciences, Arts, Sports Master, and class teachers.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
              <span>View Staff Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMICS & SPORTS STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Sports Cups Story */}
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 text-white p-7 sm:p-9 border border-purple-800/50 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Sports Excellence & Championship Cups</span>
                </div>
                <button
                  onClick={() => openSlotModal('sportsTrophies')}
                  className="text-[11px] text-amber-300 hover:text-white flex items-center gap-1 bg-purple-900/60 px-2.5 py-1 rounded-lg border border-purple-700"
                >
                  <Camera className="w-3 h-3" />
                  <span>Swap Trophy Photo</span>
                </button>
              </div>

              <h3 className="text-2xl font-black font-crest text-white">
                Champions of Kassanda District
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                At Victory Secondary School, physical excellence goes hand-in-hand with mental rigor. Our sports teams have won multiple district cups in football (soccer), netball, volleyball, and athletics. In 2022, 2023, and 2024, Victory lifted the Kassanda Inter-Schools Gold Trophy, propelled by student teamwork and high-performance training on our campus sports grounds.
              </p>

              {/* Photo preview of sports cups */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-700 shadow-md">
                <img
                  src={slots.sportsTrophies}
                  alt="Victory Secondary School Sports Trophy Celebration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-purple-900/40 border border-purple-800/60">
                  <div className="text-base font-black text-amber-400">1st Place</div>
                  <div className="text-[10px] text-slate-300">Kassanda Football Cup</div>
                </div>
                <div className="p-2 rounded-xl bg-purple-900/40 border border-purple-800/60">
                  <div className="text-base font-black text-amber-400">Gold Medal</div>
                  <div className="text-[10px] text-slate-300">Regional Netball Gala</div>
                </div>
                <div className="p-2 rounded-xl bg-purple-900/40 border border-purple-800/60">
                  <div className="text-base font-black text-amber-400">18+ Cups</div>
                  <div className="text-[10px] text-slate-300">Total Trophy Cabinet</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setActiveTab('gallery')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              >
                <span>View All Sports & Functions Photos in Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Academic Milestones Story (Best in Kassanda 2021-Date) */}
          <div className="relative rounded-3xl bg-white border border-purple-100 p-7 sm:p-9 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-900 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-purple-700" />
                <span>Academic Record & History</span>
              </div>

              <h3 className="text-2xl font-black font-crest text-purple-950">
                Ranked Best in Kassanda (2021–Date)
              </h3>

              <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 leading-relaxed">
                <strong>Historical Breakthrough:</strong> Founded in <strong>1999</strong>, the school achieved immense academic and structural prominence in <strong>2003</strong>, solidifying modern laboratories, dedicated boarding facilities, and leading teacher faculties.
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Under UNEB Center No. U3428, our candidates consistently earn top Division 1 ranks across Mathematics, Physics, Chemistry, Biology, Economics, Literature, and History. Over 94% of our Senior 6 leavers earn direct university merit admissions to top universities like Makerere, Kyambogo, and Mbarara.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Consecutive #1 Rank:</strong> Undisputed best secondary school in Kassanda district for UNEB exams from 2021 to 2025.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Curriculum:</strong> New Lower Secondary Curriculum (S.1–S.4) and specialized A-Level Sciences & Arts combinations.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>STEM & ICT Laboratories:</strong> Modern computer lab and practical science benches with 100% individual student apparatus exposure.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => setActiveTab('academics')}
                className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
              >
                Explore Academic Combinations
              </button>
              <button
                onClick={() => setActiveTab('student-portal')}
                className="text-xs font-semibold text-purple-800 hover:text-purple-950 underline"
              >
                Download Revision Papers →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENTERTAINMENT & FIELDWORK EXCURSIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-7 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Beyond The Classroom</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-crest text-white">
                Vibrant Entertainment, MDD & Fieldwork Studies
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                At Victory Secondary School, our students truly <em>love entertainment</em> and hands-on geographical learning! Our Music, Dance & Drama (MDD) club regularly stages traditional Ugandan folk dances, brass band parades, and theatrical productions.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Every term, learners embark on curriculum-grounded <strong>fieldwork study tours</strong> to destinations such as the Western Rift Valley, Lake Victoria fisheries, Jinja Nile waterfalls, and national game parks. These field excursions bridge classroom theory with practical research, environmental conservation, and social bonding.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
                >
                  View Fieldwork & MDD Gallery
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-purple-200 font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
                >
                  See Upcoming Excursion Dates
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-purple-600/50 shadow-xl">
                <img
                  src={slots.fieldworkStudy}
                  alt="Victory Secondary School Fieldwork Studies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => openSlotModal('fieldworkStudy')}
                className="absolute top-3 right-3 p-1.5 bg-slate-900/90 text-amber-300 text-xs rounded-lg border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold"
                title="Swap Fieldwork Image"
              >
                <Camera className="w-3 h-3" />
                <span>Swap Photo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISION & CORE VALUES (DIRECT FROM POSTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800">
            Institutional Pillar
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-crest">
            School Vision & Core Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Grounded in character development, spiritual growth, and high academic discipline.
          </p>
        </div>

        {/* Vision Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 to-purple-950 text-white shadow-xl border border-purple-800">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Our Guiding School Vision
            </span>
            <p className="text-lg sm:text-xl font-medium italic text-purple-100 font-editorial leading-relaxed">
              "{SCHOOL_INFO.vision}"
            </p>
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SCHOOL_INFO.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 shadow-sm transition-all space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-900 font-bold flex items-center justify-center text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-purple-950">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SCHOOL FEES STRUCTURE TRANSPARENCY CARD (FROM POSTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 text-white p-7 sm:p-10 shadow-2xl border border-purple-700/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-purple-800">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Transparent Financial Schedule
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-crest text-white">
                Official School Fees Structure
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow">
              Registration Fee: UGX {SCHOOL_INFO.feesStructure.registrationFee.toLocaleString()}/=
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-purple-900/40 border border-purple-700/60 space-y-1">
              <span className="text-xs font-semibold text-purple-300">O-Level (S.1 - S.4)</span>
              <div className="text-lg font-bold text-white">Day Scholars</div>
              <div className="text-2xl font-black text-amber-400 tabular-nums">
                UGX {SCHOOL_INFO.feesStructure.oLevelDay.toLocaleString()}/=
              </div>
              <span className="text-[11px] text-slate-300">Per Term Tuition & Lunch</span>
            </div>

            <div className="p-5 rounded-2xl bg-purple-900/60 border-2 border-amber-400/80 shadow-lg space-y-1 relative">
              <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                Popular
              </span>
              <span className="text-xs font-semibold text-purple-200">O-Level (S.1 - S.4)</span>
              <div className="text-lg font-bold text-white">Boarding Section</div>
              <div className="text-2xl font-black text-amber-300 tabular-nums">
                UGX {SCHOOL_INFO.feesStructure.oLevelBoarding.toLocaleString()}/=
              </div>
              <span className="text-[11px] text-purple-200">Full Boarding, Meals & Care</span>
            </div>

            <div className="p-5 rounded-2xl bg-purple-900/40 border border-purple-700/60 space-y-1">
              <span className="text-xs font-semibold text-purple-300">A-Level (S.5 - S.6)</span>
              <div className="text-lg font-bold text-white">Day Scholars</div>
              <div className="text-2xl font-black text-amber-400 tabular-nums">
                UGX {SCHOOL_INFO.feesStructure.aLevelDay.toLocaleString()}/=
              </div>
              <span className="text-[11px] text-slate-300">Per Term Tuition & Lab Access</span>
            </div>

            <div className="p-5 rounded-2xl bg-purple-900/40 border border-purple-700/60 space-y-1">
              <span className="text-xs font-semibold text-purple-300">A-Level (S.5 - S.6)</span>
              <div className="text-lg font-bold text-white">Boarding Section</div>
              <div className="text-2xl font-black text-amber-400 tabular-nums">
                UGX {SCHOOL_INFO.feesStructure.aLevelBoarding.toLocaleString()}/=
              </div>
              <span className="text-[11px] text-slate-300">Full Boarding & Prep Mentorship</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-purple-900 text-xs text-purple-200">
            <p className="max-w-2xl text-center sm:text-left">{SCHOOL_INFO.feesStructure.notes}</p>
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition-colors whitespace-nowrap shadow"
            >
              Enroll & Secure Vacancy
            </button>
          </div>
        </div>
      </section>

      {/* 8. LATEST SCHOOL NEWS FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800">
              Campus Announcements
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-crest">
              Victory News & Term Bulletins
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('events')}
            className="text-xs font-bold text-purple-900 hover:text-purple-700 flex items-center gap-1"
          >
            <span>View School Events Calendar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {NEWS_FEED.map((news) => (
            <div
              key={news.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-purple-900">{news.category}</span>
                  <span className="text-slate-400">{news.date}</span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 hover:text-purple-900 transition-colors">
                  {news.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedNews === news.id ? news.content : news.summary}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 mt-4">
                <button
                  onClick={() =>
                    setSelectedNews(selectedNews === news.id ? null : news.id)
                  }
                  className="text-xs font-bold text-purple-800 hover:text-purple-950 underline cursor-pointer"
                >
                  {selectedNews === news.id ? 'Show Less' : 'Read Full Announcement'}
                </button>

                {news.category === 'Admissions' && (
                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[11px] rounded-lg shadow"
                  >
                    Register
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. BOTTOM ENROLLMENT PROMPT (REQUIRED BUTTON ON ALL PAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-purple-50 border border-purple-200 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-purple-950 font-crest">
            Ready to Enroll at Victory Secondary School?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Our admissions office is ready to assist you. Fill the online form today or visit our campus along Kikandwa Road next to Kyato Hotel in Kassanda Town.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-6 py-3 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all hover:scale-105"
            >
              Fill Online Admission Form Now
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phonePrimary}`}
              className="px-5 py-3 bg-white hover:bg-slate-50 text-purple-900 border border-purple-300 font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Call Us: {SCHOOL_INFO.phonePrimary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
