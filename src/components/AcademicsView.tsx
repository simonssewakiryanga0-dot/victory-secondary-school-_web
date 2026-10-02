import React from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  GraduationCap,
  Award,
  BookOpen,
  Microscope,
  CheckCircle2,
  FileCheck,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface AcademicsViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({ setActiveTab }) => {
  const { slots } = useImageSlots();

  return (
    <div className="space-y-14 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Ranked No. 1 Secondary School in Kassanda (2021–Date)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              Academic Excellence & Curriculum
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Nurturing intellectual discipline, scientific exploration, and ethical leadership under UNEB Center No. U3428.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => setActiveTab('student-portal')}
              className="px-4 py-2.5 bg-purple-900 hover:bg-purple-800 text-white font-semibold text-xs rounded-xl border border-purple-700"
            >
              Download Past Papers
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Academic Record Story */}
        <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-purple-900 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-purple-800" />
            <span>Academic Performance Record</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-crest">
            The Standard of Secondary Education in Kassanda
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Victory Secondary School was founded in <strong>1999</strong> and established its breakthrough milestone in <strong>2003</strong> when full laboratory infrastructure and boarding dormitories were commissioned. Since <strong>2021 to date</strong>, our school has maintained the <strong>top academic performance ranking across Kassanda District</strong> in the Uganda National Examinations Board (UNEB) O-Level (UCE) and A-Level (UACE) national examinations.
            </p>
            <p>
              Our secret lies in small teacher-to-student ratios, individualized learner remedial tutorials, daily morning prep and supervised night prep, and continuous practical laboratory exposure for every student.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
              <span className="text-2xl font-black text-purple-950">94%</span>
              <p className="font-bold text-xs text-slate-800 mt-1">Division 1 & 2 Rates</p>
              <p className="text-[11px] text-slate-500">Consistent UNEB UCE candidates performance.</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
              <span className="text-2xl font-black text-amber-600">100%</span>
              <p className="font-bold text-xs text-slate-800 mt-1">Science Practical Completion</p>
              <p className="text-[11px] text-slate-500">Every student has dedicated lab apparatus access.</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <span className="text-2xl font-black text-emerald-700">#1</span>
              <p className="font-bold text-xs text-slate-800 mt-1">District Position</p>
              <p className="text-[11px] text-slate-500">Consecutive top honors in Kassanda 2021-date.</p>
            </div>
          </div>
        </div>

        {/* Two-Level Breakdown: O-Level & A-Level */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* O-Level Program */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-purple-100 text-purple-900 font-bold text-xs rounded-full uppercase">
                Ordinary Level (S.1 - S.4)
              </span>
              <span className="text-xs text-slate-500 font-semibold">Lower Secondary</span>
            </div>

            <h3 className="text-xl font-black text-slate-900 font-crest">
              New Lower Secondary Curriculum (NLSC)
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We implement the learner-centered Lower Secondary Curriculum designed to foster critical thinking, collaboration, creativity, and practical problem-solving.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Core Subjects:</strong> Mathematics, English, Biology, Chemistry, Physics, Geography, History, ICT.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Electives:</strong> Entrepreneurship, Literature, Agriculture, Luganda, CRE, Physical Education.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Continuous Assessment:</strong> 20% scores submitted directly to UNEB portal.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-purple-900">Day: UGX 180,000/= · Boarding: UGX 370,000/=</span>
              <button
                onClick={() => setActiveTab('admissions')}
                className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow"
              >
                Enroll for O-Level
              </button>
            </div>
          </div>

          {/* A-Level Program */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full uppercase">
                Advanced Level (S.5 - S.6)
              </span>
              <span className="text-xs text-slate-500 font-semibold">Senior Secondary</span>
            </div>

            <h3 className="text-xl font-black text-slate-900 font-crest">
              Pre-University Specialized Subject Combinations
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Targeted preparations for national university entrance (UACE) across both Science and Arts faculties.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Science Combinations:</strong> BCM/ICT, PCM/ICT, PCB/Sub-Maths, PEM, BCF.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Arts & Humanities:</strong> HEL/Sub-Maths, HEG/ICT, DEG/ICT, HED, History/Econ/Divinity.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>General Paper & Sub-ICT:</strong> Compulsory modern research and computing modules.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-700">Day: UGX 250,000/= · Boarding: UGX 390,000/=</span>
              <button
                onClick={() => setActiveTab('admissions')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
              >
                Enroll for A-Level
              </button>
            </div>
          </div>
        </div>

        {/* Science Laboratory Practical Infrastructure */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-purple-800 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                STEM & Research Foundation
              </span>
              <h3 className="text-2xl font-black font-crest text-white mt-1">
                Practical Science Laboratories & Computer Wing
              </h3>
            </div>
            <button
              onClick={() => setActiveTab('gallery')}
              className="text-xs font-bold text-amber-300 hover:underline"
            >
              View Lab Photos in Gallery →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 bg-purple-950/60 rounded-2xl border border-purple-800 space-y-2">
              <Microscope className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-white text-sm">Physics & Chemistry Labs</h4>
              <p>Equipped with modern optical benches, electrical circuit trainers, Bunsen burners, and titrators for standard UNEB testing.</p>
            </div>

            <div className="p-4 bg-purple-950/60 rounded-2xl border border-purple-800 space-y-2">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-white text-sm">Biology & Agriculture Lab</h4>
              <p>High-resolution compound microscopes, anatomical dissection kits, soil nutrient analyzers, and botanical specimena.</p>
            </div>

            <div className="p-4 bg-purple-950/60 rounded-2xl border border-purple-800 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-white text-sm">Modern ICT Lab</h4>
              <p>Dedicated computer terminal stations, internet research terminals, and database programming suites for every class.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Universal Admission CTA Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-purple-950">Enroll for Excellence at Victory Secondary School</h4>
            <p className="text-xs text-slate-600">Vacancies available for S.1, S.2, S.3, and S.5 learners.</p>
          </div>
          <button
            onClick={() => setActiveTab('admissions')}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
          >
            Open Admission Form
          </button>
        </div>
      </section>
    </div>
  );
};
