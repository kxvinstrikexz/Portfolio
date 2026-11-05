/**
 * THE KSR ARCHIVE — Centralized Availability Configuration
 *
 * Easily switch between statuses:
 * - 'available'
 * - 'collaboration_only'
 * - 'unavailable'
 */

export type AvailabilityStatus = 'available' | 'collaboration_only' | 'unavailable';

export interface AvailabilityState {
  status: AvailabilityStatus;
  label: string;
  supportingText: string;
  dotColorClass: string;
  pulseColorClass: string;
  ping: boolean;
}

export const availabilityPresets: Record<AvailabilityStatus, AvailabilityState> = {
  available: {
    status: 'available',
    label: 'OPEN TO OPPORTUNITIES',
    supportingText: 'Available for internships, collaborations & interesting projects.',
    dotColorClass: 'bg-emerald-500',
    pulseColorClass: 'bg-emerald-400',
    ping: true,
  },
  collaboration_only: {
    status: 'collaboration_only',
    label: 'OPEN TO COLLABORATION ONLY',
    supportingText: 'Available for open-source, engineering & technical collaborations.',
    dotColorClass: 'bg-sky-500',
    pulseColorClass: 'bg-sky-400',
    ping: true,
  },
  unavailable: {
    status: 'unavailable',
    label: 'NOT CURRENTLY AVAILABLE',
    supportingText: 'Focused on ongoing commitments; open to future discussions.',
    dotColorClass: 'bg-zinc-500',
    pulseColorClass: 'bg-zinc-400',
    ping: false,
  },
};

// ============================================================================
// ACTIVE PORTFOLIO AVAILABILITY SETTING
// Change the active status here to immediately update the entire portfolio.
// ============================================================================
export const CURRENT_AVAILABILITY_STATUS: AvailabilityStatus = 'available';

export const activeAvailability: AvailabilityState = {
  ...availabilityPresets[CURRENT_AVAILABILITY_STATUS],
};

