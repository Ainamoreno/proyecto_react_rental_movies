import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
//Css
import "./Login.css";

//Redux
import { useSelector, useDispatch } from "react-redux";

//UseNavigate
import { useNavigate } from "react-router-dom";

//React
import { useState, useEffect } from "react";

//Slice
import { userData, login } from "../userSlice";

//Services
import { loginUser } from "../../../services/loginUser";

//Icons
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiCursorClick } from "react-icons/hi";

//Decode JWT
import decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userReduxCredentials = useSelector(userData);
  console.log(userReduxCredentials);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handler = (e) => {
    setUser((objUser) => ({
      ...objUser,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (userReduxCredentials?.token !== "") {
      navigate("/");
    }
  }, []);
  const logMe = () => {
    loginUser(user).then((res) => {
      let jwt = res.data.jwt;
      const payload = decode(jwt);
      dispatch(login({ credentials: payload, token: jwt }));

      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };
  return (
    <Container className="loginDesign">
      <Row>
        <Col>
          <h3 className="text">
            Introduce tu e-mail y contraseña <br />{" "}
            <span>
              {" "}
              <h1 className="text">
                Y comienza a ver tus películas o series favoritas
              </h1>
            </span>
          </h3>
        </Col>
      </Row>
      <Form className="formLogin">
        <Form.Group className="mb-3 inputLogin">
          <Form.Label className="inputNameLogin">
            E-mail <MdEmail />
          </Form.Label>
          <Form.Control
            name="email"
            className="inputName"
            type="e-mail"
            placeholder="E-mail"
            onChange={(e) => handler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputLogin" controlId="formBasicEmail">
          <Form.Label className="inputNameLogin">
            Contraseña <RiLockPasswordFill />
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => handler(e)}
          />
        </Form.Group>
        <Button className="buttonForm" onClick={() => logMe()} variant="outline-dark">
          Iniciar sesión <HiCursorClick />
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
