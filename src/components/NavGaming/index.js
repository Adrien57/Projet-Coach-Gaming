/* eslint-disable no-else-return */
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const NavGaming = ({ categories, games }) => (
  <Navbar bg="light" expand="lg" className="navbar">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {categories.map(({ route, label }) => {
          if (label === 'Jeux') {
            return (
              <NavDropdown key={label} title="Jeux" id="basic-nav-dropdown">
                {games.map(({ name, slug }) => {
                  return (
                    <NavLink
                      exact
                      to={`/Jeux/${slug}/coachs`}
                      key={name}
                    >
                      <NavDropdown.Item href="#home">{name}</NavDropdown.Item>
                    </NavLink>
                  );
                })}
              </NavDropdown>
            );
          }
          else {
            return (
              <NavLink
                exact
                to={route}
                key={label}
              >
                <Nav.Link href="#home">{label}</Nav.Link>
              </NavLink>
            );
          }
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavGaming.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
  games: PropTypes.array.isRequired,
};

export default NavGaming;
  
  // <Navbar bg="light" expand="lg" className="navbar">
  //     <Navbar.Brand href="#home">CoachGaming</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="mr-auto">
  //         <Nav.Link href="#home">Accueil</Nav.Link>

  //       <NavDropdown title="Jeux" id="basic-nav-dropdown">
  //         <NavDropdown.Item href="#action/3.1">Fifa 19</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.2">Overwatch</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.3">PUBG</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.4">SSBU</NavDropdown.Item>
  //       </NavDropdown>
  //       <Nav.Link href="#link">Qui sommes-nous?</Nav.Link>
  //       <Nav.Link href="#link">Devenir coach</Nav.Link>
  //     </Nav>
  //     <Nav>
  //       <Nav.Link href="#deets">Connexion/Inscription</Nav.Link>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>

