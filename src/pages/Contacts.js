import React from "react";

import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import Avatar from "../assets/img/avatar.jpg";
import { Socials } from "../components/Socials";

export const Contacts = () => {
  return (
    <Container>
      <main>
        <div className="row">
          <div className="col">
            <h1 className="title">
              Мои <span>Контакты</span>
            </h1>
            <div className="description">
              <p>
                Территориально нахожусь в России г. Екатеринбург.
                <br />
                Готов к работе на удалёнке и/или к переезду в Москву.
              </p>

              <h2 className="subtitle">Почта:</h2>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:3734489@gmail.com"
                >
                  3734489@gmail.com
                </a>
              </p>

              <h2 className="subtitle">Телефон:</h2>
              <p>
                <a href="tel:+79655091360">+7 (965) 509-13-60</a>
              </p>
            </div>

            <Socials />
          </div>
          <div className="col mt50">
            <div className="avatar">
              <div className="avatar-wrapper">
                <img src={Avatar} alt="Никита Тарасов" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Mouse link="/portfolio" up={true} />
    </Container>
  );
};
