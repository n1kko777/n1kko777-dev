import React from "react";
import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { SwipeSlider } from "../components/SwipeSlider";

const sertificates = [
  {
    url: require("../assets/img/portfolio/portfolio-1.png"),
    alt:
      "<a href='https://www.lesa59.ru/pages/13756-stroitelnye-lesa' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-2.png"),
    alt:
      "<a href='https://www.kompozit-tss.ru/pages/14670-truby' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-3.png"),
    alt:
      "<a href='https://www.rifgrad.ru/pages/16235-podbor-produktsii' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-4.png"),
    alt:
      "<a href='https://www.optovent.ru/pages/17571-podbor-ventilyatsionnyh-ustanovok' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-5.png"),
    alt:
      "<a href='https://testovy-sait-175.pulscen.ru/pages/17807-kviz' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-6.png"),
    alt:
      "<a href='https://wallet.n1kko777-dev.ru/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-7.png"),
    alt:
      "<a href='https://sl.n1kko777-dev.ru/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-8.png"),
    alt: "<a href='https://mncntrl.ru/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-9.png"),
    alt: "<a href='http://sorcery.pro/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-10.png"),
    alt: "<a href='http://janedragon.ru/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    url: require("../assets/img/portfolio/portfolio-11.png"),
    alt:
      "<a href='http://xn-----7kcbcgsfvgwpbukjr6bel6c0h4d.xn--p1ai/' target='_blank'>Посмотреть сайт</a>",
  },
];

export const Portfolio = () => {
  return (
    <Container>
      <main>
        <div className="row">
          <div className="col">
            <h1 className="title">
              Мои <span>Работы</span>
            </h1>
            <div className="description">
              <p>
                С 2018 года разработал множество проектов как на Пульсе Цен в
                отделе «Мегасайт», так и на просторах фриланса.
              </p>

              <div className="description__column">
                <div>
                  <h2 className="subtitle">Пульс Цен - Мегасайт:</h2>
                  <ul className="list">
                    <li>50+ проектов</li>
                  </ul>
                </div>

                <div>
                  <h2 className="subtitle">Freelance:</h2>
                  <ul className="list">
                    <li>10+ проектов</li>
                  </ul>
                </div>

                <div>
                  <h2 className="subtitle">React:</h2>
                  <ul className="list">
                    <li>7+ проектов</li>
                  </ul>
                </div>

                <div>
                  <h2 className="subtitle">React Native:</h2>
                  <ul className="list">
                    <li>1+ проектов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <SwipeSlider images={sertificates} />
          </div>
        </div>
      </main>

      <Mouse link="/contacts" />
    </Container>
  );
};
