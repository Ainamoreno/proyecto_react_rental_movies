// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//UseNavigate
import { useNavigate } from "react-router-dom";

// Images
import cine from "../../img/cine.jpg";
import cine1 from "../../img/cine1.jpg";
// CSS
import "./Home.css";
import React from "react";
//Icons
import { MdLocalMovies } from "react-icons/md";


function Home() {
  let navigate = useNavigate();
  return (
    <Container fluid>
      <Row className="row1">
        <Col className="colImg">
          <img className="img" src={cine} alt="" />
        </Col>
        <Col>
          <h1 className="p1">
            Todas las películas y series que desees, y mucho más. <br />{" "}
            ¿Quieres ver algo ya? Regístrate o inicia sesión para poder alquilar
            nuestras películas y series.
          </h1>
          </Col>
      </Row>
      <Row>
        <Col>
          <div onClick={() => navigate("./series")}>Series</div>
          <h5 onClick={() => navigate("./movies")}><MdLocalMovies/>Películas</h5>
        </Col>
      </Row>
      <Row className="row2">
        <Col className="colImg">
          <h1 className="p2"> Podrás disfrutar de los últimos estrenos, ver el contenido de forma online y disfrutar de las películas y series hasta la fecha de expiración
          </h1>
        </Col>
        <Col>
          <img className="img" src={cine1} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
