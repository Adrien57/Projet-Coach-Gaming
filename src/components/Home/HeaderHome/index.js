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
        <Card className="bg-dark text-white header-bg">
          <div
            className="gamesList"
            style={{
              backgroundImage: `url(src/assets/img/coach-bg.jpg)`,
            }}
            >
            <Card.ImgOverlay className="background-overlay">
              <Card.Title><h1>Bienvenu sur coach in</h1></Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
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
    );
  }
}


// == Export
export default HeaderHome;
