import React, { useState } from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
//Css
import "./Movie.css";
//UseNavigate
import { useNavigate } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Slices
import { movieData, addMovie } from "../../Containers/Movies/movieSlice";

const Movie = ({movie}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [hasRender, setRender] = useState(false);
  const [id, setId] = useState(0);

  const clickedMovie = (movie) => {
    console.log(movie)
    dispatch(addMovie({...movie,details: movie}));
    setTimeout(()=>{
        navigate("/moviedetails");
    },750);
  }

  return (
    <Container>
      <Row>
        
          {movie.map((mov, index) => (
            <Col
              key={index}
              className="divMovie"
              onClick={()=> clickedMovie(mov)}
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
