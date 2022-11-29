import React, { useEffect, useState } from "react";
import "./Profile.scss";

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
  const [admin, setAdmin] = useState ('')
  useEffect(() => {
    console.log(rentalUser)
    if(credentials.credentials.name_rol === 'Administrador'){
      setAdmin('Mostrar todos los alquileres')
    }
    allRentalsUser({ email }, token).then((res) => {
      setRentArt(res.data.rentArt);
      console.log(res.data);
    });
  }, []);

  if (rentalUser.text !== "") {
    return (
      <Container>
        <Row>
          <Col onClick={() => navigate("/updateprofile")}>
            <h5 className="buttonUpdateUser">Modificar datos del perfil</h5>
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
        <div className="buttonRentalsAdmin" onClick={() => navigate('/allrentals')}>{admin}</div>
        
        
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col onClick={() => navigate("/updateprofile")}>
            <h6 className="buttonUpdateUser">Modificar datos del perfil</h6>
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
        <div className="buttonRentalsAdmin" onClick={() => navigate('/allrentals')}>{admin}</div>
      </Container>
    );
  }
};
export default Profile;
