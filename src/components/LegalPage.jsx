import { LEGAL_PAGES, LEGAL_UPDATED } from "../config/legal";
import { Icon } from "./Icon";

/**
 * Privacy Policy / Terms of Use. Rendered in place of the landing sections
 * when the address is #privacy-policy or #terms-of-use (see App.jsx), so
 * the page keeps the same header, footer, theme and typography.
 */
function LegalPage({ page }) {
  const content = LEGAL_PAGES[page];
  if (!content) return null;

  return (
    <article className="section legal-page">
      <a className="legal-back" href="#top">
        <Icon name="arrow-left" size={15} />
        Back to Histoury
      </a>

      <header className="section-head legal-head">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title">{content.title}</h1>
        <p className="section-sub">Last updated: {LEGAL_UPDATED}</p>
      </header>

      <p className="legal-intro">{content.intro}</p>

      {content.sections.map((section) => (
        <section key={section.heading} className="legal-section">
          <h2>{section.heading}</h2>
          {section.body.length > 1 ? (
            <ul>
              {section.body.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <p>{section.body[0]}</p>
          )}
        </section>
      ))}
    </article>
  );
}

export default LegalPage;
