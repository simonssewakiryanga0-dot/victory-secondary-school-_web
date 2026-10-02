import React, { useState } from 'react';
import { useImageSlots, ImageSlots } from '../context/CustomImageContext';
import { DEFAULT_IMAGES } from '../data/schoolData';
import { Upload, X, Check, Image as ImageIcon, RotateCcw } from 'lucide-react';

const slotLabels: Record<keyof ImageSlots, { name: string; description: string }> = {
  directorPhoto: {
    name: "Director's Photo (Triangular Frame)",
    description: "Displayed in the triangular hero frame on the home page and in the leadership section.",
  },
  logo: {
    name: 'School Crest Logo',
    description: 'Circular brand emblem in the top left header, footer, and certificates.',
  },
  campusOverview: {
    name: 'Campus & Student Life',
    description: 'Main campus banner showing students in purple and navy uniforms.',
  },
  sportsTrophies: {
    name: 'Sports Championship & Trophies',
    description: 'Celebratory sports photos, cups, football, and athletics trophies.',
  },
  fieldworkStudy: {
    name: 'Educational Fieldwork & Safari Studies',
    description: 'Students on geographical tours, biology expeditions, and fieldwork.',
  },
  aboutAdminBlock: {
    name: 'Administration Block Space',
    description: 'Image space for school offices along Kikandwa Road next to Kyato Hotel.',
  },
  aboutScienceLab: {
    name: 'Science Laboratories Space',
    description: 'Image space for Physics, Chemistry, and Biology STEM practicals.',
  },
  aboutDormitories: {
    name: 'Boarding Facilities & Dormitories',
    description: 'Image space for student dormitories, dining hall, and boarding compound.',
  },
  aboutLibrary: {
    name: 'E-Library & Resource Center',
    description: 'Image space for study hall, textbooks, and computer lab.',
  },
  eventsHeroBackdrop: {
    name: 'Events Page Background Banner',
    description: 'Background student photo banner for the calendar and school functions page.',
  },
};

export const ImageSlotManagerModal: React.FC = () => {
  const { activeModalSlot, closeSlotModal, updateSlot, slots } = useImageSlots();
  const [urlInput, setUrlInput] = useState('');
  const [previewError, setPreviewError] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!activeModalSlot) return null;

  const currentSlotInfo = slotLabels[activeModalSlot];
  const currentImage = slots[activeModalSlot];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        updateSlot(activeModalSlot, result);
        setSuccessMsg('Photo uploaded and updated successfully!');
        setTimeout(() => setSuccessMsg(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      updateSlot(activeModalSlot, urlInput.trim());
      setUrlInput('');
      setSuccessMsg('Image link applied successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleSelectDefault = (url: string) => {
    updateSlot(activeModalSlot, url);
    setSuccessMsg('Selected default school asset!');
    setTimeout(() => setSuccessMsg(''), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-purple-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-800 flex items-center justify-center text-amber-300">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Manage Image Space</h3>
              <p className="text-xs text-purple-200">{currentSlotInfo.name}</p>
            </div>
          </div>
          <button
            onClick={closeSlotModal}
            className="p-1 rounded-lg text-purple-200 hover:text-white hover:bg-purple-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {successMsg && (
            <div className="flex items-center gap-2 p-3 text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Current Preview */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Current Assigned Photo
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
              {currentImage && !previewError ? (
                <img
                  src={currentImage}
                  alt={currentSlotInfo.name}
                  className="w-full h-full object-cover"
                  onError={() => setPreviewError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-slate-400">
                  <ImageIcon className="w-10 h-10 mb-2 text-slate-300" />
                  <span className="text-sm">Image preview unavailable</span>
                </div>
              )}
            </div>
            <p className="mt-1.5 text-xs text-slate-500">{currentSlotInfo.description}</p>
          </div>

          {/* Option 1: Upload from device */}
          <div className="border-t border-slate-100 pt-4">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Upload Photo from Your Device
            </label>
            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-purple-300 hover:border-purple-600 rounded-xl cursor-pointer bg-purple-50/40 hover:bg-purple-50 transition-colors">
              <Upload className="w-6 h-6 text-purple-700 mb-1" />
              <span className="text-xs font-semibold text-purple-900">
                Click to browse photo files
              </span>
              <span className="text-[11px] text-slate-500">JPG, PNG, WEBP (stored instantly)</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>

          {/* Option 2: Image URL */}
          <div className="border-t border-slate-100 pt-4">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Or Paste an Image Web Link (URL)
            </label>
            <form onSubmit={handleUrlSubmit} className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  setPreviewError(false);
                }}
                className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
              />
              <button
                type="submit"
                disabled={!urlInput.trim()}
                className="px-4 py-2 text-xs font-bold text-white bg-purple-800 hover:bg-purple-900 disabled:opacity-40 rounded-lg transition-colors whitespace-nowrap"
              >
                Apply URL
              </button>
            </form>
          </div>

          {/* Option 3: Quick School Presets */}
          <div className="border-t border-slate-100 pt-4">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Pre-loaded Victory School Media Assets
            </span>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(DEFAULT_IMAGES).map(([key, url]) => (
                <button
                  key={key}
                  onClick={() => handleSelectDefault(url)}
                  type="button"
                  title={`Use ${key}`}
                  className="group relative aspect-square rounded-lg overflow-hidden border border-slate-200 hover:border-purple-600 hover:ring-2 hover:ring-purple-500 focus:outline-none transition-all"
                >
                  <img
                    src={url}
                    alt={key}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-3.5 bg-slate-50 border-t border-slate-200">
          <button
            onClick={closeSlotModal}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
