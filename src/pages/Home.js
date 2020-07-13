import React from "react";

import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { Socials } from "../components/Socials";

export const Home = () => {
  return (
    <Container>
      <main>
        <div className="row">
          <div className="col">
            <h1 className="title">
              Никита <span>Тарасов</span>
            </h1>
            <div className="description">
              <p>
                Web-разработчик
                <br />
                Верстка на HTML/CSS/JavaScript
                <br />
                Разработка сайтов под ключ
              </p>
            </div>
            <Socials />
          </div>
          <div className="col mt50">
            <div className="cloud">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Redux</span>
              <span>Jquery</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </main>

      <Mouse link="/about" />
    </Container>
  );
};
