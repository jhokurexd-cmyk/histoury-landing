import { Device } from "../components/Device";
import { Icon } from "../components/Icon";
import arCathedral from "../assets/app/ar-cathedral.webp";
import arTimeline from "../assets/app/ar-timeline.webp";
import cathedralTower from "../assets/photos/cathedral-tower.webp";

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

        <div className="ar-visual" data-reveal style={{ "--i": 1 }}>
          <img className="ar-photo" src={cathedralTower} alt="" loading="lazy" decoding="async" width="1400" height="1050" />

          <Device
            className="ar-device ar-device-back"
            src={arTimeline}
            alt="Manila Cathedral's timeline open over the AR view, starting with the first church on the site in 1571."
          />
          <Device
            className="ar-device ar-device-front"
            src={arCathedral}
            alt="The AR view: a 3D reconstruction of Manila Cathedral placed in the plaza, seen through the phone's camera."
          />

          <div className="ar-chip ar-chip-a" aria-hidden="true">
            <span className="ar-chip-icon"><Icon name="cube" size={15} /></span>
            <span><strong>AR reconstruction</strong>Placed in the plaza</span>
          </div>
          <div className="ar-chip ar-chip-b" aria-hidden="true">
            <span className="ar-chip-icon"><Icon name="clock" size={15} /></span>
            <span><strong>Manila Cathedral</strong>First church here, 1571</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArShowcase;
