import React from 'react';
import { getAllProjects, getProjectCount } from '../lib/projects';
import { Hero } from '../components/sections/Hero';
import { WhoIsKevin } from '../components/sections/WhoIsKevin';
import { WhatIBuild } from '../components/sections/WhatIBuild';
import { SelectedWork } from '../components/sections/SelectedWork';
import { MoreWorkCta } from '../components/sections/MoreWorkCta';
import { BeyondTheCode } from '../components/sections/BeyondTheCode';
import { HowIBuild } from '../components/sections/HowIBuild';
import { CurrentlyExploring } from '../components/sections/CurrentlyExploring';
import { Statement } from '../components/sections/Statement';
import { Contact } from '../components/sections/Contact';
import { AmbientCanvas } from '../components/ui/AmbientCanvas';

export const revalidate = 3600; // Static generation with hourly revalidation

export default async function HomePage() {
  const allProjects = await getAllProjects();
  
  // Preserve existing featured/priority ordering
  const featured = allProjects.filter((p) => p.featured);
  const nonFeatured = allProjects.filter((p) => !p.featured);
  const orderedProjects = [...featured, ...nonFeatured];

  // Strictly mutually exclusive split: First 4 to Selected Work, remainder to More of My Work
  const selectedProjects = orderedProjects.slice(0, 4);
  const moreProjects = orderedProjects.slice(4);

  // Dynamic total count for the archive CTA
  const totalCount = await getProjectCount();

  return (
    <main className="relative min-h-screen bg-[#0c0c0c] text-[#f5f5f0]">
      {/* Subtle ambient particle canvas */}
      <AmbientCanvas />

      {/* 01 — INTRODUCTION */}
      <Hero />

      {/* 02 — WHO I AM */}
      <WhoIsKevin />

      {/* 03 — WHAT I BUILD */}
      <WhatIBuild />

      {/* 04 — SELECTED PROJECTS (First 4 strictly) */}
      <SelectedWork projects={selectedProjects} />

      {/* 05 — MORE OF MY WORK (Remaining projects only, no duplication) */}
      <MoreWorkCta totalCount={totalCount} projects={moreProjects} />

      {/* 06 — BEYOND THE CODE */}
      <BeyondTheCode />

      {/* 07 — HOW I BUILD & MY JOURNEY */}
      <HowIBuild />

      {/* 08 — CURRENTLY EXPLORING & WHAT I WORK WITH */}
      <CurrentlyExploring />

      {/* 09 — PERSONAL PHILOSOPHY */}
      <Statement />

      {/* 10 — CONTACT */}
      <Contact />
    </main>
  );
}
