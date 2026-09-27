import { Icon } from "../components/Icon";
import offlineShot from "../assets/app/offline.webp";
import visitsShot from "../assets/app/visits.webp";
import generalLuna from "../assets/photos/general-luna.webp";

// Each entry is something the app actually does today. Nothing aspirational —
// a landing page that promises a feature the build doesn't have earns
// exactly one bad review per visitor.
const SMALL = [
  { icon: "headphones", title: "Audio guides", body: "Narrated stories for eyes-up exploring." },
  { icon: "star", title: "Reviews & rankings", body: "See the top-rated sites and what visitors say." },
  { icon: "heart", title: "Favorites", body: "Save sites and get directions in one tap." },
  { icon: "image", title: "Your gallery", body: "Every AR photo you take, kept in one place." },
];

/**
 * The feature grid. The one feature nobody else has — geofenced arrival —
 * gets the big photographic tile; the two that are easiest to show get a
 * slice of the real screen; the rest are a line each.
 */
function Features() {
  return (
    <section className="section" id="features">
      <header className="section-head split" data-reveal>
        <div>
          <p className="kicker">Features</p>
          <h2 className="section-title">
            A tour guide that <span className="accent">never runs out of time.</span>
          </h2>
        </div>
        <p className="section-sub">
          Everything a visit needs, built around one idea: the history should
          meet you where you are.
        </p>
      </header>

      <div className="bento">
        <article className="tile tile-photo" data-reveal>
          <img className="tile-bg" src={generalLuna} alt="" loading="lazy" decoding="async" width="1400" height="1050" />
          <div className="notices" aria-hidden="true">
            <div className="notice">
              <span className="notice-app"><Icon name="map-pin" size={14} /></span>
              <div>
                <p className="notice-meta">Histoury · now</p>
                <p className="notice-title">You&rsquo;re near San Agustin Church</p>
                <p className="notice-text">Tap to learn about its history.</p>
              </div>
            </div>
          </div>
          <div className="tile-copy">
            <h3>Arrive, and the story finds you.</h3>
            <p>
              Geofencing notices when you reach a site and brings its story to
              your lock screen. No searching, no scanning, not even opening
              the app.
            </p>
          </div>
        </article>

        <article className="tile tile-shot" data-reveal style={{ "--i": 1 }}>
          <div className="tile-copy">
            <span className="tile-icon"><Icon name="download" size={18} aria-hidden="true" /></span>
            <h3>AR with no signal</h3>
            <p>Download a site&rsquo;s 3D model and narration before you go.</p>
          </div>
          <div className="shot-peek" aria-hidden="true">
            <img src={offlineShot} alt="" loading="lazy" decoding="async" width="420" height="946" />
          </div>
        </article>

        <article className="tile tile-shot" data-reveal style={{ "--i": 2 }}>
          <div className="tile-copy">
            <span className="tile-icon"><Icon name="calendar" size={18} aria-hidden="true" /></span>
            <h3>Your visit history</h3>
            <p>Every site you&rsquo;ve explored, and the ones still waiting.</p>
          </div>
          <div className="shot-peek" aria-hidden="true">
            <img src={visitsShot} alt="" loading="lazy" decoding="async" width="420" height="943" />
          </div>
        </article>

        {SMALL.map((item, index) => (
          <article className="tile tile-small" key={item.title} data-reveal style={{ "--i": index }}>
            <span className="tile-icon"><Icon name={item.icon} size={18} aria-hidden="true" /></span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}

        <article className="tile tile-band" data-reveal>
          <div>
            <h3>No ARCore? Still the whole guide.</h3>
            <p>
              AR needs an ARCore-capable phone. Without one, the map, stories,
              audio guides, itineraries and reviews all work exactly the same.
              The AR button simply stays hidden.
            </p>
          </div>
          <a className="btn-outline" href="#install">
            Check requirements
            <Icon name="arrow-right" size={15} />
          </a>
        </article>
      </div>
    </section>
  );
}

export default Features;
