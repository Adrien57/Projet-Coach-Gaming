// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button, Figure, CardDeck, Row, Col } from 'react-bootstrap';
import { IconContext } from "react-icons";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { IoIosStar } from 'react-icons/io';
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
      <Row className="margin-row ">
      <Col>
      <h2 className="home-title">Nos Meilleurs Coachs</h2>

        <p className="home-title-description">Nos coachs sont issus de la scène eSport. Ils sont tous évalués en amont par nos sélectionneurs pour valider leurs compétences pédagogiques et techniques.</p>
      </Col>
        <Col lg={12}>
        <Card.Body>
          <CardDeck className="home-cardDeck">
            {this.state.bestCoachs.map(( coach ) => {
              return (
                <Col key={coach.id} xs={12} md={6} lg={4}>
                  <Card key={coach.id} bg="dark" text="white" border="secondary" className="home-cardDeck-coach">
                    <Figure className="home-cardDeck-picture">
                      <Figure.Image
                        className="coach-card--image"
                        width={171}
                        height={180}
                        alt="171x180"
                        src={coach.user.avatar}
                        roundedCircle
                      />
                      <Figure.Caption className="home-cardDeck-rating">
                      {coach.user.username} <br></br>
                     <span>Team : {coach.team.name}</span> 
                        
                        
                      </Figure.Caption>
                    </Figure>
                  <Card.Body>
                    <Card.Title className="home-cardDeck-name">
                      <Rater total={5} rating={coach.rating} interactive={false}
                        />
                      </Card.Title>
                    <Card.Text>
                    <p className="home-cardDeck-price">{coach.price} &euro; / h</p>
                    </Card.Text>
                    <NavLink to={`/jeux/:slug/coachs/${coach.user.slug}`}>
                    
                    <Button className="home-cardDeck-button" variant="danger" size="lg" block>Voir le profil</Button>
                    </NavLink>
                  </Card.Body>
                </Card>
                </Col>
              );
            })};
          </CardDeck>
          </Card.Body>
        </Col>
      </Row>
    );
  }
}

// == Export
export default CoachsListHome;
