import React from "react";
import MouseIcon from "../assets/icons/scroll_vniz.svg";
import { Link } from "react-router-dom";

export const Mouse = ({ link }) => {
  return (
    <Link to={link} className="mouse">
      <img src={MouseIcon} alt="Далее" />
    </Link>
  );
};
