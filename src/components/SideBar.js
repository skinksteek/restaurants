import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default function SideBar({ pageWrapId, outerContainerId }) {
  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId} right>
      <Link to="/">Hem</Link>
      <Link to="/meny">Meny</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/hittahit">Hitta Hit</Link>
    </Menu>
  );
}
