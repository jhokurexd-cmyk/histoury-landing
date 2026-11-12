import { useRef } from "react";

import DownloadButton from "../components/DownloadButton";
import { Icon } from "../components/Icon";
import { DOWNLOAD_QR_SVG, RELEASE, REQUIREMENTS, formatReleaseDate } from "../config/download";
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

const QR_LABEL = "QR code linking to the Histoury APK download";

// The code in the card is small, and on a small or low-resolution monitor a
// phone camera can struggle to read it. Clicking it opens the same code
// large, in a native <dialog>: Escape, the close button, or a click on the
// dimmed backdrop all dismiss it, and focus returns to the code afterwards.
function DownloadQr() {
  const dialogRef = useRef(null);
  const close = () => dialogRef.current?.close();

  return (
    <div className="install-qr">
      <button
        type="button"
        className="install-qr-code install-qr-open"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Enlarge the QR code for the Histoury APK download"
        title="Click to enlarge"
      >
        <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: DOWNLOAD_QR_SVG }} />
        <span className="install-qr-zoom" aria-hidden="true">
          <Icon name="search" size={12} />
        </span>
      </button>
      <p>
        <strong>On a computer?</strong>
        Scan with your phone&rsquo;s camera to download it there. Click the
        code to enlarge it.
      </p>

      <dialog
        ref={dialogRef}
        className="qr-dialog"
        aria-label="Scan to download Histoury"
        // The dialog element itself is only hit outside the panel, which
        // fills it, so a click that lands on it is a click on the backdrop.
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="qr-dialog-panel">
          <button type="button" className="qr-dialog-close" onClick={close} aria-label="Close">
            <Icon name="x" size={18} />
          </button>
          <div
            className="qr-dialog-code"
            role="img"
            aria-label={QR_LABEL}
            dangerouslySetInnerHTML={{ __html: DOWNLOAD_QR_SVG }}
          />
          <p>
            <strong>Scan to download Histoury</strong>
            Point your phone&rsquo;s camera at the code, then tap the link.
          </p>
        </div>
      </dialog>
    </div>
  );
}

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
          <a className="install-patch-link" href="#patch-notes">
            What&rsquo;s new in v{RELEASE.version}
            <Icon name="arrow-right" size={14} />
          </a>
          {/* For people reading this on a computer. The SVG is drawn at build
              time from RELEASE.url (vite.config.js), not typed in by hand. */}
          {DOWNLOAD_QR_SVG && <DownloadQr />}

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
            <details className="download-details">
              <summary>Download details</summary>
              <div className="checksum">
              <span className="checksum-label">
                <Icon name="lock" size={13} />
                SHA-256
              </span>
              <code>{RELEASE.sha256}</code>
              </div>
            </details>
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
              Only install Histoury from this page.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Install;
