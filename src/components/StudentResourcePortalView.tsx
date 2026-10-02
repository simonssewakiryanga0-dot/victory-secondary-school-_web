import React, { useState } from 'react';
import { PageTab, StudentResource } from '../types';
import { ACADEMIC_RESOURCES, SCHOOL_INFO } from '../data/schoolData';
import {
  BookOpen,
  Download,
  Search,
  Filter,
  FileText,
  Sparkles,
  CheckCircle2,
  Eye,
  X,
  GraduationCap,
  Calendar,
} from 'lucide-react';

interface StudentResourcePortalViewProps {
  setActiveTab: (tab: PageTab) => void;
}

export const StudentResourcePortalView: React.FC<StudentResourcePortalViewProps> = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'O-Level (S.1-S.4)' | 'A-Level (S.5-S.6)'>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);
  const [viewingResource, setViewingResource] = useState<StudentResource | null>(null);

  const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Economics', 'English Language', 'ICT / Computer Studies'];

  const filteredResources = ACADEMIC_RESOURCES.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || res.level === selectedLevel || res.level === 'General';
    const matchesSubject = selectedSubject === 'All' || res.subject === selectedSubject;
    return matchesSearch && matchesLevel && matchesSubject;
  });

  const handleDownload = (res: StudentResource) => {
    setDownloadSuccessItem(res.id);
    // Simulate real file download
    const element = document.createElement('a');
    const file = new Blob([`VICTORY SECONDARY SCHOOL - KASSANDA\nTitle: ${res.title}\nSubject: ${res.subject}\nLevel: ${res.level}\nUNEB Syllabus Revision Material\n\n${res.description}\n\nPrepared by Victory Secondary School Academic Department.\nP.O. Box 24 Kassanda, Uganda.`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${res.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 3500);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Academic Support Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-crest text-white">
              Student E-Library & Academic Resources
            </h1>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
              Free access to UNEB past papers with marking guides, science lab manuals, notes, and revision summaries for Ordinary and Advanced Level students.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </section>

      {/* Main Filter & Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search & Level Filters */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search revision notes, UNEB papers, lab guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>

            {/* Level Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
              {(['All', 'O-Level (S.1-S.4)', 'A-Level (S.5-S.6)'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                    selectedLevel === lvl
                      ? 'bg-purple-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Pills (interactive filter tabs) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>Subject:</span>
            </span>
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  selectedSubject === sub
                    ? 'bg-purple-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-900">{res.subject}</span>
                  <span className="text-slate-400">{res.level}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {res.description}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                  <span>Format: {res.fileType}</span>
                  <span>·</span>
                  <span>Size: {res.fileSize}</span>
                  <span>·</span>
                  <span>{res.downloadsCount} Downloads</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setViewingResource(res)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-purple-900 hover:bg-purple-50 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <button
                  onClick={() => handleDownload(res)}
                  className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow transition-transform active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {downloadSuccessItem === res.id ? 'Downloaded ✓' : 'Download Guide'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800">No resources found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or subject filters.
            </p>
          </div>
        )}
      </div>

      {/* Resource Preview Modal */}
      {viewingResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-purple-900 text-white">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <h3 className="font-bold text-sm text-white">Document Syllabus Preview</h3>
              </div>
              <button
                onClick={() => setViewingResource(null)}
                className="p-1 rounded-lg text-purple-200 hover:text-white hover:bg-purple-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-purple-900 uppercase">
                  {viewingResource.subject} · {viewingResource.level}
                </span>
                <h2 className="text-lg font-black text-slate-900 mt-0.5">
                  {viewingResource.title}
                </h2>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <p className="font-semibold text-purple-950">Curriculum Synopsis & Teacher Notes:</p>
                <p>{viewingResource.description}</p>
                <p>
                  Compiled according to Uganda National Examinations Board (UNEB) specifications and
                  approved by the Victory Secondary School Academic Board.
                </p>
              </div>

              <div className="p-3 bg-purple-50 rounded-xl text-xs text-purple-900 flex items-center justify-between">
                <span>File Size: {viewingResource.fileSize} ({viewingResource.fileType})</span>
                <span className="font-bold text-amber-600">Free for all Victory Students</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setViewingResource(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(viewingResource);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-purple-900 hover:bg-purple-800 rounded-xl shadow flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>Save to Device</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Universal Admission CTA Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-purple-950">Study with the Best in Kassanda</h4>
            <p className="text-xs text-slate-600">Access full laboratories, digital libraries, and top teachers.</p>
          </div>
          <button
            onClick={() => setActiveTab('admissions')}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow"
          >
            Apply for Admission Now
          </button>
        </div>
      </section>
    </div>
  );
};
