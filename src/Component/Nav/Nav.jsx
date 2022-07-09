import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Nav.css"


const Navs = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">New Event</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">intro</Nav.Link>
                        <Nav.Link href="#">overview</Nav.Link>
                        <Nav.Link href="#">speakers</Nav.Link>
                        <Nav.Link href="#">program</Nav.Link>
                        <Nav.Link href="#">register</Nav.Link>
                        <Nav.Link href="#">venue</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs;
