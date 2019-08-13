// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col, CardDeck,Figure } from 'react-bootstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { IoIosStar } from 'react-icons/io';
import Rater from 'react-rater';

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
        <Row className="margin-row reviews">
          <h2 className="reviews-title">Ils ont déjà commencé</h2>
          <Col lg={12}>
            <Card.Body className="text-center">
              <CardDeck className="reviews-cardDeck">
                {this.state.reviews.map((review) => {

                return (
                  <Col key={review.id} xs={12} md={12} lg={4}>
                      <Card className="reviews-cardDeck cardborder" >
                        <Card.Title>
                        <div>
                          {review.user.username}
                        </div>
                        <Rater total={5} rating={review.rating} interactive={false} />
                         </Card.Title>
                        <Card.Text className="text-limit">
                        <div className="text-truncate">
                        {review.comment}
                        </div>
                        </Card.Text>
                        <Card.Footer className="text-muted">
                        Avis sur {review.info_coach.user.username}
                        </Card.Footer>
                      </Card>
                    </Col>
                  );
                })}
              </CardDeck>  
            </Card.Body>
          </Col>
        </Row>

      );
    }
}
// == Export
export default Reviews;
