import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => {
  return (
    <svg className={className} viewBox="0 0 48 48">
      {/* Circular background with gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
        <linearGradient id="gGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F8FF" />
        </linearGradient>
      </defs>
      
      <circle cx="24" cy="24" r="22" fill="url(#bgGradient)" stroke="#FF4500" strokeWidth="2"/>
      
      {/* Letter G */}
      <path d="M18 14 C14 14, 12 16, 12 20 L12 28 C12 32, 14 34, 18 34 L26 34 C28 34, 30 32, 30 30 L30 26 L24 26 L24 28 L28 28 L28 30 C28 31, 27 32, 26 32 L18 32 C16 32, 14 30, 14 28 L14 20 C14 18, 16 16, 18 16 L26 16 C27 16, 28 17, 28 18 L30 18 C30 15, 28 14, 26 14 Z" fill="url(#gGradient)" stroke="#1E40AF" strokeWidth="0.5"/>
      
      {/* Hammer tool */}
      <rect x="32" y="8" width="2" height="12" fill="#8B4513" transform="rotate(45 33 14)"/>
      <rect x="31" y="6" width="4" height="4" rx="1" fill="#C0C0C0" stroke="#696969" strokeWidth="0.5" transform="rotate(45 33 8)"/>
      
      {/* Colorful building blocks */}
      <rect x="6" y="36" width="8" height="4" fill="#DC2626" rx="1"/>
      <rect x="16" y="36" width="8" height="4" fill="#FBBF24" rx="1"/>
      <rect x="26" y="36" width="8" height="4" fill="#10B981" rx="1"/>
      <rect x="36" y="36" width="6" height="4" fill="#3B82F6" rx="1"/>
      
      {/* Small construction details */}
      <circle cx="38" cy="12" r="1.5" fill="#FBBF24"/>
      <circle cx="10" cy="12" r="1" fill="#EF4444"/>
    </svg>
  );
};

export default Logo;