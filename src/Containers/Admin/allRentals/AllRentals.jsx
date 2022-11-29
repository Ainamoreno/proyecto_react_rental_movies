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
        setAllUsers(res.data.userRental)
        console.log(res.data);
      });
    } else {
      console.log("No estás autorizado");
    }
  };

  useEffect(()=> {
    showRentals()
  },[])
  
  return (
    <Container>
        <Row>
            <Col>
            {allusers.map((user)=> (
                <h6>{user.user.name}</h6>
            ))}
            </Col>
        </Row>
        <Row>
            <Col>
            {allRents.map((rent)=>(
                <div>{rent.article.name}</div>
            ))}
            </Col>
        </Row>
    </Container>
  )
  
  
  
  
 
}

export default AllRentals;
