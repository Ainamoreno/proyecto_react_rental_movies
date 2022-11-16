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
import './Header.css'

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img className="logo" src={logo_front} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Row>
              <Col>
                <div className="headersName" onClick={() => navigate("/login")}>
                  Login
                </div>
              </Col>
              <Col>
                <div className="headersName" onClick={() => navigate("/register")}>
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

export default Header;
