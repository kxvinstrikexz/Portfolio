import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '../../../lib/projects';
import { EditorialCaseStudy } from '../../../components/projects/EditorialCaseStudy';
import { AmbientCanvas } from '../../../components/ui/AmbientCanvas';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — Kevin Siv Raj M S',
    };
  }

  const ogImage = project.image || '/kevin-portrait-rim.jpg';

  return {
    title: `${project.title} — Kevin Siv Raj M S`,
    description:
      project.shortDescription ||
      `Case study and technical architecture for ${project.title} engineered by Kevin Siv Raj M S.`,
    openGraph: {
      title: `${project.title} | Kevin Siv Raj M S`,
      description: project.shortDescription,
      images: [
        {
          url: ogImage,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Kevin Siv Raj M S`,
      description: project.shortDescription,
      images: [ogImage],
    },
  };
}

export default async function DynamicProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <AmbientCanvas />
      <EditorialCaseStudy project={project} />
    </>
  );
}
