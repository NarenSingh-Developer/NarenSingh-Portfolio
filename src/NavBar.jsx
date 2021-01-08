import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import img from "./images/undraw_programming_2svr.svg";
import { Button } from '@material-ui/core';
import pdf from "./My CV/Naren Singh resume.pdf";

const NavBar = () => {
    return (
        <>
            <header id="home">
                <Container fluid="xl">
                    <Navbar expand="md" className="md_backcolor" variant="light">
                        <Navbar.Brand href="#home" className="text-light font-weight-bold">Naren Singh</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto text-center custom_nav_style" >
                                <Nav.Link  href="#home" className="mr-4">Home</Nav.Link>
                                <Nav.Link href={pdf} className="mr-4">My CV</Nav.Link>
                                <Nav.Link href="#skills" className="mr-4">Skills</Nav.Link>
                                <Nav.Link href="#contact" className="mr-4">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                <Container fluid>
                    <Row style={{ height: "100vh" }} className="mb-5">
                        <Col lg="6" md="6" className="MainIntro d-flex flex-column justify-content-center align-items-center text-light">
                            <div className="intro">
                                <h1>Hey</h1>
                                <h1>I AM NAREN SINGH</h1>
                                <p>Web Developer</p>
                                <Button href={pdf}>Get CV</Button>
                            </div>
                        </Col>
                        <Col lg="6" md="6" className="d-flex align-items-center justify-content-center">
                            <img src={img} />
                        </Col>
                    </Row>
                </Container>

            </header>
        </>
    );
}

export default NavBar;