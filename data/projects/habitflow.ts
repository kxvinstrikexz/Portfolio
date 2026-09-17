import type { Project } from './types';

export const habitflow: Project = {
  id: 'habitflow',
  title: 'HabitFlow',
  slug: 'habitflow',
  number: '05',
  tagline: 'Flutter-Powered Habit Tracking & Momentum Building Mobile App',
  shortDescription:
    'A responsive Flutter mobile application engineered to cultivate daily consistency through smart streak freeze protection, Pomodoro focus sessions, and GitHub-style visual habit heatmaps.',
  fullDescription:
    'HabitFlow is a modern, offline-first personal productivity and habit-building mobile application built with Flutter and Dart. Designed to help users overcome procrastination and habit attrition, it combines atomic habit tracking, gamified streak resilience with freeze day protection, integrated focus intervals, and instant local storage.',
  category: 'Mobile App',
  technologies: ['Flutter', 'Dart', 'Provider', 'SharedPreferences', 'Material Design 3'],
  featured: false,
  status: 'Production Ready',
  year: '2026',
  accentColor: '#8b5cf6',
  problem:
    'Building consistent routines is difficult when life interrupts momentum; most habit apps penalize missed days harshly with total streak loss, lack integrated focus timers for deep work, and rely on heavy cloud connections that introduce sync lag and privacy concerns.',
  solution:
    'Architected an offline-first mobile app leveraging Flutter and Provider with zero-latency local JSON persistence. Engineered a streak forgiveness engine with customizable freeze days, an interactive monthly activity matrix, and an integrated Pomodoro timer to bridge the gap between intention and daily execution.',
  architecture: {
    title: 'Offline-First Provider Architecture & Streak State Machine',
    description:
      'Decouples reactive UI rendering from local JSON serialization using ChangeNotifierProvider and SharedPreferences, keeping operations instant and fully functional without an internet connection.',
    flow: [
      'User interacts with Habit / Task / Focus controls in Flutter UI',
      'AppProvider processes state transition and evaluates streak conditions',
      'Streak Engine applies completion increment or consumes available streak freeze',
      'StorageService serializes updated models to local SharedPreferences JSON'
    ]
  },
  features: [
    'Flexible habit frequency engine (daily, weekly, custom target completions)',
    'Streak preservation engine with configurable streak freeze protection days',
    'Interactive GitHub-style monthly activity heatmap and completion metrics',
    'Integrated Pomodoro focus timer with session logging and productivity tracking',
    'Gamification system with milestone badges and unlockable achievements',
    'Curated pre-built habit templates browser for rapid routine setup',
    'Zero-latency offline-first local persistence with data backup export and import'
  ],
  challenges:
    'Calculating accurate streak states and managing retrospective calendar dates while accounting for time zone shifts and streak freeze exemptions without relying on an external server.',
  outcome:
    'Delivered a fluid 60fps native mobile experience that prioritizes user privacy, gives frictionless daily check-ins, and protects user psychological momentum through smart streak resilience.'
};
