import React, { useState, useEffect } from "react";
import "./Browser.css";
// import { useNavigate } from "react-router-dom";
// import { Col, Row } from "react-bootstrap";

const Browser = () => {
  const [criteria, setCriteria] = useState("");

  const inputHandler = (e) => {
    setCriteria(e.target.value);
  };
  return (
    <div className="browserDesign">
      <input
        name="criteria"
        placeholder="Empieza el entretenimiento"
        onChange={(e) => inputHandler(e)}
      />
    </div>
  );
};

export default Browser;
