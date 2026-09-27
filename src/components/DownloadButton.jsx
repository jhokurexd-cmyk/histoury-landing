import { Icon } from "./Icon";
import { RELEASE } from "../config/download";

/**
 * The page's one download control, used in the header, the hero, the
 * install section and the closing call to action.
 *
 * `download` on an <a> is a hint, not a guarantee — cross-origin hosts can
 * ignore it — but for the same-origin file in public/downloads/ it saves
 * under a sensible name instead of the browser's guess. The href is a real
 * URL either way, so right-click → Save and middle-click both behave.
 *
 * The size sits in the button's own label rather than in small print
 * beside it, because "48 MB" is information you want *before* you commit
 * over mobile data, and nobody reads the caption first.
 */
function DownloadButton({ size = "lg", showMeta = true, className = "" }) {
  return (
    <a
      className={`btn-primary dl-btn${size === "sm" ? " dl-btn-sm" : ""} ${className}`}
      href={RELEASE.url}
      download
    >
      <span className="dl-btn-icon">
        <Icon name="download" size={size === "sm" ? 15 : 18} />
      </span>
      <span className="dl-btn-text">
        <span className="dl-btn-label">Download for Android</span>
        {showMeta && (
          <span className="dl-btn-meta">
            APK · v{RELEASE.version} · {RELEASE.size}
          </span>
        )}
      </span>
    </a>
  );
}

export default DownloadButton;
