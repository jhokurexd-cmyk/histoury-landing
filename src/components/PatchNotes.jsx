import { Icon } from "./Icon";
import { CHANGELOG, CHANGE_TYPES, compareVersions } from "../config/changelog";
import { RELEASE, formatReleaseDate } from "../config/download";

/**
 * Patch notes and version history. Rendered in place of the landing sections
 * when the address is #patch-notes (see App.jsx), like the legal pages.
 *
 * Only versions up to the one currently offered for download are listed, so a
 * note never appears before the build it describes can be installed.
 */
function PatchNotes() {
  const entries = CHANGELOG.filter((e) => compareVersions(e.version, RELEASE.version) <= 0);

  return (
    <article className="section legal-page patch-notes">
      <a className="legal-back" href="#top">
        <Icon name="arrow-left" size={15} />
        Back to Histoury
      </a>

      <header className="section-head legal-head">
        <span className="eyebrow">Patch notes</span>
        <h1 className="section-title">What&rsquo;s new in Histoury</h1>
        <p className="section-sub">Every release, newest first. Current version: v{RELEASE.version}.</p>
      </header>

      <ol className="pn-list">
        {entries.map((entry) => {
          const isLatest = entry.version === RELEASE.version;
          return (
            <li key={entry.version} className="pn-entry" id={`v${entry.version}`}>
              <div className="pn-head">
                <h2>
                  v{entry.version}
                  {isLatest && <span className="pn-latest">Latest</span>}
                </h2>
                <time dateTime={entry.date}>{formatReleaseDate(entry.date)}</time>
              </div>
              {Object.keys(CHANGE_TYPES).map((type) => {
                const items = entry.changes.filter((c) => c.type === type);
                if (items.length === 0) return null;
                return (
                  <section key={type} className="pn-group">
                    <h3 className={`pn-${type}`}>{CHANGE_TYPES[type]}</h3>
                    <ul>
                      {items.map((c) => (
                        <li key={c.text}>{c.text}</li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </li>
          );
        })}
      </ol>
    </article>
  );
}

export default PatchNotes;
