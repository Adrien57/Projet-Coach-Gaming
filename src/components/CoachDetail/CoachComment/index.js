// == Import : npm
import React from 'react';
import { Row, Col, Card, CardDeck, Figure } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

// == Import : local
import './coachComment.scss';

// == Composant

class CoachComment extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Row className="palmares">
        <Col xs={12} md={12}>
          <h2> Commentaires </h2>
          <CardDeck>
            <Card>
              <Figure>
                <Figure.Image
                  width={100}
                  alt="171x180"
                  src="src/assets/img/profil-coach.png"
                  roundedCircle
                />
                <Figure.Caption>
                user x
                </Figure.Caption>
              </Figure>
              <Card.Body>
                <Card.Title>5/5 <FaStar /></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Posté le 6 juillet 2019 </small>
              </Card.Footer>
            </Card>
            <Card>
              <Figure>
                <Figure.Image
                  width={100}
                  alt="171x180"
                  src="src/assets/img/profil-coach.png"
                  roundedCircle
                />
                <Figure.Caption>
                user x
                </Figure.Caption>
              </Figure>
              <Card.Body>
                <Card.Title>5/5 <FaStar /></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Posté le 6 juillet 2019 </small>
              </Card.Footer>
            </Card>
            <Card>
              <Figure>
                <Figure.Image
                  width={100}
                  alt="171x180"
                  src="src/assets/img/profil-coach.png"
                  roundedCircle
                />
                <Figure.Caption>
                user x
                </Figure.Caption>
              </Figure>
              <Card.Body>
                <Card.Title>5/5 <FaStar /></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Posté le 6 juillet 2019 </small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    );
  }
}

// == Export
export default CoachComment;
