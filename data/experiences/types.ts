export type ExperienceType = 'hackathon' | 'workshop' | 'internship';

export interface BaseExperience {
  id: string;
  type: ExperienceType;
  title: string;
  subtitle?: string;
  organizer?: string;
  event?: string;
  venue?: string;
  date?: string;
  duration?: string;
  location?: string;
  description?: string;
  takeaway: string;
}

export interface HackathonExperience extends BaseExperience {
  type: 'hackathon';
  projectName?: string;
  projectSlug?: string;
  projectDescription?: string;
}

export interface WorkshopExperience extends BaseExperience {
  type: 'workshop';
}

export interface InternshipExperience extends BaseExperience {
  type: 'internship';
  role: string;
  company: string;
  technologies: string[];
  exposure?: string[];
}

export type Experience = HackathonExperience | WorkshopExperience | InternshipExperience;

export interface ExperienceCategoryMeta {
  type: ExperienceType;
  number: string;
  title: string;
  singularLabel: string;
}
