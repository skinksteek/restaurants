import Hero from "../components/Hero";
import restaurantinside from "../assets/images/restaurant-inside.jpg";
import Button from "../components/Button";

export default function Menu() {
  return (
    <section className="menupage-container main-content">
      <Hero
        title="Vår meny i Pdf"
        bread="Välkommna till en slice av italien"
        mediaType="image"
        mediaSrc={restaurantinside}
        altText="Foto från insidan av restaurangen"
      >
        <Button
          text="Öppna meny i nytt fönster"
          href="/assets/guidos-menu.pdf"
        />
      </Hero>
    </section>
  );
}
