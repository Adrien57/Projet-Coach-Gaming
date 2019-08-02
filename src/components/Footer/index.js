// == Import : npm
import React from 'react';
import { Row, Nav } from 'react-bootstrap';

// == Import : local
import './footer.scss';

// == Composant

class CoachFooter extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Row className="margin-row footer">
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
      </Row>
    );
  }
}

// == Export
export default CoachFooter;
