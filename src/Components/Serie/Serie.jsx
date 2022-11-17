import React, { useState } from "react";
import "./Serie.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
// import Details from "../Details/Details";

function Serie({ serie }) {
  let navigate = useNavigate();
  const [hasRender, setRender] = useState(false);
  const [id, setId] = useState(0);

  const detailsSerie = (param) => {
    setRender(true);
    setId(param);
  };
  return (
    <Row>
          {serie.map((ser, index) => (
            <Col
              key={index}
              className="divMovie"
            >
              <img className="imgMovie" src={`${ser.photo}`} alt="" />
              <h6>{ser.name}</h6>
            </Col>
          ))}
        
      </Row>
  );
}

export default Serie;