'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPopulatedCategories } from '../../data/experiences';
import type { Experience, HackathonExperience, InternshipExperience } from '../../data/experiences/types';

export const BeyondTheCode: React.FC = () => {
  const populatedCategories = getPopulatedCategories();

  // If there are no experiences, gracefully return null
  if (populatedCategories.length === 0) {
    return null;
  }

  // Global sequential counter across all items for editorial numbering (01, 02, 03, ...)
  let runningIndex = 0;

  return (
    <section
      id="beyond-the-code"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden bg-[#0c0c0c]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 sm:mb-28"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
              06 / BEYOND THE CODE
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08]">
              Experiences <br />
              <span className="italic font-normal">That Shaped Me.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
              Beyond the projects I build, these experiences have helped me learn, collaborate, experiment, and understand how technology works beyond the code.
            </p>
          </div>
        </motion.div>

        {/* Dynamic Categories Container */}
        <div className="space-y-24 sm:space-y-32">
          {populatedCategories.map(({ meta, experiences }) => (
            <div key={meta.type} className="border-t border-white/[0.08] pt-12 sm:pt-16">
              
              {/* Category Sub-Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 mb-12 sm:mb-16"
              >
                <span className="text-xs font-mono tracking-widest text-[#fabb02] uppercase font-semibold">
                  {meta.number} ── {meta.title}
                </span>
                <span className="h-px flex-1 bg-white/[0.06]" />
              </motion.div>

              {/* Category Entries List */}
              <div className="divide-y divide-white/[0.08]">
                {experiences.map((exp: Experience) => {
                  runningIndex += 1;
                  const itemNumber = String(runningIndex).padStart(2, '0');
                  const isHackathon = exp.type === 'hackathon';
                  const isInternship = exp.type === 'internship';

                  const hackathonExp = isHackathon ? (exp as HackathonExperience) : null;
                  const internshipExp = isInternship ? (exp as InternshipExperience) : null;

                  return (
                    <motion.article
                      key={exp.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                      className="group py-12 sm:py-16 first:pt-0 transition-colors"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        
                        {/* Left Column: Number, Category Tag, Title, Subtitle, Organizer, Date/Location */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                          {/* Number & Category badge */}
                          <div className="flex items-center gap-3 text-xs font-mono text-[#737373] mb-4">
                            <span className="text-[#fabb02] font-medium">{itemNumber}</span>
                            <span>──</span>
                            <span className="uppercase tracking-widest text-[#a6a6a6] group-hover:text-[#fabb02] transition-colors">
                              {meta.singularLabel}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#f5f5f0] group-hover:text-[#fabb02] transition-colors mb-2 leading-snug">
                            {exp.title}
                          </h3>

                          {/* Subtitle / Event / Edition */}
                          {exp.subtitle && (
                            <p className="font-sans text-sm font-medium text-[#d4d4d4] mb-3">
                              {exp.subtitle}
                            </p>
                          )}

                          {/* Organizer / Institution / Company */}
                          {exp.organizer && (
                            <p className="font-sans text-xs sm:text-sm text-[#a6a6a6] font-light leading-relaxed mb-2">
                              {exp.organizer}
                            </p>
                          )}

                          {/* Specific Event details (e.g. symposiums) */}
                          {exp.event && (
                            <p className="font-sans text-xs text-[#8c8c8c] font-light leading-relaxed mb-2">
                              {exp.event}
                            </p>
                          )}

                          {/* Venue / Location / Date / Duration metadata */}
                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#737373]">
                            {exp.venue && <span>{exp.venue}</span>}
                            {exp.venue && exp.date && <span>·</span>}
                            {exp.date && <span className="text-[#a6a6a6]">{exp.date}</span>}
                            {exp.duration && <span className="text-[#a6a6a6]">{exp.duration}</span>}
                            {exp.location && <span>·</span>}
                            {exp.location && <span>{exp.location}</span>}
                          </div>
                        </div>

                        {/* Right Column: Description, Project / Focus connection, & Takeaway */}
                        <div className="lg:col-span-7 flex flex-col space-y-6">
                          
                          {/* Description */}
                          {exp.description && (
                            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                              {exp.description}
                            </p>
                          )}

                          {/* Hackathon Project Connection: WHAT WE BUILT + CivicConnect + Link */}
                          {isHackathon && hackathonExp?.projectName && (
                            <div className="p-6 rounded-lg bg-[#141414]/80 border border-white/[0.08] space-y-3">
                              <div className="text-[11px] font-mono uppercase tracking-widest text-[#fabb02]">
                                WHAT WE BUILT
                              </div>
                              <div className="font-editorial text-xl font-medium text-[#f5f5f0]">
                                {hackathonExp.projectName}
                              </div>
                              {hackathonExp.projectDescription && (
                                <p className="font-sans text-xs sm:text-sm text-[#a6a6a6] font-light leading-relaxed">
                                  {hackathonExp.projectDescription}
                                </p>
                              )}
                              {hackathonExp.projectSlug && (
                                <div className="pt-2">
                                  <Link
                                    href={`/projects/${hackathonExp.projectSlug}`}
                                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#f5f5f0] hover:text-[#fabb02] transition-colors group/link"
                                  >
                                    <span>VIEW PROJECT</span>
                                    <span className="text-[#fabb02] group-hover/link:translate-x-1 transition-transform">
                                      →
                                    </span>
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Internship Technologies & Exposure */}
                          {isInternship && internshipExp && (
                            <div className="space-y-4 pt-1">
                              {internshipExp.technologies && internshipExp.technologies.length > 0 && (
                                <div>
                                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#8c8c8c] mb-2">
                                    CORE STACK
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {internshipExp.technologies.map((tech) => (
                                      <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#d4d4d4]"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {internshipExp.exposure && internshipExp.exposure.length > 0 && (
                                <div>
                                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#8c8c8c] mb-2">
                                    AREAS OF EXPOSURE
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {internshipExp.exposure.map((expItem) => (
                                      <span
                                        key={expItem}
                                        className="px-3 py-1 rounded-full border border-white/[0.06] bg-[#141414] text-xs font-sans text-[#a6a6a6]"
                                      >
                                        {expItem}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Narrative Core: WHAT I TOOK FROM IT */}
                          <div className="pt-2 border-t border-white/[0.06]">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#fabb02] block mb-2 font-medium">
                              WHAT I TOOK FROM IT
                            </span>
                            <p className="font-sans text-sm text-[#e0e0dc] font-light leading-relaxed italic border-l-2 border-[#fabb02]/60 pl-4 py-1">
                              &ldquo;{exp.takeaway}&rdquo;
                            </p>
                          </div>

                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
