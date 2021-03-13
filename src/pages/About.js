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
              Мои <span>Навыки</span>
            </h1>
            <div className="description">
              <p>
                Не стою на месте, прогрессирую день за днем. Ответственный,
                <br />
                честный, любящий своё дело профессионал.
              </p>

              <h2 className="subtitle">Hard skills:</h2>
              <ul className="list">
                <li>Html (Pug)</li>
                <li>Css (LESS/SCSS)</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Gulp</li>
                <li>Git</li>
                <li>Photoshop (верстка PSD макетов)</li>
                <li>Адаптация под любые экраны</li>
                <li>Возможность отображения во многих браузерах</li>
              </ul>
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
