import React from 'react';
import { useImageSlots } from '../context/CustomImageContext';

interface OfficialSchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showFallbackImage?: boolean;
}

export const OfficialSchoolLogo: React.FC<OfficialSchoolLogoProps> = ({
  className = '',
  size = 'md',
  showFallbackImage = true,
}) => {
  const { slots } = useImageSlots();

  // If user has customized their logo in slots and it's not the initial placeholder,
  // or if they want image rendering:
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  }[size];

  return (
    <div className={`relative shrink-0 flex items-center justify-center ${dimensions} ${className}`}>
      {/* High-fidelity responsive image from the official school logo asset */}
      <img
        src={slots.logo}
        alt="Victory Secondary School Official Logo - Sound and Shine"
        className="w-full h-full object-contain filter drop-shadow-sm transition-transform hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
