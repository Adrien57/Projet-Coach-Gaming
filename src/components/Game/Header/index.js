// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

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
    <div className="game-header">
      <header
        className="game-header__header"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 className="game-header__title">{name}</h1>
        <p className="game-header__description">
          {description}
        </p>
      </header>
      <nav className="game-header__nav">
        <ul className="game-header__nav__ul">
          <li><a className="game-header__nav__ul--link" href="#">Fifa</a></li>
          <li><a className="game-header__nav__ul--link" href="#">Overwatch</a></li>
          <li><a className="game-header__nav__ul--link" href="#">Pubg</a></li>
          <li><a className="game-header__nav__ul--link" href="#">Smash Ultimate</a></li>
        </ul>
      </nav>
    </div>
  );
};

// validation des props
// on va pouvoir recevoir des messages d'erreur si on ne reçoit pas
// des données du type attendu
Header.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  
};

// Export
export default Header;
