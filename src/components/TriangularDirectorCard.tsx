import React, { useState } from 'react';
import { useImageSlots } from '../context/CustomImageContext';
import { SCHOOL_INFO } from '../data/schoolData';
import { MessageCircle, Phone, Mail, Award, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export const TriangularDirectorCard: React.FC = () => {
  const { slots, openSlotModal } = useImageSlots();
  const [shapeMode, setShapeMode] = useState<'triangle' | 'shield' | 'circle'>('triangle');

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Director Mr. Kiza Flugeunsis, I am inquiring about Victory Secondary School Kassanda admissions and academic programs.`
  )}`;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 border border-purple-800/40 shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
      {/* Subtle gold and purple ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Center: The Triangular Image Space requested specifically */}
        <div className="lg:col-span-5 flex flex-col items-center">
          {/* Triangular Container Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Outer Decorative Golden Frame */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-amber-400 via-amber-200 to-yellow-500 transition-all duration-300 shadow-2xl ${
                shapeMode === 'triangle'
                  ? 'clip-triangle p-1 scale-105'
                  : shapeMode === 'shield'
                  ? 'clip-shield p-1 scale-105'
                  : 'rounded-full p-1.5'
              }`}
            >
              <div
                className={`w-full h-full bg-purple-950/90 ${
                  shapeMode === 'triangle'
                    ? 'clip-triangle'
                    : shapeMode === 'shield'
                    ? 'clip-shield'
                    : 'rounded-full'
                }`}
              />
            </div>

            {/* Inner Clipped Image Space */}
            <div
              className={`relative w-[92%] h-[92%] overflow-hidden bg-slate-900 shadow-inner group transition-all duration-300 ${
                shapeMode === 'triangle'
                  ? 'clip-triangle'
                  : shapeMode === 'shield'
                  ? 'clip-shield'
                  : 'rounded-full border-4 border-amber-400/80'
              }`}
            >
              <img
                src={slots.directorPhoto}
                alt={SCHOOL_INFO.directorName}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with button to change image */}
              <button
                onClick={() => openSlotModal('directorPhoto')}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 text-amber-300 transition-opacity cursor-pointer p-4 text-center z-20"
                title="Change Director's Photo"
              >
                <Camera className="w-6 h-6 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Change Photo
                </span>
                <span className="text-[10px] text-slate-300">Click to upload your own picture</span>
              </button>
            </div>

            {/* Verification Seal Badge */}
            <div className="absolute -bottom-2 right-4 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase shadow-lg flex items-center gap-1 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Director</span>
            </div>
          </div>

          {/* Quick Shape Selector */}
          <div className="mt-4 flex items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-purple-700/50">
            <span className="text-[11px] font-medium text-purple-200 pl-2 pr-1">Frame:</span>
            <button
              onClick={() => setShapeMode('triangle')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                shapeMode === 'triangle'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              ▲ Triangular Space
            </button>
            <button
              onClick={() => setShapeMode('shield')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                shapeMode === 'shield'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              Shield
            </button>
            <button
              onClick={() => setShapeMode('circle')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                shapeMode === 'circle'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              Circle
            </button>
          </div>

          <button
            onClick={() => openSlotModal('directorPhoto')}
            className="mt-2 text-xs text-amber-300/90 hover:text-amber-200 flex items-center gap-1.5 underline decoration-amber-400/50 hover:decoration-amber-300"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Upload or change Director photo</span>
          </button>
        </div>

        {/* Right: Director's Message & Credentials */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Founder & Managing Director's Desk</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-crest">
              {SCHOOL_INFO.directorName}
            </h2>
            <p className="text-purple-300 text-sm font-medium mt-0.5">
              Leading Victory Secondary School Since Foundation in 1999 · Kassanda Town
            </p>
          </div>

          <div className="relative pl-4 border-l-2 border-amber-400/80 italic text-slate-200 text-sm sm:text-base leading-relaxed bg-purple-900/20 py-2 rounded-r-xl">
            "Welcome to Victory Secondary School, Kassanda. Since we opened our gates in 1999 and achieved our major milestone in 2003, our unyielding mission has been to provide high quality, disciplined, and transformative education. Today, we are honored to stand as the undisputed top-performing secondary school in Kassanda district from 2021 to date. Our gates are wide open to nurture your child to shine intellectually, spiritually, and socially."
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-purple-200 pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Co-educational Boarding & Day (O & A Level)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct UNEB Center No. U3428</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Along Kikandwa Rd, next to Kyato Hotel</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Active Sports, Fieldwork & MDD Culture</span>
            </div>
          </div>

          {/* Action row with telephone & WhatsApp */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Director Directly</span>
            </a>

            <a
              href={`tel:${SCHOOL_INFO.phonePrimary}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-800/80 hover:bg-purple-700 text-white font-semibold text-sm border border-purple-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call: {SCHOOL_INFO.phonePrimary}</span>
            </a>

            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl text-purple-300 hover:text-white text-xs transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
