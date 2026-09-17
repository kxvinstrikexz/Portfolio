import type { Project } from './types';

export const studyflowAi: Project = {
  id: 'studyflow-ai',
  title: 'StudyFlow AI',
  slug: 'studyflow-ai',
  number: '03',
  tagline: 'Intelligent Study Roadmap & Active Recall Companion',
  shortDescription: 'An AI-powered productivity application that transforms dense syllabi into personalized study roadmaps, bite-sized tasks, and active recall drills.',
  fullDescription: 'A modern AI-assisted learning platform designed to reduce student cognitive overload by converting complex study materials into actionable, structured study schedules and smart flashcard decks.',
  category: 'AI',
  technologies: ['React', 'TypeScript', 'Next.js', 'OpenAI / Gemini API', 'Tailwind CSS', 'Framer Motion'],
  github: 'https://github.com/kxvinstrikexz',
  featured: true,
  status: 'In Active Development',
  year: '2026',
  accentColor: '#818cf8',
  problem: 'Students often struggle to break down extensive curriculums into manageable daily goals, resulting in procrastination and ineffective cramming.',
  solution: 'Constructed an intelligent prompt orchestration layer that takes subject outlines, computes spaced repetition intervals, and generates interactive quizzes and flashcards.',
  architecture: {
    title: 'Prompt Orchestration & Learning Engine',
    description: 'Structures generative AI outputs into predictable JSON schemas that feed directly into responsive UI widgets and milestone trackers.',
    flow: [
      'User submits syllabus text or topic goals',
      'AI Prompt Orchestration parses and structures learning objectives',
      'Milestone Engine formats tasks into a personalized timeline',
      'Active Recall Generator builds dynamic practice quizzes and flashcards'
    ]
  },
  features: [
    'Automated syllabus breakdown into prioritized milestones',
    'Intelligent concept summarizer with progressive difficulty quizzes',
    'Spaced repetition flashcard deck generator',
    'Daily focus timer with integrated task checklists',
    'Visual progress streaks and completion metrics'
  ],
  challenges: 'Ensuring consistent, highly-structured JSON responses from AI models to prevent UI rendering anomalies.',
  outcome: 'Empowered students with clear, confidence-building study trajectories and boosted retention through automated active recall.'
};
