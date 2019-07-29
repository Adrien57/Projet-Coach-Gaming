import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';

import './header.scss';

class Header extends React.Component {
  componentDidMount() {

  }


  render() {
    return (
      <Row>
        <Col>
          <Card className="bg-dark text-white header">
            <div className="img">
              <Card.Img src="src/assets/img/coach-background.jpg" alt="Card image" />
            </div>
            <Card.ImgOverlay>
              <Card.Title><h1>Devenir Coach</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>

          <Row>
            <Col>
              <h2>Candidature coach</h2>
            </Col>
          </Row>

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="lastname">
                <Form.Control type="email" placeholder="Nom" />
              </Form.Group>

              <Form.Group as={Col} controlId="name">
                <Form.Control type="text" placeholder="Prénom" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Control type="mail" placeholder="Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="name">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            

            <Form.Group controlId="formGridState" md="4">

              <Form.Control as="select">
                <option>Fifa 19</option>
                <option>PUBG</option>
                <option>Overwatch</option>
                <option>SSBU</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Palmarès" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Message" />
            </Form.Group>


            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Header;
