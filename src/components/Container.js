import React from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

const MAIN_BG_PAGE = ["/", "/about", "/portfolio"];

export const Container = ({ children, isNavbar = true }) => {
  const location = useLocation();

  return (
    <div
      className={`container-bg container-bg--${
        MAIN_BG_PAGE.includes(location.pathname) ||
        new RegExp("/portfolio/").test(location.pathname)
          ? "main"
          : "footer"
      }`}
    >
      <div className="wrapper">
        {isNavbar ? <Navbar /> : null}
        {children}
      </div>
    </div>
  );
};
