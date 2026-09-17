import type { Experience, ExperienceCategoryMeta, ExperienceType } from './types';

export * from './types';

export const categoryMetadata: ExperienceCategoryMeta[] = [
  {
    type: 'hackathon',
    number: '01',
    title: 'HACKATHONS',
    singularLabel: 'HACKATHON',
  },
  {
    type: 'workshop',
    number: '02',
    title: 'WORKSHOPS',
    singularLabel: 'WORKSHOP',
  },
  {
    type: 'internship',
    number: '03',
    title: 'INTERNSHIPS',
    singularLabel: 'INTERNSHIP',
  },
];

export const allExperiences: Experience[] = [
  {
    id: 'hackfest-2k26',
    type: 'hackathon',
    title: 'HackFest 2K26',
    subtitle: '36 Hours Hackathon',
    organizer: 'M. Kumarasamy College of Engineering, Karur',
    date: '2026',
    description: 'We built CivicConnect during HackFest 2K26.',
    projectName: 'CivicConnect',
    projectSlug: 'civicconnect',
    projectDescription:
      'Smart city platform connecting citizens, service providers, and government authorities in one app for local services, emergency support, and civic issue management.',
    takeaway:
      'The 36-hour challenge strengthened my ability to rapidly turn a real-world problem into a working solution while collaborating with a team, managing time under pressure, solving problems quickly, and making technical decisions within a limited timeframe.',
  },
  {
    id: 'mechanica-ml-workshop-2024',
    type: 'workshop',
    title: 'Machine Learning Workshop',
    subtitle: 'MECHANICA 2024',
    organizer: 'Top Engineers – India in association with MECHANICA 2024 – IIT Madras',
    venue: 'IIT Madras Research Park',
    date: '30 November 2024',
    takeaway:
      'Gained practical exposure to Machine Learning concepts and strengthened my understanding of applying ML to real-world engineering and problem-solving.',
  },
  {
    id: 'vortex-agentic-ai-security-2026',
    type: 'workshop',
    title: 'Agentic AI Security & Red Teaming',
    subtitle: "Vortex '26",
    organizer: 'Spider R&D, NIT Trichy',
    event:
      "National Level Technical Symposium, Organized by Computer Science and Engineering Association, National Institute of Technology, Tiruchirappalli",
    date: '6–8 March 2026',
    description:
      'A technical workshop exploring Agentic AI systems, AI security concepts, red teaming methodologies, and emerging cybersecurity challenges in AI.',
    takeaway:
      'Gained insights into Agentic AI systems, AI security, red teaming methodologies, and emerging cybersecurity challenges in modern AI systems.',
  },
  {
    id: 'maticz-mern-internship',
    type: 'internship',
    title: 'Maticz Technology',
    company: 'Maticz Technology',
    role: 'MERN Stack Intern',
    duration: '15 Days',
    location: 'Rajambadi, Madurai, Tamil Nadu',
    description:
      'Completed a 15-day hands-on internship focused on MERN stack development and real-world full-stack development concepts.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    exposure: ['Git', 'API integration', 'Database management', 'Full-stack web development'],
    takeaway:
      'Gained practical experience in full-stack web development, API integration, database management, and Git workflows while strengthening my understanding of real-world software development.',
  },
];

export function getAllExperiences(): Experience[] {
  return allExperiences;
}

export function getExperiencesByType(type: ExperienceType): Experience[] {
  return allExperiences.filter((exp) => exp.type === type);
}

export function getPopulatedCategories(): {
  meta: ExperienceCategoryMeta;
  experiences: Experience[];
}[] {
  return categoryMetadata
    .map((meta) => ({
      meta,
      experiences: allExperiences.filter((exp) => exp.type === meta.type),
    }))
    .filter((group) => group.experiences.length > 0);
}
