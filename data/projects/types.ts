export interface ProjectArchitecture {
  title: string;
  description: string;
  flow: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  number?: string;
  tagline?: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  technologies: string[];
  image?: string;
  gallery?: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  client?: string;
  role?: string;
  duration?: string;
  featured: boolean;
  status?: string;
  year?: string | number;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: ProjectArchitecture;
  challenges?: string;
  outcome?: string;
  accentColor?: string;
  objectives?: string[];
  responsibilities?: string[];
  designApproach?: string;
  deliveryImage?: string;
  deliveryCaption?: string;
  tiltedCardHero?: boolean;
}
