import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MessageCircle, X, Phone, ShieldCheck } from 'lucide-react';

export const WhatsAppDirectorButton: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const defaultText = `Hello Director Mr. Kiza Flugeunsis, I am contacting you from the Victory Secondary School website to inquire about student admissions, school fees, and academic programs.`;
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Optional Quick Message Popover */}
      {showPreview && (
        <div className="w-80 p-4 bg-white rounded-2xl shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-200 text-slate-800">
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-purple-900 text-amber-300 font-bold flex items-center justify-center text-sm shadow">
                KF
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">{SCHOOL_INFO.directorName}</h4>
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available on WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowPreview(false)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl my-2 border border-slate-100">
            <p className="font-medium text-slate-700">Victory Sec. School Administration</p>
            <p className="mt-0.5">
              "Feel free to chat with me directly regarding 2025/2026 admissions, academic requirements, boarding amenities, or school fees."
            </p>
          </div>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat Now</span>
            </a>

            <a
              href={`tel:${SCHOOL_INFO.phonePrimary}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-purple-700" />
              <span>Direct Phone Call: {SCHOOL_INFO.phonePrimary}</span>
            </a>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Official Director Contact
            </span>
            <span>Kassanda, Uganda</span>
          </div>
        </div>
      )}

      {/* Main Big Floating Button */}
      <div className="flex items-center gap-2 group">
        {/* Hover pill tag */}
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-xl shadow-lg backdrop-blur-sm pointer-events-none transition-opacity opacity-0 group-hover:opacity-100">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Chat with Director Mr. Kiza Flugeunsis ({SCHOOL_INFO.phonePrimary})
        </span>

        <button
          onClick={() => {
            if (!showPreview) {
              setShowPreview(true);
            } else {
              window.open(whatsappUrl, '_blank');
            }
          }}
          className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-2xl hover:shadow-emerald-600/40 border-2 border-emerald-300 transition-all transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Contact School Director Mr. Kiza Flugeunsis on WhatsApp"
        >
          {/* Animated ping dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400" />
          </span>

          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 fill-white text-white" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-100 leading-none">
              WhatsApp Director
            </span>
            <span className="text-xs sm:text-sm font-black leading-tight text-white">
              Mr. Kiza (0757941442)
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
