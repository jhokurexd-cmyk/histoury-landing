import { Icon } from "../components/Icon";
import cathedral from "../assets/photos/manila-cathedral.webp";
import street from "../assets/photos/general-luna.webp";

function Hero() {
  return (
    <section className="travel-hero" id="top" aria-labelledby="hero-title">
      <div className="travel-hero-inner">
        <div className="travel-copy">
          <p className="travel-eyebrow"><span /> Your Intramuros guide for Android</p>
          <h1 id="hero-title" className="travel-app-title">Intramuros,<br /><span>brought back<br />to life.</span></h1>
          <p className="travel-intro">Meet Histoury, your free heritage guide. Explore Intramuros, hear its stories, and see the past rebuilt in augmented reality through your phone.</p>
          <div className="travel-actions">
            <a className="btn-primary" href="#install">Get the app <Icon name="arrow-right" size={18} /></a>
            <a className="travel-watch" href="#demo"><span><Icon name="play" size={16} /></span> See how it works</a>
          </div>
          <p className="travel-footnote"><Icon name="check-circle" size={16} /> Free to explore · Made for Android</p>
        </div>
        <div className="travel-visual">
          <div className="travel-orbit" aria-hidden="true" />
          <img className="travel-main-photo" src={cathedral} alt="Manila Cathedral rising above the palm trees in Intramuros" fetchPriority="high" />
          <img className="travel-small-photo" src={street} alt="Historic architecture along General Luna Street" />
          <span className="travel-location"><span><Icon name="map-pin" size={20} /></span><span><strong>Intramuros, Manila</strong><small>Your next story starts here</small></span></span>
          <span className="travel-stamp"><Icon name="cube" size={23} /><span>See the past<br /><strong>in a new way.</strong></span></span>
          <span className="travel-spark" aria-hidden="true">✳</span>
        </div>
      </div>
      <ul className="hero-highlights" aria-label="Explore with Histoury">
        <li><span className="hero-highlight-icon"><Icon name="map-pin" size={21} /></span><div><strong>Find your next stop</strong><span>Heritage sites, mapped out.</span></div></li>
        <li><span className="hero-highlight-icon"><Icon name="headphones" size={21} /></span><div><strong>Walk. Listen. Discover.</strong><span>Stories at your own pace.</span></div></li>
        <li><span className="hero-highlight-icon"><Icon name="cube" size={21} /></span><div><strong>See the past come alive</strong><span>History through augmented reality.</span></div></li>
      </ul>
    </section>
  );
}
export default Hero;

