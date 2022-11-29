import React from "react";

//Redux
import { useSelector,  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Slice
import { serieData } from "../serieSlice";
import { userData } from "../../User/userSlice";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//Css
import './SerieDetails.scss'
import { Button } from "react-bootstrap";

//Slices
import { addRental } from "../serieSlice";

import { createRental } from "../../../services/createRental";


const SerieDetails = () => {
  const selectedSerie = useSelector(serieData);
  const credentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rentalSerie = () => {
    let email = credentials.credentials.email;
    let articleIdArticle = [selectedSerie.id_article];
    createRental({ email, articleIdArticle }, credentials.token).then((res) => {
      dispatch(addRental({ detailsSerie: res.data.serieRent, detailsRental: res.data.Rental[0], text: 'OK' }));
    });
    navigate('/profile')
  };

  if (selectedSerie?.id_article !== undefined) {
    return (
      <Container>
        <Row>
          <Col className="colTitle">
            <h1 className="titleSerie ">{selectedSerie?.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="imgSerieDetails"
              src={selectedSerie.photo}
              alt=""
            ></img>
          </Col>
          <Col>
            <h5>Descripción</h5>
            <p>{selectedSerie.description}</p>
            <h6>Puntuación</h6>
            <p>{selectedSerie.score}</p>
            <h6>Fecha de estreno</h6>
            <p>{selectedSerie.data_premiere}</p>
            <h6>Precio:</h6>
            <p>{selectedSerie.price}€</p>
          </Col>
        </Row>
        {credentials?.token !== "" && (
          <Button
            onClick={() => rentalSerie()}
            className="buttonForm"
            variant="outline-dark"
          >
            Alquílame
          </Button>
        )}
      </Container>
    );
  } else {
    return <div>Ha ocurrido un error</div>;
  }
};

export default SerieDetails;