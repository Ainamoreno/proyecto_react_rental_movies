import React, { useState, useEffect } from "react";
//Redux
import { useSelector } from "react-redux";

//Slice
import { movieData } from "../movieSlice";
import { userData } from "../../User/userSlice";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//Css
import "./MovieDetails.css";
import { Button } from "react-bootstrap";

import { createRental } from "../../../services/createRental";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();
  const selectedMovie = useSelector(movieData);
  const credentials = useSelector(userData);
  const [rental, setRental] = useState({
    email: "",
    articleIdArticle: "",
  });

  const rentalMovie = () => {
    let email = credentials.credentials.email;
    let articleIdArticle = [selectedMovie.id_article];
    setRental({
      email: email,
      articleIdArticle: articleIdArticle,
    });
    createRental(rental, credentials.token).then((res) => {
      console.log(res);
    });
    navigate('/profile')
  };

  if (selectedMovie?.id_article !== undefined) {
    return (
      <Container>
        <Row>
          <Col className="colTitle">
            <h1 className="titleMovie ">{selectedMovie?.name}</h1>
          </Col>
        </Row>
        <Row className="movieDetailsDesign">
          <Col>
            <img
              className="imgMovieDetails"
              src={selectedMovie.photo}
              alt=""
            ></img>
          </Col>
          <Col>
            <h5>Descripción</h5>
            <p>{selectedMovie.description}</p>
            <h6>Puntuación</h6>
            <p>{selectedMovie.score}</p>
            <h6>Fecha de estreno</h6>
            <p>{selectedMovie.data_premiere}</p>
          </Col>
        </Row>

        {credentials?.token !== "" && (
          <Button
            onClick={() => rentalMovie()}
            className="buttonForm"
            variant="outline-dark"
          >
            Alquílame
          </Button>
        )}
      </Container>
    );
  } else {
    return <div className="">Ha habido un error</div>;
  }
};
export default MovieDetails;