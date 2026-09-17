import type { Project } from './types';

export const civicconnect: Project = {
  id: 'civicconnect',
  title: 'CivicConnect',
  slug: 'civicconnect',
  number: '07',
  tagline: 'Smart City Platform Connecting Citizens, Service Providers, and Government Authorities',
  shortDescription:
    'A smart city incident management and emergency support platform connecting citizens, verified service providers, and local government authorities in one unified application.',
  fullDescription:
    'Built during HackFest 2K26 (a 36-hour hackathon at M. Kumarasamy College of Engineering), CivicConnect is a smart city platform connecting citizens, service providers, and government authorities in one application for local services, rapid emergency support, and transparent civic issue management.',
  category: 'Smart City / Full-Stack Platform',
  technologies: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'GPS Geolocation',
    'Real-Time WebSockets',
    'OTP Verification',
    'Role-Based Access Control'
  ],
  github: 'https://github.com/kxvinstrikexz',
  featured: false,
  status: 'Completed (Hackathon Build)',
  year: '2026',
  accentColor: '#fabb02',
  problem:
    'Urban emergencies and localized municipal grievances frequently suffer from fragmented communication channels, delayed emergency dispatch, unverified local service providers, and lack of real-time grievance tracking for citizens.',
  solution:
    'CivicConnect provides a cohesive civic coordination network featuring one-tap SOS emergency broadcasting with live GPS location sharing, geo-tagged incident logging, verified service provider bookings, OTP verification, and role-based municipal oversight dashboards.',
  features: [
    'One-tap SOS emergency support with emergency type selection',
    'Dedicated accident, safety, and medical emergency support workflows',
    'Live GPS location sharing with alerts dispatched to nearby responders and authorities',
    'Geo-tagged civic complaints with real-time resolution tracking',
    'Verified local service-provider booking system',
    'OTP-based verification for authenticated incident reporting',
    'Role-based administrative dashboards for municipal authorities and service teams'
  ],
  architecture: {
    title: 'Incident Dispatch & Municipal Coordination Architecture',
    description:
      'Real-time event processing connecting mobile and web clients to geofenced alerts, authenticated grievance routing, and authority response dashboards.',
    flow: [
      'Client SOS / Complaint Initiation (GPS Geotagging)',
      'OTP Verification & Payload Validation',
      'Geofenced Notification Engine & Alert Dispatch',
      'Role-Based Authority & Responder Dashboards',
      'Real-Time Status Tracking & Resolution Logging'
    ]
  },
  challenges:
    'Architecting and shipping a real-time emergency dispatch and multi-role municipal management workflow within a strict 36-hour hackathon timeframe while maintaining reliable location coordination and clean role separation.',
  outcome:
    'Engineered a working end-to-end smart city platform during HackFest 2K26 that demonstrated how municipal services and critical citizen safety mechanisms can be unified into a seamless, accessible digital ecosystem.'
};
