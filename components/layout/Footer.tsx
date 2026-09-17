'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#0c0c0c] pt-16 pb-12 text-[#a6a6a6] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-white/[0.06]">
          <div>
            <span className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] block mb-2">
              KSR
            </span>
            <p className="text-sm text-[#f5f5f0] font-sans font-medium uppercase tracking-wider">
              Kevin Siv Raj M S
            </p>
            <p className="text-xs text-[#a6a6a6] tracking-widest uppercase mt-0.5">
              Software Developer · Digital Product Builder
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <a
              href="https://www.linkedin.com/in/kevinsivraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f0] hover:text-[#fabb02] transition-colors flex items-center gap-1.5 uppercase tracking-wider text-xs"
            >
              <span>LinkedIn</span>
              <span className="text-[#fabb02]">↗</span>
            </a>
            <Link
              href="/projects"
              className="text-[#f5f5f0] hover:text-[#fabb02] transition-colors flex items-center gap-1.5 uppercase tracking-wider text-xs"
            >
              <span>Projects Archive</span>
              <span className="text-[#fabb02]">→</span>
            </Link>
            <a
              href="#intro"
              className="text-[#a6a6a6] hover:text-[#f5f5f0] transition-colors uppercase tracking-wider text-xs"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#737373]">
          <p>© {currentYear} Kevin Siv Raj. All rights reserved.</p>
          <p className="tracking-normal text-[11px]">
            Designed with editorial rhythm, crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
