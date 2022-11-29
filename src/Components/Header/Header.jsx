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
import "./Header.scss";

//Icons
import { FiLogIn } from "react-icons/fi";

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
    localStorage.setItem("TOKEN", JSON.stringify(null));
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };
  let jwt = JSON.parse(localStorage.getItem('TOKEN'));
  let payload = JSON.parse(localStorage.getItem('CREDENTIALS'));
  if (jwt !== null) {
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
                    {payload.name}
                  </div>
                </Col>
                <Col>
                  <div className="headersName" onClick={() => logout()}>
                    Cierra sesión
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
                    <FiLogIn /> Iniciar sesión
                  </div>
                </Col>
                <Col>
                  <div
                    className="headersName"
                    onClick={() => navigate("/register")}
                  >
                    Regístrate
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
