import { Icon } from "../components/Icon";

const FAQS = [
  {
    q: "What is Histoury?",
    a: "Histoury is a free Android heritage guide for Intramuros, Manila. Plan your route, find historical sites, unlock their stories when you arrive, and keep track of the places you've visited. On supported phones, you can also see 3D reconstructions in augmented reality.",
  },
  {
    q: "Do I need an account?",
    a: "Yes. Create an account and sign in to use Histoury.",
  },
  {
    q: "Can I use Histoury without AR?",
    a: "Yes. AR requires an ARCore-compatible phone, but the map, route planning, historical information, audio guides and visit history are still available without it. If your phone doesn't support AR, the AR button stays hidden. Use Check device compatibility in the Features section to check Google's supported-device list.",
  },
  {
    q: "Does Histoury work offline?",
    a: "You can download a site's 3D model and narration before your visit to use its AR experience without a signal. Download the content while you're connected; other features may still need internet access.",
  },
  {
    q: "Why does the app ask for location and camera access?",
    a: "Location helps Histoury find nearby sites and recognise when you arrive so their history can unlock. Background location enables arrival notifications when the app isn't open. Camera access is used for AR experiences and capturing AR photos.",
  },
  {
    q: "Can Histoury help me plan my visit?",
    a: "Yes. Choose the sites you want to visit and create an itinerary with stops, distances and travel times. You can reorder your stops, optimise the route and save the plan for later.",
  },
  {
    q: "How do I update Histoury?",
    a: "Return to this website and download the latest APK. Install it over your existing version rather than uninstalling the app first. Updates aren't installed automatically through the Play Store.",
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



