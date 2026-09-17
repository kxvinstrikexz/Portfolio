'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-44 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Monumental Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-6 block">
              10 / Initiate Dialogue
            </span>

            <h2 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-[#f5f5f0] leading-[1.02] mb-8">
              Let&apos;s <br />
              <span className="italic font-normal">Build</span> <br />
              Something.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#a6a6a6] font-light max-w-xl leading-relaxed mb-10">
              Have an idea, project, or opportunity worth exploring? Let&apos;s connect and turn concepts into resilient, working digital reality.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <a
                href="https://www.linkedin.com/in/kevinsivraj"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fabb02] text-[#0c0c0c] text-xs font-mono tracking-widest font-semibold uppercase hover:bg-[#ffd147] transition-all shadow-lg hover:shadow-[#fabb02]/20"
              >
                <span>LinkedIn Profile</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>

              <a
                href="mailto:kevinsivraj2006@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-[#f5f5f0] text-xs font-mono tracking-widest uppercase hover:border-[#fabb02] hover:text-[#fabb02] transition-all"
              >
                <span>Email Inquiries</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Editorial Meta Details */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between space-y-8 pt-4 lg:border-l lg:border-white/[0.08] lg:pl-12 text-xs font-mono text-[#a6a6a6]"
          >
            <div>
              <span className="text-[#fabb02] uppercase tracking-widest block mb-2">Location</span>
              <p className="text-sm font-sans text-[#f5f5f0]">Tamil Nadu, India</p>
              <p className="text-[#737373] text-xs mt-1">Available for distributed teams globally</p>
            </div>

            <div>
              <span className="text-[#fabb02] uppercase tracking-widest block mb-2">Network</span>
              <a
                href="https://www.linkedin.com/in/kevinsivraj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans text-[#f5f5f0] hover:text-[#fabb02] transition-colors inline-flex items-center gap-1.5"
              >
                <span>linkedin.com/in/kevinsivraj</span>
                <span className="text-[#fabb02]">↗</span>
              </a>
            </div>

            <div>
              <span className="text-[#fabb02] uppercase tracking-widest block mb-2">Direct Email</span>
              <a
                href="mailto:kevinsivraj2006@gmail.com"
                className="text-sm font-sans text-[#f5f5f0] hover:text-[#fabb02] transition-colors inline-flex items-center gap-1.5"
              >
                <span>kevinsivraj2006@gmail.com</span>
                <span className="text-[#fabb02]">↗</span>
              </a>
            </div>

            <div>
              <span className="text-[#fabb02] uppercase tracking-widest block mb-2">Philosophy</span>
              <p className="text-xs text-[#737373] leading-relaxed">
                Clean architectural boundaries, thoughtful UX, and rapid iterative execution.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
