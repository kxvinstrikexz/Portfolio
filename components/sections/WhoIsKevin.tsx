'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const WhoIsKevin: React.FC = () => {
  return (
    <section
      id="who-i-am"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Headline and Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#fabb02] mb-4">
              02 / Personal Story
            </span>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#f5f5f0] mb-8 leading-[1.1]">
              Who is <br />
              <span className="italic">Kevin?</span>
            </h2>

            <div className="space-y-6 text-[#a6a6a6] font-sans text-base sm:text-lg font-light leading-relaxed max-w-xl">
              <p>
                I&apos;m a software developer who enjoys turning ideas into practical applications. I explore full-stack development, AI-powered systems, mobile applications, system design, and modern user experiences.
              </p>
              <p className="text-sm sm:text-base text-[#888888]">
                Rather than treating code as abstract syntax, I view engineering as digital product craftsmanship. Whether designing cross-platform mobile experiences in Flutter & Dart, engineering distributed full-stack systems, or integrating intelligent AI workflows, I focus on software that is reliable, scalable, and intuitive to use.
              </p>
            </div>

            {/* Subtle Divider Line with Yellow Accent */}
            <div className="mt-8 pt-8 border-t border-white/[0.08] w-full max-w-md flex items-center justify-between text-xs font-mono text-[#a6a6a6]">
              <span className="uppercase tracking-wider">Focus Areas</span>
              <span className="text-[#fabb02]">Full-Stack · Mobile · AI</span>
            </div>
          </motion.div>

          {/* Right: Organic Frame with Second Authentic Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 36 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4]">
              {/* Subtle ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#fabb02]/10 via-transparent to-transparent organic-oval-mask blur-xl pointer-events-none" />

              {/* Organic oval container */}
              <div className="relative w-full h-full organic-oval-mask overflow-hidden border border-white/15 bg-[#141414] shadow-2xl">
                <Image
                  src="/kevin-portrait-glasses.jpg"
                  alt="Kevin Siv Raj M S Portrait"
                  fill
                  className="object-cover object-center filter grayscale contrast-[1.06] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 320px, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Editorial metadata arrow label */}
              <div className="mt-4 flex items-center justify-start lg:justify-end gap-2 text-xs font-mono text-[#a6a6a6]">
                <span className="text-[#fabb02]">↳</span>
                <span>Turning concepts into working code</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
