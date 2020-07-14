import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const menuList = [
    {
      name: "Главная",
      link: "/",
    },
    {
      name: "Обо мне",
      link: "/about",
    },
    {
      name: "Портфолио",
      link: "/portfolio",
    },
    {
      name: "Контакты",
      link: "/contacts",
    },
  ];
  return (
    <header>
      <nav>
        <ul className="nav">
          {menuList.map((item) => (
            <li key={item.name}>
              <Link
                className={location.pathname === item.link ? "active" : null}
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
