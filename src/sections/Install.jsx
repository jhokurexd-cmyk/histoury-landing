import DownloadButton from "../components/DownloadButton";
import { Icon } from "../components/Icon";
import { RELEASE, REQUIREMENTS, formatReleaseDate } from "../config/download";
import histouryMark from "../assets/histoury-mark.png";

// Sideloading is the one genuinely unfamiliar thing this page asks of a
// visitor, and the step people abandon on is the security prompt — so it
// gets named explicitly rather than glossed as "follow the instructions".
const STEPS = [
  "Tap the download button. Your browser may warn that this file type can harm your device — that warning appears for every APK, signed or not. Choose Download anyway.",
  "Open the downloaded file from your notification shade, or from Files › Downloads.",
  "Android will ask whether to allow installs from your browser. Tap Settings, turn on Allow from this source, then come back.",
  "Tap Install, then Open. You can turn that permission back off afterwards — it isn't needed again until the next update.",
];

function Install() {
  return (
    <section className="section" id="install">
      <div className="section-head" data-reveal>
        <p className="kicker">Install</p>
        <h2 className="section-title">
          On your phone <span className="accent">in four steps.</span>
        </h2>
        <p className="section-sub">
          Histoury isn't on the Play Store yet, so it installs from a file you
          download here. Android calls that sideloading, and it needs one extra
          permission the first time.
        </p>
      </div>

      <div className="install-grid">
        <div className="install-card" data-reveal>
          <div className="install-card-head">
            <img src={histouryMark} alt="" aria-hidden="true" width="44" height="48" />
            <div>
              <h3>Histoury v{RELEASE.version}</h3>
              <p className="install-meta">
                {RELEASE.size} · {formatReleaseDate(RELEASE.released)}
              </p>
            </div>
            <span className="install-badge">
              <span className="install-badge-dot" />
              Latest
            </span>
          </div>

          <DownloadButton className="install-dl" />

          <ul className="req-list">
            {REQUIREMENTS.map((req) => (
              <li key={req.label}>
                <Icon name="check" size={15} />
                {req.label}
              </li>
            ))}
          </ul>

          {/* Only worth showing once a real hash is in place — a placeholder
              presented as a checksum is worse than no checksum, because it
              invites someone to "verify" against a value that means nothing. */}
          {RELEASE.sha256 !== "REPLACE_WITH_RELEASE_SHA256" && (
            <div className="checksum">
              <span className="checksum-label">
                <Icon name="lock" size={13} />
                SHA-256
              </span>
              <code>{RELEASE.sha256}</code>
            </div>
          )}
        </div>

        <div className="install-steps">
          <ol>
            {STEPS.map((step, index) => (
              <li key={step} data-reveal style={{ "--i": index }}>
                <span className="install-step-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <p className="install-note" data-reveal>
            <Icon name="alert-triangle" size={16} />
            <span>
              Only install Histoury from this page. An APK from anywhere else
              hasn't been built by us, and we can't vouch for what's inside it.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Install;
