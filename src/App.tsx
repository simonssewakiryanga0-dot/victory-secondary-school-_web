import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { ImageProvider } from './context/CustomImageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppDirectorButton } from './components/WhatsAppDirectorButton';
import { ImageSlotManagerModal } from './components/ImageSlotManagerModal';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { AcademicsView } from './components/AcademicsView';
import { AdmissionFormView } from './components/AdmissionFormView';
import { ParentPortalView } from './components/ParentPortalView';
import { StudentResourcePortalView } from './components/StudentResourcePortalView';
import { GalleryView } from './components/GalleryView';
import { EventsCalendarView } from './components/EventsCalendarView';
import { TeacherDirectoryView } from './components/TeacherDirectoryView';
import { ContactView } from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');

  // Scroll to top when activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <ImageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-purple-700 selection:text-white antialiased">
        {/* Top Navigation Bar with Circular Logo & Universal Admission Button */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1">
          {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
          {activeTab === 'about' && <AboutView setActiveTab={setActiveTab} />}
          {activeTab === 'academics' && <AcademicsView setActiveTab={setActiveTab} />}
          {activeTab === 'admissions' && <AdmissionFormView setActiveTab={setActiveTab} />}
          {activeTab === 'parent-portal' && <ParentPortalView setActiveTab={setActiveTab} />}
          {activeTab === 'student-portal' && <StudentResourcePortalView setActiveTab={setActiveTab} />}
          {activeTab === 'gallery' && <GalleryView setActiveTab={setActiveTab} />}
          {activeTab === 'events' && <EventsCalendarView setActiveTab={setActiveTab} />}
          {activeTab === 'teachers' && <TeacherDirectoryView setActiveTab={setActiveTab} />}
          {activeTab === 'contact' && <ContactView setActiveTab={setActiveTab} />}
        </main>

        {/* Global Big Floating WhatsApp Button to Contact Director Mr. Kiza Flugeunsis on all pages */}
        <WhatsAppDirectorButton />

        {/* Photo Slot Manager Modal (allows user to upload or swap images for any space) */}
        <ImageSlotManagerModal />

        {/* Comprehensive School Footer with all links & contacts */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </ImageProvider>
  );
}
