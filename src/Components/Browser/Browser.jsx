import React, { useState, useEffect } from "react";
import  {searchArticles} from "../../services/apiCalls";
import{ Col, Container, Row } from "react-bootstrap";
import "./Browser.css";

const Browser = ({ criteria }) => {
  const [movieSearch, setMovieSearch] = useState([])
  useEffect(() => {
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchArticles(criteria)
        .then((res) => {
          setMovieSearch(res.data);
        })
        .catch((error) => console.log(error));
      },350);
      return () => clearTimeout(bring);
    }else if (criteria === ""){
  }
  }, [criteria]);

  if (movieSearch.length !== 0){
    return (
      <Container className="browserDesign">
        <Row>
          {movieSearch.map((search) =>(
            <Col className="divMovie">
              <h3>{search.name}</h3>
              <img className="imgMovie" src={search.photo} alt=""></img>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
};

export default Browser;
