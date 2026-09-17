import type { Project } from '../data/projects/types';

/**
 * Derives unique categories dynamically from the provided list of projects.
 * Automatically adds 'All' at the beginning.
 */
export function deriveCategories(projects: Project[]): string[] {
  const set = new Set<string>();
  for (const project of projects) {
    if (project.category) {
      set.add(project.category);
    }
  }
  return ['All', ...Array.from(set)];
}

/**
 * Derives unique technologies dynamically from all projects.
 */
export function deriveTechnologies(projects: Project[]): string[] {
  const set = new Set<string>();
  for (const project of projects) {
    if (project.technologies) {
      project.technologies.forEach((t) => set.add(t));
    }
  }
  return Array.from(set).sort();
}

/**
 * Filters projects based on category and a search query.
 */
export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' || project.category.toLowerCase() === category.toLowerCase();

    if (!matchesCategory) return false;
    if (!query) return true;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDesc =
      project.shortDescription.toLowerCase().includes(query) ||
      (project.fullDescription && project.fullDescription.toLowerCase().includes(query));
    const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(query));
    const matchesTagline = project.tagline && project.tagline.toLowerCase().includes(query);

    return matchesTitle || matchesDesc || matchesTech || matchesTagline;
  });
}
