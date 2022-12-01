import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

//Redux
import { useSelector } from "react-redux";

//Slice
import { userData } from "../../User/userSlice";
import {showAllUsers} from '../../../services/showAllUsers'
import { getRentals } from "../../../services/getRentals";

function AllRentals() {
  const credentials = useSelector(userData);
  const [allRents, setAllRents] = useState([]);
  const [allUsersRents, setAllUsersRents] = useState([]);
  const [allUser, setAllUsers] = useState([]);


  const showUsers = () => {
    if (credentials.credentials.name_rol === "Administrador") {
      showAllUsers(credentials.token).then((res) => {
        setAllUsers(res.data);
        
        // console.log(allUser);
      });
    } else {
      console.log("No estás autorizado");
    }
  }
  const showRentals = () => {
    let email = credentials.credentials.email;
    if (credentials.credentials.name_rol === "Administrador") {
      getRentals({ email }, credentials.token).then((res) => {
        setAllRents(res.data.allRents);
        setAllUsersRents(res.data.userRental);
        console.log(allRents);
      });
    } else {
      console.log("No estás autorizado");
    }
  };

  useEffect(() => {
    showRentals();
    showUsers();
  }, []);

  const getRentalsFromUsers = (user) => {
    return allRents.filter((rent) => rent.id_rental === user.id_rental);
  };

  return (
    <Container>
      <Row>
       <Col>
       <h4>Pedidos</h4>
       </Col> 
      </Row>
      {allUsersRents.map((user) => (
        <Container className="mt-3">
          <Row>
            <Col>
              <h6>{user.user.name}</h6>
              <p>{user.createdAt.replace('T', ' ')}</p>
            </Col>
          </Row>

          {getRentalsFromUsers(user).map((rent) => (
            <Row>
              <Col>
                <div>Película: {rent.article.name}</div>
              </Col>
            </Row>
          ))}
        </Container>
      ))}
      <Row>
       <Col>
       <h4>Usuarios</h4>
       </Col> 
      </Row>
      {allUser.map((user) => (
        <Container className="mt-3">
          <Row>
            <Col>
              <h6>{user.name}</h6>
              <p>{user.email}</p>
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
}

export default AllRentals;
