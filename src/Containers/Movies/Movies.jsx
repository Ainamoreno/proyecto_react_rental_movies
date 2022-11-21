//React
import React, { useEffect, useState } from "react";

//Css
import "./Movies.css";

//Axios
import axios from "axios";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "../../Components/Movie/Movie";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:7001/movies/movieTopRated";

  useEffect(() => {
    moviesTopRated();
  }, []);

  const moviesTopRated = async () => {
    setLoading(true);
    let res = await axios.get(url);
    setLoading(false);
    try {
      setMovie(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col>
        <div className="movie"><Movie movie={movie} /></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
