import { onlinePollingSystem } from './online-polling-system';
import { campusEventManagement } from './campus-event-management';
import { studyflowAi } from './studyflow-ai';
import { voiceNoteTaking } from './voice-note-taking';
import { habitflow } from './habitflow';
import { intellex } from './intellex';
import { civicconnect } from './civicconnect';
import type { Project } from './types';

export * from './types';
export { habitflow, onlinePollingSystem, campusEventManagement, studyflowAi, voiceNoteTaking, intellex, civicconnect };

// Central collection of all projects
export const allProjects: Project[] = [
  onlinePollingSystem,
  campusEventManagement,
  studyflowAi,
  voiceNoteTaking,
  habitflow,
  intellex,
  civicconnect
];



