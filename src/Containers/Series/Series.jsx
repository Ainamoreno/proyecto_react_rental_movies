import axios from "axios";
import React, { useEffect, useState } from "react";
import Serie from "../../Components/Serie/Serie";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Series.css";

const Series = () => {
    const [serie, setSerie] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "http://localhost:7001/shows/showTopRated";

    useEffect(() => {
        seriesTopRated()
    }, [])

    const seriesTopRated = async () => {
        setLoading(true);
        let res = await axios.get(url);
        setLoading(false);
        try {
            setSerie(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="serie"><Serie serie={serie} /></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Series;