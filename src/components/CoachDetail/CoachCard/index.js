import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Figure, Row, Col } from 'react-bootstrap';


import './coachCard.scss';

const CoachCard = ({ coach }) => {
return (
      <Card className="bg-dark text-white header">
        <Card.Img src="" height="400" />
          <Card.ImgOverlay>
            <Row>
              <Col xs={12} md={4}>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="src/assets/img/profil-coach.png"
                  />
                  <Figure.Caption>
                    <h3>{coach.user.username}</h3>
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6} md={4}>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  Fifa Team 2019
                </Card.Text>
                <Card.Title>Jeux</Card.Title>
                <Card.Text>
                  Fifa 2019
                </Card.Text>
                <Card.Title>Réseaux sociaux :</Card.Title>
                <Card.Link href="#">Facebook</Card.Link>
                <Card.Link href="#">Instagram</Card.Link>
                <Card.Link href="#">Twitter</Card.Link>
                <Card.Link href="#">Twitch</Card.Link>
              </Col>
              <Col xs={6} md={4}>
                <Card.Title>Tarif</Card.Title>
                <Card.Text>
                  30 € /h
                </Card.Text>
                <p>
                  <Button variant="primary">Réserver</Button>
                </p>
              </Col>
            </Row>
          </Card.ImgOverlay>
      </Card>
  );
};

CoachCard.propTypes = {
  coach: PropTypes.array.isRequired,
};


export default CoachCard;
