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
<<<<<<< HEAD
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
       <Row className="margin-row form">
         <Col lg={12}>
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
=======
>>>>>>> master

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
                <Form.Control type="text" placeholder="Pseudo" name="username" value={username} onChange={this.changeHandler} className="form-input"/>
                
                {submitted && !username &&
                <div className="form-input-alert">Veuillez compléter ce champs*</div>}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Mot de passe" name="password" value={password} onChange={this.changeHandler} className="form-input" />
                {submitted && !password &&
              <div className="form-input-alert">Veuillez compléter ce champs*</div>}
              </Form.Group>
              <div className="button-center">
              <Button variant="primary" type="submit" onClick={this.redirectToHome} className="form-button">
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
export default Login;
