'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects/types';

interface MoreWorkCtaProps {
  totalCount: number;
  projects: Project[];
}

export const MoreWorkCta: React.FC<MoreWorkCtaProps> = ({ totalCount, projects }) => {
  // If there are 4 or fewer projects, do not display duplicate or empty list
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden bg-[#0e0e0e]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Dynamic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
              05 / Complete Catalog
            </span>
            
            <h2 className="font-editorial text-4xl sm:text-6xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08] mb-6">
              More of <br />
              <span className="italic font-normal">My Work.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed max-w-md mb-8">
              Beyond the 4 curated highlights on this page, explore additional engineered systems spanning cross-platform mobile architectures, machine learning analytics, and real-time platforms.
            </p>

            {/* Dynamic CTA Button with Total Project Count */}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1a1a] hover:bg-[#222222] border border-white/15 hover:border-[#fabb02]/50 text-xs font-mono tracking-widest text-[#f5f5f0] hover:text-[#fabb02] transition-all shadow-xl"
            >
              <span className="uppercase font-medium">
                Browse Complete Projects Directory ({totalCount} Projects)
              </span>
              <span className="text-[#fabb02] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>

          {/* Right Column: Remaining Projects Only (Indexes starting from 05, zero duplication) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 divide-y divide-white/[0.08]"
          >
            {projects.map((p, idx) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className="group py-5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 transition-colors block"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#fabb02] tracking-wider">
                    {p.number || String(idx + 5).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#f5f5f0] group-hover:text-[#fabb02] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#737373] tracking-wide uppercase">
                      {p.category} · {p.technologies.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#a6a6a6] group-hover:text-[#fabb02] transition-colors shrink-0">
                  <span className="hidden sm:inline-block uppercase text-[10px] tracking-widest">Case Study</span>
                  <span className="text-[#fabb02] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
