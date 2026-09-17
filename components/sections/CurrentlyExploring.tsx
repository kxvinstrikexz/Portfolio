'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    category: 'PROGRAMMING',
    items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Java'],
  },
  {
    category: 'WEB ARCHITECTURE',
    items: ['React', 'Next.js (App Router)', 'Node.js', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    category: 'MOBILE ENGINEERING',
    items: ['Flutter', 'Dart', 'Cross-Platform State Management', 'Native UI Layouts'],
  },
  {
    category: 'AI & INTELLIGENCE',
    items: ['LLM Integrations', 'RAG Architectures', 'Speech-to-Text APIs', 'Context Pipelines'],
  },
  {
    category: 'DATABASES & BACKEND',
    items: ['MySQL', 'Relational Schemas', 'RESTful APIs', 'WebSocket Real-Time'],
  },
  {
    category: 'SYSTEM DESIGN & TOOLS',
    items: ['Modular Architecture', 'Git / GitHub', 'Vite', 'Framer Motion', 'Linux Environments'],
  },
];

const exploringTopics = [
  'AI-Powered Autonomous Applications',
  'Agentic Tool-Calling Workflows',
  'Modern Editorial Frontend Development',
  'Flutter Deep Ecosystem & Animations',
  '3D Web Experiences (WebGL / Three.js)',
  'Resilient Distributed System Design',
  'High-Fidelity Developer Tooling',
];

export const CurrentlyExploring: React.FC = () => {
  return (
    <section
      id="exploring"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Part 1: What I Work With */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
              08 / Technical Foundations
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-medium tracking-tight text-[#f5f5f0] leading-[1.08] mb-6">
              What I <br />
              <span className="italic font-normal">Work With.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed max-w-md">
              A disciplined toolkit centered on modern web frameworks, cross-platform mobile systems, and data-driven backends.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {techCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/[0.08] pt-4"
              >
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#fabb02] mb-3">
                  {cat.category}
                </h3>
                <ul className="space-y-1.5 text-sm font-sans text-[#a6a6a6] font-light">
                  {cat.items.map((item) => (
                    <li key={item} className="hover:text-[#f5f5f0] transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Currently Exploring */}
        <div className="border-t border-white/[0.08] pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-3 block">
                09 / Horizon
              </span>
              <h3 className="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-[#f5f5f0] leading-[1.1] mb-4">
                Currently <br />
                <span className="italic font-normal">Exploring.</span>
              </h3>
              <p className="font-sans text-sm text-[#a6a6a6] font-light leading-relaxed max-w-sm">
                Actively experimenting with next-generation paradigms that expand how software interacts with users and data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-wrap gap-3"
            >
              {exploringTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono tracking-wide text-[#f5f5f0] hover:border-[#fabb02] hover:text-[#fabb02] transition-colors"
                >
                  {topic}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
