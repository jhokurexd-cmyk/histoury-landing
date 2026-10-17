import { useState } from "react";

function MotionIcon({ name }) {
  const props = { width: 28, height: 28, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "check-circle") return (
    <svg {...props} className="why-check">
      <circle className="why-check-ring" pathLength="1" cx="16" cy="16" r="11" />
      <path className="why-checkmark" pathLength="1" d="m10.5 16 3.5 3.5 7.5-8" />
    </svg>
  );
  if (name === "cube") return (
    <svg {...props} className="why-ar">
      <g className="why-ar-cube"><path d="m16 6 9 5v10l-9 5-9-5V11Z" /><path d="m7 11 9 5 9-5M16 16v10M16 6v5" /></g>
      <g className="why-ar-corners"><path d="M7 3H3v4M25 3h4v4M3 25v4h4M29 25v4h-4" /></g>
      <rect className="why-ar-flash" x="3" y="3" width="26" height="26" rx="4" fill="currentColor" stroke="none" opacity="0" />
    </svg>
  );
  return (
    <svg {...props} className="why-map">
      <g className="why-map-left"><path d="m4 8 8-3v20l-8 3Z" /></g>
      <path d="m12 5 8 3v20l-8-3Z" fill="currentColor" fillOpacity=".08" />
      <g className="why-map-right"><path d="m20 8 8-3v20l-8 3Z" /></g>
      <path className="why-map-route" pathLength="1" strokeDasharray="2 3" d="m8 20 6-5 5 3 5-7" />
    </svg>
  );
}

// Three reasons, each something the app already does. The detail behind
// each one comes later on the page (How it works, Features, Intramuros).
const REASONS = [
  {
    icon: "check-circle",
    title: "Verified history",
    body: "Every site's story is checked against its sources, and the sources are listed in the app.",
  },
  {
    icon: "cube",
    title: "AR experiences",
    body: "See heritage sites rebuilt in 3D, placed where they actually stood.",
  },
  {
    icon: "map",
    title: "Smart exploration",
    body: "Nearby sites, walking directions and itineraries that plan the route for you.",
  },
];

function WhyHistoury() {
  const [motion, setMotion] = useState({});
  const startMotion = (name) => setMotion((previous) => ({
    ...previous,
    [name]: { playing: true, run: (previous[name]?.run ?? 0) + 1 },
  }));
  const stopMotion = (name) => setMotion((previous) => ({
    ...previous,
    [name]: { ...previous[name], playing: false },
  }));
  return (
    <section className="section why" id="why">
      <header className="section-head split" data-reveal>
        <div>
          <p className="kicker">Why Histoury</p>
          <h2 className="section-title">
            More than <span className="accent">a map.</span>
          </h2>
        </div>
        <p className="section-sub">
          Verified history, immersive AR and a smarter way to explore the
          Walled City, in one free app.
        </p>
      </header>

      <div className="why-grid">
        {REASONS.map((reason, index) => (
          <article className="tile why-tile" key={reason.title} data-reveal style={{ "--i": index }}
            onMouseEnter={() => startMotion(reason.icon)}
            onMouseLeave={() => stopMotion(reason.icon)}>
            <span className={`tile-icon why-motion why-motion-${reason.icon}`} aria-hidden="true">
              <span className={motion[reason.icon]?.playing === false ? "why-motion-stopped" : "why-motion-playing"}>
                <MotionIcon key={motion[reason.icon]?.run ?? 0} name={reason.icon} />
              </span>
            </span>
            <h3>{reason.title}</h3>
            <p>{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyHistoury;
