// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Button, Row, Col, Nav, Container } from 'react-bootstrap';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import { MdEmail, MdCreate } from "react-icons/md";

// == Import : local
import './mailbox.scss';

class Mailbox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id:'',
      redirect: false,
      coachId: '',
      userID: '',
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
    const { redirect } = this.state;
    if (redirect) {
      return (<Redirect to={'/auth/login'} />
      );
    }
    return (
      <Container>
      <Row className="margin-row form" style={{ marginTop: 50 }}>
      <Nav className="form-nav" variant="pills" >
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
        <h1>Votre messagerie</h1>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title=<MdEmail size="1.5em"/>>
          <p>Message</p>
          </Tab>
          <Tab eventKey="profile" title= <MdCreate size="1.5em"/>>
            
          </Tab>
        </Tabs>
        </Col>
      </Row>
      </Container>
    );
  }
}


// == Export
export default Mailbox;
