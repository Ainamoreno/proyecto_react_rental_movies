import React, { useState } from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
//Css
import "./Movie.css";

const Movie = ({movie}) => {
  const [hasRender, setRender] = useState(false);
  const [id, setId] = useState(0);

  return (
    <Container>
      <Row>
        
          {movie.map((mov, index) => (
            <Col
              key={index}
              className="divMovie"
            >
              <img className="imgMovie" src={`${mov.photo}`} alt="" />
              <h6>{mov.name}</h6>
            </Col>
          ))}
        
      </Row>
    </Container>
  );
};

export default Movie;
