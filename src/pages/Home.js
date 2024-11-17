import Hero from "../components/Hero";
import Menu from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Hero title="Baking real pizza since 1337" />
      <section className="homepage-container main-content">
        <Menu />
        <div class="homepage-grid-wrapper">
          <div class="grid-1">1</div>
          <div class="grid-2">2</div>
          <div class="grid-3">3</div>
          <div class="grid-4">4</div>
          <div class="grid-5">5</div>
          <div class="grid-6">6</div>
        </div>
      </section>
    </>
  );
}
