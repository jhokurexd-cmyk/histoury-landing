import { useEffect, useRef, useState } from "react";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  readConsent,
  saveConsent,
} from "../config/cookies";

/**
 * Cookie consent banner. Shown at the bottom of the page until the visitor
 * chooses; "Cookie Settings" in the footer brings it back to change that
 * choice. Accepting and declining are equally easy (one click each), and
 * nothing optional runs until the visitor accepts.
 */
function CookieBanner() {
  const [open, setOpen] = useState(() => readConsent() === null);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(() => readConsent()?.analytics === true);
  const panelRef = useRef(null);

  useEffect(() => {
    const reopen = () => {
      setAnalytics(readConsent()?.analytics === true);
      setCustomizing(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  // Reopened from the footer: move focus into the banner.
  useEffect(() => {
    if (open && customizing) panelRef.current?.focus();
  }, [open, customizing]);

  if (!open) return null;

  const decide = (choice) => {
    saveConsent(choice);
    setOpen(false);
    setCustomizing(false);
  };

  return (
    <div
      ref={panelRef}
      className={`cookie-banner${customizing ? " is-customizing" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      tabIndex={-1}
    >
      <div className="cookie-banner-body">
        <p className="cookie-banner-title">We value your privacy</p>
        <p className="cookie-banner-text">
          We use essential cookies and similar storage to run this site and remember your choices, like dark mode.
          Optional analytics cookies are only used if you accept them.{" "}
          <a href="#cookie-policy">Cookie Policy</a>
        </p>

        {customizing && (
          <div className="cookie-options">
            <div className="cookie-option">
              <div>
                <p className="cookie-option-name">Essential</p>
                <p className="cookie-option-desc">Needed for the site to work and to remember your settings. Always on.</p>
              </div>
              <span className="cookie-always">Always on</span>
            </div>
            <label className="cookie-option">
              <div>
                <p className="cookie-option-name">Analytics</p>
                <p className="cookie-option-desc">Helps us understand how visitors use the site. Off unless you turn it on.</p>
              </div>
              <input
                type="checkbox"
                className="cookie-switch"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Allow analytics cookies"
              />
            </label>
          </div>
        )}
      </div>

      <div className="cookie-banner-actions">
        {customizing ? (
          <button type="button" className="btn-primary" onClick={() => decide({ analytics })}>
            Save choices
          </button>
        ) : (
          <button type="button" className="btn-secondary" onClick={() => setCustomizing(true)}>
            Customize
          </button>
        )}
        <button type="button" className="btn-secondary" onClick={() => decide({ analytics: false })}>
          Essential only
        </button>
        <button
          type="button"
          className={customizing ? "btn-secondary" : "btn-primary"}
          onClick={() => decide({ analytics: true })}
        >
          Accept all
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
