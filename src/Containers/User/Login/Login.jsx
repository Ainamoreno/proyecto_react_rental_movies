import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, InputGroup } from "react-bootstrap";
//Css
import "./Login.scss";

//Redux
import { useDispatch } from "react-redux";

//UseNavigate
import { useNavigate } from "react-router-dom";

//React
import { useState, useEffect } from "react";

//Slice
import { login } from "../userSlice";

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

  const [user, setUser] = useState({
    email: "",
    password: "",
    message: "",
  });

  const handler = (e) => {
    setUser((objUser) => ({
      ...objUser,
      [e.target.name]: e.target.value,
    }));
  };

  let content = Object.values(user);
  let jwt = JSON.parse(localStorage.getItem('TOKEN'));
  useEffect(() => {
    if (jwt !== null) {
      navigate("/");
    }
  }, [ ]);
  const logMe = () => {
    for (let value of content) {
      if (value === "") {
        setUser({ ...user, message: "Debes rellenar todos los datos" });
      } else {
        loginUser(user).then((res) => {
          if(res.data.message === 'La contraseña o el email son incorrectos'){
           return setUser({ ...user, message: 'La contraseña o el email son incorrectos' });
          } else{
            let jwt = res.data.jwt;
          localStorage.setItem('TOKEN', JSON.stringify(jwt));
          const payload = decode(jwt);
          localStorage.setItem('CREDENTIALS', JSON.stringify(payload));
          dispatch(login({ credentials: payload, token: jwt }));
            navigate("/");
          }
        });
      }
    }
  };
  return (
    <Container fluid>
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
        <div className="divLogin">
          <InputGroup className="mb-3 inputLogin">
            <InputGroup.Text id="basic-addon1">
              <MdEmail />
            </InputGroup.Text>
            <Form.Control
              name="email"
              className="inputNameLogin"
              type="e-mail"
              placeholder="E-mail"
              onChange={(e) => handler(e)}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 inputLogin">
            <InputGroup.Text id="basic-addon1">
              <RiLockPasswordFill />
            </InputGroup.Text>
            <Form.Control
              name="password"
              className="inputNameLogin"
              type="password"
              placeholder="Contraseña"
              onChange={(e) => handler(e)}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <h6 className="errorRepeatInput">{user.message}</h6>
              </Col>
            </Row>
          </Container>
          <Button
            className="buttonForm"
            onClick={() => logMe()}
            variant="outline-dark"
          >
            Iniciar sesión <HiCursorClick />
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
