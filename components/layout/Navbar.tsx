'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHomePage) return;

      const sections = ['intro', 'who-i-am', 'what-i-build', 'selected-work', 'exploring', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { label: 'ABOUT', href: isHomePage ? '#who-i-am' : '/#who-i-am', id: 'who-i-am' },
    { label: 'WORK', href: isHomePage ? '#selected-work' : '/#selected-work', id: 'selected-work' },
    { label: 'EXPLORING', href: isHomePage ? '#exploring' : '/#exploring', id: 'exploring' },
    { label: 'CONTACT', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0c0c]/85 backdrop-blur-md border-b border-white/[0.06] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#f5f5f0] hover:text-[#fabb02] transition-colors"
          aria-label="Kevin Siv Raj Home"
        >
          <span className="font-editorial text-2xl font-bold tracking-tight">KSR</span>
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-[#a6a6a6] border-l border-white/10 pl-3 group-hover:text-[#f5f5f0] transition-colors">
            Kevin Siv Raj
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-mono tracking-widest text-[#a6a6a6]">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#f5f5f0] flex items-center gap-2 ${
                  isActive ? 'text-[#f5f5f0] font-medium' : ''
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="w-1.5 h-1.5 rounded-full bg-[#fabb02]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}

          <Link
            href="/projects"
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              pathname.startsWith('/projects')
                ? 'border-[#fabb02] text-[#fabb02] bg-[#fabb02]/10'
                : 'border-white/15 text-[#f5f5f0] hover:border-[#fabb02]/50 hover:text-[#fabb02]'
            }`}
          >
            PROJECTS
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xs font-mono tracking-widest text-[#f5f5f0] flex items-center gap-2 py-2 px-3 border border-white/10 rounded-full"
          aria-label="Toggle Navigation Menu"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#fabb02]" />
          <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8"
          >
            <div className="flex flex-col gap-6 text-sm font-mono tracking-widest text-[#a6a6a6]">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#fabb02] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#fabb02]">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#fabb02] flex items-center gap-2"
                >
                  <span>ALL PROJECTS DIRECTORY</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
