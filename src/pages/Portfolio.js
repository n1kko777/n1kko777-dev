import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import sanityClient from "../client";
import { Container } from "../components/Container";
import { Mouse } from "../components/Mouse";
import { SwipeSlider } from "../components/SwipeSlider";

export const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "portfolio"] | order(_createdAt desc){
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) =>
        setPortfolioData(
          data.map((el) => ({
            imgUrl: el.mainImage.asset.url,
            link: `/portfolio/${el.slug.current}`,
            alt: el.mainImage.asset.alt,
          }))
        )
      )
      .catch(console.error);
  }, []);

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
          <p>
            Больше проектов можно найти тут:{" "}
            <a
              href="https://github.com/n1kko777"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
        </div>
        <SimpleBar>
          <SwipeSlider images={portfolioData} />
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
