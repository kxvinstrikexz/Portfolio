'use client';

import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    step: '01',
    title: 'UNDERSTAND',
    tagline: 'Understand the problem first.',
    description:
      'Before writing a single line of code, dissect the core friction point. Who is the user, what is the bottleneck, and why does this software need to exist?',
  },
  {
    step: '02',
    title: 'DESIGN',
    tagline: 'Plan the experience and system.',
    description:
      'Map data entities, state trees, and interaction flows. Establish architectural boundaries that keep complexity manageable as the codebase grows.',
  },
  {
    step: '03',
    title: 'BUILD',
    tagline: 'Turn the idea into a working product.',
    description:
      'Execute with modern tooling—whether building cross-platform native apps with Flutter or scalable full-stack applications with Next.js and TypeScript.',
  },
  {
    step: '04',
    title: 'ITERATE',
    tagline: 'Improve based on what I learn.',
    description:
      'Deploy, observe real performance, refactor bottlenecks, and continuously refine interaction fidelity based on authentic feedback.',
  },
];

const journeySteps = [
  'LEARN',
  'EXPERIMENT',
  'BUILD',
  'ITERATE',
  'IMPROVE',
];

export const HowIBuild: React.FC = () => {
  return (
    <section
      id="how-i-build"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Journey Streamer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 pb-12 border-b border-white/[0.08]"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-4 block">
            My Journey & Continuous Loop
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base font-mono tracking-widest text-[#a6a6a6]">
            {journeySteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="text-[#f5f5f0] hover:text-[#fabb02] transition-colors">
                  {step}
                </span>
                {idx < journeySteps.length - 1 && (
                  <span className="text-[#fabb02] text-xs">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 4 Core Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
              07 / Engineering Philosophy
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08] mb-6">
              How <br />
              <span className="italic font-normal">I Build.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed max-w-md">
              A disciplined, repeatable methodology connecting abstract system logic with intuitive end-user experiences.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {principles.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start border-l border-white/[0.1] pl-6 py-2 group hover:border-[#fabb02] transition-colors"
              >
                <span className="font-mono text-xs text-[#fabb02] mb-2 tracking-widest">
                  {item.step}
                </span>
                <h3 className="font-editorial text-2xl text-[#f5f5f0] font-medium tracking-tight mb-1 group-hover:text-[#fabb02] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#737373] tracking-wide uppercase mb-3">
                  {item.tagline}
                </p>
                <p className="font-sans text-sm text-[#a6a6a6] font-light leading-relaxed">
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
