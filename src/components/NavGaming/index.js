/* eslint-disable no-else-return */
import React from 'react';
import { Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const NavGaming = ({ categories, games }) => (
        <Navbar expand="lg" className="navbar">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto navbar-ul">
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
                      <NavDropdown.Item href="#home" className="navbar-dropdown-item">{name}</NavDropdown.Item>
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
                href="#home"
                className="navbar-ul-li"
              >
                {label}
              </NavLink>
            );
          }
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

<<<<<<< HEAD
=======
NavGaming.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
  games: PropTypes.array.isRequired,
};

>>>>>>> Axios-requests
export default NavGaming;
