import React, { useState } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO, SAMPLE_STUDENT_REPORTS } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  GraduationCap,
  Trophy,
  History,
  ShieldCheck,
  CheckCircle2,
  Camera,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
  Search,
  BookOpen,
  Compass,
} from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  const { slots, openSlotModal } = useImageSlots();

  // Quick Inline Parent Portal Demo on About Page (Requested by user)
  const [searchId, setSearchId] = useState('VSS/2024/0142');
  const [activeReportKey, setActiveReportKey] = useState('VSS/2024/0142');
  const report = SAMPLE_STUDENT_REPORTS[activeReportKey] || SAMPLE_STUDENT_REPORTS['VSS/2024/0142'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (SAMPLE_STUDENT_REPORTS[searchId.trim()]) {
      setActiveReportKey(searchId.trim());
    } else {
      alert('Student record not found in demonstration database. Try VSS/2024/0142 or VSS/2023/0088');
    }
  };

  return (
    <div className="space-y-14 lg:space-y-20 pb-16">
      {/* 1. Header Hero Banner */}
      <section className="bg-purple-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2 shadow-2xl border-2 border-amber-400 mb-4 shrink-0">
            <img
              src={slots.logo}
              alt={SCHOOL_INFO.name}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            Pioneer of Academic Excellence in Kassanda
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-crest text-white">
            About Victory Secondary School
          </h1>
          <p className="mt-3 text-sm sm:text-base text-purple-200 leading-relaxed font-editorial italic">
            "{SCHOOL_INFO.badgeMotto}" — Educating young men and women of character, discipline, and high intellect since 1999.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow"
            >
              Enroll Your Child Today
            </button>
            <button
              onClick={() => setActiveTab('parent-portal')}
              className="px-5 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-semibold text-xs sm:text-sm border border-purple-700"
            >
              Launch Parent Portal
            </button>
          </div>
        </div>
      </section>

      {/* 2. School Heritage, 1999 Foundation & 2003 Milestone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <History className="w-4 h-4 text-purple-800" />
              <span>Our Founding Story & Growth</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-crest">
              From Humble Beginnings in 1999 to District Leadership
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Victory Secondary School</strong> was founded in <strong>1999</strong> by visionary educator and Managing Director <strong>{SCHOOL_INFO.directorName}</strong> in Kassanda town. Driven by a deep passion to bring quality, disciplined secondary education to the children of Kassanda and surrounding areas, the school started with modest infrastructure and an unwavering commitment to moral integrity.
              </p>

              <div className="p-4 rounded-2xl bg-purple-50 border-l-4 border-purple-800 text-purple-950 font-medium">
                "In <strong>2003</strong>, the school achieved its transformative breakthrough — expanding into full science laboratories, comprehensive boarding dormitories, and earning official UNEB center status (Center No. U3428). Since then, we have never looked back."
              </div>

              <p>
                Fast-forward to present day: from <strong>2021 to date</strong>, Victory Secondary School has consistently been declared the{' '}
                <strong className="text-purple-950">Number One Academic Performer in Kassanda District</strong>. Our candidates sweep top Division 1 ranks in both Arts and Sciences, securing merit scholarships at prestigious universities and producing doctors, engineers, lawyers, teachers, and agricultural leaders.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400">Established</span>
                <div className="text-xl font-black text-purple-950">1999</div>
                <span className="text-[11px] text-slate-500">Kassanda Town</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400">Breakthrough</span>
                <div className="text-xl font-black text-amber-600">2003</div>
                <span className="text-[11px] text-slate-500">Boarding & UNEB Center</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400">Kassanda Rank</span>
                <div className="text-xl font-black text-emerald-600">Best #1</div>
                <span className="text-[11px] text-slate-500">2021 – Present</span>
              </div>
            </div>
          </div>

          {/* Director & Location Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-purple-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 shadow bg-purple-950 shrink-0">
                  <img
                    src={slots.directorPhoto}
                    alt={SCHOOL_INFO.directorName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">{SCHOOL_INFO.directorName}</h3>
                  <p className="text-xs text-amber-400 font-semibold">{SCHOOL_INFO.directorTitle}</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                "Our doors are open to every young Ugandan who desires to sound their potential and shine before society. We emphasize discipline, prayer, sports, and intensive academics."
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{SCHOOL_INFO.physicalAddress}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Tel: {SCHOOL_INFO.phonePrimary} / {SCHOOL_INFO.phoneSecondary}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMAGE SPACES PROVIDED AS REQUESTED BY USER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800">
            Interactive Image Spaces
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-crest">
            Campus Facilities & Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Spaces provided for you to customize with your school's photos anytime using the "Swap Photo" button.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Space 1: Administration Block */}
          <div className="relative group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={slots.aboutAdminBlock}
                alt="Administration Block along Kikandwa Road"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => openSlotModal('aboutAdminBlock')}
                className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-purple-900 text-amber-300 text-xs font-semibold rounded-lg border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow"
              >
                <Camera className="w-3 h-3" />
                <span>Swap Photo</span>
              </button>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="font-bold text-sm text-slate-900">Administration Complex</h4>
              <p className="text-xs text-slate-500">
                Along Kikandwa Road next to Kyato Hotel. Welcoming Director & bursar offices.
              </p>
            </div>
          </div>

          {/* Space 2: Science Laboratories */}
          <div className="relative group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={slots.aboutScienceLab}
                alt="Science Laboratories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => openSlotModal('aboutScienceLab')}
                className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-purple-900 text-amber-300 text-xs font-semibold rounded-lg border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow"
              >
                <Camera className="w-3 h-3" />
                <span>Swap Photo</span>
              </button>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="font-bold text-sm text-slate-900">Modern Science Labs</h4>
              <p className="text-xs text-slate-500">
                Equipped for Physics, Chemistry, and Biology UNEB practical examinations.
              </p>
            </div>
          </div>

          {/* Space 3: Dormitories & Boarding */}
          <div className="relative group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={slots.aboutDormitories}
                alt="Boarding Dormitories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => openSlotModal('aboutDormitories')}
                className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-purple-900 text-amber-300 text-xs font-semibold rounded-lg border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow"
              >
                <Camera className="w-3 h-3" />
                <span>Swap Photo</span>
              </button>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="font-bold text-sm text-slate-900">Secure Boarding Hostels</h4>
              <p className="text-xs text-slate-500">
                Separate boys and girls dormitories with 24/7 matrons, warden, and perimeter security.
              </p>
            </div>
          </div>

          {/* Space 4: E-Library & Study Quadrangle */}
          <div className="relative group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={slots.aboutLibrary}
                alt="Library and Computer Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => openSlotModal('aboutLibrary')}
                className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-purple-900 text-amber-300 text-xs font-semibold rounded-lg border border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow"
              >
                <Camera className="w-3 h-3" />
                <span>Swap Photo</span>
              </button>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="font-bold text-sm text-slate-900">Resource Library & ICT</h4>
              <p className="text-xs text-slate-500">
                Textbooks, reference literature, high-speed computers, and quiet revision halls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECURE PARENT PORTAL INTEGRATION (EXPLICITLY REQUESTED ON ABOUT US PAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-10 border border-purple-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Secure Parent Portal (Integrated Access)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-crest text-white">
                Monitor Attendance, Term Grades & Fee Clearance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                As part of our commitment to transparent communication, parents can verify their child's continuous assessments, termly exam scores, and daily roll-call attendance.
              </p>
            </div>

            {/* Search form / selector */}
            <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Student ID (e.g. VSS/2024/0142)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="px-4 py-2.5 pl-9 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 w-64"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
              >
                Track Student
              </button>
            </form>
          </div>

          {/* Quick Demo Switcher Buttons */}
          <div className="flex items-center gap-2 pt-4 text-xs">
            <span className="text-slate-400">Quick Demo Records:</span>
            {Object.keys(SAMPLE_STUDENT_REPORTS).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setSearchId(id);
                  setActiveReportKey(id);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                  activeReportKey === id
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {SAMPLE_STUDENT_REPORTS[id].studentName} ({id})
              </button>
            ))}
          </div>

          {/* Live Student Report Card Summary */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
            {/* Left Overview */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/60">
                <span className="text-[10px] uppercase font-bold text-amber-400">Student Profile</span>
                <h4 className="text-lg font-black text-white">{report.studentName}</h4>
                <div className="text-xs text-purple-200 mt-1 space-y-0.5">
                  <p>ID: {report.studentId}</p>
                  <p>Class: {report.classLevel} ({report.stream})</p>
                  <p>Term: {report.term}, Academic Year {report.academicYear}</p>
                </div>
              </div>

              {/* Attendance Tracker */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Term Attendance</span>
                  <span className="font-black text-emerald-400 tabular-nums">
                    {report.attendanceRate}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${report.attendanceRate}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Present: {report.daysPresent} days</span>
                  <span>Total: {report.totalDays} days</span>
                </div>
              </div>

              {/* Fees Summary */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Fees Clearance</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Balance:</span>
                  <span
                    className={`text-xs font-black tabular-nums ${
                      report.feesStatus.balance === 0 ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    UGX {report.feesStatus.balance.toLocaleString()}/=
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Status:{' '}
                  <span
                    className={
                      report.feesStatus.status === 'Cleared'
                        ? 'text-emerald-400 font-bold'
                        : 'text-amber-400 font-bold'
                    }
                  >
                    {report.feesStatus.status}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('parent-portal')}
                className="w-full py-2.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open Full Parent Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Academic Performance Table */}
            <div className="lg:col-span-8 overflow-x-auto">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Term Grades & Examination Marks
              </div>
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-2">Subject</th>
                    <th className="pb-2 text-center">BOT (30%)</th>
                    <th className="pb-2 text-center">MOT (30%)</th>
                    <th className="pb-2 text-center">EOT (40%)</th>
                    <th className="pb-2 text-center">Total</th>
                    <th className="pb-2 text-center">Grade</th>
                    <th className="pb-2">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {report.grades.slice(0, 5).map((g, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="py-2.5 font-medium text-white">{g.subject}</td>
                      <td className="py-2.5 text-center tabular-nums text-slate-300">{g.botScore}%</td>
                      <td className="py-2.5 text-center tabular-nums text-slate-300">{g.motScore}%</td>
                      <td className="py-2.5 text-center tabular-nums text-slate-300">{g.eotScore}%</td>
                      <td className="py-2.5 text-center tabular-nums font-bold text-amber-300">{g.total}%</td>
                      <td className="py-2.5 text-center font-black text-emerald-400">{g.grade}</td>
                      <td className="py-2.5 text-[11px] text-slate-400">{g.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Headteacher's Assessment: "{report.headteacherRemarks}"</span>
                <span className="font-bold text-amber-300">Conduct: {report.conductRating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CO-CURRICULAR & SOCIAL VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-purple-950 font-crest">
              Character, Sports & Spiritual Formation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Building not just scholars, but upright citizens ready to serve Uganda and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
              <Trophy className="w-6 h-6 text-purple-900" />
              <h4 className="font-bold text-sm text-purple-950">Championship Sports</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Football, netball, athletics, and volleyball training under qualified sports masters. Winning district trophies is in our DNA.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
              <Compass className="w-6 h-6 text-purple-900" />
              <h4 className="font-bold text-sm text-purple-950">Curriculum Fieldworks</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students travel to environmental parks, agricultural research stations, and industrial complexes to experience applied education.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
              <Sparkles className="w-6 h-6 text-purple-900" />
              <h4 className="font-bold text-sm text-purple-950">Music, Dance & Drama (MDD)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extensive entertainment culture where students practice drama, brass instruments, cultural dances, and debate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Universal Admission CTA on all pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-purple-900 text-white space-y-4 shadow-xl">
          <h3 className="text-2xl font-black font-crest">Join the Winning Family at Victory</h3>
          <p className="text-xs sm:text-sm text-purple-200 max-w-lg mx-auto">
            Contact Director Mr. Kiza Flugeunsis today or complete our online registration form to secure a vacancy for your child.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow transition-transform hover:scale-105"
            >
              Fill Online Admission Form
            </button>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              WhatsApp Director: {SCHOOL_INFO.phonePrimary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
