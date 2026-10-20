
import { Icon } from "../components/Icon";

import arComposition from "../assets/app/ar-showcase-transparent.png";
import "../styles/hero.css";

function Hero() {

  return (
    <section className="travel-hero hero-refined" id="top" aria-labelledby="hero-title">
      <div className="travel-hero-inner">
        <div className="travel-copy">
          <p className="travel-eyebrow"><span /> Your Intramuros guide for Android</p>
          <h1 id="hero-title" className="travel-app-title">History,<br /><span>brought back<br />{" "}to life.</span></h1>
          <p className="travel-intro">Explore Intramuros with history in your hands. See landmarks as they once stood, listen to their stories, and find your way with Histoury.</p>
          <div className="travel-actions">
            <a className="btn-primary" href="#install">Download for Android <Icon name="arrow-right" size={18} /></a>
            <a className="travel-watch" href="#demo"><span><Icon name="play" size={16} /></span> See how it works</a>
          </div>
          <p className="travel-footnote"><Icon name="check-circle" size={16} /> Free to explore · Made for Android</p>
        </div>
        <figure className="hero-product">
          <img src={arComposition} alt="Histoury in action: three phones showing historical AR reconstructions of Manila Cathedral, San Agustin Church and Fort Santiago." fetchPriority="high" />
          <figcaption><span /> A closer look at the past. Through your phone.</figcaption>
        </figure>
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




