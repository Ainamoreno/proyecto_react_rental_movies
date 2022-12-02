import React, { useEffect, useState } from "react";
import { searchMovies, searchMoviesByGenre } from "../../services/searchMovies";
import { Col, Container, Row } from "react-bootstrap";
import "./Browser.css";

const BrowserMovies = ({ criteria }) => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [movieSearchGenre, setMovieSearchGenre] = useState([]);

  useEffect(() => {
    console.log(movieSearch);
    console.log(movieSearchGenre);
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchMovies(criteria)
          .then((res) => {
            setMovieSearch(res.data);
          })
          .catch((error) => console.log(error));
        searchMoviesByGenre(criteria)
          .then((res) => {
            setMovieSearchGenre(res.data);
          })
          .catch((error) => console.log(error));
      }, 350);
      return () => clearTimeout(bring);
    } else if (criteria === "") {
      setMovieSearch([]);
      setMovieSearchGenre([]);
    }
  }, [criteria]);

  if (movieSearch.length !== 0) {
    return (
      <Container className="browserDesign">
        <Row>
          {movieSearch.map((search) => (
            <Col className="divMovie">
              <img className="imgMovie" src={search.photo} alt=""></img>
              <h6>{search.name}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  if (movieSearchGenre.length !== 0) {
    return (
      <Container className="browserDesign">
        <Row>
          {movieSearchGenre.map((search) => (
            <Col className="divMovie">
              <img className="imgMovie" src={search.article.photo} alt=""></img>
              <h6>{search.article.name}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default BrowserMovies;
