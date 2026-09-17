'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Identity Badge inspired by reference */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.02] mb-8 sm:mb-12">
              <span className="w-2 h-2 rounded-full bg-[#fabb02] animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-[#f5f5f0] uppercase">
                Kevin Siv Raj / Software Developer
              </span>
            </div>

            {/* Giant Editorial Headline */}
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-[5.25rem] font-medium leading-[1.05] tracking-tight text-[#f5f5f0] mb-8">
              Welcome to <br />
              <span className="italic font-normal">My Digital</span> <br />
              World.
            </h1>

            {/* Supporting Pitch Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#a6a6a6] font-light max-w-xl leading-relaxed mb-10">
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

          {/* Right Column: Authentic Portrait in Asymmetric Organic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4]">
              {/* Subtle yellow ambient halo behind organic mask */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#fabb02]/15 via-transparent to-transparent organic-egg-mask blur-xl pointer-events-none" />
              
              {/* Organic portrait container */}
              <div className="relative w-full h-full organic-egg-mask overflow-hidden border border-white/15 shadow-2xl bg-[#141414]">
                <Image
                  src="/kevin-portrait-rim.jpg"
                  alt="Kevin Siv Raj M S — Software Developer"
                  fill
                  priority
                  className="object-cover object-center filter grayscale contrast-[1.08] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 340px, 380px"
                />
                {/* Subtle vignette shadow overlay for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Minimal sub-label with arrow directly referencing the visual language of the reference */}
              <div className="mt-4 flex items-center justify-end gap-2 text-xs font-mono text-[#a6a6a6]">
                <span className="text-[#fabb02]">↳</span>
                <span>Crafting software since day one</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
