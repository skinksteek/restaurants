import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Pizza</h1>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/meny">Meny</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
