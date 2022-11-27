import React from "react";
import { updateProfile } from "../../../../services/updateProfile";
import { useState } from "react";
//Slice
import { userData } from "../../userSlice";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, InputGroup } from "react-bootstrap";

//Icons
import { MdAccountCircle } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdCall } from "react-icons/md";

//Decode JWT
import decode from "jwt-decode";

//Slice
import { login } from "../../userSlice";

//React-router-dom
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const credentials = useSelector(userData);
  let email = credentials.credentials.email;
  let token = credentials.token;
  console.log(token);
  //Hooks
  const [user, setUser] = useState({
    name: "",
    dateBirth: "",
    phone: "",
    email: email,
  });
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const updateUser = async () => {
  
   await updateProfile(user, token).then((res) => {
      console.log(res);
      let jwt = res.data.jwt;
      const payload = decode(jwt);
      dispatch(login({ credentials: payload, token: jwt }));
      localStorage.setItem("TOKEN", JSON.stringify(jwt));
      navigate('/')
    });
  };

  return (
    <Container>
      <InputGroup className="mb-3 inputRegister">
        <InputGroup.Text id="basic-addon1">
          <MdAccountCircle />
        </InputGroup.Text>
        <Form.Control
          name="name"
          className="inputName"
          type="userName"
          onChange={(e) => inputHandler(e)}
          placeholder="Nombre y apellidos"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
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
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button
        className="buttonForm"
        onClick={() => updateUser()}
        variant="outline-dark"
      >
        Modifica
      </Button>
    </Container>
  );
}

export default UpdateProfile;
