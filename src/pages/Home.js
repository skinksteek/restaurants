import Hero from "../components/Hero";
import Menu from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Hero title="Baking real pizza since 1337" />
      <section className="home-page-container main-content">
        <p>Hem</p>
        <Menu />
      </section>
    </>
  );
}
