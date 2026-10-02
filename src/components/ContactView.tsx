import React, { useState } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle,
  Building,
  Navigation,
} from 'lucide-react';

interface ContactViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActiveTab }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Admissions 2025/2026',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'Admissions 2025/2026',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>Campus Location & Support</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              Contact & Visit Victory Secondary School
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Located in Kassanda Town along Kikandwa Road, directly next to Kyato Hotel. Our administration team is ready to welcome you.
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

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-purple-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Administrative Offices
                </span>
                <h3 className="text-2xl font-black text-white font-crest mt-1">
                  Kassanda Campus
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                {/* Physical Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Physical Location:</strong>
                    <span>{SCHOOL_INFO.physicalAddress}</span>
                    <p className="text-amber-400 text-xs mt-0.5 font-semibold">
                      (Next to Kyato Hotel, along Kikandwa Road)
                    </p>
                  </div>
                </div>

                {/* Postal Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Postal Address:</strong>
                    <span>{SCHOOL_INFO.postalAddress}</span>
                  </div>
                </div>

                {/* Primary Telephones */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">School Telephones:</strong>
                    <div className="space-y-0.5">
                      <p>
                        Director: <a href={`tel:${SCHOOL_INFO.phonePrimary}`} className="text-amber-300 font-bold hover:underline">{SCHOOL_INFO.phonePrimary}</a>
                      </p>
                      <p>
                        Office: <a href={`tel:${SCHOOL_INFO.phoneSecondary}`} className="text-slate-300 hover:underline">{SCHOOL_INFO.phoneSecondary}</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Email Address:</strong>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-purple-300 hover:text-white">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900 text-amber-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Office Working Hours:</strong>
                    <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
                    <p>Saturday: 8:30 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Director Mr. Kiza ({SCHOOL_INFO.phonePrimary})</span>
                </a>
              </div>
            </div>

            {/* Travel Directions Note */}
            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-2 text-xs text-slate-600">
              <h4 className="font-bold text-sm text-purple-950 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-purple-800" />
                <span>Directions from Major Towns</span>
              </h4>
              <p>
                <strong>From Kampala / Mityana:</strong> Board taxis/buses heading towards Mubende/Fort Portal, alight at Kassanda stage in Kassanda town center. Branch off along Kikandwa Road for approximately 300 meters; our gate is prominently visible next to Kyato Hotel.
              </p>
              <p>
                <strong>From Mubende:</strong> Travel east along Mubende–Mityana highway to Kassanda town junction, follow Kikandwa road to the school entrance.
              </p>
            </div>
          </div>

          {/* Right: Message Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-black text-slate-900 font-crest mt-1">
                  Send an Inquiry to the Administration
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question about admissions, school fees, or hostel amenities? We reply promptly.
                </p>
              </div>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2 animate-in fade-in duration-200">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                  <p className="text-xs max-w-md mx-auto">
                    Thank you. Director Mr. Kiza Flugeunsis and our admissions team will contact you via phone or WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Mukasa"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0757941442"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-700"
                      >
                        <option value="Admissions 2025/2026">Admissions 2025/2026 (S.1 - S.6)</option>
                        <option value="School Fees & Payment Plans">School Fees & Payment Plans</option>
                        <option value="Boarding Hostel Accommodations">Boarding Hostel Accommodations</option>
                        <option value="Sports & Co-Curricular">Sports & Co-Curricular</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message / Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please write your questions or student requirements here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm rounded-xl shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send Message to Administration</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Universal Admission CTA Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-purple-950">Ready to Enroll?</h4>
            <p className="text-xs text-slate-600">Complete our online application form for instant processing.</p>
          </div>
          <button
            onClick={() => setActiveTab('admissions')}
            className="px-5 py-2.5 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow"
          >
            Open Admission Form
          </button>
        </div>
      </section>
    </div>
  );
};
