// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Header,Button } from 'react-bootstrap';
import axios from 'axios';

// == Import : local
import './reviews.scss';

class Reviews extends React.Component {

    state= {
      reviews:[],
    }

    componentDidMount() {
      axios.get(`http://sylvere-leipertz.vpnuser.oclock.io/projet-CoachsGaming-back/coach-gaming/public/game/coucou`)
        .then((response) => {
          console.log(response);
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
          <Card className="reviews-list__card">
            <Card.Header className="reviews-list__card__header">Quote</Card.Header>
            <Card.Body className="reviews-list__card__body">
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="reviews-list__card">
            <Card.Header className="reviews-list__card__header">Quote</Card.Header>
            <Card.Body className="reviews-list__card__body">
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="reviews-list__card">
            <Card.Header className="reviews-list__card__header">Quote</Card.Header>
            <Card.Body className="reviews-list__card__body">
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
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
