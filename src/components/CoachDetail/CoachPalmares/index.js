// == Import : npm
import React from 'react';
import { Row, Col, Figure } from 'react-bootstrap';

// == Import : local
import './coachPalmares.scss';

// == Composant

const CoachPalmares = ({ palmares }) => {
console.log(palmares.user.records);
  return (
    <Row className="details-row palmares">
      <Col xs={12} md={12}>
        <h2> Palmarès </h2>
        <Row>
        {palmares.user.records.map((palm) =>{
          return (
            <Col lg={6} xs={12}>
            <Figure>
              <Figure.Image
                width={170}
                height={180}
                alt="171x180"
                src={palm.logo.url}
                roundedCircle
              />
            </Figure>
            <p>{palm.description}</p>
          </Col>
          );
        })}

        </Row>
      </Col>
    </Row>
  );
}
   
// == Export
export default CoachPalmares;
