
import { Icon } from "../components/Icon";
import { useEffect, useRef, useState } from "react";
import fort from "../assets/app/ar-stack-fort-transparent.png";
import cathedral from "../assets/app/ar-stack-cathedral-transparent.png";
import sanAgustin from "../assets/app/ar-stack-san-agustin-transparent.png";
import "../styles/ar-stack.css";

const SITES = [
  { name: "San Agustin Church", image: sanAgustin },
  { name: "Manila Cathedral", image: cathedral },
  { name: "Fort Santiago", image: fort },
];



// What the AR view actually does today, in the order a visitor meets it.
const POINTS = [
  {
    icon: "cube",
    title: "Rebuilt where it stood",
    body: "A 3D reconstruction is placed in the plaza, at the site's real location.",
  },
  {
    icon: "clock",
    title: "History without leaving AR",
    body: "Open the site's overview, timeline, stories and sources over the camera view.",
  },
  {
    icon: "camera",
    title: "Keep the moment",
    body: "Lock the view, take a photo with a period filter, and it saves to your phone.",
  },
];

/**
 * The feature the whole app is built around, given a section of its own:
 * the real AR screens over a photograph of the same cathedral.
 */
function ArShowcase() {
  const journeyRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const swipeRef = useRef(null);
  const swipeFrame = useRef(0);
  const settleSwipe = (target) => {
    cancelAnimationFrame(swipeFrame.current);
    const from = rotationRef.current;
    const began = performance.now();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = (now) => {
      const progress = reduced ? 1 : Math.min(1, (now - began) / 450);
      const eased = 1 - (1 - progress) ** 3;
      rotationRef.current = from + (target - from) * eased;
      setRotation(rotationRef.current);
      if (progress < 1) swipeFrame.current = requestAnimationFrame(tick);
    };
    swipeFrame.current = requestAnimationFrame(tick);
  };
  useEffect(() => () => cancelAnimationFrame(swipeFrame.current), []);
  const startSwipe = (event) => {
    if (!window.matchMedia("(max-width: 900px)").matches || event.target.closest("button")) return;
    cancelAnimationFrame(swipeFrame.current);
    swipeRef.current = { x: event.clientX, y: event.clientY, angle: rotationRef.current, width: event.currentTarget.clientWidth, horizontal: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveSwipe = (event) => {
    const swipe = swipeRef.current;
    if (!swipe) return;
    const dx = event.clientX - swipe.x;
    const dy = event.clientY - swipe.y;
    if (!swipe.horizontal && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) { swipeRef.current = null; return; }
    if (Math.abs(dx) > 8) swipe.horizontal = true;
    if (!swipe.horizontal) return;
    rotationRef.current = swipe.angle + dx / swipe.width * Math.PI * 2;
    setRotation(rotationRef.current);
  };
  const endSwipe = (event) => {
    const swipe = swipeRef.current;
    swipeRef.current = null;
    if (!swipe) return;
    const step = Math.PI * 2 / 3;
    const delta = event.clientX - swipe.x;
    const initial = Math.round(swipe.angle / step);
    const next = swipe.horizontal && Math.abs(delta) > 35 ? initial + Math.sign(delta) : initial;
    settleSwipe(next * step);
  };
  const active = ((Math.round(rotation / (Math.PI * 2 / 3)) % 3) + 3) % 3;
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let target = 0;
    let started = 0;
    let from = 0;
    let desiredStep = 0;
    let settledStep = 0;
    let moving = false;
    let holdTimer;
    const advance = () => {
      if (moving || settledStep === desiredStep) return;
      moving = true;
      const nextStep = settledStep + Math.sign(desiredStep - settledStep);
      from = rotationRef.current;
      target = nextStep * Math.PI * 2 / 3;
      started = performance.now();
      frame = requestAnimationFrame(animate);
    };
    const animate = (now) => {
      const progress = Math.min(1, (now - started) / 1150);
      // Smooth acceleration and deceleration, with no abrupt initial jump.
      const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
      rotationRef.current = from + (target - from) * eased;
      setRotation(rotationRef.current);
      if (progress < 1) frame = requestAnimationFrame(animate);
      else {
        frame = 0;
        settledStep = Math.round(target / (Math.PI * 2 / 3));
        // Show the middle site before processing another queued scroll stage.
        holdTimer = setTimeout(() => { moving = false; advance(); }, 220);
      }
    };
    const update = () => {
      if (!journeyRef.current || reduced.matches) return;
      const element = journeyRef.current;
      const distance = Math.max(1, element.offsetHeight - window.innerHeight + 100);
      const progress = Math.max(0, Math.min(1, (100 - element.getBoundingClientRect().top) / distance));
      // Forward scroll follows one rightward orbit; upward scroll retraces it.
      const step = Math.min(2, Math.floor(progress * 3));
      desiredStep = step;
      advance();

    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { cancelAnimationFrame(frame); clearTimeout(holdTimer); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return (
    <section className="section ar-show" id="ar">
      <div className="ar-stack-journey" ref={journeyRef}>
      <div className="ar-grid ar-stack-sticky">
        <div className="ar-copy" data-reveal>
          <p className="kicker">AR showcase</p>
          <h2 className="section-title">
            Step into <span className="accent">the past.</span>
          </h2>
          <p className="section-sub">
            Raise your phone at a heritage site and see it as it once stood,
            right where you are standing.
          </p>

          <ul className="ar-points">
            {POINTS.map((point, index) => (
              <li key={point.title} data-reveal style={{ "--i": index + 1 }}>
                <span className="tile-icon" aria-hidden="true">
                  <Icon name={point.icon} size={18} />
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="ar-note">
            <Icon name="info" size={15} />
            <span>AR needs an ARCore-capable phone. Everything else works without it.</span>
          </p>
        </div>

        <div className="ar-stack-visual">
          <div className="ar-stack-deck" onPointerDown={startSwipe} onPointerMove={moveSwipe} onPointerUp={endSwipe} onPointerCancel={() => { swipeRef.current = null; settleSwipe(Math.round(rotationRef.current / (Math.PI * 2 / 3)) * Math.PI * 2 / 3); }}>
            {SITES.map((site, index) => {
              const angle = index * Math.PI * 2 / 3 - rotation;
              const depth = Math.cos(angle);
              const x = -Math.sin(angle) * 65;
              const scale = .925 + depth * .075;
              const y = (1 - depth) * 11;
              return <div key={site.name} className={`ar-stack-phone ar-stack-orbit ar-stack-source-${index}`} style={{ transform: `translate3d(${x}%, ${y}px, 0) scale(${scale}) rotateY(${Math.sin(angle) * -3}deg)`, zIndex: Math.round(100 + depth * 100) }} aria-hidden={index !== active}>
                <img src={site.image} alt={`${site.name} in Histoury's AR camera`} loading="eager" draggable="false" />
              </div>;
            })}
          </div>
          <div className="ar-stack-pagination" role="group" aria-label="Featured AR site">
            {SITES.map((site, index) => <button key={site.name} type="button" aria-label={`Show ${site.name}`} aria-pressed={index === active} onClick={() => { const step = Math.PI * 2 / 3; const current = Math.round(rotationRef.current / step); let difference = (index - current % 3 + 3) % 3; if (difference > 1) difference -= 3; settleSwipe((current + difference) * step); }}><span /></button>)}
          </div>
          <p className="ar-stack-name">{SITES[active].name}</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ArShowcase;








