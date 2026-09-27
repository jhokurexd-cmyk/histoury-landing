import { useEffect, useRef, useState } from "react";

import { Device } from "../components/Device";
import { Icon } from "../components/Icon";
import mapShot from "../assets/app/map.webp";
import siteInfoShot from "../assets/app/site-info.webp";
import arCaptureShot from "../assets/app/ar-capture.webp";
import tripShot from "../assets/app/trip.webp";

// The same four beats the app's own onboarding uses, in the same order.
const STEPS = [
  {
    kicker: "Explore",
    title: "Find the sites around you.",
    body: "The Walled City's heritage sites on one map, with walking directions to whichever is nearest. Filter by churches, museums, food or photo spots.",
    points: ["Live map of Intramuros", "Walking directions", "Filters by interest"],
    shot: mapShot,
    alt: "The Histoury map of Intramuros with pins on each historical site.",
  },
  {
    kicker: "Learn",
    title: "Unlock the story by being there.",
    body: "A site's full history opens when you visit it in person: verified narratives, a timeline of key events, stories and sources, plus an audio guide for eyes-up exploring.",
    points: ["Verified narratives with sources", "Timelines and audio guides", "Unlocks when you arrive"],
    shot: siteInfoShot,
    alt: "The Site Information screen: visited sites open, the rest locked until you visit.",
  },
  {
    kicker: "Experience",
    title: "See it rebuilt, then keep the moment.",
    body: "Raise your camera at the site and a 3D reconstruction appears in place. Take a photo with a period filter and it saves straight to your phone.",
    points: ["AR reconstructions on site", "Period photo filters", "Photos stay on your phone"],
    shot: arCaptureShot,
    alt: "The AR camera with photo filters such as Old Photograph and War 1940s, and a Save Photo button.",
  },
  {
    kicker: "Plan",
    title: "Turn a list into a day.",
    body: "Pick the sites you want, and Histoury builds the route: stops in order, distance, travel time and when you'll be back. Reorder it, optimise it, or save it for later.",
    points: ["Itineraries with timings", "One-tap route optimising", "Walk, drive or ride"],
    shot: tripShot,
    alt: "An Intramuros trip with 8 stops, 1.7 km, and a start and return time.",
  },
];

/**
 * How it works. On wide screens the phone stays pinned beside the text and
 * swaps to the screen for whichever step crosses the middle of the viewport;
 * on narrow screens each step simply carries its own phone.
 *
 * Driven by an IntersectionObserver on the page's own scroll — no inner
 * scroll box to get trapped in, and nothing running per frame.
 */
function Steps() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section steps" id="how">
      <header className="section-head" data-reveal>
        <p className="kicker">How it works</p>
        <h2 className="section-title">
          Four steps, <span className="accent">one walk.</span>
        </h2>
        <p className="section-sub">
          The same arc at every site, from the map in your hand to the
          centuries under your feet.
        </p>
      </header>

      <div className="steps-grid">
        <ol className="steps-list">
          {STEPS.map((step, index) => (
            <li
              key={step.kicker}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              data-index={index}
              className={`step${active === index ? " is-active" : ""}`}
            >
              <p className="step-kicker">
                <span className="step-num">{String(index + 1).padStart(2, "0")}</span>
                {step.kicker}
              </p>
              <h3>{step.title}</h3>
              <p className="step-body">{step.body}</p>
              <ul className="step-points">
                {step.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={14} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="step-device">
                <Device src={step.shot} alt={step.alt} />
              </div>
            </li>
          ))}
        </ol>

        <div className="steps-stage" aria-hidden="true">
          <div className="stage stage-card">
            <div className="stage-rings" />
            <div className="stage-devices">
              {STEPS.map((step, index) => (
                <Device
                  key={step.kicker}
                  src={step.shot}
                  className={`stage-device${active === index ? " is-active" : ""}`}
                />
              ))}
            </div>
            <ol className="stage-dots">
              {STEPS.map((step, index) => (
                <li key={step.kicker} className={active === index ? "on" : ""}>
                  {step.kicker}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
