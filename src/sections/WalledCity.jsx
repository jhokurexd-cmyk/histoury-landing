import { useEffect, useRef } from "react";
import PLACES from "../assets/photos/historical-sites.json";
import "../styles/landmarks.css";

function WalledCity() {
  const journeyRef = useRef(null);
  const stickyRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const journey = journeyRef.current;
    const sticky = stickyRef.current;
    const cards = cardsRef.current;
    let enabled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let distance = 0;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    const update = () => {
      frame = 0;
      if (!enabled) return;
      const progress = Math.max(0, Math.min(1, (82 - journey.getBoundingClientRect().top) / Math.max(1, distance)));
      cards.scrollLeft = progress * distance;
    };
    const measure = () => {
      distance = Math.max(0, cards.scrollWidth - cards.clientWidth);
      enabled = !reduced.matches && distance > 0 && sticky.offsetHeight < viewportHeight - 90;
      journey.classList.toggle("is-scroll-journey", enabled);
      journey.style.height = enabled ? `${sticky.offsetHeight + distance}px` : "";
      if (!enabled) distance = 0;
      else update();
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = () => {
      if (window.innerWidth === viewportWidth) return;
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      measure();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(sticky);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);

    reduced.addEventListener("change", measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);

      reduced.removeEventListener("change", measure);
    };
  }, []);
  return (
    <section className="section walled" id="about">
      <div className="sites-journey" ref={journeyRef}>
      <div className="sites-sticky" ref={stickyRef}>
      <header className="section-head split" data-reveal>
        <div>
          <p className="kicker">Made for Intramuros</p>
          <h2 className="section-title">
            Four centuries, <span className="accent">one set of walls.</span>
          </h2>
        </div>
        <p className="section-sub">
          Histoury is a capstone project built for the Walled City of Manila:
          its churches, forts, plazas and streets, each paired with a story
          that has been checked against its sources.
        </p>
      </header>

      <ul className="arches" ref={cardsRef} aria-label="Historical sites in Intramuros" tabIndex={0}>
        {PLACES.map((place) => (
          <li key={place.name} className="arch-item">
            <figure>
              <div className="arch">
                <img src={place.src} alt={place.name} loading="lazy" decoding="async" width="1400" height="1050" />
              </div>
              <figcaption>
                <strong>{place.name}</strong>
                <span>Explore in Histoury</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      </div>
      </div>

      <p className="credit">19 historical sites · Photographs from the Histoury app</p>
    </section>
  );
}

export default WalledCity;

