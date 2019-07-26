// == Import : npm
import React from 'react';
import { Container, Nav } from 'react-bootstrap';

// == Import : local
import './footer.scss';

// == Composant

class CoachFooter extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Nav className="justify-content-center footer" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Mentions-légales</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
  }
}

// == Export
export default CoachFooter;
