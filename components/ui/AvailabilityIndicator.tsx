'use client';

import React from 'react';
import { activeAvailability } from '../../data/availability';

interface AvailabilityIndicatorProps {
  showSupportingText?: boolean;
  className?: string;
}

export const AvailabilityIndicator: React.FC<AvailabilityIndicatorProps> = ({
  showSupportingText = true,
  className = '',
}) => {
  const { label, supportingText, dotColorClass, pulseColorClass, ping } = activeAvailability;

  return (
    <div
      role="status"
      aria-label={`Current availability: ${label}. ${supportingText}`}
      className={`inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-left ${className}`}
    >
      {/* Status Pill */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm shadow-sm transition-all hover:border-emerald-500/40 shrink-0">
        <span className="relative flex h-2 w-2">
          {ping && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulseColorClass} opacity-75`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColorClass}`} />
        </span>
        <span className="text-[11px] font-mono tracking-wider text-[#f5f5f0] uppercase font-medium">
          {label}
        </span>
      </div>

      {/* Supporting Text */}
      {showSupportingText && (
        <span className="text-xs font-sans text-[#a6a6a6] font-light tracking-normal leading-relaxed pl-1 sm:pl-0">
          {supportingText}
        </span>
      )}
    </div>
  );
};

