import React, { useState, useEffect } from "react";
import  {searchSeries} from "../../services/searchSeries";
import{ Col, Container, Row } from "react-bootstrap";
import "./Browser.scss";


const BrowserSeries = ({ criteria }) => {
  const [serieSearch, setSerieSearch] = useState([])
  useEffect(() => {
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchSeries(criteria)
        .then((res) => {
          setSerieSearch(res.data);
        })
      },350);
      return () => clearTimeout(bring);
    }else if (criteria === ""){
      setSerieSearch([])
  }
  }, [criteria]);

  if (serieSearch.length !== 0){
    return (
      <Container className="browserDesign">
        <Row>
          {serieSearch.map((search) =>(
            <Col className="divSerie">
              <img className="imgSerie" src={search.photo} alt=""></img>
              <h6>{search.name}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
};

export default BrowserSeries;