import DownloadButton from "../components/DownloadButton";
import { Device } from "../components/Device";
import { Icon } from "../components/Icon";
import { RELEASE } from "../config/download";
import arCathedral from "../assets/app/ar-cathedral.webp";
import arrived from "../assets/app/arrived.webp";
import arTimeline from "../assets/app/ar-timeline.webp";
import cathedralPhoto from "../assets/photos/manila-cathedral.webp";

// Real sites inside the walls, all of them in the app today.
const SITES = [
  "Manila Cathedral",
  "Fort Santiago",
  "San Agustin Church",
  "Baluarte de San Diego",
  "Casa Manila Museum",
  "Bahay Tsinoy",
  "Museo de Intramuros",
  "Palacio del Gobernador",
  "Plaza de Roma",
  "Puerta Real Gardens",
];

/**
 * The first screen: three real screens (arrival, the AR reconstruction, its
 * timeline) on a coral-lit stage that follows the light/dark theme. Behind
 * them, a photograph of the cathedral in a colonial arch — the window into
 * the past the app is selling.
 */
function Hero() {
  return (
    <section className="hero stage" id="top">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy">
        <p className="pill anim">
          <span className="pill-dot" aria-hidden="true" />
          Free on Android · No ads · v{RELEASE.version}
        </p>

        <h1 className="hero-title anim" style={{ "--delay": "80ms" }}>
          Intramuros,
          <br />
          <span className="accent">brought back to life.</span>
        </h1>

        <p className="hero-sub anim" style={{ "--delay": "160ms" }}>
          Walk up to a heritage site and its story finds you. Read it, hear
          it, then raise your phone and see it rebuilt in augmented reality,
          right where it stood.
        </p>

        <div className="hero-actions anim" style={{ "--delay": "240ms" }}>
          <DownloadButton />
          <a className="btn-ghost-light" href="#how">
            See how it works
            <Icon name="arrow-down" size={16} />
          </a>
        </div>
      </div>

      <div className="hero-visual anim" style={{ "--delay": "320ms" }}>
        <div className="hero-arch" aria-hidden="true">
          <img src={cathedralPhoto} alt="" width="1400" height="1050" />
        </div>

        <Device
          className="hero-device hero-device-left"
          src={arrived}
          alt="Histoury's arrival screen: You've arrived at Manila Cathedral."
          eager
        />
        <Device
          className="hero-device hero-device-center"
          src={arCathedral}
          alt="The AR view: a 3D reconstruction of Manila Cathedral placed in the plaza, seen through the phone's camera."
          eager
        />
        <Device
          className="hero-device hero-device-right"
          src={arTimeline}
          alt="Manila Cathedral's timeline in the app, starting with the first church on the site in 1571."
          eager
        />

        <div className="chip chip-a" aria-hidden="true">
          <span className="chip-icon"><Icon name="map-pin" size={15} /></span>
          <span><strong>You&rsquo;ve arrived</strong>Manila Cathedral</span>
        </div>
        <div className="chip chip-b" aria-hidden="true">
          <span className="chip-icon"><Icon name="cube" size={15} /></span>
          <span><strong>3D reconstruction</strong>Placed in the plaza</span>
        </div>
        <div className="chip chip-c" aria-hidden="true">
          <span className="chip-icon"><Icon name="clock" size={15} /></span>
          <span><strong>1571</strong>First church on the site</span>
        </div>
      </div>

      {/* A slow scroll of real site names. The second copy exists only to
          make the loop seamless, so it is hidden from screen readers. */}
      <div className="marquee" aria-label="Sites in Histoury">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-track" aria-hidden={copy === 1 ? "true" : undefined}>
            {SITES.map((site) => (
              <li key={site}>{site}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default Hero;
