import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup } from "react-bootstrap";

// import { IconName } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { errorCheck } from "../../../services/useful";

//UseNavigate
import { useNavigate } from "react-router-dom";

//Css
import "./Register.scss";

//Services
import { registerUser } from "../../../services/registerUser";

//React
import { useState } from "react";
import ToastRegister from "../../../Components/Bootstrap/Toast/Toast";

const Register = () => {
  const navigate = useNavigate();
  //Hooks
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
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

  const errorHandler = (field, value, type) => {
    let error = "";

    error = errorCheck(value, type);

    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error,
    }));
  };
  const [show, setShow] = useState(false);
  let content = Object.values(user);

  const compareInputs = () => {
    let errorMessage;
    setRepeatInputs({
      repeatEmail: "",
      repeatPassword: "",
      message: "",
    });
    for (let value of content) {
      if (value === "") {
        errorMessage = "Debes rellenar todos los datos";
      }
    }
    if (user.email !== repeatInput.repeatEmail) {
      errorMessage = "El e-mail no coincide";
    } else if (user.password !== repeatInput.repeatPassword) {
      errorMessage = "La contraseña no coincide";
    }
    !errorMessage
      ? registerMe()
      : setRepeatInputs({ ...repeatInput, message: errorMessage });
  };
  const registerMe = async () => {
    let res = await registerUser(user);
    if (res.data === "Este e-mail ya ha sido registrado") {
      setRepeatInputs({ ...repeatInput, message: 'El e-mail ya ha sido registrado' });
    } else {
      setShow(true);
      setTimeout(()=> {
        navigate('/login')
      },5000)

    }
  };

  return (
    <Container fluid className="registerDesign">
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

      <Form className="formRegister">
        <div className="divRegister">
          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <MdAccountCircle />
            </InputGroup.Text>
            <Form.Control
              name="name"
              className="inputNameRegister"
              type="userName"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "text")
              }
              placeholder="Nombre y apellidos"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.userNameError}</div>
              </Col>
            </Row>
          </Container>

          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <MdEmail />
            </InputGroup.Text>
            <Form.Control
              name="email"
              className="inputNameRegister"
              type="e-mail"
              placeholder="E-mail"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "email")
              }
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.emailError}</div>
              </Col>
            </Row>
          </Container>

          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <MdEmail />
            </InputGroup.Text>
            <Form.Control
              name="repeatEmail"
              className="inputNameRegister"
              type="e-mail"
              placeholder="Repite e-mail"
              onChange={(e) => handlerRepeat(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "repeatEmail")
              }
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.repeatEmailError}</div>
              </Col>
            </Row>
          </Container>

          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <MdCall />
            </InputGroup.Text>
            <Form.Control
              name="phone"
              className="inputNameRegister"
              type="text"
              placeholder="Teléfono"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "phone")
              }
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.phoneError}</div>
              </Col>
            </Row>
          </Container>

          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <RiLockPasswordFill />
            </InputGroup.Text>
            <Form.Control
              name="password"
              className="inputNameRegister"
              type="password"
              placeholder="Contraseña"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.passwordError}</div>
              </Col>
            </Row>
          </Container>

          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <RiLockPasswordFill />
            </InputGroup.Text>
            <Form.Control
              name="repeatPassword"
              className="inputNameRegister"
              type="password"
              placeholder="Repite contraseña"
              onChange={(e) => handlerRepeat(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Container>
            <Row>
              <Col>
                <div className="errorInput">{userError.password2Error}</div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <h6 className="errorRepeatInput">{repeatInput.message}</h6>
              </Col>
            </Row>
          </Container>
          <ToastRegister
            registerMe={compareInputs}
            show={show}
            setShow={setShow}
          />
        </div>
      </Form>
    </Container>
  );
};

export default Register;
