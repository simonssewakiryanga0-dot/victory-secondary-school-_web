import React, { useState } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle,
  Printer,
  FileCheck,
  AlertCircle,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Building,
  Upload,
} from 'lucide-react';

interface AdmissionFormViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const AdmissionFormView: React.FC<AdmissionFormViewProps> = ({ setActiveTab }) => {
  const { slots } = useImageSlots();

  // Form State
  const [formData, setFormData] = useState({
    studentFullName: '',
    gender: 'Male',
    dateOfBirth: '',
    entryClass: 'Senior 1 (S.1)',
    entryType: 'Boarding Section',
    previousSchool: '',
    examAggregates: '',
    combinationInterest: '',
    parentFullName: '',
    parentRelationship: 'Father',
    parentPhone: '',
    parentEmail: '',
    homeAddress: '',
    medicalNotes: '',
    declarationAgreed: false,
  });

  const [submittedSlip, setSubmittedSlip] = useState<{
    referenceNumber: string;
    submissionDate: string;
    studentName: string;
    entryClass: string;
    entryType: string;
    parentPhone: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentFullName || !formData.parentPhone) {
      alert('Please fill in the student full name and parent phone number.');
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#581c87', '#f59e0b', '#10b981'],
      });
    } catch {
      // ignore
    }

    const refNo = `VSS-ADM-2025-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedSlip({
      referenceNumber: refNo,
      submissionDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      studentName: formData.studentFullName,
      entryClass: formData.entryClass,
      entryType: formData.entryType,
      parentPhone: formData.parentPhone,
    });

    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Official 2025/2026 Admissions Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              Student Admission Application
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Apply for Senior 1 through Senior 6 vacancies at Victory Secondary School Kassanda. Co-educational boarding and day sections available.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire with Director</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* If Application has been submitted, show Official Confirmation Slip */}
        {submittedSlip ? (
          <div className="bg-white rounded-3xl border border-purple-200 shadow-2xl p-6 sm:p-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Verification Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b-2 border-purple-900 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow bg-white p-1 shrink-0">
                  <img
                    src={slots.logo}
                    alt={SCHOOL_INFO.name}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-purple-950 font-crest">
                    {SCHOOL_INFO.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Official Admission Confirmation Slip
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {SCHOOL_INFO.physicalAddress} · Tel: {SCHOOL_INFO.phonePrimary}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black rounded-lg uppercase">
                  Application Received ✓
                </span>
                <p className="text-xs font-mono font-bold text-purple-900 mt-1">
                  Ref: {submittedSlip.referenceNumber}
                </p>
                <p className="text-[11px] text-slate-400">{submittedSlip.submissionDate}</p>
              </div>
            </div>

            {/* Candidate Summary */}
            <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                Applicant Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-500">Student Full Name:</span>
                  <p className="font-bold text-slate-900 text-sm">{submittedSlip.studentName}</p>
                </div>
                <div>
                  <span className="text-slate-500">Entry Class:</span>
                  <p className="font-bold text-purple-900 text-sm">{submittedSlip.entryClass}</p>
                </div>
                <div>
                  <span className="text-slate-500">Section Type:</span>
                  <p className="font-bold text-slate-900 text-sm">{submittedSlip.entryType}</p>
                </div>
              </div>
            </div>

            {/* Next Steps & Uniform Requirements */}
            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <h4 className="font-bold text-sm text-slate-900">Next Steps & Reporting Instructions:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Registration Fee:</strong> Present UGX 25,000/= at the bursar’s office or pay via school merchant code to confirm your provisional admission.
                </li>
                <li>
                  <strong>Required Documents:</strong> Bring original PLE or UCE result slip, primary leaving certificate, 2 passport photos, and a medical fitness form.
                </li>
                <li>
                  <strong>Official Uniform:</strong> Royal purple shirts/blouses and dark navy blue shorts/trousers or pleated skirts with official school badge (available at the school store along Kikandwa Road).
                </li>
                <li>
                  <strong>Hostel Reservations:</strong> For boarding learners, mattresses, basins, and personal effects must meet the school boarding code.
                </li>
              </ol>
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handlePrintSlip}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print or Save Slip (PDF)</span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Director Mr. Kiza, I have submitted an online admission application for ${submittedSlip.studentName} (Ref: ${submittedSlip.referenceNumber}) for ${submittedSlip.entryClass}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Notify Director on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmittedSlip(null)}
                  className="px-4 py-2 text-xs font-semibold text-purple-900 hover:underline"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Application Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8"
          >
            {/* Quick Fees & Registration Memo */}
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-purple-950">Registration Fee: UGX 25,000/=</span>
                <p className="text-purple-800 mt-0.5">
                  Day scholars: UGX 180,000 (O-Level) · Boarding: UGX 370,000 (O-Level)
                </p>
              </div>
              <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded-lg shrink-0">
                Vacancies Open
              </span>
            </div>

            {/* Section 1: Student Information */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-900 text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>Student Personal Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name (As per PLE / UCE UNEB document) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Namusoke Brenda / Kato Brian"
                    value={formData.studentFullName}
                    onChange={(e) => setFormData({ ...formData, studentFullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-700"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Class & Section */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-900 text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span>Academic Level & Section Selection</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Entry Class Applied For *
                  </label>
                  <select
                    value={formData.entryClass}
                    onChange={(e) => setFormData({ ...formData, entryClass: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-700 font-medium"
                  >
                    <option value="Senior 1 (S.1)">Senior 1 (S.1 - PLE Leavers)</option>
                    <option value="Senior 2 (S.2)">Senior 2 (S.2 Transfer)</option>
                    <option value="Senior 3 (S.3)">Senior 3 (S.3)</option>
                    <option value="Senior 4 (S.4)">Senior 4 (S.4 Candidate)</option>
                    <option value="Senior 5 (S.5)">Senior 5 (S.5 - UCE Leavers)</option>
                    <option value="Senior 6 (S.6)">Senior 6 (S.6 Candidate)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Section Type *
                  </label>
                  <select
                    value={formData.entryType}
                    onChange={(e) => setFormData({ ...formData, entryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-700 font-medium"
                  >
                    <option value="Boarding Section">Boarding Section (Full Hostel & Meals)</option>
                    <option value="Day Scholar">Day Scholar Section (Includes Daily Lunch)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Previous School Attended
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kassanda Junior School"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Previous Exam Aggregates / Division
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aggregate 12, Division 1"
                    value={formData.examAggregates}
                    onChange={(e) => setFormData({ ...formData, examAggregates: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    A-Level Combination / Subject Interest (For S.5 & S.6)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BCM/ICT, PCM/ICT, PCB, HEL, HEG, DEG or Arts"
                    value={formData.combinationInterest}
                    onChange={(e) => setFormData({ ...formData, combinationInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Parent / Guardian Information */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-900 text-white text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <span>Parent / Guardian Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mr. Ssewankambo John"
                    value={formData.parentFullName}
                    onChange={(e) => setFormData({ ...formData, parentFullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Relationship</label>
                  <select
                    value={formData.parentRelationship}
                    onChange={(e) => setFormData({ ...formData, parentRelationship: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-700"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Guardian / Sponsor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telephone (WhatsApp enabled) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0757941442"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Residential Address / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kassanda Town, Kikandwa, Mubende, Mityana, Kampala..."
                    value={formData.homeAddress}
                    onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Declaration & Submit */}
            <div className="pt-2 border-t border-slate-100 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.declarationAgreed}
                  onChange={(e) => setFormData({ ...formData, declarationAgreed: e.target.checked })}
                  className="mt-1 w-4 h-4 text-purple-900 border-slate-300 rounded focus:ring-purple-600"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I hereby declare that the particulars provided in this admission form are true and correct. I agree to abide by the disciplinary regulations, uniform code (royal purple & navy blue), and fees structure of Victory Secondary School Kassanda.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-purple-900 hover:bg-purple-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-purple-950/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Submit Official Admission Application</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
