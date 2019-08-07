// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

// == Import : local
import './signup.scss';

class SignUp extends React.Component {

  state = {
    name: '',
    lastname: '',
    username: '',
    age: '',
    password: '',
    email: '',
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: 'post',
      url: 'http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/signup',
      data: this.state,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, lastname, username, age, password, email } = this.state;
    return (
      <Row className="margin-row form">
        <Col lg={12}>
          <Nav className="justify-content-center form-nav" variant="pills" defaultActiveKey="/home">
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

          <Form onSubmit={this.submitHandler}>
            <Form.Group as={Col} md="12" sm="12">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" value={lastname} onChange={this.changeHandler} name="lastname" />
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre prénom" value={name} onChange={this.changeHandler} name="name" />
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Label>Pseudo</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre pseudo" value={username} onChange={this.changeHandler} name="username" />
            </Form.Group>

            <Form.Group as={Col} md="4" sm="8" xs="6">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Entrez votre Age" max="100" min="13" value={age} onChange={this.changeHandler} name="age" />
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre mail" value={email} onChange={this.changeHandler} name="email" />
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Entrez votre mot de passe" value={password} onChange={this.changeHandler} name="password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="form-button">
              Connexion
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}


// == Export
export default SignUp;
