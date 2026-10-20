import { useEffect, useRef } from "react";
import manilaCathedral from "../assets/photos/manila-cathedral.webp";
import fortSantiago from "../assets/photos/fort-santiago.jpg";
import sanAgustin from "../assets/photos/san-agustin.jpg";
import casaManila from "../assets/photos/casa-manila.jpg";
import baluarte from "../assets/photos/baluarte-san-diego.jpg";
import credits from "../assets/photos/landmark-credits.json";

// Landmark photographs and their Wikimedia Commons attribution below.
const PLACES = [
  { src: manilaCathedral, name: "Manila Cathedral", note: "The cathedral of Intramuros" },
  { src: fortSantiago, name: "Fort Santiago", note: "The city's historic citadel" },
  { src: sanAgustin, name: "San Agustin Church", note: "A heritage church and monastery" },
  { src: casaManila, name: "Casa Manila", note: "A glimpse of colonial life" },
  { src: baluarte, name: "Baluarte de San Diego", note: "The old city's stone defenses" },
];

/**
 * The place itself, in photographs, framed as the colonial arches you walk
 * under all over Intramuros. A row of five on wide screens; a swipeable
 * strip on phones.
 */
function WalledCity() {
  const journeyRef = useRef(null);
  const stickyRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const journey = journeyRef.current;
    const sticky = stickyRef.current;
    const cards = cardsRef.current;
    const mobile = window.matchMedia("(max-width: 900px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let distance = 0;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    const update = () => {
      frame = 0;
      if (!mobile.matches || reduced.matches) return;
      const progress = Math.max(0, Math.min(1, (82 - journey.getBoundingClientRect().top) / Math.max(1, distance)));
      cards.scrollLeft = progress * distance;
    };
    const measure = () => {
      distance = Math.max(0, cards.scrollWidth - cards.clientWidth);
      const enabled = mobile.matches && !reduced.matches && distance > 0 && sticky.offsetHeight < viewportHeight - 90;
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
    mobile.addEventListener("change", measure);
    reduced.addEventListener("change", measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      mobile.removeEventListener("change", measure);
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
        {PLACES.map((place, index) => (
          <li key={place.name} className="arch-item">
            <figure>
              <div className="arch">
                <img src={place.src} alt={place.name} loading="lazy" decoding="async" width="1400" height="1050" />
              </div>
              <figcaption>
                <strong>{place.name}</strong>
                <span>{place.note}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      </div>
      </div>

      <details className="credit">
        <summary>Photo credits · Wikimedia Commons</summary>
        <p>Manila Cathedral: public domain (CC0). Images cropped to fit.</p>
        {credits.map((credit) => (
          <p key={credit.site}>
            <a href={credit.source} target="_blank" rel="noreferrer">{credit.site}</a>
            {" — "}{credit.artist.replace(/<[^>]*>/g, "")}{" · "}
            <a href={credit.licenseUrl} target="_blank" rel="noreferrer">{credit.license}</a>
          </p>
        ))}
      </details>
    </section>
  );
}

export default WalledCity;
