import { Icon } from "./Icon";
import histouryMark from "../assets/histoury-mark.png";
import { CONTACT, LEGAL_LINKS, NAV_LINKS } from "../config/site";
import { openCookieSettings } from "../config/cookies";

function Footer() {
  const socials = CONTACT.social.filter((s) => s.url);

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#top">
            <img src={histouryMark} alt="" aria-hidden="true" width="36" height="40" />
            <strong>Histoury</strong>
          </a>
          <p>Preserve, explore, experience. A heritage guide to Intramuros for Android.</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2>Explore</h2>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-col">
          <h2>Connect</h2>
          {socials.length > 0 && (
            <div className="footer-social">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          )}
          <a className="footer-email" href={`mailto:${CONTACT.email}`}>
            <Icon name="mail" size={16} aria-hidden="true" />
            {CONTACT.email}
          </a>
        </div>

        <nav className="footer-col" aria-label="Legal">
          <h2>Legal</h2>
          {LEGAL_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button type="button" className="footer-linkbtn" onClick={openCookieSettings}>
            Cookie Settings
          </button>
        </nav>
      </div>

      <div className="footer-base">
        <p>A capstone project · Intramuros Historical Tourism Guide · 2024–2025</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
