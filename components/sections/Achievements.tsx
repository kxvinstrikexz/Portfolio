'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FlipCard from '../ui/FlipCard';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden bg-[#0c0c0c]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
              07 / ACHIEVEMENTS
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08]">
              Recognition &amp; <br />
              <span className="italic font-normal">Milestones.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
              Formal patent publications, research developments, and technical milestones engineered during my academic journey in computer vision and artificial intelligence.
            </p>
          </div>
        </motion.div>

        {/* VisionX Patent Achievement Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#121212] border border-white/[0.08] shadow-2xl relative"
        >
          {/* Header Metadata Pill & Classification */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-10">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full border border-[#fabb02]/30 bg-[#fabb02]/10 text-[#fabb02] text-xs font-mono tracking-wider uppercase font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02] animate-pulse" />
                <span>Published Patent Application</span>
              </span>
              <span className="text-xs font-mono text-[#737373] tracking-widest hidden sm:inline-block">
                INDIA · IPO / InPASS
              </span>
            </div>

            <div className="text-xs font-mono text-[#a6a6a6] tracking-wider">
              IPC Classification: <span className="text-[#f5f5f0]">G06T</span>
            </div>
          </div>

          {/* Patent Title & Overview Description */}
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-mono text-[#fabb02] uppercase tracking-widest block mb-2">
              Patent Application No. 202641130682 A
            </span>
            <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f5f5f0] leading-[1.15] mb-4">
              VisionX: AI-Powered Multi-View Infrared-to-RGB Image Reconstruction and Analysis
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
              Official Indian Patent Advanced Search System (InPASS) published patent application for an intelligent multi-view computer vision architecture that reconstructs high-fidelity RGB imagery from infrared source frames for enhanced surveillance, object detection, and feature analysis.
            </p>
          </div>

          {/* Interactive FlipCard Container */}
          <div className="flex flex-col items-center justify-center mb-12">
            <FlipCard
              width="min(820px, 100%)"
              height="clamp(320px, 46vw, 420px)"
              radius={20}
              perspective={1200}
              stiffness={180}
              damping={22}
              hoverScale={1.02}
              glare={true}
              glareOpacity={0.25}
              shadow={true}
              shadowOpacity={0.5}
              background="#161616"
              color="#f5f5f0"
              ariaLabel="VisionX Patent Official InPASS Proof and Metadata Flip Card"
              front={
                <div className="relative w-full h-full bg-[#0a0f1d] flex flex-col justify-between overflow-hidden border border-white/10 group select-none">
                  {/* Image Presentation with object-contain to preserve every detail */}
                  <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 bg-[#080d18]">
                    <Image
                      src="/inpass-patent-search.jpg"
                      alt="Official InPASS Patent Search Results Portal for VisionX Application No 202641130682"
                      fill
                      priority
                      className="object-contain object-center filter contrast-[1.03] select-none"
                      sizes="(max-width: 768px) 100vw, 820px"
                    />
                  </div>

                  {/* Subtle Interactive Instruction Pill */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0c0c0c]/90 border border-white/15 text-[10px] sm:text-xs font-mono tracking-wider text-[#fabb02] shadow-xl">
                      <span>Click to flip details</span>
                      <span className="text-[#fabb02]">↺</span>
                    </span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 sm:p-8 md:p-10 bg-[#141414] border border-[#fabb02]/30 flex flex-col justify-between select-none overflow-y-auto">
                  <div>
                    {/* Top Row on Back Face */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#fabb02]/30 bg-[#fabb02]/10 text-[#fabb02] text-[10px] font-mono tracking-wider uppercase font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]" />
                        <span>Patent Publication Details</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">
                        India · InPASS
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl sm:text-2xl text-[#f5f5f0] mb-1 font-medium leading-tight">
                      VisionX
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#a6a6a6] font-light leading-relaxed mb-6">
                      AI-Powered Multi-View Infrared-to-RGB Image Reconstruction and Analysis
                    </p>

                    {/* Patent Metadata Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono border-t border-white/[0.08] pt-5">
                      <div>
                        <span className="text-[#737373] uppercase block mb-1 text-[10px] tracking-wider">Application No.</span>
                        <span className="text-[#f5f5f0] font-medium">202641130682 A</span>
                      </div>
                      <div>
                        <span className="text-[#737373] uppercase block mb-1 text-[10px] tracking-wider">Status</span>
                        <span className="text-[#fabb02] font-medium">Published</span>
                      </div>
                      <div>
                        <span className="text-[#737373] uppercase block mb-1 text-[10px] tracking-wider">Filing Date</span>
                        <span className="text-[#f5f5f0]">02 Nov 2026</span>
                      </div>
                      <div>
                        <span className="text-[#737373] uppercase block mb-1 text-[10px] tracking-wider">Publication Date</span>
                        <span className="text-[#f5f5f0]">06 Nov 2026</span>
                      </div>
                      <div>
                        <span className="text-[#737373] uppercase block mb-1 text-[10px] tracking-wider">Classification</span>
                        <span className="text-[#f5f5f0]">G06T</span>
                      </div>
                      <div>
                        <span className="text-[#737373] uppercase block mb-1 text-[10px] tracking-wider">Applicant</span>
                        <span className="text-[#f5f5f0] truncate block">MKCE</span>
                      </div>
                    </div>
                  </div>

                  {/* Flip Back Indicator */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#fabb02] uppercase tracking-wider">
                    <span>Click or drag to flip back</span>
                    <span>↺</span>
                  </div>
                </div>
              }
            />

            <p className="mt-4 text-xs font-mono tracking-wider text-[#737373] uppercase text-center flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]/60 animate-pulse" />
              <span>Interactive Patent Document · Click or drag card to flip between InPASS proof and metadata</span>
            </p>
          </div>

          {/* People and Contributions Section (Clearly Separated Roles) */}
          <div className="pt-10 border-t border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] block mb-6">
              Contributors &amp; Academic Leadership
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* 1. Project Guide */}
              <div className="p-6 rounded-2xl bg-[#171717] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] text-[#fabb02] text-[10px] font-mono tracking-wider uppercase font-semibold mb-3">
                    Project Guide
                  </div>
                  <h5 className="font-editorial text-lg text-[#f5f5f0] font-medium mb-1">
                    Dr. B. Padmini Devi
                  </h5>
                  <p className="font-sans text-xs text-[#737373] font-light">
                    Faculty Mentorship &amp; Research Guidance
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#a6a6a6]">
                  Role: Project Guide
                </div>
              </div>

              {/* 2. Patent Officers */}
              <div className="p-6 rounded-2xl bg-[#171717] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] text-[#fabb02] text-[10px] font-mono tracking-wider uppercase font-semibold mb-3">
                    Patent Officers
                  </div>
                  <ul className="space-y-1 mb-2">
                    <li className="font-editorial text-lg text-[#f5f5f0] font-medium">
                      Mr. D. Edwin Antony Raj
                    </li>
                    <li className="font-editorial text-lg text-[#f5f5f0] font-medium">
                      Mrs. R. Eswari
                    </li>
                  </ul>
                  <p className="font-sans text-xs text-[#737373] font-light">
                    IP Drafting, InPASS Compliance &amp; Regulatory Filing
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#a6a6a6]">
                  Role: Patent Officers
                </div>
              </div>

              {/* 3. Project Team Members */}
              <div className="p-6 rounded-2xl bg-[#171717] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#fabb02]/10 border border-[#fabb02]/20 text-[#fabb02] text-[10px] font-mono tracking-wider uppercase font-semibold mb-3">
                    Project Team
                  </div>
                  <ul className="space-y-1 mb-2">
                    <li className="font-editorial text-base sm:text-lg text-[#f5f5f0] font-medium flex items-center justify-between">
                      <span>Karthikeyan M</span>
                      <span className="text-[10px] font-mono text-[#737373]">927624BCS069</span>
                    </li>
                    <li className="font-editorial text-base sm:text-lg text-[#f5f5f0] font-medium flex items-center justify-between">
                      <span className="text-[#fabb02]">Kevin Siv Raj M S</span>
                      <span className="text-[10px] font-mono text-[#fabb02]/70">927624BCS080</span>
                    </li>
                    <li className="font-editorial text-base sm:text-lg text-[#f5f5f0] font-medium flex items-center justify-between">
                      <span>Madhavan C T P</span>
                      <span className="text-[10px] font-mono text-[#737373]">927624BCS090</span>
                    </li>
                  </ul>
                  <p className="font-sans text-xs text-[#737373] font-light">
                    System Architecture, Infrared Processing &amp; ML Modeling
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#a6a6a6]">
                  Role: Project Team Members
                </div>
              </div>

            </div>
          </div>

          {/* Dedicated Download Button Outside FlipCard (Section 8) */}
          <div className="pt-12 mt-12 border-t border-white/[0.08] flex flex-col items-center justify-center text-center">
            <a
              href="/VisionX_Patent_Publication.pdf"
              download="VisionX_Patent_Publication.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#fabb02] hover:bg-[#ffd147] text-[#0c0c0c] text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-xl hover:shadow-[#fabb02]/25 cursor-pointer"
              aria-label="View and Download VisionX Patent Publication PDF"
            >
              <span>VIEW PATENT PUBLICATION</span>
              <span className="text-[#0c0c0c] text-base group-hover:translate-y-0.5 transition-transform font-bold">
                ↓
              </span>
            </a>

            <p className="mt-4 text-xs font-mono text-[#737373] max-w-md">
              Official 2-Page Indian Patent Office (IPO) Publication Document · Application No: 202641130682 A
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
