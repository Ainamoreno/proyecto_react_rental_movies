import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getRentals } from "../../../services/getRentals";

//Redux
import { useSelector } from "react-redux";

//Slice
import { userData } from "../userSlice";
import { rentalData } from "../../Movies/MovieDetails/rentalSlice";
import { Col, Container, Row } from "react-bootstrap";

import { allRentalsUser } from "../../../services/allRentalsUser";

const Profile = () => {
  const credentials = useSelector(userData);
  const rentalUser = useSelector(rentalData);
  // console.log(credentials);
  let email = credentials.credentials.email;
  let token = credentials.token;
console.log(rentalUser)
const [rentals, setRentals] = useState([])
useEffect(()=> {
  allRentalsUser({ email }, token).then((res) => {
    console.log(res.data);
    setRentals(res.data)
    console.log(rentals)
  });
}, [])
  
  const showRentals = () => {
    let email = credentials.credentials.email;
    if (credentials.credentials.name_rol === "Administrador") {
      getRentals({ email }, credentials.token).then((res) => {
        console.log(res.data);
      });
    } else {
      console.log("No estás autorizado");
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2>Último alquiler</h2>
        </Col>
      </Row>
      <Row>
        <hr />
        <Col>
          <img
            className="movieRental"
            src={rentalUser.detailsMovie.photo}
            alt=""
          ></img>
        </Col>
        <Col>
          <h5>{rentalUser.detailsMovie.name}</h5>
          <p>{rentalUser.detailsMovie.description}</p>
          <h6>{rentalUser.detailsMovie.price}€</h6>
        </Col>
        <Col>
          <h5>Alquiler realizado a las:</h5>
          <h6>{rentalUser.detailsRental.createdAt}</h6>
        </Col>
        <hr />
      </Row>

    {rentals.map((rent)=>(
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
};
export default Profile;
