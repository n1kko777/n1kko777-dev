import React from "react";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li>
            <a className="active" href="/">
              Главная
            </a>
          </li>
          <li>
            <a href="/about">Обо мне</a>
          </li>
          <li>
            <a href="/portfolio">Портфолио</a>
          </li>
          <li>
            <a href="/contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
