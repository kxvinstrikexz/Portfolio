'use client';

import React from 'react';
import { motion } from 'framer-motion';

const buildItems = [
  {
    number: '01',
    title: 'FULL-STACK APPLICATIONS',
    description:
      'End-to-end web platforms engineered for dependability, performance, and clean architectural separation between frontend presentation and backend services.',
    tech: 'React · Next.js · TypeScript · Node.js',
  },
  {
    number: '02',
    title: 'AI-POWERED PRODUCTS',
    description:
      'Intelligent software utilizing large language models, semantic retrieval, and assistive pipelines to automate complex workflows and distill dense information.',
    tech: 'LLMs · RAG · Audio Transcription · Prompt Engineering',
  },
  {
    number: '03',
    title: 'MOBILE APPLICATIONS',
    description:
      'Fluid, natively compiled cross-platform mobile experiences with expressive interaction design, responsive state models, and offline-first durability.',
    tech: 'Flutter · Dart · Native Mobile Architectures',
  },
  {
    number: '04',
    title: 'SYSTEM DESIGN',
    description:
      'Resilient database schemas, RESTful & real-time communication APIs, state management trees, and secure authentication flows designed for longevity.',
    tech: 'Relational DBs · Realtime Sync · API Design · Security',
  },
  {
    number: '05',
    title: 'PRODUCTIVITY TOOLS',
    description:
      'Purpose-built digital utilities created to organize study cycles, manage habits, coordinate campus events, and eliminate cognitive friction.',
    tech: 'Analytics · Workflow Optimization · Time Tracking',
  },
  {
    number: '06',
    title: 'INTERACTIVE DIGITAL EXPERIENCES',
    description:
      'Modern web interfaces infused with intentional micro-interactions, editorial typography, kinetic physics, and subtle 3D depth.',
    tech: 'Framer Motion · WebGL / Three.js · CSS Layouts',
  },
];

export const WhatIBuild: React.FC = () => {
  return (
    <section
      id="what-i-build"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Editorial Sticky Title */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32 self-start"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-4 block">
              03 / Engineering Scope
            </span>
            
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] mb-6 leading-[1.08]">
              What <br />
              <span className="italic font-normal">I Build.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light max-w-md leading-relaxed mb-8">
              A breakdown of the domains and engineering disciplines where I turn ideas into working digital systems.
            </p>

            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#a6a6a6]">
              <span className="text-[#fabb02]">↳</span>
              <span>6 core technical disciplines</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Staggered List */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            {buildItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 first:pt-0 last:pb-0 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="font-mono text-xs text-[#fabb02] tracking-widest pt-1">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#737373] tracking-wide uppercase">
                    {item.tech}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#f5f5f0] font-medium tracking-tight mb-3 group-hover:text-[#fabb02] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
