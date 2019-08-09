// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';

// == Import : local
import './login.scss';
import axios from 'axios';

class Login extends React.Component {

  state = {
    password: '',
    username: '',
    redirect: false,
    token: '',
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
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
            sessionStorage.setItem('userData', responseJSON);
            this.setState({
              redirect: true,
              token: responseJSON,
              
            });
          }console.log(this.state.token)
        })
        .catch((error) => {
          console.log(error);
        });
    }

  }

  getInfosProfil = (token) => {
    axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/api/profil/}`)
  }

  render() {
    const { password, username, redirect } = this.state;
    
    return (
      
        <Row className="margin-row form">
          <Col lg={12}>
            {redirect === true && (
            <Redirect to={'/account'} />
            )}
            {sessionStorage.getItem('userData') && (
            <Redirect to={'/account'} />
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
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Entrez votre mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Valider
              </Button>
            </Form>
          </Col>
        </Row>
    );
  }
}


// == Export
export default Login;
