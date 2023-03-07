import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand">
          ADMIN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link className="navLink" as={NavLink} to="/">
              Rooms
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="/Bookings">
              Bookings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
