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
      name: '',
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

  logout() {
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    // store.dispatch(changeLogged(false));
    <Redirect to={'/auth/login'} />
    window.location.reload();
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
          name: response.data.name,
        }, () => {
          console.log(this.state);
        })

      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const { redirect, name } = this.state;
    if (redirect) {
      return (<Redirect to={'/auth/login'} />
      );
    }
    return (
      <Container>
      <Row className="margin-row profil">
        <Col lg={12}>
        <Button onClick={this.logout}>Déconnexion</Button>
        <h1 className="profil-title">Bonjour ! <strong>{name}</strong></h1>
        <Nav className="justify-content-center form-nav" variant="pills">
          <NavLink to="/account" className="profil-link">
               Profil
          </NavLink>
            <span>/</span>
          <Nav.Item>
              <NavLink to="/account/edit" className="profil-link">
                  Modifier
              </NavLink>
          </Nav.Item>
          <span>/</span>
          <Nav.Item>
              <NavLink to="/account/mailbox" className="profil-link">
                  Messagerie
              </NavLink>
          </Nav.Item>
        </Nav>
        <Row className="margin-row">
          <Col lg={12}>
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
          </Col>
        </Row>
        </Col>
      </Row>
      </Container>
    );
  }
}


// == Export
export default Mailbox;
