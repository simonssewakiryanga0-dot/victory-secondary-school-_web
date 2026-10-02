import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_IMAGES } from '../data/schoolData';

export interface ImageSlots {
  directorPhoto: string;
  logo: string;
  campusOverview: string;
  sportsTrophies: string;
  fieldworkStudy: string;
  aboutAdminBlock: string;
  aboutScienceLab: string;
  aboutDormitories: string;
  aboutLibrary: string;
  eventsHeroBackdrop: string;
}

const defaultSlots: ImageSlots = {
  directorPhoto: DEFAULT_IMAGES.director,
  logo: DEFAULT_IMAGES.logo,
  campusOverview: DEFAULT_IMAGES.campusStudents,
  sportsTrophies: DEFAULT_IMAGES.sportsVictory,
  fieldworkStudy: DEFAULT_IMAGES.fieldworkTrip,
  aboutAdminBlock: DEFAULT_IMAGES.campusStudents,
  aboutScienceLab: DEFAULT_IMAGES.fieldworkTrip,
  aboutDormitories: DEFAULT_IMAGES.campusStudents,
  aboutLibrary: DEFAULT_IMAGES.campusStudents,
  eventsHeroBackdrop: DEFAULT_IMAGES.campusStudents,
};

interface ImageContextType {
  slots: ImageSlots;
  updateSlot: (slotKey: keyof ImageSlots, newUrl: string) => void;
  resetSlots: () => void;
  activeModalSlot: keyof ImageSlots | null;
  openSlotModal: (slotKey: keyof ImageSlots) => void;
  closeSlotModal: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slots, setSlots] = useState<ImageSlots>(() => {
    try {
      const saved = localStorage.getItem('vss_custom_images');
      if (saved) {
        const parsed = JSON.parse(saved);
        // If the saved logo was the previous temporary placeholder, automatically upgrade to the official logo
        if (!parsed.logo || parsed.logo.includes('victory_school_crest_logo_1790918035437')) {
          parsed.logo = DEFAULT_IMAGES.logo;
        }
        return { ...defaultSlots, ...parsed };
      }
    } catch {
      // ignore
    }
    return defaultSlots;
  });

  const [activeModalSlot, setActiveModalSlot] = useState<keyof ImageSlots | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('vss_custom_images', JSON.stringify(slots));
    } catch {
      // ignore
    }
  }, [slots]);

  const updateSlot = (slotKey: keyof ImageSlots, newUrl: string) => {
    setSlots((prev) => ({ ...prev, [slotKey]: newUrl }));
  };

  const resetSlots = () => {
    setSlots(defaultSlots);
    localStorage.removeItem('vss_custom_images');
  };

  const openSlotModal = (slotKey: keyof ImageSlots) => {
    setActiveModalSlot(slotKey);
  };

  const closeSlotModal = () => {
    setActiveModalSlot(null);
  };

  return (
    <ImageContext.Provider
      value={{
        slots,
        updateSlot,
        resetSlots,
        activeModalSlot,
        openSlotModal,
        closeSlotModal,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageSlots = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageSlots must be used within an ImageProvider');
  }
  return context;
};
