import React from "react";
import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { SwipeSlider } from "../components/SwipeSlider";
import Cert1 from "../assets/img/sertificates/181418_536911.ru-1.jpg";
import Cert2 from "../assets/img/sertificates/181418_574758.ru-1.jpg";
import Cert3 from "../assets/img/sertificates/181418_574763.ru-1.jpg";
import Cert4 from "../assets/img/sertificates/181418_589466.ru-1.jpg";
import Cert5 from "../assets/img/sertificates/181418_633246.ru-1.jpg";
import Cert6 from "../assets/img/sertificates/181418_796093.ru-1.jpg";

const sertificates = [
  {
    url: Cert1,
    alt: "",
  },
  {
    url: Cert2,
    alt: "",
  },
  {
    url: Cert3,
    alt: "",
  },
  {
    url: Cert4,
    alt: "",
  },
  {
    url: Cert5,
    alt: "",
  },
  {
    url: Cert6,
    alt: "",
  },
];

export const About = () => {
  return (
    <Container>
      <main>
        <div className="row">
          <div className="col">
            <h1 className="title">
              Обо <span>Мне</span>
            </h1>
            <div className="description">
              <p>
                Добрый день! В сфере web-разработки я нахожусь более 2 лет, за
                это время изучил и освоил принципы и методологию разработки
                сайтов, которые решают проблемы многих людей. Благодаря
                возможности одинаково удобно открывать сайты не только на
                компьютере, но и на телефоне, вашим продуктом могут
                воспользоваться в любой ситуации. Не стою на месте, прогрессирую
                день за днем. Ответственный, честный, люблю своё дело! Жду ваших
                предложений, а также дальнейшего сотрудничества.
              </p>

              <h2 className="subtitle">Мои навыки:</h2>
              <div className="list">
                <div className="list__item">Html (pug)</div>
                <div className="list__item">CSS (LESS/SCSS)</div>
                <div className="list__item">Gulp</div>
                <div className="list__item">Jquery</div>
              </div>
              <div className="list">
                <div className="list__item">Git</div>
                <div className="list__item">Javascript</div>
                <div className="list__item">
                  Photoshop (Вёрстка PSD макетов)
                </div>
              </div>
              <div className="list">
                <div className="list__item">
                  Возможность отображения во многих браузерах{" "}
                </div>
              </div>
              <div className="list">
                <div className="list__item">Адаптация под любые экраны</div>
              </div>
            </div>
          </div>
          <div className="col">
            <SwipeSlider images={sertificates} />
          </div>
        </div>
      </main>

      <Mouse link="/portfolio" />
    </Container>
  );
};
