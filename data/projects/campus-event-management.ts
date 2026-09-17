import type { Project } from './types';

export const campusEventManagement: Project = {
  id: 'campus-event-management',
  title: 'Campus Event Management System',
  slug: 'campus-event-management',
  number: '02',
  tagline: 'Event Lifecycle & Fast QR-Attendance Platform',
  shortDescription: 'An end-to-end digital portal for universities to coordinate event listings, student RSVPs, dynamic QR code check-ins, and organizer dashboards.',
  fullDescription: 'A comprehensive digital management ecosystem built to streamline campus student engagement, automate attendance check-in, and provide faculty organizers with live turnout metrics.',
  category: 'System Design',
  technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'QR Scanner API', 'Tailwind CSS'],
  github: 'https://github.com/kxvinstrikexz',
  featured: true,
  status: 'Deployed',
  year: '2026',
  accentColor: '#38bdf8',
  problem: 'Physical sign-in sheets and scattered event notices lead to disorganized entry lines, unverified attendance records, and high administrative workload.',
  solution: 'Engineered a centralized platform featuring dynamic cryptographic QR ticket generation on registration, paired with a web-based camera scanner for instant 1-second check-ins.',
  architecture: {
    title: 'Event Lifecycle & Verification Architecture',
    description: 'Orchestrates the entire student journey from discovery and RSVP to instant verification at venue entrance.',
    flow: [
      'Organizer publishes event with capacity & date rules',
      'Student registers & receives unique encrypted QR pass',
      'Volunteer scans pass with mobile browser camera',
      'Scanner service validates token against database and marks attendance'
    ]
  },
  features: [
    'Interactive event discovery feed with categorical filtering',
    'One-click RSVP with instant encrypted QR pass generation',
    'High-speed in-browser QR verification scanner',
    'Organizer analytics panel with live turnout counters and capacity warnings',
    'Role-based access control for students, organizers, and admins'
  ],
  challenges: 'Designing a lightweight scanner module that operates smoothly across varying mobile camera resolutions and lighting environments.',
  outcome: 'Eliminated manual attendance tracking, reduced entrance queue times significantly, and gave organizers accurate post-event analytics.'
};
