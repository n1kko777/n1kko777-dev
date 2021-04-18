import React from "react";
import { Container } from "../components/Container";
import PageNotFoundImg from "../assets/icons/404.svg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Container isNavbar={false}>
      <main>
        <div className="container">
          <div className="page-not-found">
            <img src={PageNotFoundImg} alt="Страница не найдена" />
            <Link to="/" className="go-home">
              на главную
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
};
