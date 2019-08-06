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
            backgroundImage: `url(src/assets/img/${name}.jpg)`,
          }}
        >
        <Card.ImgOverlay className="background-overlay">
          <Card.Title><h1>{name}</h1></Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </div>
        <Nav className="justify-content-center gamesList-nav" activeKey="/home">
            
        <NavLink
              exact
              to="/Jeux/fifa-19/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">Fifa 19</Nav.Item>
            </NavLink>
              
            <NavLink
              exact
              to="/Jeux/overwatch/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">Overwatch</Nav.Item>
            </NavLink>

            <NavLink
              exact
              to="/Jeux/pubg/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">Pubg</Nav.Item>
            </NavLink>

            <NavLink
              exact
              to="/Jeux/super-smash-bros-ultimate/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">SSBU</Nav.Item>
            </NavLink>
          </Nav>
      </Card>
    </React.Fragment>
  );
};

// validation des props
// on va pouvoir recevoir des messages d'erreur si on ne reçoit pas
// des données du type attendu
Header.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
};

// Export
export default Header;
