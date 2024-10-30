import React from "react";
import "../assets/styles/hero.css";
import heroVideo from "../assets/videos/6176588-hd_1920_1080_25fps.mp4";
import PropTypes from "prop-types";

export default function Hero({ title, bread }) {
  return (
    <section className="hero-container">
      <div className="heromodule-content">
        <div className="heromodule-textcontent">
          <h2>{title}</h2>
        </div>
      </div>
      <figure className="hero-video-parent">
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
