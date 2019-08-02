// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Nav } from 'react-bootstrap';

// Imports locaux
import './header.scss';

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
          <Card.Title><h1>{name}</h1></Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </div>
        <Nav className="justify-content-center gamesList-nav" activeKey="/home">
            <Nav.Item className="gamesList-nav-li">
              <Nav.Link href="/home">Fifa</Nav.Link>
            </Nav.Item>
            <Nav.Item className="gamesList-nav-li">
              <Nav.Link eventKey="link-1">Overwatch</Nav.Link>
            </Nav.Item>
            <Nav.Item className="gamesList-nav-li">
              <Nav.Link eventKey="link-2">PUBG</Nav.Link>
            </Nav.Item>
            <Nav.Item className="gamesList-nav-li">
              <Nav.Link eventKey="link-2">SSBU</Nav.Link>
            </Nav.Item>
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
