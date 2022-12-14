import "./Serie.scss";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
// import Details from "../Details/Details";

//Slices
import { addSerie } from "../../Containers/Series/serieSlice";

//Redux
import { useDispatch } from "react-redux";

//Scss
import "./Serie.scss"

function Serie({ serie }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const clickedSerie= (serie) => {
    dispatch(addSerie({...serie, details: serie}))
    setTimeout(()=>{
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
            <h5 className="titleMovi">{ser.name}</h5>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Serie;
