import React, { useEffect } from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, InputGroup } from "react-bootstrap";

//React-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    console.log(content);
    console.log(user);
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
      console.log(res);
      setShow(true);
    }
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

      <Form className="formRegister">
        <div className="divRegister">
          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <MdAccountCircle />
            </InputGroup.Text>
            <Form.Control
              name="name"
              className="inputName"
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
              className="inputName"
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
              className="inputName"
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
              <MdCalendarToday />
            </InputGroup.Text>
            <Form.Control
              name="dateBirth"
              className="inputName datepicker"
              type="text"
              placeholder="yyyy-mm-dd"
              onChange={(e) => inputHandler(e)}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3 inputRegister">
            <InputGroup.Text id="basic-addon1">
              <MdCall />
            </InputGroup.Text>
            <Form.Control
              name="phone"
              className="inputName"
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
