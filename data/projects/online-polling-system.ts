import type { Project } from './types';

export const onlinePollingSystem: Project = {
  id: 'online-polling-system',
  title: 'Online Polling System',
  slug: 'online-polling-system',
  number: '01',
  tagline: 'Full-Stack Real-Time Voting & Analytics Platform',
  shortDescription: 'A secure, scalable web platform for creating instant polls, managing authentication, and visualizing aggregated voting trends in real time.',
  fullDescription: 'A full-stack voting and decision-making application engineered with strong emphasis on system architecture, data integrity, and real-time visualization. Designed to handle concurrent submissions atomically and present live interactive analytics.',
  category: 'Full-Stack',
  technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'Chart.js'],
  github: 'https://github.com/kxvinstrikexz',
  featured: true,
  status: 'Production Ready',
  year: '2026',
  accentColor: '#00e5ff',
  problem: 'Traditional polling methods often suffer from ballot duplication, lack of real-time result updates, and convoluted creation workflows for administrators.',
  solution: 'Designed a structured three-tier architecture with token-based authentication, transactional database operations to ensure atomic vote recording, and an intuitive reactive dashboard.',
  architecture: {
    title: 'Layered MVC & Event-Driven Voting Pipeline',
    description: 'The system decouples the client interface from the backend API gateway, ensuring all incoming votes pass through verification guards before committing to the relational store.',
    flow: [
      'Client UI captures secure vote submission with signature validation',
      'API Gateway validates JWT session & user voting eligibility',
      'Transaction Service executes atomic vote write in MySQL',
      'Real-Time Aggregator pushes updated analytics to poll dashboard'
    ]
  },
  features: [
    'Role-based authentication & anti-duplicate voting constraints',
    'Dynamic poll builder with multiple options & expiry settings',
    'Interactive real-time data visualizers (Bar & Pie breakdowns)',
    'Clean RESTful API design with comprehensive error handling',
    'Exportable survey summary reports'
  ],
  challenges: 'Preventing race conditions during concurrent voting spikes was solved using strict SQL transactions with row-level locking mechanisms.',
  outcome: 'Delivered an intuitive, zero-duplicate polling experience capable of processing concurrent votes smoothly with instant visual feedback.'
};
