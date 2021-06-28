import React from "react";
import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { SwipeSlider } from "../components/SwipeSlider";
import SimpleBar from "simplebar-react";

import Proj5 from "../assets/img/portfolio/portfolio-5.png";
import Proj8 from "../assets/img/portfolio/portfolio-8.png";
import Proj9 from "../assets/img/portfolio/portfolio-9.png";
import Proj10 from "../assets/img/portfolio/portfolio-10.png";
import Proj12 from "../assets/img/portfolio/portfolio-12.png";

const portfolios = [
  {
    imgUrl: Proj12,
    link: "/portfolio/12",
    alt: "<a href='https://xn--96-4lcxfg8dya.xn--p1ai/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    imgUrl: Proj9,
    link: "/portfolio/9",
    alt: "<a href='http://sorcery.pro/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    imgUrl: Proj10,
    link: "/portfolio/10",
    alt: "<a href='http://janedragon.ru/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    imgUrl: Proj8,
    link: "/portfolio/8",
    alt: "<a href='https://mncntrl.ru/' target='_blank'>Посмотреть сайт</a>",
  },
  {
    imgUrl: Proj5,
    link: "/portfolio/5",
    alt: "<a href='https://testovy-sait-175.pulscen.ru/pages/17807-kviz' target='_blank'>Посмотреть сайт</a>",
  },
];

export const Portfolio = () => {
  return (
    <Container>
      <main>
        <h1 className="title">
          Мои <span>Работы</span>
        </h1>
        <div className="description">
          <p>
            С 2018 года разработал множество проектов как на Пульсе Цен в отделе
            «Мегасайт», так и на просторах фриланса.
          </p>
        </div>
        <SimpleBar>
          <SwipeSlider images={portfolios} />
        </SimpleBar>
        <div className="description">
          <div className="row row--line">
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
      </main>

      <Mouse link="/contacts" />
    </Container>
  );
};
