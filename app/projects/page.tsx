import type { Metadata } from 'next';
import { getAllProjects, getProjectCount } from '../../lib/projects';
import { ProjectsDirectoryClient } from './ProjectsDirectoryClient';
import { AmbientCanvas } from '../../components/ui/AmbientCanvas';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const count = await getProjectCount();
  return {
    title: `Complete Projects Directory (${count} Engineered Works)`,
    description: `Comprehensive archive of software engineering projects, system architectures, full-stack applications, and AI integrations by Kevin Siv Raj M S.`,
    openGraph: {
      title: `Projects Directory (${count} Projects) — Kevin Siv Raj M S`,
      description: `Explore full-stack platforms, Flutter mobile apps, AI pipelines, and system architectures built by Kevin Siv Raj M S.`,
      images: ['/kevin-portrait-rim.jpg'],
    },
  };
}

export default async function ProjectsDirectoryPage() {
  // Directory strictly fetches and displays ALL projects
  const allProjects = await getAllProjects();

  return (
    <main className="min-h-screen pt-32 pb-32 relative overflow-hidden bg-[#0c0c0c] text-[#f5f5f0]">
      <AmbientCanvas />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ProjectsDirectoryClient initialProjects={allProjects} />
      </div>
    </main>
  );
}
