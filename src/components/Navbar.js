import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-trans.png";

export default function Navbar() {
  const [scrolltopdata, setscrolltopdata] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("scrolled");
      }
    });
  }, []);

  return (
    <nav className={`nav-wrapper`}>
      <ul className={`nav-list ${scrolltopdata}`}>
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
            <img src={logo} alt="Restaurang" title="Gå till startsidan" />
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
  );
}
