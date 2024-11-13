import React from "react";
import "../assets/styles/footer.css";
import logo from "../assets/images/logo-trans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <img class="logo" src={logo} />
        <div class="socials">
          <a
            id="facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </a>
          <a
            id="instagram"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a
            id="maps"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMapLocationDot} size="2xl" />
          </a>
        </div>
        <div class="info">
          <ul>
            <li>
              <h2>Om oss</h2>
            </li>
            <p>
              Från Kristinehamn till Mölndal - den 25 september 2020 öppnades
              portarna till den historiska ladan i Mölndal.
            </p>
          </ul>
          <ul>
            <li>
              <h2>Öppettider</h2>
            </li>
            <li>Söndag&nbsp;- Onsdag:&nbsp;17:00 - 23:00</li>
            <li>Torsdag: 17:00 - 23:00</li>
            <li>Fredag:&nbsp;17:00 - 00:00</li>
            <li>Lördag: 12:00 - 00:00</li>
          </ul>
          <ul>
            <li>
              <h2>Kontakt</h2>
            </li>
            <li>
              <address>
                Åbyvägen 4B
                <br />
                Mölndal, 431 62
                <br />
                +46 70 27 85 881
              </address>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
