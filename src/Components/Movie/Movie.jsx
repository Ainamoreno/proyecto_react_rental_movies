// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//Css
import "./Movie.scss";

//UseNavigate
import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";

//Slices
import { addMovie } from "../../Containers/Movies/movieSlice";

const Movie = ({movie}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const clickedMovie = (movie) => {
    dispatch(addMovie({...movie,details: movie}));
        navigate("/moviedetails");

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
              <h5 className="titleMovie">{mov.name}</h5>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Movie;
