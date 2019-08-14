// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav, Alert, Container } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
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
    submitted: false,
    error: false,
    redirect: false,
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    
    this.setState({ submitted: true });
    const { name, lastname, username, age, password, email  } = this.state;

    // stop here if form is invalid
    if (!(username && password && name && lastname && age && email)) {
      return;
    }

    axios({
      method: 'post',
      url: 'http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/signup',
      data: this.state,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          redirect: true,
        })
      })
      .catch((error) => {
        this.setState({
          error: true,
         
        });
        console.log(error);
      });
  };


  render() {
    const { name, lastname, username, age, password, email, error, submitted, redirect } = this.state;
    return (
      <Container>
      <Row className="margin-row form" style={{ marginTop: 50 }}>
        <Col lg={12}>
        {redirect === true && (
          <Redirect to={{
              pathname: '/auth/login',
          }} />
        )}

          <Nav className="justify-content-center form-nav" variant="pills" defaultActiveKey="/home">
            <NavLink to="login"
                     
            >
               Connexion
            </NavLink>
              
            <span>/</span>
            <Nav.Item>
              <NavLink to="signup"
              >
                  Inscription
              </NavLink>
            </Nav.Item>
          </Nav>

          <Form onSubmit={this.submitHandler}>
            <Form.Row>
            <Form.Group as={Col} md="6" sm="12">
              <Form.Control type="text" placeholder="Nom de famille" value={lastname} onChange={this.changeHandler} name="lastname" className="form-input" />
              {submitted && !lastname &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
            </Form.Group>


              <Form.Group as={Col} md="6" sm="12">
              <Form.Control type="text" placeholder="Prénom" value={name} onChange={this.changeHandler} name="name" className="form-input" />
                {submitted && !name &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Control type="text" placeholder="Pseudo" value={username} onChange={this.changeHandler} name="username" className="form-input" />
              {submitted && !username &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
            </Form.Group>

            <Form.Group as={Col} md="4" sm="8" xs="6">
              <Form.Control type="number" placeholder="Age" max="100" min="13" value={age} onChange={this.changeHandler} name="age" className="form-input" />
              {submitted && !age &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Control type="email" placeholder="Mail" value={email} onChange={this.changeHandler} name="email" className="form-input" />
              {submitted && !email &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={this.changeHandler} name="password" className="form-input" />
              {submitted && !password &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
            </Form.Group>

            </Form.Row>
            <div className="button-center">
            <Button variant="primary" type="submit" className="form-button">
            Valider
            </Button>
            </div>
            {error === true && 
            (
            <p>
            <Alert variant="danger">Un ou plusieurs champs comporte des erreurs</Alert>
            </p>
            )
            }
          </Form>
        </Col>
      </Row>
      </Container>
    );
  }
}


// == Export
export default SignUp;
