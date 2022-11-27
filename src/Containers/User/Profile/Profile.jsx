import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getRentals } from "../../../services/getRentals";

//Redux
import { useSelector } from "react-redux";

//React-router-dom
import { useNavigate } from "react-router-dom";

//Slice
import { userData } from "../userSlice";
import { rentalData } from "../../Movies/MovieDetails/rentalSlice";
import { Col, Container, Row } from "react-bootstrap";

import { allRentalsUser } from "../../../services/allRentalsUser";

const Profile = () => {
  const navigate = useNavigate();
  const credentials = useSelector(userData);
  const rentalUser = useSelector(rentalData);

  let email = credentials.credentials.email;
  let token = credentials.token;
  const [rentArt, setRentArt] = useState([]);

  useEffect(() => {
    allRentalsUser({ email }, token).then((res) => {
      setRentArt(res.data.rentArt);

      console.log(res.data)
    });
  }, []);

  const showRentals = () => {
    let email = credentials.credentials.email;
    if (credentials.credentials.name_rol === "Administrador") {
      getRentals({ email }, credentials.token).then((res) => {
      });
    } else {
      console.log("No estás autorizado");
    }
  };
console.log(rentArt)
  if (rentalUser.text !== '') {
    return (
      <Container>
        <Row>
          <Col onClick={()=>navigate('/updateprofile')}>
         <h5>Modificar datos del perfil</h5> 
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Último alquiler</h2>
          </Col>
        </Row>
        <Row className="lastRental">
          <hr />
          <Col>
            <img
              className="movieRental"
              src={rentalUser.detailsMovie[0].photo}
              alt=""
            ></img>
          </Col>
          <Col>
            <h5>{rentalUser.detailsMovie[0].name}</h5>
            <p>{rentalUser.detailsMovie[0].description}</p>
            <h6>{rentalUser.detailsMovie[0].price}€</h6>
          </Col>
          <Col>
            <h5>Alquiler realizado el:</h5>
            <h6>{rentalUser.detailsRental.date_rental}</h6>
            <h5>Alquiler finaliza el:</h5>
            <h6>{rentalUser.detailsRental.date_return}</h6>
          </Col>
        </Row>

        {rentArt.map((rent) => (
          <Container>
            <Row>
              <Col>
                <img
                  className="movieRental"
                  src={rent.article.photo}
                  alt=""
                ></img>
              </Col>
              <Col>
                <h5>{rent.article.name}</h5>
                <p>{rent.article.description}</p>
                <h6>{rent.article.price}€</h6>
              </Col>
              <Col>
                <h6>{rent.article.type}</h6>
              </Col>
              <hr />
            </Row>
          </Container>
        ))}
        <div onClick={() => showRentals()}>Todos los alquileres</div>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col onClick={()=>navigate('/updateprofile')}>
         <h5>Modificar datos del perfil</h5> 
          </Col>
        </Row>
        {rentArt.map((rent) => (
          <Container>
            <Row>
              <Col>
                <img
                  className="movieRental"
                  src={rent.article.photo}
                  alt=""
                ></img>
              </Col>
              <Col>
                <h5>{rent.article.name}</h5>
                <p>{rent.article.description}</p>
                <h6>{rent.article.price}€</h6>
              </Col>
              <Col>
                <h6>{rent.article.type}</h6>
              </Col>
              <hr />
            </Row>
          </Container>
        ))}
        <div onClick={() => showRentals()}>Todos los alquileres</div>
      </Container>
    );
  }
};
export default Profile;
