/**
 * Cookie consent for the landing page.
 *
 * What this site stores today:
 *  - Essential: the visitor's cookie choice itself and their light/dark
 *    theme preference (browser storage). These make the site work as the
 *    visitor asked, so they don't need consent — but they are disclosed.
 *  - Analytics: none yet. The category exists so that any analytics added
 *    later must check hasAnalyticsConsent() first and stays off until the
 *    visitor accepts.
 *
 * The choice is kept for 6 months (then the banner asks again), and a
 * first-party cookie mirrors it so it can be read server-side if a host
 * ever needs to.
 */

export const CONSENT_STORAGE_KEY = "histoury-cookie-consent";
const CONSENT_COOKIE = "histoury_consent";
// Bump when the categories or the policy change meaningfully, so everyone
// is asked again.
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_DAYS = 180;

export const CONSENT_CHANGED_EVENT = "histoury:consent-changed";
export const OPEN_COOKIE_SETTINGS_EVENT = "histoury:open-cookie-settings";

/** The saved choice, or null when the visitor hasn't chosen (or it expired). */
export function readConsent() {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved?.version !== CONSENT_VERSION) return null;
    const ageMs = Date.now() - Number(saved.decidedAt || 0);
    if (!(ageMs >= 0) || ageMs > CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000) return null;
    return { necessary: true, analytics: saved.analytics === true, decidedAt: saved.decidedAt };
  } catch {
    return null;
  }
}

/** Saves the visitor's choice and tells the rest of the page. */
export function saveConsent({ analytics }) {
  const choice = { version: CONSENT_VERSION, necessary: true, analytics: !!analytics, decidedAt: Date.now() };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
  } catch {
    // Storage blocked (private mode): the choice still applies this visit.
  }
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      `${CONSENT_COOKIE}=${choice.analytics ? "all" : "essential"}; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: choice }));
  return choice;
}

/** True only after the visitor has accepted analytics cookies. */
export function hasAnalyticsConsent() {
  return readConsent()?.analytics === true;
}

/** Reopens the cookie settings (used by the footer's "Cookie Settings"). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
