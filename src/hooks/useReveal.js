import { useEffect } from "react";

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 *
 * The hidden starting state is keyed off a class this hook puts on <html>,
 * not applied by default — so if JavaScript never runs, or the observer is
 * missing, every section is simply visible rather than stuck at opacity 0.
 *
 * `page` is whatever identifies the content currently in <main>; when it
 * changes, the new elements are picked up.
 */
export function useReveal(page) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) return undefined;

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        // Elements that arrive together cascade in one after another
        // instead of all at once. Ones that set their own order (--i in
        // the markup) keep it; the delay itself lives in the stylesheet,
        // which turns it off on phones and for reduced motion.
        let order = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (!el.style.getPropertyValue("--i")) {
            el.style.setProperty("--i", String(Math.min(order, 4)));
            order += 1;
          }
          el.classList.add("is-in");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);
}
