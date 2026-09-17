import type { Project } from './types';

export const voiceNoteTaking: Project = {
  id: 'voice-note-taking',
  title: 'Voice-Based Note-Taking App',
  slug: 'voice-note-taking',
  number: '04',
  tagline: 'Speech-to-Text Hands-Free Productivity Workspace',
  shortDescription: 'A fast, hands-free note-taking workspace that transcribes voice in real-time, categorizes spontaneous ideas, and exports clean markdown.',
  fullDescription: 'A focused, voice-first note capture tool crafted for rapid thought collection, lecture recording, and effortless idea organization without keyboard friction.',
  category: 'Productivity',
  technologies: ['React', 'TypeScript', 'Web Speech API', 'Tailwind CSS', 'Lucide Icons', 'Framer Motion'],
  github: 'https://github.com/kxvinstrikexz',
  featured: true,
  status: 'Prototype',
  year: '2026',
  accentColor: '#2dd4bf',
  problem: 'Typing thoughts while on the go or during rapid discussions is cumbersome, causing valuable ideas and lecture points to be lost.',
  solution: 'Leveraged native browser speech recognition streams with intelligent punctuation handling, automated keyword tagging, and instant clipboard/markdown exports.',
  architecture: {
    title: 'Real-Time Audio Stream Processing Pipeline',
    description: 'Processes continuous microphone input, cleans transcription chunks, and organizes entries into a searchable local store.',
    flow: [
      'Microphone capture via browser Web Speech API',
      'Continuous speech-to-text transcription engine',
      'Punctuation & command parser (e.g., "new paragraph", "save")',
      'Automatic tag classification and indexed storage'
    ]
  },
  features: [
    'Continuous real-time speech-to-text with interim preview',
    'Voice-activated command triggers for hands-free management',
    'Automatic tagging and rapid fuzzy-search filtering',
    'One-click export to Markdown, Text, or Clipboard',
    'Clean distraction-free dark mode interface'
  ],
  challenges: 'Managing microphone stream states reliably across browser tab switches without losing audio focus or dropping words.',
  outcome: 'Provided a seamless, zero-distraction capture tool that converts spoken thoughts into structured notes instantly.'
};
