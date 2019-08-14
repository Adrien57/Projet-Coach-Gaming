// == Import : npm
import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { Row, Col, Button, Nav, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { IoMdReturnLeft } from "react-icons/io";

// == Import : local
import './homeuser.scss';


class HomeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      data: [],
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      // on recoit bien le token 

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
    const token = data.data.token;
    const slug = data.data.user.slug;

    axios({
      method: 'get',
      url: `http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/api/profil/${slug}`,
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
      },

    })
      .then((response) => {
        const dataUser = response.data;
        this.setState({
          data: dataUser,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    // store.dispatch(changeLogged(false));
    <Redirect to={'/auth/login'} />
    window.location.reload();
  }


  render() {
    const { redirect, data } = this.state;

    if (redirect) {
      return (<Redirect to={'/auth/login'} />
      );
    }
    return (
      <Container>
      <Row className="margin-row profil">
        <Col lg={12}>
        <Button onClick={this.logout} variant="outline-danger"><IoMdReturnLeft /> Déconnexion</Button>
        <h1 className="profil-title">Bonjour ! <strong>{data.name}</strong></h1>
        <Nav className="justify-content-center" variant="pills">
          <NavLink to="/account" className="profil-link" >
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
          <Card >
            <Card.Body>
              <Card.Title className="profil-card-title">Mes Informations</Card.Title>
              <Card.Text>
                <Row>
                  <Col lg={6} xs={6} md={6}>
                    <label>Pseudo</label>
                  </Col>
                  <Col lg={6} xs={6} md={6}>
                  {data.username}
                  </Col>
                </Row>
                <hr></hr>
              </Card.Text>
              <Card.Text>
                <Row>
                  <Col lg={6} xs={6} md={6}>
                    <label>Nom</label>
                  </Col>
                  <Col lg={6} xs={6} md={6}>
                  {data.lastname}
                  </Col>
                </Row>
                <hr></hr>
              </Card.Text>
              <Card.Text>
              <Row>
                  <Col lg={6} xs={6} md={6}>
                    <label>Prenom</label>
                  </Col>
                  <Col lg={6} xs={6} md={6}>
                  {data.name}
                  </Col>
              </Row>
              <hr></hr>
              </Card.Text>
              <Card.Text>
              <Row>
                  <Col lg={6} xs={6} md={6}>
                    <label>Age</label>
                  </Col>
                  <Col lg={6} xs={6} md={6}>
                  {data.age}
                  </Col>
                </Row>
                <hr></hr>
              </Card.Text>
              <Card.Text>
              <Row>
                  <Col lg={6} xs={6} md={6}>
                    <label>Email</label>
                  </Col>
                  <Col lg={6} xs={6} md={6}>
                  {data.email}
                  </Col>
                </Row>
                <hr></hr>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Col>
      </Row>
      </Container>
    );
  }
}
// == Export
export default HomeUser;
