//React
import React, { useEffect, useState } from "react";

//Axios
import axios from "axios";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "../../Components/Movie/Movie";
<<<<<<< HEAD
import Browser from "../../Components/Browser/Browser";
=======
import GrowExample from "../../Components/Bootstrap/Spinner/Spinner";
import BorderExample from "../../Components/Bootstrap/Spinner/Spinner";
>>>>>>> develop

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
     try {
      setLoading(false);
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <Container fluid>
<<<<<<< HEAD
        <Browser />
      <Row>
        <Col>
          <div className="movie"><Movie movie={movie} /></div>
=======
      {!loading ?(
      <Row>
        <Col>
        <div><Movie movie={movie} /></div>
>>>>>>> develop
        </Col>
      </Row>
      ) : (<div><BorderExample/></div>)
      }
      
    </Container>
  );
};

export default Movies;
