// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// == Import : local
import './coachDescription.scss';

// == Composant

const CoachDescription = ({ description }) => {

    return (
      <Row className="details-row description">
        <Col xs={12} md={12}>
          <h2> Description </h2>
          <p>{description.description}</p>
        </Col>
      </Row>
    );
  }

  CoachDescription.propTypes = {
    description: PropTypes.object.isRequired,
  };

// == Export
export default CoachDescription;
