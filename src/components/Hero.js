import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/hero.css";
import heroVideo from "../assets/videos/6176588-hd_1920_1080_25fps.mp4";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Hero({ title, bread }) {
  return (
    <section className="hero-container">
      <div className="heromodule-content">
        <div className="heromodule-textcontent">
          <h1>{title}</h1>
        </div>
        <Button text="Utforska meny" href="/" />
      </div>
      <figure className="hero-video-parent overlay">
        <video className="hero-video" autoPlay loop muted>
          <source src={heroVideo} type="video/mp4"></source>
        </video>
      </figure>
    </section>
  );

  Hero.propTypes = {
    title: PropTypes.string.isRequired,
    bread: PropTypes.string.isRequired,
  };
}
