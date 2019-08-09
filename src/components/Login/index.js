// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav, Alert } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';

// == Import : local
import './login.scss';
import axios from 'axios';

class Login extends React.Component {

  state = {
    password: '',
    username: '',
    redirect: false,
    submitted: false,
    error: false,
    data: '',
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password  } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    if (this.state.username && this.state.password) {
      axios({
        method: 'post',
        url: 'http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/login',
        data: this.state,
      })
        .then((result) => {
          const responseJSON = result;
          if (responseJSON.data) {
            sessionStorage.setItem('userData', JSON.stringify(responseJSON));
            this.setState({
              redirect: true,
              data: responseJSON.data,
            });
            console.log(this.state.data);
          }
        })
        .catch((error) => {
          this.setState({
            error: true,
          });
        });
    }

  }

  render() {
    const { password, username, redirect, submitted, error } = this.state;

    return (
        <Row className="margin-row form">
          <Col lg={12}>
            {redirect === true && (
            <Redirect to={{
              pathname: '/account',
              state: { from: PropTypes.location },
            }} />
            )}
            {sessionStorage.getItem('userData') && (
            <Redirect to={{
              pathname: '/account',
              state: { from: PropTypes.location },
            }} />
            )}
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
            <Form onSubmit={this.submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Entrez votre mail</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" value={username} onChange={this.changeHandler} />
                {submitted && !username &&
                <div className="form-input-alert">Veuillez compléter ce champs*</div>}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Entrez votre mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
                {submitted && !password &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
              </Form.Group>
              <Button variant="primary" type="submit">
                Valider
              </Button>
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
    );
  }
}


// == Export
export default Login;
