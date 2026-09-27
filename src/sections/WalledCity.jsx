import manilaCathedral from "../assets/photos/manila-cathedral.webp";
import generalLuna from "../assets/photos/general-luna.webp";
import aseanGarden from "../assets/photos/asean-garden.webp";
import puertaReal from "../assets/photos/puerta-real.webp";
import plazaEspana from "../assets/photos/plaza-espana.webp";

// Public-domain (CC0) photographs from Wikimedia Commons, the same set the
// app's Places use — see histoury_functions/scripts/place-photos/manifest.json.
const PLACES = [
  { src: manilaCathedral, name: "Plaza de Roma", note: "Manila Cathedral beyond" },
  { src: generalLuna, name: "General Luna Street", note: "Stone-and-wood houses" },
  { src: aseanGarden, name: "ASEAN Garden", note: "By the Puerta del Parian" },
  { src: puertaReal, name: "Puerta Real Gardens", note: "Along the old walls" },
  { src: plazaEspana, name: "Plaza de España", note: "A plaza inside the walls" },
];

/**
 * The place itself, in photographs, framed as the colonial arches you walk
 * under all over Intramuros. A row of five on wide screens; a swipeable
 * strip on phones.
 */
function WalledCity() {
  return (
    <section className="section walled" id="about">
      <header className="section-head split" data-reveal>
        <div>
          <p className="kicker">Made for Intramuros</p>
          <h2 className="section-title">
            Four centuries, <span className="accent">one set of walls.</span>
          </h2>
        </div>
        <p className="section-sub">
          Histoury is a capstone project built for the Walled City of Manila:
          its churches, forts, plazas and streets, each paired with a story
          that has been checked against its sources.
        </p>
      </header>

      <ul className="arches">
        {PLACES.map((place, index) => (
          <li key={place.name} className="arch-item" data-reveal style={{ "--i": index }}>
            <figure>
              <div className="arch">
                <img src={place.src} alt={place.name} loading="lazy" decoding="async" width="1400" height="1050" />
              </div>
              <figcaption>
                <strong>{place.name}</strong>
                <span>{place.note}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="credit">Photographs: Wikimedia Commons, public domain (CC0).</p>
    </section>
  );
}

export default WalledCity;
