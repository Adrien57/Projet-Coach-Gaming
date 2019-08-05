// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Figure, CardDeck, Row, Col } from 'react-bootstrap';
import { IconContext } from "react-icons";
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
      <h2 className="home-title"> Choisis ton coach </h2>
        <Col lg={12}>
        <Card.Body>
          <CardDeck className="home-cardDeck">
            {this.state.bestCoachs.map(( coach ) => {
              return (
                <Col xs={12} md={6} lg={4}>
                  <Card key={coach.id} className="home-cardDeck-coach">
                    <Figure className="home-cardDeck-picture">
                      <Figure.Image
                        className="coach-card--image"
                        width={171}
                        height={180}
                        alt="171x180"
                        src="src/assets/img/profil.jpg"
                        roundedCircle
                      />
                      <Figure.Caption className="home-cardDeck-rating">
                        {coach.rating}
                        <IconContext.Provider value={{ color: "rgb(230, 230, 142)", size:"1.2em" }}>
                        <IoIosStar />
                        </IconContext.Provider>
                      </Figure.Caption>
                    </Figure>
                  <Card.Body>
                    <Card.Title className="home-cardDeck-name">{coach.user.username}</Card.Title>
                    <Card.Text>
                    {coach.team.name}
                    <p className="home-cardDeck-price">{coach.price} &euro; / h</p>
                    </Card.Text>
                    <Button variant="primary">Voir profil</Button>
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
