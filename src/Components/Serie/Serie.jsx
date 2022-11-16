import React, { useState } from "react";
import "./Serie.css";
import { useNavigate } from "react-router-dom";
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
    <>
      {serie.map((mov, index) => (
        <div
          key={index}
          className="divSerie"
          onClick={() => detailsSerie(mov.id_article)}
        >
          <p>{mov.id_article}</p>
          <h4>{mov.name}</h4>
          <img className="imgSerie" src={`${mov.photo}`} alt="" />
        </div>
      ))}

      {/* {hasRender && <Details id={id} serie={serie} />} */}
    </>
  );
}

export default Serie;