import React from "react";
import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { PatreonButton } from "../components/PatreonButton";

export const About = () => {
  return (
    <Container>
      <main>
        <h1 className="title">
          Обо <span>Мне</span>
        </h1>
        <div className="description">
          <p>
            Добрый день! В сфере web-разработки я нахожусь более 2 лет, за это
            время изучил и освоил принципы и методологию разработки сайтов,
            которые решают проблемы многих людей. Благодаря возможности
            одинаково удобно открывать сайты не только на компьютере, но и на
            телефоне, вашим продуктом могут воспользоваться в любой ситуации. Не
            стою на месте, прогрессирую день за днем. Ответственный, честный,
            люблю своё дело! Жду ваших предложений, а также дальнейшего
            сотрудничества.
          </p>

          <h2 className="subtitle">Мои навыки:</h2>
          <div className="list">
            <div className="list__item">Html (pug)</div>
            <div className="list__item">CSS (LESS/SCSS)</div>
            <div className="list__item">Javascript (Typescript)</div>
            <div className="list__item">React (React Native)</div>
          </div>
          <div className="list">
            <div className="list__item">Wordpress</div>
            <div className="list__item">Git</div>
            <div className="list__item">Gulp / Webpack</div>
            <div className="list__item">Photoshop / Figma</div>
          </div>
          <div className="list">
            <div className="list__item">
              Адаптивная, кроссбраузерная верстка
            </div>
          </div>

          <div className="donate">
            <h2 className="subtitle">
              Тех. поддержка Вашего сайта за&nbsp;<strong>$10</strong>
              &nbsp;месяц:
            </h2>
            <PatreonButton />
            <h2 className="subtitle">Донат:</h2>
            <a
              href="https://www.buymeacoffee.com/n1kko777"
              target="_blank"
              rel="noreferrer"
              className="buy-me-a-coffee"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                alt="Buy Me A Coffee"
              />
            </a>
          </div>
        </div>
      </main>

      <Mouse link="/portfolio" />
    </Container>
  );
};
