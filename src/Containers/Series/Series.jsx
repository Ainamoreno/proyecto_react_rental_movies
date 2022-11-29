import axios from "axios";
import React, { useEffect, useState } from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Browser from "../../Components/Browser/BrowserSeries";
import Serie from "../../Components/Serie/Serie";
import BorderExample from "../../Components/Bootstrap/Spinner/Spinner";


const Series = () => {
    const [serie, setSerie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [criteria, setCriteria,] = useState("");
    const url = "http://localhost:7001/shows/showTopRated";

    const inputHandler = (e) => {
        setCriteria(e.target.value)
    };

    useEffect(() => {
        seriesTopRated();
    }, []);

    const seriesTopRated = async () => {
        setLoading(true);
        let res = await axios.get(url);
        setLoading(false);
        try {
            setSerie(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    if (criteria !== "") {
        return (
            <Container>
                <input
                    name="criteria"
                    placeholder="Empieza el entretenimiento"
                    onChange={(e) => inputHandler(e)}
                />
                <Row>
                    <Browser criteria={criteria} />
                </Row>
            </Container>
        )
    } else {
        return (
            <Container fluid>
                <input
                    name="criteria"
                    placeholder="Empieza el entretenimiento"
                    onChange={(e) => inputHandler(e)}
                />
                {!loading ? (
                    <Row>
                        <Browser criteria={criteria} />
                        <Col>
                            <div><Serie serie={serie} /></div>
                        </Col>
                    </Row>
                ) : (<div><BorderExample /></div>)
                }

            </Container>
        );
    }

};

export default Series;