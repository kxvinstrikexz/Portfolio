'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/projects/types';

interface ProjectsDirectoryClientProps {
  initialProjects: Project[];
}

export const ProjectsDirectoryClient: React.FC<ProjectsDirectoryClientProps> = ({
  initialProjects,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dynamically derive unique categories from the project array
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialProjects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, [initialProjects]);

  // Filter projects by category and keyword
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchCategory =
        selectedCategory === 'All' ||
        p.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-16">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a6a6a6] hover:text-[#fabb02] transition-colors"
        >
          <span className="text-[#fabb02] group-hover:-translate-x-1 transition-transform">←</span>
          <span className="uppercase">Back to Home</span>
        </Link>
        <span className="text-xs font-mono text-[#737373]">
          Engineering Directory
        </span>
      </div>

      {/* Directory Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
            Complete Archive
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08] mb-4">
            All Projects &amp; <br />
            <span className="italic font-normal">Case Studies.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light max-w-xl leading-relaxed">
            Every software application, mobile product, and AI integration engineered with real-world utility and clean system architecture.
          </p>
        </div>

        {/* Dynamic Badge Counter */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="px-4 py-2 rounded-full border border-[#fabb02]/30 bg-[#fabb02]/10 text-[#fabb02] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02] animate-pulse" />
            <span>{initialProjects.length} Projects Engineered</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[#a6a6a6]">
            <span>{categories.length - 1} Specializations</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pt-4 border-t border-white/[0.06]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#fabb02] text-[#0c0c0c] font-medium shadow-md'
                    : 'bg-[#141414] text-[#a6a6a6] hover:text-[#f5f5f0] hover:bg-[#1a1a1a] border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech, title, or topic..."
            className="w-full bg-[#141414] border border-white/10 rounded-full px-5 py-2.5 text-xs font-mono text-[#f5f5f0] placeholder-[#737373] focus:outline-none focus:border-[#fabb02] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#737373] hover:text-[#f5f5f0]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid (Clean Editorial Typography, Zero Placeholder Images) */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 text-center border border-white/[0.08] rounded-2xl bg-[#141414]/50"
          >
            <p className="font-editorial text-2xl text-[#a6a6a6] mb-2">No matching projects found</p>
            <p className="font-sans text-xs text-[#737373] mb-6">
              Try adjusting your search query or selecting &apos;All&apos; categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono text-[#f5f5f0] hover:border-[#fabb02] hover:text-[#fabb02] transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {filteredProjects.map((project, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex flex-col"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 flex flex-col justify-between p-8 rounded-3xl bg-[#141414] border border-white/[0.08] hover:border-[#fabb02]/40 transition-all duration-500 shadow-xl overflow-hidden group relative"
                  >
                    {/* Subtle ambient hover glow */}
                    <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#fabb02]/5 rounded-full blur-2xl group-hover:bg-[#fabb02]/12 transition-all pointer-events-none" />

                    <div>
                      {/* Top Bar: Number & Category Badge */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-base font-semibold text-[#fabb02]">
                            {numStr}
                          </span>
                          <span className="w-5 h-px bg-white/15 group-hover:w-8 group-hover:bg-[#fabb02]/50 transition-all" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#a6a6a6] group-hover:text-[#f5f5f0] transition-colors">
                            {project.category}
                          </span>
                        </div>

                        <span className="text-sm font-mono text-[#a6a6a6] group-hover:text-[#fabb02] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                          ↗
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[#f5f5f0] group-hover:text-[#fabb02] transition-colors leading-[1.15] mb-3">
                        {project.title}
                      </h3>

                      {project.tagline && (
                        <p className="font-editorial text-xs text-[#a6a6a6] italic mb-3">
                          {project.tagline}
                        </p>
                      )}

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-[#a6a6a6] font-light leading-relaxed line-clamp-4 mb-6">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Footer: Tech Stack & Case Study CTA */}
                    <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#737373] text-[11px] truncate max-w-[180px]">
                        {project.technologies.slice(0, 3).join(' · ')}
                      </span>
                      <span className="text-[#f5f5f0] group-hover:text-[#fabb02] flex items-center gap-1 uppercase tracking-wider text-[11px] transition-colors shrink-0">
                        <span>Case Study</span>
                        <span className="text-[#fabb02] group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
