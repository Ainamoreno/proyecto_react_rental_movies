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
import Browser from "../../Components/Browser/Browser";
import BorderExample from "../../Components/Bootstrap/Spinner/Spinner";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [criteria, setCriteria,] = useState("");
  const url = "http://localhost:7001/movies/movieTopRated";

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
        placeholder="Empieza el entretenimiento"
        onChange={(e) => inputHandler(e)}
        />
        <Row>
          <Browser criteria={criteria}/>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
         <input
        name="criteria"
        placeholder="Empieza el entretenimiento"
        onChange={(e) => inputHandler(e)}
        />
        {!loading ?(
        <Row>
          <Browser criteria={criteria}/> 
          <Col>
          <div><Movie movie={movie} /></div>
          </Col>
        </Row>
        ) : (<div><BorderExample/></div>)
        }
        
      </Container>
    );
  }
  
};

export default Movies;
