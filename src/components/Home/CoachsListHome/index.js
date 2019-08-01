// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Figure, CardDeck, Row, Col } from 'react-bootstrap';
import axios from 'axios';

// == Import : local
import './coachsListHome.scss';

class CoachsListHome extends React.Component {

  state= {
    bestCoachs: [],
  }

  componentDidMount() {
    axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coachs`)
      .then((response) => {
        this.setState({
          bestCoachs: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Row>
        <Col xs={6} md={12}>
          <CardDeck>
            {this.state.bestCoachs.map(( coach ) => {
              return (
                <Card key={coach.id} >
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
                      {coach.rating}
                    </Figure.Caption>
                  </Figure>
                  <Card.Body>
                    <Card.Title>{coach.user.username}</Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{coach.team.name}</small>
                  </Card.Footer>
                </Card>
              );
            })};
          </CardDeck>
        </Col>
      </Row>
    );
  }
}

// == Export
export default CoachsListHome;
