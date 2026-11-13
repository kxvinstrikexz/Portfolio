'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects/types';
import { markIntroSeen } from '../../lib/introSession';
import TiltedCard, { TiltedCardLayer } from '../ui/TiltedCard';

interface EditorialCaseStudyProps {
  project: Project;
}

export const EditorialCaseStudy: React.FC<EditorialCaseStudyProps> = ({ project }) => {
  useEffect(() => {
    markIntroSeen();
  }, []);
  return (
    <article className="min-h-screen pt-32 pb-36 relative overflow-hidden bg-[#0c0c0c] text-[#f5f5f0]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a6a6a6] hover:text-[#fabb02] transition-colors"
          >
            <span className="text-[#fabb02] group-hover:-translate-x-1 transition-transform">←</span>
            <span className="uppercase">All Projects Directory</span>
          </Link>
          <div className="text-xs font-mono text-[#737373] hidden sm:block">
            {project.category}
          </div>
        </motion.div>

        {/* Editorial Case Study Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#fabb02]/30 bg-[#fabb02]/10 text-[#fabb02] text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]" />
            <span>{project.category}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] leading-[1.06]">
            {project.title}
          </h1>

          {project.tagline && (
            <p className="font-editorial text-xl sm:text-2xl text-[#a6a6a6] font-light italic">
              {project.tagline}
            </p>
          )}

          <p className="font-sans text-base sm:text-lg text-[#a6a6a6] font-light leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Metadata Bar */}
          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-[#737373] uppercase block mb-1">Year</span>
              <span className="text-[#f5f5f0]">{project.year || 'Current'}</span>
            </div>
            <div>
              <span className="text-[#737373] uppercase block mb-1">Status</span>
              <span className="text-[#fabb02]">{project.status || 'Active / Maintained'}</span>
            </div>
            <div>
              <span className="text-[#737373] uppercase block mb-1">Core Discipline</span>
              <span className="text-[#f5f5f0]">{project.category}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-wider text-[#f5f5f0] hover:text-[#fabb02] transition-colors flex items-center gap-1"
                >
                  <span>Code</span>
                  <span className="text-[#fabb02]">↗</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#fabb02] text-[#0c0c0c] text-xs font-mono tracking-wider font-semibold uppercase hover:bg-[#ffd147] transition-all shadow-md hover:shadow-[#fabb02]/20 inline-flex items-center gap-1.5"
                >
                  <span>{project.demoLabel || 'Click Here to Visit ↗'}</span>
                </a>
              )}
            </div>
          </div>

          {/* Client, Role & Duration Secondary Metadata */}
          {(project.client || project.role || project.duration) && (
            <div className="pt-5 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              {project.client && (
                <div>
                  <span className="text-[#737373] uppercase block mb-1">Client</span>
                  <span className="text-[#f5f5f0] font-sans">{project.client}</span>
                </div>
              )}
              {project.role && (
                <div>
                  <span className="text-[#737373] uppercase block mb-1">Role</span>
                  <span className="text-[#fabb02]">{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div>
                  <span className="text-[#737373] uppercase block mb-1">Duration</span>
                  <span className="text-[#a6a6a6]">{project.duration}</span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Hero Visual: Interactive 3D Tilted Card Presentation for Vijay Hospital / TiltedCard Hero, or standard editorial hero */}
        {project.id === 'vijay-hospital' || project.tiltedCardHero ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center justify-center mb-24 relative"
          >
            <TiltedCard
              imageSrc={project.image || project.deliveryImage || '/vijay-hospital-delivery.jpg'}
              altText={project.title}
              captionText="Vijay Hospital — Client Project Delivery"
              containerHeight="min(680px, 85vh)"
              containerWidth="100%"
              imageHeight="min(600px, 78vh)"
              imageWidth="min(450px, 86vw)"
              rotateAmplitude={14}
              scaleOnHover={1.04}
              glare={0.45}
              shadow={0.6}
              radius={20}
              showTooltip={true}
              backContent={
                <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#141414] border border-[#fabb02]/30 rounded-[20px] text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#fabb02]/30 bg-[#fabb02]/10 text-[#fabb02] text-[10px] font-mono tracking-wider uppercase mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]" />
                      <span>Project Verification</span>
                    </div>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-[#f5f5f0] mb-2 font-medium">
                      Vijay Hospital
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#a6a6a6] leading-relaxed mb-6 font-light">
                      Official client delivery &amp; project handover in Usilampatti, Madurai, Tamil Nadu.
                    </p>
                    <div className="space-y-2.5 text-xs font-mono text-[#737373] border-t border-white/[0.08] pt-4">
                      <div className="flex justify-between">
                        <span className="text-[#a6a6a6]">Duration:</span>
                        <span className="text-[#f5f5f0]">05 Oct – 30 Oct 2026</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a6a6a6]">Role:</span>
                        <span className="text-[#fabb02]">Frontend Developer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a6a6a6]">Status:</span>
                        <span className="text-[#10b981]">Delivered &amp; Live</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#a6a6a6]">Official Site:</span>
                        <a
                          href="https://vijayhospital.life"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#fabb02] hover:text-[#ffd147] transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                        >
                          <span>Click Here to Visit</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#fabb02] tracking-wider uppercase">
                    <span>Click to flip back</span>
                    <span>↺</span>
                  </div>
                </div>
              }
            >
              <TiltedCardLayer depth={28}>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none rounded-b-[20px]">
                  <span className="text-[10px] font-mono tracking-widest text-[#fabb02] uppercase block mb-1">
                    Client Project Delivery
                  </span>
                  <h3 className="font-editorial text-lg sm:text-xl text-[#f5f5f0] font-medium leading-snug">
                    Vijay Hospital Handover
                  </h3>
                </div>
              </TiltedCardLayer>
            </TiltedCard>
            <p className="mt-4 text-xs font-mono tracking-wider text-[#737373] uppercase text-center flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]/60 animate-pulse" />
              <span>Interactive 3D Card · Tilt to explore · Click to flip details</span>
            </p>
          </motion.div>
        ) : project.image && !project.image.endsWith('cover.svg') ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full aspect-[16/10] arch-frame overflow-hidden border border-white/15 bg-[#141414] shadow-2xl mb-24"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover filter contrast-105"
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/70 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        ) : null}

        {/* Case Study Detailed Body Sections */}
        <div className="space-y-20 divide-y divide-white/[0.08]">
          
          {/* 1. Overview */}
          {project.fullDescription && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16 first:pt-0"
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-4">
                Overview
              </h2>
              <div className="font-sans text-base sm:text-lg text-[#a6a6a6] font-light leading-relaxed max-w-3xl space-y-4">
                <p>{project.fullDescription}</p>
              </div>

              {project.demo && (
                <div className="pt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fabb02] text-[#0c0c0c] text-xs font-mono font-semibold tracking-wider uppercase hover:bg-[#ffd147] transition-all shadow-lg hover:shadow-[#fabb02]/25"
                  >
                    <span>{project.demoLabel || 'Click Here to Visit ↗'}</span>
                  </a>
                </div>
              )}
            </motion.section>
          )}

          {/* Project Objectives & Responsibilities */}
          {(project.objectives || project.responsibilities) && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {project.objectives && project.objectives.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight">
                    Project Objectives
                  </h3>
                  <ul className="space-y-3 font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#fabb02] font-mono text-xs pt-1">↳</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.responsibilities && project.responsibilities.length > 0 && (
                <div className="space-y-4 border-l border-white/[0.1] pl-6 md:pl-8">
                  <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight">
                    My Responsibilities
                  </h3>
                  <ul className="space-y-3 font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#fabb02] font-mono text-xs pt-1">↳</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.section>
          )}

          {/* Design Approach */}
          {project.designApproach && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16"
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-4">
                Design Approach
              </h2>
              <div className="font-sans text-base sm:text-lg text-[#a6a6a6] font-light leading-relaxed max-w-3xl">
                <p>{project.designApproach}</p>
              </div>
            </motion.section>
          )}

          {/* 2. Problem & Solution */}
          {(project.problem || project.solution) && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {project.problem && (
                <div className="space-y-4">
                  <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight">
                    The Problem
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-4 border-l border-white/[0.1] pl-6 md:pl-8">
                  <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight">
                    The Solution
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </motion.section>
          )}

          {/* 3. Key Architectural Features */}
          {project.features && project.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16"
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-6">
                Key Capabilities &amp; Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#141414] border border-white/[0.08] flex items-start gap-4"
                  >
                    <span className="font-mono text-xs text-[#fabb02] pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-sans text-sm text-[#f5f5f0] font-light leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* 4. System Architecture */}
          {project.architecture && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16"
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-4">
                System Architecture
              </h2>
              <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium mb-3">
                {project.architecture.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed max-w-3xl mb-8">
                {project.architecture.description}
              </p>

              {project.architecture.flow && project.architecture.flow.length > 0 && (
                <div className="p-8 rounded-3xl bg-[#141414] border border-white/[0.08]">
                  <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    {project.architecture.flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex-1 p-4 rounded-xl bg-[#1c1c1c] border border-white/10 text-center">
                          <span className="text-[10px] font-mono text-[#fabb02] block mb-1">
                            Phase {idx + 1}
                          </span>
                          <span className="text-xs font-sans text-[#f5f5f0] font-medium">
                            {step}
                          </span>
                        </div>
                        {idx < project.architecture!.flow.length - 1 && (
                          <span className="hidden md:inline-block text-[#fabb02] text-sm">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>
          )}

          {/* 5. Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16"
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-6">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full bg-[#141414] border border-white/10 text-xs font-mono tracking-wide text-[#f5f5f0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.section>
          )}

          {/* 6. Challenges & Outcome */}
          {(project.challenges || project.outcome) && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {project.challenges && (
                <div className="space-y-4">
                  <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight">
                    Technical Challenges
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.outcome && (
                <div className="space-y-4 border-l border-white/[0.1] pl-6 md:pl-8">
                  <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight">
                    Engineered Outcome
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </motion.section>
          )}

          {/* Client Project Delivery Section (Displayed if not already presented in the Hero) */}
          {project.deliveryImage && project.id !== 'vijay-hospital' && !project.tiltedCardHero && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="pt-16 space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] block mb-2">
                  Client Verification
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-[#f5f5f0] tracking-tight">
                  CLIENT PROJECT DELIVERY
                </h2>
              </div>

              <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl">
                <div className="relative w-full aspect-[768/1024]">
                  <Image
                    src={project.deliveryImage}
                    alt="Vijay Hospital Client Project Delivery Certificate"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                {project.deliveryCaption && (
                  <div className="p-4 sm:p-5 bg-[#121212] border-t border-white/[0.08] flex items-start gap-3">
                    <span className="text-[#fabb02] font-mono text-sm pt-0.5">↳</span>
                    <p className="font-sans text-xs sm:text-sm text-[#d4d4d4] font-light italic leading-relaxed">
                      &ldquo;{project.deliveryCaption}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

        </div>

        {/* Bottom Navigation */}
        <div className="mt-28 pt-12 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a6a6a6] hover:text-[#fabb02] transition-colors"
          >
            <span className="text-[#fabb02] group-hover:-translate-x-1 transition-transform">←</span>
            <span>All Projects Directory</span>
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f5f5f0] hover:text-[#fabb02] transition-colors"
          >
            <span>Discuss This Project</span>
            <span className="text-[#fabb02] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </article>
  );
};
