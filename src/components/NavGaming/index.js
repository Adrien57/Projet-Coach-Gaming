/* eslint-disable no-else-return */
import React from 'react';
import { Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const NavGaming = ({ categories ,categoriesLogged, games }) => (
  <Navbar expand="lg" className="navbar">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto navbar-ul">
        {sessionStorage.getItem('userData') === null && (
          categories.map(({ route, label }) => {
            if (label === 'Jeux') {
              return (
              <NavDropdown key={label} title="Jeux" id="basic-nav-dropdown">
                {games.map(({ name, slug }) => (
                  <NavLink
                      exact
                      to={`/Jeux/${slug}/coachs`}
                      key={name}
                    >
                      <NavDropdown.Item href="#home" className="navbar-dropdown-item">{name}</NavDropdown.Item>
                    </NavLink>
                ))}
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
          })
        )}
        {sessionStorage.getItem('userData') && (
          categoriesLogged.map(({ route, label }) => {
            if (label === 'Jeux') {
              return (
                <NavDropdown key={label} title="Jeux" id="basic-nav-dropdown">
                {games.map(({ name, slug }) => (
                  <NavLink
                      exact
                      to={`/Jeux/${slug}/coachs`}
                      key={name}
                    >
                      <NavDropdown.Item href="#home" className="navbar-dropdown-item">{name}</NavDropdown.Item>
                    </NavLink>
                ))}
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
          })
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavGaming;
