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
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);
}
