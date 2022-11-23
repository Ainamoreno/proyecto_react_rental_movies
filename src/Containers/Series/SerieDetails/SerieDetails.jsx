import React, { useState, useEffect } from "react";
//Redux
import { useSelector } from "react-redux";

//Slice
import { serieData } from "../serieSlice";
import { userData } from "../../User/userSlice";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//Css
import './SerieDetails.css'
import { Button } from "react-bootstrap";

const SerieDetails = () => {
  const selectedSerie = useSelector(serieData);
  console.log(selectedSerie);
  const credentials = useSelector(userData);

  if (selectedSerie?.id_article !== undefined) {
    return (
      <Container>
        <Row>
          <Col className="colTitle">
            <h1 className="titleSerie ">{selectedSerie?.name}</h1>
          </Col>
        </Row>
        <Row className="serieDetailsDesign">
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
          </Col>
        </Row>
        {credentials?.token !== "" && (
          <Button variant="outline-dark" className="buttonForm">Alquílame</Button>
        )}
      </Container>
    );
  } else {
    return <div className="">Ha ocurrido un error</div>;
  }
};

export default SerieDetails;
