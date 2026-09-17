import { allProjects } from '../data/projects';
import type { Project } from '../data/projects/types';

/**
 * Data abstraction layer.
 * Currently reads from static modular files in data/projects/.
 * Can be swapped to fetch from a CMS, database, or API without altering any UI components.
 */

export async function getAllProjects(): Promise<Project[]> {
  // Simulates asynchronous data retrieval for full future CMS/API compatibility
  return [...allProjects];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((p) => p.featured);
}

/**
 * Retrieves curated projects for the homepage showcase (strictly maximum 4).
 * Prioritizes projects marked with featured: true, then preserves existing order,
 * capped at exactly limit (default 4).
 */
export async function getHomepageProjects(limit = 4): Promise<Project[]> {
  const projects = await getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const nonFeatured = projects.filter((p) => !p.featured);
  return [...featured, ...nonFeatured].slice(0, limit);
}

/**
 * Synchronous variant of getHomepageProjects for client components.
 */
export function getHomepageProjectsSync(limit = 4): Project[] {
  const featured = allProjects.filter((p) => p.featured);
  const nonFeatured = allProjects.filter((p) => !p.featured);
  return [...featured, ...nonFeatured].slice(0, limit);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  const match = projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  return match || null;
}

export async function getLatestProjects(limit = 4): Promise<Project[]> {
  const projects = await getAllProjects();
  // Sort descending by year / number
  return [...projects]
    .sort((a, b) => {
      const yearA = Number(a.year) || 0;
      const yearB = Number(b.year) || 0;
      return yearB - yearA;
    })
    .slice(0, limit);
}

export async function getProjectCount(): Promise<number> {
  const projects = await getAllProjects();
  return projects.length;
}
