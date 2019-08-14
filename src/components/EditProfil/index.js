// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Nav, Alert, Container } from 'react-bootstrap';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';

// == Import : local
import './editprofil.scss';

class EditProfil extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id:'',
      avatar: '',
      name: '',
      lastname: '',
      username: '',
      age: '',
      password: '',
      email: '',
      redirect: false,
    }
  }


  componentDidMount() {
    if(sessionStorage.getItem('userData')){
      this.getUserData();
    }
    else {
      this.setState({
        redirect: true,
      });
    }
  }


  getUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    const {token} = data.data;
    const {slug} = data.data.user;

    axios({
      method: 'get',
      url: `http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/api/profil/${slug}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

    })
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          lastname: response.data.lastname,
          username: response.data.username,
          age: response.data.age,
          password: response.data.password,
          email: response.data.email,
        }, () => {
          console.log(this.state);
        })

      })
      .catch((error) => {
        console.log(error);
      });
  }

  editUserData(userData) {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    const {token } = data.data;
    const userId = this.state.id;


    axios({
      method: 'patch',
      url: `http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/api/edit/profil/${userId}`,
      data: userData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      age: this.state.age,
      password: this.state.password,
    };
    this.editUserData(userData);
  };


  render() {
    const { redirect, name, lastname, username, age, password, email } = this.state;
    if (redirect) {
      return (<Redirect to={'/auth/login'} />
      );
    }
    return (
      <Container>
      <Row className="margin-row form" style={{ marginTop: 50 }}>
      <Nav className="form-nav" variant="pills">
          <NavLink to="/account">
               Profil
          </NavLink>
              
            <span>/</span>
          <Nav.Item>
              <NavLink to="/account/edit">
                  Modifier
              </NavLink>
          </Nav.Item>
          <span>/</span>
          <Nav.Item>
              <NavLink to="/account/mailbox">
                  Messagerie
              </NavLink>
          </Nav.Item>
        </Nav>
        <Col lg={12}>
        <h1>Modification</h1>

          <Form onSubmit={this.submitHandler}>
            <Form.Row>
            <Form.Group as={Col} md="6" sm="12">
              <Form.Control type="text" placeholder="Nom de famille" value={lastname} onChange={this.changeHandler} name="lastname" className="form-input" />

            </Form.Group>


              <Form.Group as={Col} md="6" sm="12">
              <Form.Control type="text" placeholder="Prénom" value={name} onChange={this.changeHandler} name="name" ref="name" className="form-input" />

            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Control type="text" placeholder="Pseudo" value={username} onChange={this.changeHandler} name="username" ref="username" className="form-input" />

            </Form.Group>

            <Form.Group as={Col} md="4" sm="8" xs="6">
              <Form.Control type="number" placeholder="Age" max="100" min="13" value={age} onChange={this.changeHandler} name="age" ref="age" className="form-input" />

            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              
              <Form.Control type="email" placeholder="Mail" value={email} onChange={this.changeHandler} name="email" ref="email" className="form-input" />

            </Form.Group>

            <Form.Group as={Col} md="12" sm="12">
              <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={this.changeHandler} name="password" ref="password" className="form-input" />

            </Form.Group>

            </Form.Row>
            <div className="button-center">
            <Button variant="primary" type="submit" className="form-button">
            Valider
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
      </Container>
    );
  }
}


// == Export
export default EditProfil;
