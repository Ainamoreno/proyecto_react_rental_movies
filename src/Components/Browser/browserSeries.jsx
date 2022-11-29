import React, { useState, useEffect } from "react";
import  {searchSeries} from "../../services/searchSeries";
import{ Col, Container, Row } from "react-bootstrap";
import "./Browser.css";

const browserSeries = ({ criteria }) => {
  const [serieSearch, setSerieSearch] = useState([])
  useEffect(() => {
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchSeries(criteria)
        .then((res) => {
          setSerieSearch(res.data);
        })
        .catch((error) => console.log(error));
      },350);
      return () => clearTimeout(bring);
    }else if (criteria === ""){
  }
  }, [criteria]);

  if (serieSearch.length !== 0){
    return (
      <Container className="browserDesign">
        <Row>
          {serieSearch.map((search) =>(
            <Col className="divSerie">
              <h3>{search.name}</h3>
              <img className="imgSerie" src={search.photo} alt=""></img>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
};

export default browserSeries;
