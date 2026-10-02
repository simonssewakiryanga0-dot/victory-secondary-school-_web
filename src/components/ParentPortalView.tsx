import React, { useState } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO, SAMPLE_STUDENT_REPORTS } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  ShieldCheck,
  Search,
  Printer,
  Calendar,
  UserCheck,
  CheckCircle,
  AlertCircle,
  FileText,
  Phone,
  MessageCircle,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ParentPortalViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const ParentPortalView: React.FC<ParentPortalViewProps> = ({ setActiveTab }) => {
  const { slots } = useImageSlots();
  const [studentIdInput, setStudentIdInput] = useState('VSS/2024/0142');
  const [activeReportKey, setActiveReportKey] = useState('VSS/2024/0142');
  const [selectedTerm, setSelectedTerm] = useState('Term 2');

  const report = SAMPLE_STUDENT_REPORTS[activeReportKey] || SAMPLE_STUDENT_REPORTS['VSS/2024/0142'];

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = studentIdInput.trim();
    if (SAMPLE_STUDENT_REPORTS[clean]) {
      setActiveReportKey(clean);
    } else {
      alert(`Student ID "${clean}" not found in current term system. You can test with: VSS/2024/0142, VSS/2023/0088, or VSS/2025/0312`);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Secure School Information System (SIS)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              Parent Academic & Attendance Portal
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Track your child’s academic marks, continuous assessments, daily roll-call attendance, conduct ratings, and school fee records in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 border border-slate-700 shadow"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>Print Official Report Card</span>
            </button>
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold shadow"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </section>

      {/* Main Student Portal Search & Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search Bar & Quick Student Selectors */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Enter Student Admission Number (e.g. VSS/2024/0142)"
                value={studentIdInput}
                onChange={(e) => setStudentIdInput(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-purple-700"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            </div>

            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
            >
              <option value="Term 1">Term 1 (2025)</option>
              <option value="Term 2">Term 2 (2025)</option>
              <option value="Term 3">Term 3 (2025 Candidate Final)</option>
            </select>

            <button
              type="submit"
              className="px-6 py-3 bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm rounded-xl transition-colors shrink-0 shadow"
            >
              Access Records
            </button>
          </form>

          {/* Quick Demo Pre-selected students */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <span className="font-semibold text-slate-500">Quick Test Records:</span>
            {Object.entries(SAMPLE_STUDENT_REPORTS).map(([id, st]) => (
              <button
                key={id}
                onClick={() => {
                  setStudentIdInput(id);
                  setActiveReportKey(id);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors ${
                  activeReportKey === id
                    ? 'bg-purple-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {st.studentName} ({st.classLevel})
              </button>
            ))}
          </div>
        </div>

        {/* Printable Official Report Card Container */}
        <div id="printable-report" className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
          {/* Institutional Report Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b-2 border-purple-900 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400 shadow-md bg-white p-1.5 shrink-0">
                <img
                  src={slots.logo}
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black text-purple-950 font-crest">
                  {SCHOOL_INFO.name}
                </h2>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  "{SCHOOL_INFO.badgeMotto}" · UNEB Center No. U3428
                </p>
                <p className="text-xs text-slate-600">
                  {SCHOOL_INFO.physicalAddress} · Tel: {SCHOOL_INFO.phonePrimary}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-lg bg-purple-100 text-purple-900 font-extrabold text-xs uppercase tracking-wider mb-1">
                Official Student Term Report
              </span>
              <p className="text-xs text-slate-500 font-medium">Academic Year 2025</p>
              <p className="text-xs text-slate-700 font-bold">{selectedTerm}</p>
            </div>
          </div>

          {/* Student Profile Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs">
            <div>
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Student Name</span>
              <p className="text-sm font-bold text-slate-900">{report.studentName}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Admission ID</span>
              <p className="text-sm font-bold text-purple-900">{report.studentId}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Class & Stream</span>
              <p className="text-sm font-bold text-slate-900">{report.classLevel} - {report.stream}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Disciplinary Conduct</span>
              <p className="text-sm font-bold text-emerald-700">{report.conductRating}</p>
            </div>
          </div>

          {/* Quick Metrics: Attendance, Academic Aggregate, Fees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Metric 1: Attendance */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>Term Attendance</span>
                </span>
                <span className="text-base font-black text-emerald-600 tabular-nums">
                  {report.attendanceRate}%
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: `${report.attendanceRate}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-500">
                Present {report.daysPresent} of {report.totalDays} official school days. Full roll-call compliant.
              </p>
            </div>

            {/* Metric 2: Academic Standing */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-700" />
                  <span>Division Projection</span>
                </span>
                <span className="text-base font-black text-purple-900">
                  Division 1
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Ranked in top 5% of candidate class. Excellent science practical skills and consistency.
              </p>
              <span className="inline-block text-[11px] font-bold text-amber-600">
                Target: Aggregate 8 (Distinction 1 in all)
              </span>
            </div>

            {/* Metric 3: Fees Balance */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>School Fees Status</span>
                </span>
                <span
                  className={`text-xs font-black px-2 py-0.5 rounded-full ${
                    report.feesStatus.status === 'Cleared'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {report.feesStatus.status}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-slate-500">Outstanding:</span>
                <span className="text-sm font-black text-slate-900 tabular-nums">
                  UGX {report.feesStatus.balance.toLocaleString()}/=
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Paid: UGX {report.feesStatus.amountPaid.toLocaleString()}/= of {report.feesStatus.totalFees.toLocaleString()}/=
              </p>
            </div>
          </div>

          {/* Academic Report Table */}
          <div className="overflow-x-auto">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Subject Grades & Assessments Breakdown
            </h3>
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="py-3 px-3 rounded-tl-xl">Subject</th>
                  <th className="py-3 px-2 text-center">BOT (30%)</th>
                  <th className="py-3 px-2 text-center">MOT (30%)</th>
                  <th className="py-3 px-2 text-center">EOT (40%)</th>
                  <th className="py-3 px-2 text-center font-bold">Total (100%)</th>
                  <th className="py-3 px-2 text-center font-bold">UNEB Grade</th>
                  <th className="py-3 px-3 rounded-tr-xl">Teacher's Pedagogical Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {report.grades.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-3 font-bold text-slate-900">{item.subject}</td>
                    <td className="py-3 px-2 text-center tabular-nums text-slate-700">{item.botScore}%</td>
                    <td className="py-3 px-2 text-center tabular-nums text-slate-700">{item.motScore}%</td>
                    <td className="py-3 px-2 text-center tabular-nums text-slate-700">{item.eotScore}%</td>
                    <td className="py-3 px-2 text-center tabular-nums font-black text-purple-900 text-sm">
                      {item.total}%
                    </td>
                    <td className="py-3 px-2 text-center font-black text-emerald-700">
                      {item.grade}
                    </td>
                    <td className="py-3 px-3 text-slate-600 text-[11px] leading-relaxed">
                      {item.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Remarks & Sign-off Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-purple-900">
                Class Teacher's Remark
              </span>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "{report.classTeacherRemarks}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-purple-900">
                Headteacher's General Remark
              </span>
              <p className="text-xs text-slate-800 italic leading-relaxed">
                "{report.headteacherRemarks}"
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-purple-950">
                <span>Verified by Director: {SCHOOL_INFO.directorName}</span>
                <span className="text-emerald-700">Official Stamp Authenticated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Teacher / Director Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-slate-900">Have Questions About This Term's Report?</h4>
            <p className="text-xs text-slate-500">
              Reach Director Mr. Kiza Flugeunsis or the Academic Master directly for consultation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Director</span>
            </a>
            <button
              onClick={() => setActiveTab('teachers')}
              className="px-4 py-2.5 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl"
            >
              Teacher Directory
            </button>
          </div>
        </div>
      </div>

      {/* Universal Admission Button on all pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900">Know a student seeking admission to Victory Secondary School?</h4>
            <p className="text-xs text-slate-600">Vacancies available for S.1, S.2, S.3, and S.5 in Kassanda Town.</p>
          </div>
          <button
            onClick={() => setActiveTab('admissions')}
            className="px-5 py-2.5 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl whitespace-nowrap shadow"
          >
            Open Admission Form
          </button>
        </div>
      </section>
    </div>
  );
};
