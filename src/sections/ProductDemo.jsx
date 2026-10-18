import { useRef, useState } from "react";

import { Device } from "../components/Device";
import { Icon } from "../components/Icon";
import arrivedShot from "../assets/app/arrived.webp";
import tripShot from "../assets/app/trip.webp";
import visitsShot from "../assets/app/visits.webp";
import siteInfoShot from "../assets/app/learn-fort-santiago.png";

// Four real screens, picked to be the ones How it works doesn't already
// walk through in detail. Each caption describes what the screenshot shows.
const SCREENS = [
  {
    id: "plan",
    icon: "route",
    title: "Plan",
    body: "Choose the heritage sites you want to visit and build your route, with stops, distances and travel times laid out for your day.",
    shot: tripShot,
    alt: "An Intramuros trip: 8 stops, 1.7 km, 23 minutes of walking, starting at 9:00 AM and back by 12:41 PM.",
  },
  {
    id: "arrive",
    icon: "map-pin",
    title: "Arrive",
    body: "Reach a heritage site and Histoury welcomes you with an arrival notification, unlocking its history for you to explore.",
    shot: arrivedShot,
    alt: "The arrival screen: You've Arrived at Manila Cathedral, with a photo and a View Historical Info button.",
  },
  {
    id: "learn",
    icon: "book-open",
    title: "Learn",
    body: "Get to know each site through its overview, timeline and stories. Listen to the narration, explore the sources, and revisit its history after your visit.",
    shot: siteInfoShot,
    alt: "Fort Santiago's unlocked site information, with Overview, Timeline, Stories and Sources tabs and historical audio narration.",
  },
  {
    id: "track",
    icon: "visit-history",
    title: "Track",
    body: "Look back at the sites you've visited and see which ones are still waiting. Keep your Intramuros journey in one place.",
    shot: visitsShot,
    alt: "Visit History: 6 sites visited, Casa Manila Museum marked visited, and a list of sites yet to explore.",
  },
];

/**
 * A quick look at the real app before any explanation: a tab list on one
 * side, the matching screen on the other. Tabs follow the WAI-ARIA tabs
 * pattern, so arrow keys move between them.
 */
function ProductDemo() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const onKeyDown = (event) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = null;
    if (event.key in keys) next = (active + keys[event.key] + SCREENS.length) % SCREENS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = SCREENS.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section demo" id="demo">
      <header className="section-head" data-reveal>
        <p className="kicker">Product demo</p>
        <h2 className="section-title">
          See Histoury <span className="accent">in action.</span>
        </h2>
        <p className="section-sub">
          The real app, screen by screen. Tap through what a visit looks like.
        </p>
      </header>

      <div className="demo-grid">
        <div className="demo-tabs" role="tablist" aria-label="App screens" aria-orientation="vertical">
          {SCREENS.map((screen, index) => (
            <button
              key={screen.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`demo-tab-${screen.id}`}
              aria-selected={active === index}
              aria-controls="demo-panel"
              tabIndex={active === index ? 0 : -1}
              className={`demo-tab${active === index ? " is-active" : ""}`}
              onClick={() => setActive(index)}
              onKeyDown={onKeyDown}
            >
              <span className="tile-icon" aria-hidden="true">
                <Icon name={screen.icon} size={18} />
              </span>
              <span className="demo-tab-text">
                <strong>{screen.title}</strong>
                <span>{screen.body}</span>
              </span>
            </button>
          ))}
        </div>

        <p className="demo-mobile-description" aria-live="polite">{SCREENS[active].body}</p>

        <div
          className="demo-stage"
          id="demo-panel"
          role="tabpanel"
          aria-labelledby={`demo-tab-${SCREENS[active].id}`}
          data-reveal
        >
          <div className="demo-glow" aria-hidden="true" />
          <div className="demo-phones">
            {SCREENS.map((screen, index) => (
              <Device
                key={screen.id}
                className={`demo-device${active === index ? " is-active" : ""}`}
                src={screen.shot}
                alt={active === index ? screen.alt : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDemo;
