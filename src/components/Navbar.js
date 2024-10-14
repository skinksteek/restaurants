import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/meny">Meny</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/hittahit">Hitta hit</Link>
        </li>
      </ul>
    </nav>
  );
}
