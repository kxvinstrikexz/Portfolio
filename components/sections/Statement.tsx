'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Statement: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]" />
          <span>Core Guiding Principle</span>
        </motion.div>

        {/* High-contrast Typographic Statement inspired by reference quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] leading-[1.12] max-w-4xl"
        >
          &ldquo;I don&apos;t just write code. <br />
          <span className="italic font-normal text-[#a6a6a6]">I build things that</span> <br />
          people can actually use.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex items-center gap-3 text-xs font-mono text-[#737373]"
        >
          <span className="w-8 h-px bg-white/20" />
          <span>Kevin Siv Raj · Software Developer</span>
          <span className="w-8 h-px bg-white/20" />
        </motion.div>

      </div>
    </section>
  );
};
