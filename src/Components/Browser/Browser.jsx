import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearch, cleanSearch } from "../../Containers/Series/serieSlice";
import { searchSeries } from "../../services/apiCalls";
import "./Browser.css";
// import { useNavigate } from "react-router-dom";
// import { Col, Row } from "react-bootstrap";

const Browser = () => {
  const dispatch = useDispatch();

  const [criteria, setCriteria] = useState("");


  const inputHandler = (e) => {
    setCriteria(e.target.value);
    console.log(e.target.value)
  }

  useEffect(() => {

    if(criteria !== ''){
      const bring = setTimeout(() => {
        searchSeries(criteria)
        .then(res => {
          dispatch(addSearch({movies : res.data.results}))
        })
        .catch(error => console.log(error))
      },350);
      return () => clearTimeout(bring);
    }else if (criteria === '') {
      dispatch(cleanSearch({series : []}))
    }
  },[criteria]);

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
