import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { Container } from "../components/Container";
import sanityClient from "../client";

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

export const Project = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        _id,
        title,
        website,
        price,
        duration,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        "tags": tags[]->title,
        body
      }`
      )
      .then((data) => {
        setProjectData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <main className="project">
        <h1 className="title">{projectData.title}</h1>
        <div className="row row--mobile-reverse">
          <div className="col">
            <div className="description">
              <BlockContent
                blocks={projectData.body}
                projectId="7uwps66y"
                dataset="production"
              />

              <div className="row row--line">
                <div>
                  <h2 className="subtitle">Примерное время работ:</h2>
                  <p>
                    {`${projectData.duration} ${declOfNum(
                      projectData.duration,
                      ["час", "часа", "часов"]
                    )}`}
                  </p>
                </div>
                <div>
                  {" "}
                  <h2 className="subtitle">Cтоимость работ:</h2>
                  <p>${projectData.price}</p>
                </div>
              </div>

              <h2 className="subtitle">Инструментарий:</h2>
              <div className="list">
                {projectData.tags.map((tag) => (
                  <div key={tag} className="list__item">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col mt50">
            <div className="avatar">
              <div className="avatar-wrapper avatar-project">
                <img
                  src={projectData.mainImage.asset.url}
                  alt={projectData.website}
                />
              </div>
            </div>
            <div className="modal__caption">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={projectData.website}
              >
                Перейти на сайт
              </a>
            </div>
          </div>
        </div>
        <Link to="/portfolio" className="go-home">
          назад
        </Link>
      </main>
    </Container>
  );
};
