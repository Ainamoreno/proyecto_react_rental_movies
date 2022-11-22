import React, { useEffect } from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

//React-datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import { IconName } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { errorCheck } from "../../../services/useful";

//Css
import "./Register.css";

//Services
import { registerUser } from "../../../services/registerUser";

//React
import { useState /*useEffect*/ } from "react";
import ToastRegister from "../../../Components/Bootstrap/Toast";


const Register = () => {
  //Hooks
  const [user, setUser] = useState({
    name: "",
    email: "",
    dateBirth: "",
    phone: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    userNameError: "",
    emailError: "",
    repeatEmailError: "",
    dateError: "",
    phoneError: "",
    passwordError: "",
    password2Error: "",
  });

  const [repeatInput, setRepeatInputs] = useState({
    repeatEmail: "",
    repeatPassword: "",
    message: "",
  });

  //Handler inputs usuario

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlerRepeat = (e) => {
    setRepeatInputs((obj) => ({
      ...obj,
      [e.target.name]: e.target.value,
    }));
  };

  const compareInputs = () => {
    if (user.email !== repeatInput.repeatEmail) {
      setRepeatInputs({...repeatInput, message: "El e-mail no coincide" });
    } else if (user.password !== repeatInput.repeatPassword) {
      setRepeatInputs({...repeatInput, message: "La contraseña no coincide" });
    } else {
      registerMe();
    }
  };

  const errorHandler = (field, value, type) => {
    let error = "";

    error = errorCheck(value, type);

    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error,
    }));
  };

  const registerMe = () => {
    registerUser(user).then((res) => {
      console.log(res);
    });
  };


  return (
    <Container className="registerDesign">
      <Row>
        <Col>
          <h3 className="text">
            ¿Aún no tienes cuenta? <br />{" "}
            <span>
              {" "}
              <h1 className="text">
                Regístrate gratis y empieza a disfrutar de todo nuestro
                contenido.
              </h1>
            </span>
          </h3>
        </Col>
      </Row>

      <Form className="formLogin">
        <Form.Group className="mb-3 inputLogin">
          <Form.Label className="inputNameLogin">
            Nombre y apellidos: <MdAccountCircle />
          </Form.Label>
          <Form.Control
            name="name"
            className="inputName"
            type="userName"
            placeholder="Introduce tu nombre y apellidos"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.userNameError}</div>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3 inputLogin">
          <Form.Label className="inputNameLogin">
            E-mail: <MdEmail />
          </Form.Label>
          <Form.Control
            name="email"
            className="inputName"
            type="e-mail"
            placeholder="Introduce tu e-mail"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")}
          />
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.emailError}</div>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3 inputLogin">
          <Form.Label className="inputNameLogin">
            E-mail: <MdEmail />
          </Form.Label>
          <Form.Control
            name="repeatEmail"
            className="inputName"
            type="e-mail"
            placeholder="Repite tu e-mail"
            onChange={(e) => handlerRepeat(e)}
            onBlur={(e) =>
              errorHandler(e.target.name, e.target.value, "repeatEmail")
            }
          />
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.repeatEmailError}</div>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3 inputLogin">
          <Form.Label className="inputNameLogin">
            Fecha de nacimiento <MdCalendarToday />
          </Form.Label>
          <Form.Control
            name="dateBirth"
            className="inputName datepicker"
            type="text"
            placeholder="yyyy-mm-dd"
            onChange={(e) => inputHandler(e)}
          />
        </Form.Group>


        <Form.Group className="mb-3 inputLogin">
          <Form.Label className="inputNameLogin">
            Teléfono <MdCall />
          </Form.Label>
          <Form.Control
            name="phone"
            className="inputName"
            type="text"
            placeholder="Introduce tu teléfono"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "phone")}
          />
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.phoneError}</div>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3 inputLogin" controlId="formBasicEmail">
          <Form.Label className="inputNameLogin">
            Contraseña <RiLockPasswordFill />
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Introduce tu contraseña"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
          />
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.passwordError}</div>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group className="mb-3 inputLogin" controlId="formBasicEmail">
          <Form.Label className="inputNameLogin">
            Repite la contraseña <RiLockPasswordFill />
          </Form.Label>
          <Form.Control
            name="repeatPassword"
            type="password"
            placeholder="Repite la contraseña"
            onChange={(e) => handlerRepeat(e)}
            onBlur={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
          />
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.password2Error}</div>
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Container>
          <Row>
            <Col>
              <h6 className="errorRepeatInput">{repeatInput.message}</h6>
            </Col>
          </Row>
        </Container>
        <ToastRegister func={registerMe}/>
        <Button className="buttonForm" onClick={() => compareInputs()} variant="outline-dark">
          Registrase
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
