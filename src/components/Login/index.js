// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// == Import : local
import './login.scss';

class Login extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
        <Row className="margin-row form">
          <Col lg={12}>
            <Nav className="justify-content-center" variant="pills" defaultActiveKey="/home">
              <NavLink to="login">
               Connexion
              </NavLink>
              
              <span>/</span>
              <Nav.Item>
                <NavLink to="signup">
                  Inscription
                </NavLink>
              </Nav.Item>
            </Nav>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Entrez votre mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Entrez votre mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Connexion
              </Button>
            </Form>
          </Col>
        </Row>
    );
  }
}


// == Export
export default Login;
