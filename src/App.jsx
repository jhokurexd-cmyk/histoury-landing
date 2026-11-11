import { useEffect, useLayoutEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Chatbot from "./components/Chatbot";
import LegalPage from "./components/LegalPage";
import PatchNotes from "./components/PatchNotes";
import Hero from "./sections/Hero";
import ProductDemo from "./sections/ProductDemo";
import ArShowcase from "./sections/ArShowcase";
import WhyHistoury from "./sections/WhyHistoury";
import Steps from "./sections/Steps";
import Features from "./sections/Features";
import WalledCity from "./sections/WalledCity";
import Install from "./sections/Install";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";
import { LEGAL_PAGES } from "./config/legal";
import { useReveal } from "./hooks/useReveal";

/** Address of the patch notes page, which swaps in like a legal page. */
const PATCH_NOTES = "patch-notes";

/** The page named by the address hash (legal or patch notes), or null for the landing page. */
function legalPageFromHash() {
  const key = window.location.hash.replace(/^#/, "");
  if (key === PATCH_NOTES) return key;
  return Object.hasOwn(LEGAL_PAGES, key) ? key : null;
}

/**
 * One scrolling document, so there is no router here — every nav link is an
 * in-page anchor. The only "routes" are the legal pages, which swap in for
 * the landing sections when the hash names one (#privacy-policy,
 * #terms-of-use, #cookie-policy) and keep the same header and footer.
 */
function App() {
  const [legalPage, setLegalPage] = useState(legalPageFromHash);

  useLayoutEffect(() => {
    let width = window.innerWidth;
    const measure = () => {
      document.documentElement.classList.toggle("compact-mobile", window.innerHeight <= 740);
    };
    const onResize = () => {
      // Mobile browser chrome changes height while scrolling. Only a real
      // width/orientation change should choose a different page layout.
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      measure();
    };
    measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onHashChange = () => setLegalPage(legalPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Swapping between a legal page and the landing sections replaces the
  // whole main column, and the browser has already tried (and failed) to
  // scroll to the new hash before React rendered it. So: legal pages start
  // at the top, and the landing page goes to the section the hash names.
  useLayoutEffect(() => {
    const target = !legalPage && window.location.hash.length > 1
      ? document.getElementById(window.location.hash.slice(1))
      : null;
    // Instant, not the page's smooth scrolling: this is a new page appearing,
    // not movement within one.
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [legalPage]);

  useReveal(legalPage);

  return (
    <>
      {/* First tab stop on the page. Without it, reaching the download
          button by keyboard means tabbing through the whole nav. */}
      <a className="skip-link" href="#install">
        Skip to download
      </a>

      <Navbar onLanding={!legalPage} />

      <main>
        {legalPage === PATCH_NOTES ? (
          <PatchNotes />
        ) : legalPage ? (
          <LegalPage page={legalPage} />
        ) : (
          <>
            <Hero />
            <WhyHistoury />
            <WalledCity />
            <ProductDemo />
            <ArShowcase />
            <Steps />
            <Features />
            {/* The APK is sideloaded: without the install steps, the
                download leads people to a file Android warns them about
                and nothing explaining why. */}
            <Install />
            <Faq />
            <FinalCta />
          </>
        )}
      </main>

      <Footer />
      <CookieBanner />
      <Chatbot />
    </>
  );
}

export default App;
