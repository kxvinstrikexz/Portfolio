/**
 * Session storage management for The KSR Archive 3D Intro
 *
 * Requirements:
 * 1. Show the intro only once per browser session.
 * 2. On the first homepage visit, display the intro.
 * 3. After completion, store a session flag such as 'ksr_intro_v2'.
 * 4. If the user refreshes during the same session after completion, skip the intro.
 * 5. Navigating between homepage and project detail pages must never replay the intro.
 * 6. Directly opening a project URL must not show the intro.
 * 7. Returning to the homepage within the same session must skip the intro.
 * 8. A completely new browser session may show the intro again.
 * 9. Handle storage access errors gracefully.
 * 10. Never create an infinite intro loop.
 */

// Versioned key to ensure fresh session starts cleanly
const INTRO_STORAGE_KEY = 'ksr_intro_v2';

export function hasSeenIntro(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    // Check for explicit replay parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('intro') === 'true' || urlParams.get('intro') === '1') {
      return false;
    }

    return sessionStorage.getItem(INTRO_STORAGE_KEY) === 'completed';
  } catch {
    // If storage is blocked/restricted by browser settings, safe fallback
    return true;
  }
}

export function markIntroSeen(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(INTRO_STORAGE_KEY, 'completed');
  } catch {
    // Ignore storage write errors safely
  }
}

export function shouldShowIntro(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    // 1. Force replay via query param for testing anytime
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('intro') === 'true' || urlParams.get('intro') === '1') {
      return true;
    }

    // 2. Check if already completed in current session
    if (sessionStorage.getItem(INTRO_STORAGE_KEY) === 'completed') {
      return false;
    }

    // 3. Must be on homepage root path
    const path = window.location.pathname;
    if (path !== '/' && path !== '') {
      // Direct visit to a sub-page: mark completed so returning home skips intro
      sessionStorage.setItem(INTRO_STORAGE_KEY, 'completed');
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function resetIntroSession(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(INTRO_STORAGE_KEY);
    sessionStorage.removeItem('ksr_intro_seen');
  } catch {}
}
