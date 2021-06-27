import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

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
  const history = useHistory();

  const [isOpen, setIsOpen] = React.useState(false);
  const onMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const onItemClick = (e) => {
    const targetLink = e.target.getAttribute("href");
    if (isOpen) {
      e.preventDefault();
      onMenuToggle();
      setTimeout(() => {
        history.push(targetLink);
      }, 300);
    } else {
      history.push(targetLink);
    }
  };

  return (
    <header className="header">
      <div
        className={`menu-btn${isOpen ? " close" : ""}`}
        onClick={onMenuToggle}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className={`menu${isOpen ? " show" : ""}`}>
        <ul className={`nav`}>
          {menuList.map((item) => (
            <li key={item.name} className={isOpen ? "show" : null}>
              <Link
                className={location.pathname === item.link ? "active" : null}
                to={item.link}
                onClick={onItemClick}
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
