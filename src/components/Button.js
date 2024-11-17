import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ text, href, onClick }) {
  const handleClick = (event) => {
    if (onClick && typeof onClick === "function") {
      onClick(event);
    }
  };
  return (
    <Link to={href} className="button" onClick={handleClick}>
      <span>{text}</span>
    </Link>
  );

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  };
}
