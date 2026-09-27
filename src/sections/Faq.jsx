import { Icon } from "../components/Icon";

const FAQS = [
  {
    q: "Is Histoury free?",
    a: "Yes, and there are no ads. You can browse sites, read their stories and listen to the audio guides without making an account. An account only comes in when you want to leave a rating or a review.",
  },
  {
    q: "Is it on the Play Store?",
    a: "Not yet. Until it is, this page is the only place we publish the app, and the download here is the same build we'd ship to the store.",
  },
  {
    q: "Is there an iPhone version?",
    a: "Not today. Histoury is an Android app, and the AR features are built on ARCore. If that changes, this page will be the first place it's announced.",
  },
  {
    q: "Why does it want my location?",
    a: "To place AR content correctly and to tell you when you've reached a site. Background location is what lets a site's story reach you as you arrive rather than after you've opened the app — and you can decline it and still use everything else.",
  },
  {
    q: "My phone says AR isn't supported.",
    a: "Some phones don't ship ARCore, and the AR scenes need it. Everything else — the map, site stories, audio guides, nearby places, reviews — works normally; the AR button is just hidden rather than shown and broken.",
  },
  {
    q: "How do updates work?",
    a: "Because the app is sideloaded, it won't update itself. Come back to this page and install the newer APK over the top — your saved sites and account stay where they are.",
  },
];

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="faq-layout">
        <div className="section-head faq-head" data-reveal>
          <p className="kicker">FAQ</p>
          <h2 className="section-title">
            Questions <span className="accent">worth asking first.</span>
          </h2>
        </div>

        {/* <details> rather than a JS accordion: it opens without React, it is
            keyboard- and screen-reader-correct for free, and the browser's own
            find-in-page can reach the answers inside a closed one. */}
        <div className="faq-list" data-reveal>
          {FAQS.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-toggle" aria-hidden="true">
                  <Icon name="plus" size={16} />
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
