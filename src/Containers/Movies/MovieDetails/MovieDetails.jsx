import React from "react";
//Redux
import { useSelector,  useDispatch } from "react-redux";

//Slice
import { movieData } from "../movieSlice";
import { userData } from "../../User/userSlice";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//Css
import "./MovieDetails.scss";
import { Button } from "react-bootstrap";

import { createRental } from "../../../services/createRental";
import { useNavigate } from "react-router-dom";

//Slices
import {  addRental } from "../MovieDetails/rentalSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedMovie = useSelector(movieData);
  const credentials = useSelector(userData);

  const rentalMovie = () => {
    let email = credentials.credentials.email;
    let articleIdArticle = [selectedMovie.id_article];
    createRental({email, articleIdArticle}, credentials.token).then((res) => {
      dispatch(addRental({detailsMovie: res.data.movieRent, detailsRental: res.data.Rental[0], text: 'OK'}));
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
        <Row>
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
            <h6>Precio:</h6>
            <p>{selectedMovie.price}€</p>
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
    return <div>Ha habido un error</div>;
  }
};
export default MovieDetails;
