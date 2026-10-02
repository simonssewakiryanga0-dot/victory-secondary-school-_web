import React, { useState } from 'react';
import { PageTab, GalleryItem } from '../types';
import { GALLERY_ITEMS, SCHOOL_INFO } from '../data/schoolData';
import { useImageSlots } from '../context/CustomImageContext';
import {
  Image as ImageIcon,
  Trophy,
  GraduationCap,
  Compass,
  Sparkles,
  Camera,
  X,
  ChevronRight,
  ZoomIn,
} from 'lucide-react';

interface GalleryViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ setActiveTab }) => {
  const { slots, openSlotModal } = useImageSlots();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Sports & Trophies',
    'Academic Milestones',
    'Fieldwork & Trips',
    'Entertainment & MDD',
    'Campus Life',
  ];

  // Dynamic gallery items that sync with user image slot replacements
  const dynamicGallery: GalleryItem[] = [
    {
      id: 'gal-live-1',
      title: 'District Championship Football Cup Celebration',
      category: 'Sports & Trophies',
      imageUrl: slots.sportsTrophies,
      caption: 'Victory Secondary School team celebrating winning the Kassanda District Secondary Schools Cup in purple and navy uniforms.',
      year: '2024–2025',
    },
    {
      id: 'gal-live-2',
      title: 'Secondary Campus & Morning Student Assembly',
      category: 'Campus Life',
      imageUrl: slots.campusOverview,
      caption: 'Learners gathering on our scenic campus along Kikandwa Road next to Kyato Hotel, Kassanda Town.',
      year: '2025',
    },
    {
      id: 'gal-live-3',
      title: 'Geography & Ecology Hands-On Fieldwork Expedition',
      category: 'Fieldwork & Trips',
      imageUrl: slots.fieldworkStudy,
      caption: 'Senior 3 & Senior 5 learners recording field measurements and observing natural landforms in Uganda.',
      year: '2024',
    },
    {
      id: 'gal-live-4',
      title: 'Founder & Director Mr. Kiza Flugeunsis at Administration Office',
      category: 'Academic Milestones',
      imageUrl: slots.directorPhoto,
      caption: 'Visionary leadership guiding academic excellence in Kassanda District since 1999.',
      year: '2025',
    },
    {
      id: 'gal-live-5',
      title: 'Official Victory Secondary School Crest Logo - "Sound and Shine"',
      category: 'Academic Milestones',
      imageUrl: slots.logo,
      caption: 'The official emblem of Victory Secondary School Kassanda featuring the Christian cross of faith, graduation cap mortarboard, open book, and the motto Sound and Shine.',
      year: 'Est. 1999',
    },
    {
      id: 'gal-live-6',
      title: 'Administration Complex & Visitor Reception',
      category: 'Campus Life',
      imageUrl: slots.aboutAdminBlock,
      caption: 'Modern administration wing welcoming parents, candidates, and educational inspectors.',
      year: '2025',
    },
    {
      id: 'gal-live-7',
      title: 'Science Practical Lab Session (STEM Physics & Chemistry)',
      category: 'Academic Milestones',
      imageUrl: slots.aboutScienceLab,
      caption: 'Hands-on practicals ensuring maximum student pass rates in UNEB science papers.',
      year: '2025',
    },
    {
      id: 'gal-live-8',
      title: 'Music, Dance & Drama (MDD) Inter-House Competition',
      category: 'Entertainment & MDD',
      imageUrl: slots.campusOverview,
      caption: 'Students demonstrating cultural Ugandan folk dance, traditional drumming, and choir singing.',
      year: '2024',
    },
  ];

  const filteredItems = dynamicGallery.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <ImageIcon className="w-4 h-4" />
              <span>Visual Campus Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              School Functions & Photo Gallery
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Moments of victory in sports cups, academic distinctions, field trips, cultural MDD entertainment, and campus life in Kassanda Town.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openSlotModal('campusOverview')}
              className="px-4 py-2.5 bg-purple-900 hover:bg-purple-800 text-amber-300 rounded-xl text-xs font-bold flex items-center gap-2 border border-purple-700 shadow"
            >
              <Camera className="w-4 h-4" />
              <span>Add / Swap Gallery Photos</span>
            </button>

            <button
              onClick={() => setActiveTab('admissions')}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-900 text-white shadow'
                  : 'text-slate-600 hover:text-purple-900 hover:bg-purple-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dedicated Academic Milestones Section Callout */}
        {selectedCategory === 'All' || selectedCategory === 'Academic Milestones' ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-950 text-white border border-purple-700 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span>Dedicated Academic Milestones Section</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-crest text-white">
              Proud History: Best Secondary School in Kassanda (2021–Date)
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed max-w-3xl">
              Founded in 1999, Victory reached its breakthrough in 2003 with the commissioning of our first UNEB science center. Today, our students consistently achieve top Division 1 scores in Kassanda district, unlocking direct government sponsorship at Makerere, Kyambogo, and Mbarara universities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
              <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800">
                <span className="font-black text-amber-400 text-lg tabular-nums">1999</span>
                <p className="text-slate-300 text-[11px]">School Founded</p>
              </div>
              <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800">
                <span className="font-black text-amber-400 text-lg tabular-nums">2003</span>
                <p className="text-slate-300 text-[11px]">Breakthrough Era</p>
              </div>
              <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800">
                <span className="font-black text-emerald-400 text-lg tabular-nums">#1 Rank</span>
                <p className="text-slate-300 text-[11px]">Kassanda 2021–Date</p>
              </div>
              <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800">
                <span className="font-black text-amber-400 text-lg tabular-nums">18+ Cups</span>
                <p className="text-slate-300 text-[11px]">Trophies Won</p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-purple-600 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-purple-950 shadow-lg transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 text-amber-300 text-[11px] font-bold rounded-lg backdrop-blur-sm">
                  {item.category}
                </span>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-purple-950/80 text-white text-[10px] font-bold rounded-md">
                  {item.year}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-purple-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-purple-800 shadow-2xl">
            <div className="relative aspect-video w-full bg-black">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-purple-900 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
                <span>{activeItem.category}</span>
                <span>{activeItem.year}</span>
              </div>
              <h3 className="text-lg font-black text-white">{activeItem.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Universal Admission CTA Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-purple-950">Become Part of Victory’s Next Chapter</h4>
            <p className="text-xs text-slate-600">Register today for Senior 1 through Senior 6 vacancies in Kassanda.</p>
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
