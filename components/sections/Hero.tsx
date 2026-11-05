'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '../ui/Galaxy';

export const Hero: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Full Screen Background Galaxy Component */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden">
        <Galaxy
          density={1}
          glowIntensity={0.5}
          starSize={1}
          flareIntensity={1}
          starSpeed={0.5}
          mouseRepulsion={true}
          clickWarp={true}
          transparent={true}
          starColors={['#ffffff', '#fabb02', '#ffe699', '#cbd5e1']}
        />
        {/* Seamless bottom fade into section 2 */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0c0c0c] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          
          {/* Editorial Typography & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Pill Identity Badge inspired by reference */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.02] mb-8 sm:mb-12">
              <span className="w-2 h-2 rounded-full bg-[#fabb02] animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-[#f5f5f0] uppercase">
                Kevin Siv Raj / Software Developer
              </span>
            </div>

            {/* Giant Editorial Headline */}
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-[#f5f5f0] mb-8">
              Welcome to <br />
              <span className="italic font-normal">My Digital</span> <br />
              World.
            </h1>

            {/* Supporting Pitch Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#a6a6a6] font-light max-w-2xl leading-relaxed mb-10">
              I build software, intelligent applications, and digital experiences that turn ideas into useful, high-impact products.
            </p>

            {/* Editorial CTAs */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-2">
              <a
                href="#selected-work"
                className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-widest text-[#f5f5f0] hover:text-[#fabb02] transition-colors"
              >
                <span className="text-[#fabb02] text-base group-hover:translate-x-1 transition-transform">↳</span>
                <span className="uppercase border-b border-white/20 pb-0.5 group-hover:border-[#fabb02] transition-colors">
                  Explore My Work
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/kevinsivraj"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#a6a6a6] hover:text-[#f5f5f0] transition-colors"
              >
                <span className="uppercase">LinkedIn</span>
                <span className="text-[#fabb02] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
