// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Figure, CardDeck, Row, Col } from 'react-bootstrap';

// == Import : local
import './coachsListHome.scss';

class CoachsListHome extends React.Component {

  componentDidMount(){
}

  render() {
    return (
    <Row>
      <Col xs={6} md={12}>
      <CardDeck>
        <Card>
          <Figure className="coach-card__figure">
            <Figure.Image
              className="coach-card--image"
              width={171}
              height={180}
              alt="171x180"
              src="src/assets/img/profil.jpg"
              roundedCircle
            />
            <Figure.Caption>
              Coach x
            </Figure.Caption>
          </Figure>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Figure className="coach-card__figure">
            <Figure.Image
              className="coach-card--image"
              width={171}
              height={180}
              alt="171x180"
              src="src/assets/img/profil.jpg"
              roundedCircle
            />
            <Figure.Caption>
              Coach x
            </Figure.Caption>
          </Figure>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Figure className="coach-card__figure">
            <Figure.Image
              className="coach-card--image"
              width={171}
              height={180}
              alt="171x180"
              src="src/assets/img/profil.jpg"
              roundedCircle
            />
            <Figure.Caption>
              Coach x
            </Figure.Caption>
          </Figure>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      </Col>
    </Row>
    );
  }
}

// == Export
export default CoachsListHome;
