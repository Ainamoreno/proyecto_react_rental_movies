import axios from "axios";
import React, { useEffect, useState } from "react";
import Serie from "../../Components/Serie/Serie";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";


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
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>

        <Container fluid>
              {/* <Browser/> */}
            <Row>
                <Col>
                    <div><Serie serie={serie} /></div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Series;