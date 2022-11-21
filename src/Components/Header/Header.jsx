import React from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Navbar, Row } from "react-bootstrap";

//Img
import logo_front from "../../img/VideoClub2.png";

//React-router-dom
import { useNavigate } from "react-router-dom";

//Css
import "./Header.css";

//Icons
import { FiLogIn } from "react-icons/fi";

//React
import { useState, useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Slices
import { userData, userout } from "../../Containers/User/userSlice";

function Header() {
  // const [criteria, setCriteria] = useState("");
  const navigate = useNavigate();
  const userReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();

  // const criteriaHandler = (e) => {
  //   setCriteria(e.target.value);
  // };
  const logout = () => {
    //aqui borraremos el token y haremos log out :)
    // dispatch(userout({ credentials: {} }));

    //inmediatamente despues del logout, conduzco al usuario a home.
    return navigate("/");
  };

  if (userReduxCredentials?.token !== "") {
    //Esta comparativa viene a decirnos que SI tenemos un token

    return (
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img  className="logo" src={logo_front} alt="" onClick={()=> navigate('/')}/>{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Row>
                <Col>
                  <div
                    className="headersName nameUser"
                    onClick={() => navigate("/profile")}
                  >
                    {userReduxCredentials.credentials.name}
                  </div>
                </Col>
                <Col>
                  <div className="headersName" onClick={() => logout()}>
                    Logout
                  </div>
                </Col>
              </Row>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img className="logo" src={logo_front} alt="" onClick={()=> navigate('/')}/>{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Row>
                <Col>
                  <div
                    className="headersName"
                    onClick={() => navigate("/login")}
                  >
                    <FiLogIn /> Login
                  </div>
                </Col>
                <Col>
                  <div
                    className="headersName"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </div>
                </Col>
              </Row>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
