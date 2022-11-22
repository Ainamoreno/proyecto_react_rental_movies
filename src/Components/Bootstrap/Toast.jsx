import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ToastRegister = ({ func }) => {
  const [show, setShow] = useState(false);

  const funcOC = (show) => {
    func();
    setShow(show);
  };

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Registrado correctamente</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Se ha registrado correctamente. Puede acceder al apartado 'iniciar sesión' y empezar a disfrutar de nuestra cartelería</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button className="buttonForm" onClick={() => funcOC(true)} variant="outline-dark">Regístrate</Button>
      </Col>
    </Row>
  );
};

export default ToastRegister;
