// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

// == Import : local
import './reviews.scss';

class Reviews extends React.Component {
    state= {
      reviews: [],
    }

    componentDidMount() {
      axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/reviews`)
        .then((response) => {
          this.setState({
            reviews: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    render() {
      return (
        <div className="reviews">
          <h2>Ils se sont lancés ! </h2>
          <ul className="reviews-list">
            {this.state.reviews.map((review) => {
              return (
                <Card key={review.id} className="reviews-list__card">
                  <Card.Header className="reviews-list__card__header">{review.rating} <FaStar /></Card.Header>
                  <Card.Body className="reviews-list__card__body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        {review.comment}{' '}
                      </p>
                      <footer className="blockquote-footer">
                      Avis de <cite title="Source Title">{review.user.username}</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              );
            })}
          </ul>
          <div className="reviews-link">
            <Button href="#">Créer mon compte</Button>
          </div>
        </div>

      );
    }
}


// == Export
export default Reviews;
