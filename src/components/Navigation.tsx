import Nav from "react-bootstrap/Nav";
// import NavItem from 'react-bootstrap/NavItem';
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
// import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container
        fluid
        style={
          {
            /*maxWidth: '100% !important',
    textOverflow: 'ellipsis',
    overflowX: 'hidden',*/
          }
        }
      >
        <Navbar.Brand href="/">
          {/*<img src={logo} alt="Logo" id="logo" />*/}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
