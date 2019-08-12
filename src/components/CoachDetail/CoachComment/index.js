// == Import : npm
import React from 'react';
import { Row, Col, Card, CardDeck, Figure } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Rater from 'react-rater';

// == Import : local
import './coachComment.scss';

// == Composant

const CoachComment = ({ comment }) => {
  return (
    <Row className="details-row reviews description-reviews">
      <Col xs={12} md={12} >
        <h2> Commentaires </h2>
        <CardDeck className="description-reviews-card">
        {comment.reviews.map((review)=> {
          return (
            <Col key={review.id} xs={12} md={12} lg={6}>
            <Card>
            <Card.Body>
              <Card.Title><Rater total={5} rating={review.rating} interactive={false} /></Card.Title>
              <Card.Text>
              <div className="text-truncate">
              {review.comment}
              </div>
              
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Posté le 6 juillet 2019 par {review.user.username} </small>
            </Card.Footer>
          </Card>
            </Col>
          );
        })}
         
        </CardDeck>
      </Col>
    </Row>
  );
};

CoachComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

// == Export
export default CoachComment;
