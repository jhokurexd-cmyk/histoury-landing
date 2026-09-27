import DownloadButton from "../components/DownloadButton";
import { formatReleaseDate, RELEASE } from "../config/download";
import cathedralTower from "../assets/photos/cathedral-tower.webp";

/**
 * The closing ask. Someone who has read this far has already decided; the
 * job here is to put the button in front of them without making them
 * scroll back up to find it.
 *
 * One Android download rather than store badges: the app is not on the
 * Play Store or the App Store, and a badge that leads nowhere is worse
 * than no badge.
 */
function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <img className="final-bg" src={cathedralTower} alt="" loading="lazy" decoding="async" width="1400" height="1050" />
      <div className="final-inner" data-reveal>
        <p className="kicker kicker-light">Your visit starts at the gate</p>
        <h2 id="final-title" className="final-title">
          The walls have waited{" "}
          <span className="accent">four hundred years.</span>
        </h2>
        <p className="final-sub">
          Download Histoury, walk through the gates, and let the Walled City
          tell you its story as you go.
        </p>
        <DownloadButton />
        <p className="final-meta">
          Version {RELEASE.version} · {RELEASE.size} · Released {formatReleaseDate(RELEASE.released)}
        </p>
      </div>
    </section>
  );
}

export default FinalCta;
