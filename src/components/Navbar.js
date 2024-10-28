import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo-trans.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="hover-underline">
              Hem
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/meny" className="hover-underline">
              Meny
            </Link>
          </li>
          <div className="logo-wrapper">
            <Link to="/">
              <a href="/">
                <img src={logo} alt="Restaurang" title="Gå till startsidan" />
              </a>
            </Link>
          </div>
          <li className="nav-item">
            <Link to="/kontakt" className="hover-underline">
              Kontakt
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hittahit" className="hover-underline">
              Hitta hit
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
