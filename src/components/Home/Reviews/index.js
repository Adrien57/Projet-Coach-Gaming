// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import { IconContext } from "react-icons";
import { IoIosStar } from 'react-icons/io';

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
        <h2 className="reviews-title">Ce que pensent les élèves</h2>
          <Col lg={12}>
            <Card.Body className="text-center">
              <CardDeck className="reviews-cardDeck">
              
                {this.state.reviews.map((review) => {
                return (
                  <Col xs={12} md={12} lg={4}>
                      <Card key={review.id} >
                        <Card.Title>{review.rating}
                        <IconContext.Provider value={{ color: "rgb(230, 230, 142)", size:"1.2em" }}>
                        <IoIosStar />
                        </IconContext.Provider>
                         </Card.Title>
                        <Card.Text>
                        {review.comment}
                        </Card.Text>
                        <Card.Footer className="text-muted">
                        avis de {review.user.username}
                        </Card.Footer>
                      </Card>
                    </Col>
                );
              })}
                </CardDeck>
                <Button href="#">Créer mon compte</Button>
            </Card.Body>
          </Col>
        </Row>

      );
    }
}
// == Export
export default Reviews;
