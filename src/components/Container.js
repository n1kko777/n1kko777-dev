import React from "react";
import { Navbar } from "./Navbar";
export const Container = ({ children }) => {
  return (
    <div className="container-bg container-bg--main">
      <div className="wrapper">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
