// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Nav, Figure } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// == Import : local
import './HeaderHome.scss';

class HeaderHome extends React.Component {

  componentDidMount(){
  }

  render() {
    return (
      <Card className="bg-dark text-white header-bg">
          <div
            className="gamesList"
            style={{
              backgroundImage: `url(http://conferencing.myvue.com/app/themes/vueconferencing/assets/img/esports-background.jpg)`,
            }}
            >
            <Card.ImgOverlay className="background-overlay gamesList__header ">
              <Card.Title className="gamesList__header__title"><h1>Bienvenue sur Coach Gaming</h1></Card.Title>
              <Card.Text className="gamesList__header__description">Le numero 1 des sites de Coachs E-sport qui n'attendent que toi ! </Card.Text>
            </Card.ImgOverlay>
          </div>
          <Nav className="justify-content-center gamesList-nav" activeKey="/home">
            
            <NavLink
              exact
              to="/Jeux/fifa-19/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">
                Fifa 19
              </Nav.Item>
            </NavLink>
              
            <NavLink
              exact
              to="/Jeux/overwatch/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">
                overwatch
              </Nav.Item>
            </NavLink>

            <NavLink
              exact
              to="/Jeux/pubg/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">
              PUBG
              </Nav.Item>
            </NavLink>

            <NavLink
              exact
              to="/Jeux/super-smash-bros-ultimate/coachs"
            >
              <Nav.Item className="gamesList-nav-li" href="/home">
              SSBU
              </Nav.Item>
            </NavLink>
          </Nav>
        </Card>
    );
  }
}

// == Export
export default HeaderHome;
