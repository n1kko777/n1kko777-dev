import React from "react";

import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { Socials } from "../components/Socials";

import cloudImg from "../assets/img/skills.svg";

export const Home = () => {
  return (
    <Container>
      <main>
        <div className="row row--mobile-reverse">
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
              <span className="animate__animated animate__heartBeat animate__slower animate__infinite">
                HTML5
              </span>
              <span className="animate__animated animate__swing animate__slower animate__infinite">
                CSS3
              </span>
              <span className="animate__animated animate__wobble animate__slower animate__infinite">
                JavaScript
              </span>
              <span className="animate__animated animate__heartBeat animate__slower animate__infinite">
                React
              </span>
              <span className="animate__animated animate__jello animate__slower animate__infinite">
                Redux
              </span>
              <span className="animate__animated animate__pulse animate__slower animate__infinite">
                Jquery
              </span>
              <span className="animate__animated animate__heartBeat animate__slower animate__infinite">
                Git
              </span>
              <img src={cloudImg} alt="" />
            </div>
          </div>
        </div>
      </main>

      <Mouse link="/about" />
    </Container>
  );
};
