import React, { useState } from "react";
import "./Serie.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
// import Details from "../Details/Details";

//Slices
import { movieData, addSerie } from "../../Containers/Series/serieSlice";

//Redux
import { useSelector, useDispatch } from "react-redux";

import Browser from "../../Components/Browser/Browser";

function Serie({ serie }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [hasRender, setRender] = useState(false);
  const [id, setId] = useState(0);

  const detailsSerie = (param) => {
    setRender(true);
    setId(param);
  };
  const clickedSerie = (serie) => {
    dispatch(addSerie({ ...serie, details: serie }));
    setTimeout(() => {
      navigate("/seriedetails");
    }, 750);
  };
  return (
    <div>
      <Row>
        {serie.map((ser, index) => (
          <Col
            key={index}
            className="divMovie"
            onClick={() => clickedSerie(ser)}
          >
            <img className="imgMovie" src={`${ser.photo}`} alt="" />
            <h6>{ser.name}</h6>
          </Col>
        ))}
      </Row>
      {serie.map((ser, index) => (
        <Col key={index} className="divMovie">
          <img className="imgMovie" src={`${ser.photo}`} alt="" />
          <h6>{ser.name}</h6>
        </Col>
      ))}
    </div>
  );
}

export default Serie;
