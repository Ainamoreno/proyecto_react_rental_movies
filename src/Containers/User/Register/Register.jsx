
import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
// import { IconName } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md"
import { MdCalendarToday } from "react-icons/md"
import { MdCall } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { errorCheck } from "../../../services/useful";
//Css
import "./Register.css";

//Redux
// import { useSelector, useDispatch } from "react-redux";

//UseNavigate
// import { useNavigate } from "react-router-dom";

//React
import { useState, /*useEffect*/ } from "react";

//Slice
// import { userData, login } from "../userSlice";

//Services
// import { loginUser } from "../../../services/loginUser";

const Register = () => {

    //Hooks

    const [user, setUser] = useState({
        username: "",
        email: "",
        repeatEmail: "",
        date: "",
        phone: "",
        password: "",
        password2: ""
    });

    const [userError, setUserError] = useState({
        userNameError: "",
        emailError: "",
        repeatEmailError: "",
        dateError: "",
        phoneError: "",
        passwordError: "",
        password2Error: ""
    });

    //Handler inputs usuario

    const inputHandler = (e) => {

        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,


        }));
        console.log(e.target.value)
    }

    const errorHandler = (field, value, type) => {

        let error = "";

        error = errorCheck(value, type);

        setUserError(((prevState) => ({
            ...prevState,
            [field + "Error"]: error

        })));

    }


    return (
        <Container className="registerDesign">
            <Row>
                <Col>
                    <h4 className="tit">
                        ¿Aún no tienes cuenta? <br />{" "}
                        <span>
                            {" "}
                            <h2 className="tit">
                                Registrate gratis y empieza a disfrutar de todo nuestro contenido.
                            </h2>
                        </span>
                    </h4>
                </Col>
            </Row>

            <Form className="formLogin">

                <Form.Group className="mb-3 inputLogin">
                    <Form.Label className=".registerDesign">
                        Nombre y apellidos: <MdAccountCircle />
                    </Form.Label>
                    <Form.Control
                        name="userName"
                        className="inputName"
                        type="userName"
                        placeholder="Introduce tu nombre y apellidos"
                        onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")}
                    />
                    <Container>
                        <Row>
                            <Col>
                                <div className='errorInput'>{userError.userNameError}</div>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group className="mb-3 inputLogin">
                    <Form.Label className="inputNameLogin">
                        E-mail:  <MdEmail />
                    </Form.Label>
                    <Form.Control
                        name="email"
                        className="inputName"
                        type="e-mail"
                        placeholder="Introduce tu e-mail"
                        onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")}
                    />
                    <Container>
                        <Row>
                            <Col>
                                <div className='errorInput'>{userError.emailError}</div>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group className="mb-3 inputLogin">
                    <Form.Label className="inputNameLogin">
                        E-mail:  <MdEmail />
                    </Form.Label>
                    <Form.Control
                        name="repeatEmail"
                        className="inputName"
                        type="e-mail"
                        placeholder="Repite tu e-mail"
                        onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "repeatEmail")}
                    />
                    <Container>
                        <Row>
                            <Col>
                                <div className='errorInput'>{userError.repeatEmailError}</div>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group className="mb-3 inputLogin">
                    <Form.Label className="inputNameLogin">
                        Fecha de nacimiento <MdCalendarToday />
                    </Form.Label>
                    <Form.Control
                        name="birthDate"
                        className="inputName"
                        type="date"
                        placeholder="Introduce tu fecha de nacimiento"
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
                        onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "phone")}
                    />
                    <Container>
                        <Row>
                            <Col>
                                <div className='errorInput'>{userError.phoneError}</div>
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
                        onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")}
                    />
                    <Container>
                        <Row>
                            <Col>
                                <div className='errorInput'>{userError.passwordError}</div>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group className="mb-3 inputLogin" controlId="formBasicEmail">
                    <Form.Label className="inputNameLogin">
                        Repite la contraseña <RiLockPasswordFill />
                    </Form.Label>
                    <Form.Control
                        name="password2"
                        type="password"
                        placeholder="Repite la contraseña"
                        onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")}
                    />
                    <Container>
                        <Row>
                            <Col>
                                <div className='errorInput'>{userError.password2Error}</div>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Button variant="outline-dark">
                    Registrase
                </Button>
            </Form>
        </Container >
    );
};

export default Register;