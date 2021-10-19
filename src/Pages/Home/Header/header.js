import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const header = () => {
    return (
        <div className="header-description">
            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as {link} href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            <nav className="navbar navbar-expand-lg  bg-dark nav-section">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Rehana Medical College Hospital</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link active">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active">Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active">Publications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link active">Login</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default header;