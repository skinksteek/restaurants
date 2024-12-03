import React from "react";
import PropTypes from "prop-types";

export default function Hero({
  title,
  bread,
  mediaType,
  mediaSrc,
  altText,
  children,
}) {
  return (
    <section className="hero-container">
      <div className="heromodule-content">
        <div className="heromodule-textcontent">
          <h1>{title}</h1>
          <span>{bread}</span>
        </div>
        {children}
      </div>
      <figure className="hero-video-parent overlay">
        {mediaType === "video" ? (
          <video className="hero-video" autoPlay loop muted>
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : (
          <img className="hero-image" src={mediaSrc} alt={altText} />
        )}
      </figure>
    </section>
  );

  Hero.propTypes = {
    title: PropTypes.string.isRequired,
    bread: PropTypes.string.isRequired,
    mediaType: PropTypes.oneOf(["video", "image"]).isRequired,
    mediaSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    children: PropTypes.node,
  };
}
