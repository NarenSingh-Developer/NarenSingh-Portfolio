import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import img2 from "./images/undraw_percentages_0rur.svg";

const Skills = () => {
    return (
        <>
            <section className="skills pt-sm-5" id="skills">
                <Container>
                    <h2 className="text-center my-5">SKILLS</h2>
                    <Row className="mb-5">

                        <Col lg="6" className="d-flex justify-content-center">
                            <div className="w-75">
                                <h6>HTML</h6>
                                <ProgressBar now={90} label="80%" variant="primary" className="mb-3 " />
                                <h6>CSS</h6>
                                <ProgressBar now={80} label="80%" variant="success" className="mb-3 " />
                                <h6>JavaScript</h6>
                                <ProgressBar now={70} label="70%" variant="warning" className="mb-3 " />
                                <h6>React</h6>
                                <ProgressBar now={70} label="70%" variant="danger" className="mb-3 " />
                                <h6>Bootstrap 5</h6>
                                <ProgressBar now={80} label="80%" variant="secondary" className="mb-3 " />
                                <h6>Other</h6>
                                <ProgressBar now={60} label="60%" variant="info" />
                            </div>
                        </Col>
                        <Col lg="6" className="d-flex align-items-center justify-content-center">
                            <img src={img2} className="pt-5" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Skills;
