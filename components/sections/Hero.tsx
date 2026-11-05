'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AvailabilityIndicator } from '../ui/AvailabilityIndicator';

export const Hero: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-[85vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          
          {/* Editorial Typography & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Top Badges: Identity & Availability Indicator */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.02]">
                <span className="w-2 h-2 rounded-full bg-[#fabb02] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[#f5f5f0] uppercase">
                  Kevin Siv Raj / Software Developer
                </span>
              </div>

              <AvailabilityIndicator showSupportingText={false} />
            </div>

            {/* Giant Editorial Headline with Responsive Scaling */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.06] tracking-tight text-[#f5f5f0] mb-6 sm:mb-8">
              Welcome to <br />
              <span className="italic font-normal">My Digital</span> <br />
              World.
            </h1>

            {/* Supporting Pitch Narrative */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#a6a6a6] font-light max-w-2xl leading-relaxed mb-6">
              I build software, intelligent applications, and digital experiences that turn ideas into useful, high-impact products.
            </p>

            {/* Supporting Availability Text */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#a6a6a6] mb-8 sm:mb-10">
              <span className="text-emerald-400">↳</span>
              <span className="text-[#888888]">Available for internships, collaborations &amp; interesting projects.</span>
            </div>

            {/* Editorial CTAs with Consistent Design Language */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-2">
              <a
                href="/Kevin_Siv_Raj_Resume.pdf"
                download="Kevin_Siv_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#f5f5f0] hover:text-[#fabb02] transition-colors py-2"
                aria-label="Download Kevin Siv Raj Resume PDF"
              >
                <span className="uppercase border-b border-white/20 pb-0.5 group-hover:border-[#fabb02] transition-colors">
                  Download Resume
                </span>
                <span className="text-[#fabb02] text-base group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </a>

              <a
                href="#selected-work"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#f5f5f0] hover:text-[#fabb02] transition-colors py-2"
              >
                <span className="uppercase border-b border-white/20 pb-0.5 group-hover:border-[#fabb02] transition-colors">
                  Explore My Work
                </span>
                <span className="text-[#fabb02] text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/kevinsivraj"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#a6a6a6] hover:text-[#f5f5f0] transition-colors py-2"
              >
                <span className="uppercase">LinkedIn</span>
                <span className="text-[#fabb02] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
