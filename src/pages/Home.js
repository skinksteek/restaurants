import Hero from "../components/Hero";
import Menu from "../components/SideBar";
import pepperoni from "../assets/images/pepperoni-pizza.jpg";
import veggie from "../assets/images/veggie-pizza.jpg";
import pizzabeer from "../assets/images/pizza-beer.jpg";
import heroVideo from "../assets/videos/6176588-hd_1920_1080_25fps.mp4";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Hero
        title="Baking real pizza since 1337"
        mediaType="video"
        mediaSrc={heroVideo}
      >
        <Button text="Utforska meny" href="/meny" />
      </Hero>
      <section className="homepage-container main-content">
        <Menu />
        <div className="homepage-grid-wrapper">
          <div className="homepage-grid-heading">
            <h1>Guido's Pizzeria och bar</h1>
            <span>Det självklara valet i pizza och öl väg</span>
          </div>
          <div className="grid-item1">
            <img src={pepperoni} alt="Pepperoni Pizza" />
          </div>

          <div className="grid-item2">
            <div className="triangle-left"></div>
            <h2>Pepperoni Pizza</h2>
            <span>Meat meat meat</span>
            <p>
              Donec sed diam facilisis, cursus elit eu, commodo mauris. Praesent
              eleifend eros in neque vehicula, non condimentum elit euismod.
              Integer non semper velit, ut auctor nibh. Nunc ultricies quam dui,
              eu tempor eros auctor a. Cras id tincidunt nisl. Etiam ac mi
              massa. Aliquam iaculis arcu et nulla aliquet tempus
            </p>
          </div>
          <div className="grid-item3">
            <img src={veggie} alt="Vegetarian pizza" />
          </div>
          <div className="grid-item4">
            <div className="triangle-right"></div>
            <h2>Beer and beverages</h2>
            <span>... and more beer</span>
            <p>
              Suspendisse feugiat non ante ac dictum. Aliquam nec sapien lorem.
              Curabitur pretium nisi lectus, eu tempor orci mattis ac. Aliquam
              non nulla non nibh lobortis gravida nec sed lectus. Praesent
              sollicitudin velit vel urna faucibus consequat.
            </p>
          </div>
          <div className="grid-item5">
            <img src={pizzabeer} alt="Pizza and beer" />
          </div>
          <div className="grid-item6">
            <div className="triangle-up"></div>
            <h2>Veggi-- what</h2>
            <span>Fresh and tasty</span>
            <p>
              Nulla id risus at mauris venenatis pulvinar in in odio. Vivamus
              lacinia lorem id elit egestas, vel rutrum massa eleifend. Maecenas
              auctor hendrerit neque dictum vestibulum. Vivamus lorem libero,
              imperdiet vel nunc vitae, ultricies euismod velit. Suspendisse
              tincidunt nunc in auctor maximus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
