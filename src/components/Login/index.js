// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav, Alert, Container } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import store from 'src/store';
import { changeLogged } from 'src/store/reducer';
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
    const { username, password } = this.state;

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
          console.log(responseJSON);
          if (responseJSON.data) {
            sessionStorage.setItem('userData', JSON.stringify(responseJSON));
            //fonction qui modifie la propiété "logged" de l'initial state en true;
            store.dispatch(changeLogged());
            this.setState({
              redirect: true,
              data: responseJSON.data,
            });
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
      <Container className="container">
        <Row className="margin-row form" style={{ marginTop: 50 }}>
          <Col lg={12} md={12} xs={12}>
            {redirect === true && (
            <Redirect to={{
              pathname: '/account',
            }} />
            
            )}
            {sessionStorage.getItem('userData') && (
            <Redirect to={{
              pathname: '/account',
            }} />
            )}
            
              <Nav className="justify-content-center form-links" variant="pills" defaultActiveKey="/home">
              <NavLink to="login"
              activeClassName="active"
              >
               Connexion
              </NavLink>
              <span>/</span>
              <Nav.Item>
                <NavLink to="signup"
                activeClassName="active"
                >
                  Inscription
                </NavLink>
              </Nav.Item>
              </Nav>
            <Form onSubmit={this.submitHandler}>
            <Form.Row>
              <Form.Group as={Col} md="12" sm="12" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Pseudo" name="username" value={username} onChange={this.changeHandler} className="form-input"/>
                
                {submitted && !username &&
                <div className="form-input-alert">Veuillez compléter ce champs*</div>}
                </Form.Group>

              <Form.Group as={Col} md="12" sm="12" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Mot de passe" name="password" value={password} onChange={this.changeHandler} className="form-input" />
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
              <Alert variant="danger" className="alert">Un ou plusieurs champs comporte des erreurs</Alert>
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
export default Login;
