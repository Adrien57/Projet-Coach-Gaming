// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Imports locaux
import './header.scss';
import images from 'src/data/images';

// http://images.marmitoncdn.org/recipephotos/multiphoto/dc/dc7a000f-eb4c-42f4-91a6-320545207e72_normal.jpg

// en html ce serait
// style="background-image:url(MonUrl);"

// Composants
// on récupère props, c'est à dire un objet contenant  les propriétés
// qu'on a transmis dans src/components/App/index.js
const Header = (props) => {
  // on fait une destructuration pour stocker directement les prioriétés de l'objet props
  // qui nous intéresses dans des constantes
  const {
    name,
    description,
    image,
  } = props;
  return (
    <React.Fragment>

      <Card className="bg-dark text-white header-bg">
        <div
          className="gamesList"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
        <Card.ImgOverlay className="background-overlay">
          <Card.Title className="title"><h1>{name}</h1></Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
        </div>
        <Nav className="justify-content-center gamesList-nav">
            
        <NavLink
              exact
              to="/Jeux/fifa-19/coachs"
            >
              <Nav.Item href="/home">
              <div className="jm-logo">
                <a href="#">
                <span> 
                 <div className="gamesList-nav-li">
                 FIFA
                 </div>
                 </span>
                </a>
                </div>
                
              </Nav.Item>
            </NavLink>
              
            <NavLink
              exact
              to="/Jeux/overwatch/coachs"
            >
              <Nav.Item  href="/home">
              <div className="jm-logo">
                <a href="#">
                <span> 
                <div className="gamesList-nav-li">
                Overwatch
                 </div>
                 </span>
                </a>
                </div>
              </Nav.Item>
            </NavLink>

            <NavLink
              exact
              to="/Jeux/pubg/coachs"
            >
              <Nav.Item href="/home">
              <div className="jm-logo">
                <a href="#">
                <span> 
                <div className="gamesList-nav-li">
                Pubg
                 </div>
                 </span>
                </a>
                </div>
              </Nav.Item>
            </NavLink>

            <NavLink
              exact
              to="/Jeux/super-smash-bros-ultimate/coachs"
            >
              <Nav.Item href="/home">
              <div className="jm-logo">
                <a href="#">
                <span> 
                <div className="gamesList-nav-li">
                Ssbu
                 </div>
                 </span>
                </a>
                </div>
              </Nav.Item>
            </NavLink>
          </Nav>
      </Card>
    </React.Fragment>
  );
};


Header.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
};

// Export
export default Header;
