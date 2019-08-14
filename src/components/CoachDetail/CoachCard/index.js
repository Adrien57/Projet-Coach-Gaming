import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Button, Figure, Row, Col, Jumbotron } from 'react-bootstrap';
import { FaTwitch, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';


import './coachCard.scss';

class CoachCard extends React.Component {

  componentDidMount() {

  }

  render() {
    const { coachDetail } = this.props;
    return (
      <Col lg={12} sm={12} >
      <Jumbotron className="detail">
        <Row className="detail-row">
          <Col md={4} sm={12} xs={12} className="detail-figure">
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={coachDetail.user.avatar}
                rounded
                />
                <Figure.Caption className="detail-username">
                  <h3>{coachDetail.user.username}</h3>
                </Figure.Caption>
            </Figure>
          </Col>
          <Col md={4} sm={6} xs={12} className="detail-team">
          <h3>Team</h3>
          <p>
          <Figure >
            <Figure.Image
                width={50}
                alt="171x180"
                src={coachDetail.team.logo}
                rounded
                />
                <Figure.Caption>
                  <h4 className="detail-logo-text">{coachDetail.team.name}</h4>
                </Figure.Caption>
            </Figure>
            
          </p>
          <div className="social">
          <h3>Réseaux sociaux</h3>
          <Nav as="ul" >
            <Nav.Item as="li">
              <Nav.Link href={coachDetail.facebook}><FaFacebookF size="1.5em" /></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href={coachDetail.insta}><FaInstagram size="1.5em" /></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href={coachDetail.youtube}><FaYoutube size="1.5em" /></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href={coachDetail.twitch}><FaTwitch size="1.5em" /></Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
          </Col>
          <Col md={4} sm={6} xs={12} className="detail-price">
          
          <h2>Tarif</h2>
          <p>
            {coachDetail.price} &euro; / H
          </p>
          <p>
          
                <Button variant="primary" className="detail-button">Contacter</Button>
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </Col>
    );
  }
}

CoachCard.propTypes = {
  coachDetail: PropTypes.object.isRequired,
};


export default CoachCard;
