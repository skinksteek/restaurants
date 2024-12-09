import Hero from "../components/Hero";
import restaurantinside from "../assets/images/restaurant-inside.jpg";
import Map from "../components/Map";

export default function Find() {
  return (
    <section className="findus-container main-content">
      <Hero
        title="Hitta hit"
        bread="Vi finns i hjärtat av Mölndal, mitt i innerstaden."
        mediaType="image"
        mediaSrc={restaurantinside}
        altText="Foto från insidan av restaurangen"
        info="Mölndals Torg 5, 431 30 Mölndal"
      >
        <div id="map">
          <Map />
        </div>
      </Hero>
    </section>
  );
}
