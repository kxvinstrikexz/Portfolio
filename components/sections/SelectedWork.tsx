'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects/types';

interface SelectedWorkProps {
  projects: Project[];
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects }) => {
  // Enforce strict maximum of 4 projects on homepage
  const homepageProjects = projects.slice(0, 4);

  return (
    <section
      id="selected-work"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden"
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
              04 / Curated Engineering
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08]">
              Selected <br />
              <span className="italic font-normal">Work.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
              A curated selection of 4 notable digital products spanning mobile engineering, artificial intelligence, and full-stack systems.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Composition (Purely Typographic & Architectural, No Placeholder Images) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {homepageProjects.map((project, idx) => {
            const numStr = String(idx + 1).padStart(2, '0');
            
            // Asymmetrical layout rhythm
            const isLarge = idx === 0 || idx === 3;
            const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
            const offsetTop = idx === 1 ? 'md:pt-12' : idx === 2 ? 'md:-mt-6' : '';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.85, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${colSpan} ${offsetTop} flex flex-col`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative flex-1 flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/[0.08] hover:border-[#fabb02]/40 transition-all duration-500 shadow-xl overflow-hidden group"
                >
                  {/* Subtle ambient gold illumination on card hover */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#fabb02]/5 rounded-full blur-3xl group-hover:bg-[#fabb02]/12 transition-all pointer-events-none" />

                  {/* Top Header: Number, Category Pill, Arrow */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-semibold text-[#fabb02]">
                        {numStr}
                      </span>
                      <span className="w-8 h-px bg-white/15 group-hover:w-12 group-hover:bg-[#fabb02]/50 transition-all" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#a6a6a6] group-hover:text-[#f5f5f0] transition-colors">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-base font-mono text-[#a6a6a6] group-hover:text-[#fabb02] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      ↗
                    </span>
                  </div>

                  {/* Content: Title & Description */}
                  <div className="space-y-4 mb-8">
                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#f5f5f0] group-hover:text-[#fabb02] transition-colors leading-[1.1]">
                      {project.title}
                    </h3>

                    {project.tagline && (
                      <p className="font-editorial text-sm sm:text-base text-[#a6a6a6] italic font-light">
                        {project.tagline}
                      </p>
                    )}

                    <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Strip: Technology Tags & Case Study Link */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs font-mono text-[#737373] tracking-wide">
                      {project.technologies.slice(0, 4).join(' · ')}
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#f5f5f0] group-hover:text-[#fabb02] transition-colors shrink-0">
                      <span>View Case Study</span>
                      <span className="text-[#fabb02] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
