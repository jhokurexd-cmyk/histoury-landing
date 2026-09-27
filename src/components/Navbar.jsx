import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";
import { Icon } from "./Icon";
import histouryMark from "../assets/histoury-mark.png";
import { NAV_LINKS } from "../config/site";

/**
 * Site header. The link for the section currently on screen is underlined,
 * so the bar doubles as a "you are here" marker on a long single page.
 *
 * `onLanding` is false on the legal pages, where none of the sections exist
 * and nothing should be marked current.
 */
function Navbar({ onLanding = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    // Passive: this listener never calls preventDefault.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActive(null);
    if (!onLanding || !("IntersectionObserver" in window)) return undefined;

    // A thin band across the middle of the viewport: whichever section is
    // crossing it is the one being read. The hero is observed too, so
    // scrolling back to the top clears the marker.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    ["#top", ...NAV_LINKS.map((l) => l.href)].forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onLanding]);

  // A menu left open over the section you just jumped to is a trap on a
  // phone, so any link closes it — and so does Escape.
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`nav${scrolled || menuOpen ? " nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={closeMenu}>
          <img src={histouryMark} alt="" aria-hidden="true" width="30" height="33" />
          <span>Histoury</span>
        </a>

        <nav id="site-nav" className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={active === link.href ? "active" : ""}
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn-cta nav-cta" href="#install" onClick={closeMenu}>
            Get the app
            <Icon name="arrow-right" size={15} />
          </a>
          <button
            type="button"
            className="btn-ghost icon-btn nav-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={menuOpen ? "x" : "list"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
