import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './nav.scss';

class NavGaming extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#home">CoachGaming</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <NavDropdown title="Jeux" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fifa 19</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Overwatch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PUBG</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">SSBU</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Qui sommes-nous?</Nav.Link>
            <Nav.Link href="#link">Devenir coach</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Connexion/Inscription</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavGaming;
