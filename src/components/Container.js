import React from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
export const Container = ({ children }) => {
  const location = useLocation();
  return (
    <div
      className={`container-bg container-bg--${
        location.pathname === "/contacts" ? "footer" : "main"
      }`}
    >
      <div className="wrapper">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
