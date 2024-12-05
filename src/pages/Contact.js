import restaurantcontact from "../assets/images/restaurant-contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <section className="contactpage-container main-content">
      <Hero
        title="Kontakta oss"
        bread="INGA BORDSBOKNIGNAR – ENBART DROP IN."
        info="TAKE AWAY ETT SAMTAL BORT"
        contact={
          <span className="phone-wrap">
            <a
              id="phone-hover"
              href="tel:+0046702785881"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} size="2xl" />
            </a>
            +46 70 27 85 881
          </span>
        }
        mediaType="image"
        mediaSrc={restaurantcontact}
        altText="Foto från insidan av restaurangen"
      ></Hero>
    </section>
  );
}
