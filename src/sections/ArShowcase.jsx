
import { Icon } from "../components/Icon";
import arComposition from "../assets/app/ar-showcase-transparent.png";



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
  return (
    <section className="section ar-show" id="ar">
      <div className="ar-grid">
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

        <div className="ar-original-composition" data-reveal style={{ "--i": 1 }}>
          <img src={arComposition} alt="Histoury's three AR phone previews: Manila Cathedral, San Agustin Church with historical narration, and Fort Santiago." loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default ArShowcase;


