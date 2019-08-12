// == Import : npm
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaTrophy } from 'react-icons/fa';

// == Import : local
import './coachPalmares.scss';

// == Composant

class CoachPalmares extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Row className="details-row palmares">
        <Col xs={12} md={12}>
          <h2> Palmarès </h2>
          <Row>
            <Col lg={4}>
              <FaTrophy size="2em" />
              <p>Cup1</p>
            </Col>
            <Col lg={4}>
              <FaTrophy size="2em" />
              <p>Cup1</p>
            </Col>
            <Col md={4}>
              <FaTrophy size="2em" />
              <p>Cup1</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

// == Export
export default CoachPalmares;
