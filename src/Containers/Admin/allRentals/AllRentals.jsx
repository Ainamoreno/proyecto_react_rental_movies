import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

//Redux
import { useSelector } from "react-redux";

//Slice
import { userData } from "../../User/userSlice";
import { showAllUsers } from "../../../services/showAllUsers";
import { getRentals } from "../../../services/getRentals";

//Scss
import "./AllRentals.scss";

function AllRentals() {
  const credentials = useSelector(userData);
  const [allRents, setAllRents] = useState([]);
  const [allUsersRents, setAllUsersRents] = useState([]);
  const [allUser, setAllUsers] = useState([]);

  const showUsers = () => {
    if (credentials.credentials.name_rol === "Administrador") {
      showAllUsers(credentials.token).then((res) => {
        setAllUsers(res.data);
      });
    }
  };
  const showRentals = () => {
    let email = credentials.credentials.email;
    if (credentials.credentials.name_rol === "Administrador") {
      getRentals({ email }, credentials.token).then((res) => {
        setAllRents(res.data.allRents);
        setAllUsersRents(res.data.userRental);
      });
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
          <h4 className="titleAdmin">Pedidos</h4>
        </Col>
      </Row>
      <Container className="divAllRentals">
      {allUsersRents.map((user) => (
        <Container className="mt-3 divRental">
          <Row>
            <Col>
              <h5>{user.user.name}</h5>
              <h6>Fecha del pedido: {user.createdAt.replace("T", " ")}</h6>
              {getRentalsFromUsers(user).map((rent) => (
                <ul>Película/s o serie/s alquiladas: <li>{rent.article.name}</li></ul>
              ))}
            </Col>
          </Row>

          {/* <Row>
            <Col></Col>
          </Row> */}
        </Container>
      ))}
     <Container>
      <Row>
        <Col>
          <h4 className="titleAdmin">Usuarios</h4>
        </Col>
      </Row>
      </Container> 
      {allUser.map((user) => (
            <Col className="mt-3 divUser">
              <h6>{user.name}</h6>
              <p>{user.email}</p>
            </Col>
      ))}
    </Container>
    </Container>
    
  );
}

export default AllRentals;
