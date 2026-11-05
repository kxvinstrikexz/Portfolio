'use client';

import React from 'react';

interface DownloadResumeButtonProps {
  className?: string;
  variant?: 'outline' | 'filled';
}

export const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = ({
  className = '',
  variant = 'outline',
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 select-none cursor-pointer';

  const variantClasses =
    variant === 'filled'
      ? 'bg-[#fabb02] text-[#0c0c0c] font-semibold hover:bg-[#ffd147] shadow-lg hover:shadow-[#fabb02]/20'
      : 'border border-[#fabb02]/40 bg-[#fabb02]/[0.05] hover:bg-[#fabb02]/15 hover:border-[#fabb02] text-[#f5f5f0] hover:text-[#fabb02]';

  return (
    <a
      href="/Kevin_Siv_Raj_Resume.pdf"
      download="Kevin_Siv_Raj_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
      aria-label="Download Kevin Siv Raj Resume PDF (Opens / Downloads Kevin_Siv_Raj_Resume.pdf)"
    >
      <svg
        className="w-3.5 h-3.5 text-[#fabb02] group-hover:translate-y-0.5 transition-transform shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>DOWNLOAD RESUME</span>
    </a>
  );
};

