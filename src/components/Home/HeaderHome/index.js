// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Nav } from 'react-bootstrap';

// == Import : local
import './HeaderHome.scss';

class HeaderHome extends React.Component {

  componentDidMount(){
  }

  render() {
    return (


      <div 
        className="gamesList"
        style={{
          backgroundImage: `url(src/assets/img/fifa-bg.jpg)`,
        }}>
        <h1 className="gamesList__title">Bienvenue sur Coach-In !</h1>
        <p className="gamesList__description">
          Selectionne le jeu sur lequel tu veux progresser !
        </p>
        <nav className="gamesList__nav">
          <ul className="gamesList__nav__ul">
          
            <li><a className="gamesList__nav__ul--link" href="#">Fifa</a></li>
            <li><a className="gamesList__nav__ul--link" href="#">Overwatch</a></li>
            <li><a className="gamesList__nav__ul--link" href="#">Pubg</a></li>
            <li><a className="gamesList__nav__ul--link" href="#">Smash Ultimate</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}


// == Export
export default HeaderHome;
