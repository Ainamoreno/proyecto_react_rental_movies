import React, { useEffect, useState } from "react";
import  {searchMovies} from "../../services/searchMovies";
import{ Col, Container, Row } from "react-bootstrap";
import "./Browser.css";

const BrowserMovies = ({ criteria }) => {
  const [movieSearch, setMovieSearch] = useState([]);

  useEffect(() => {
    console.log(movieSearch)
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchMovies(criteria)
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

export default BrowserMovies;
