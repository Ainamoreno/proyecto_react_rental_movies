//React
import React, { useEffect, useState } from "react";

//Axios
import axios from "axios";

//Scss
import "./Movies.scss"

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "../../Components/Movie/Movie";
import BrowserMovies from "../../Components/Browser/BrowserMovies";
import BorderExample from "../../Components/Bootstrap/Spinner/Spinner";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [criteria, setCriteria,] = useState("");
  const host = 'proyectorentalmovies-production.up.railway.app'
  const url = `${host}/movies/movieTopRated`;

  const inputHandler = (e) => {
    setCriteria(e.target.value)
  };

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

  if(criteria !== "") {
    return(
      <Container>
        <input
        name="criteria"
        placeholder="Buscar..."
        onChange={(e) => inputHandler(e)}
        className="inputSearch"
        />
        <Row>
          <BrowserMovies criteria={criteria}/>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
         <input
        name="criteria"
        placeholder="Buscar..."
        onChange={(e) => inputHandler(e)}
        className="inputSearch"
        />
        {!loading ?(
        <Row>
          <BrowserMovies criteria={criteria}/> 
          <Col>
          <div className="divMovies"><Movie movie={movie} /></div>
          </Col>
        </Row>
        ) : (<div><BorderExample/></div>)
        }
        
      </Container>
    );
  }
  
};

export default Movies;
