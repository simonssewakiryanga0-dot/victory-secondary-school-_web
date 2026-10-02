import React, { useState } from 'react';
import { PageTab, TeacherInfo } from '../types';
import { TEACHERS_DIRECTORY, SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  Users,
  Phone,
  Mail,
  Clock,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Award,
  BookOpen,
} from 'lucide-react';

interface TeacherDirectoryViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const TeacherDirectoryView: React.FC<TeacherDirectoryViewProps> = ({ setActiveTab }) => {
  const { slots } = useImageSlots();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchName, setSearchName] = useState<string>('');

  const departments = ['All', 'Executive Administration', 'Sciences', 'Languages', 'Humanities', 'Sports & Life Sciences', 'Vocational & ICT'];

  const filteredTeachers = TEACHERS_DIRECTORY.filter((t) => {
    const matchesDept = selectedDept === 'All' || t.department.includes(selectedDept) || (selectedDept === 'Languages' && t.department.includes('Languages'));
    const matchesSearch =
      t.name.toLowerCase().includes(searchName.toLowerCase()) ||
      t.subjects.some((s) => s.toLowerCase().includes(searchName.toLowerCase())) ||
      t.role.toLowerCase().includes(searchName.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Academic Faculty & Staff</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              Teacher & Staff Contact Directory
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Connect directly with our experienced teaching masters, department heads, and school administrators for academic consultations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </section>

      {/* Main Directory & Department Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Dept Controls */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by teacher name or subject (e.g. Physics, Math, Sports)..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-2">Department:</span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  selectedDept === dept
                    ? 'bg-purple-900 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-50'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => {
            const isDirector = teacher.name.includes('Kiza Flugeunsis');
            const avatar = isDirector ? slots.directorPhoto : teacher.avatarUrl;

            return (
              <div
                key={teacher.id}
                className={`p-6 rounded-3xl bg-white border shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${
                  isDirector ? 'border-amber-400 ring-2 ring-amber-300/40' : 'border-slate-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-800/30 bg-purple-900 flex items-center justify-center shrink-0 text-white text-lg font-bold">
                      {avatar ? (
                        <img
                          src={avatar}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span>
                          {teacher.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </span>
                      )}
                    </div>

                    <div>
                      {isDirector && (
                        <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-extrabold text-[10px] uppercase mb-1">
                          Founder & Director
                        </span>
                      )}
                      <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                        {teacher.name}
                      </h3>
                      <p className="text-xs font-semibold text-purple-900">{teacher.role}</p>
                      <p className="text-[11px] text-slate-500">{teacher.department}</p>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-[11px] text-slate-700 leading-relaxed">
                    <span className="font-bold text-purple-950">Qualifications: </span>
                    {teacher.qualifications}
                  </div>

                  {/* Teaching Subjects */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Teaching Subjects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 text-slate-800 text-[11px] font-medium rounded-md"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>{teacher.officeHours}</span>
                  </div>
                </div>

                {/* Direct Action Contacts */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${teacher.phone}`}
                    className="flex-1 py-2 px-3 bg-purple-900 hover:bg-purple-800 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>

                  {isDirector ? (
                    <a
                      href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  ) : (
                    <a
                      href={`mailto:${teacher.email}`}
                      className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Universal Admission CTA Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-purple-950">Learn from Dedicated Academic Masters</h4>
            <p className="text-xs text-slate-600">Register your child at Kassanda's leading secondary school.</p>
          </div>
          <button
            onClick={() => setActiveTab('admissions')}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
          >
            Fill Admission Form
          </button>
        </div>
      </section>
    </div>
  );
};
