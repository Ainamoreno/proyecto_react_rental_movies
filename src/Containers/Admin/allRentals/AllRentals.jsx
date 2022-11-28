import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

//Redux
import { useSelector } from "react-redux";

//Slice
import { userData } from "../../User/userSlice";

import { getRentals } from "../../../services/getRentals";

function AllRentals() {
  const credentials = useSelector(userData);
  const [allRents, setAllRents] = useState([]);
  const [allusers, setAllUsers] = useState([]);

  const showRentals = () => {
    let email = credentials.credentials.email;
    if (credentials.credentials.name_rol === "Administrador") {
      getRentals({ email }, credentials.token).then((res) => {
        setAllRents(res.data.allRents);
        setAllUsers(res.data.userRental);
        console.log(allRents);
      });
    } else {
      console.log("No estás autorizado");
    }
  };

  useEffect(() => {
    showRentals();
  }, []);

  const getRentalsFromUsers = (user) => {
    return allRents.filter((rent) => rent.id_rental === user.id_rental);
  };

  return (
    <Container>
      {allusers.map((user) => (
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
    </Container>
  );
}

export default AllRentals;
