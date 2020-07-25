import React from "react";
import MouseIcon from "../assets/icons/scroll_vniz.svg";
import MouseIconUp from "../assets/icons/scroll_vverh.svg";
import { Link } from "react-router-dom";

export const Mouse = ({ link, up = false }) => {
  return (
    <Link to={link} className="mouse">
      <img src={up ? MouseIconUp : MouseIcon} alt="Далее" />
    </Link>
  );
};
