// == Import : npm
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

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
    window.location.reload();
  }


  render() {
    const { redirect, data } = this.state;

    if (redirect) {
      return (<Redirect to={'/auth/login'} />
      );
    }
    
    return (
      <Row>
        <Col>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title mb-4">
                      <div className="d-flex justify-content-start">
                        <div className="image-container">
                          <img src={data.avatar} id="imgProfile" className="img-thumbnail" />
                        </div>
                        <div className="userData ml-3">
                          <h2 className="d-block title"> Profil de  {data.name}</h2>
                          <Button className="logout" onClick={this.logout} variant="outline-danger">Se déconnecter</Button>
                        </div>
                        <div className="ml-auto">
                          <input type="button" className="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Infos Profil</a>
                          </li>
                        </ul>
                        <div className="tab-content ml-1" id="myTabContent">
                          <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                            <div className="row">
                              <div className="col-sm-3 col-md-2 col-5">
                                <label>Pseudo</label>
                              </div>
                              <div className="col-md-8 col-6">
                                {data.username}
                              </div>
                            </div>
                            <hr />

<<<<<<< HEAD
                            <div className="row">
                              <div className="col-sm-3 col-md-2 col-5">
                                <label>Prenom</label>
                              </div>
                              <div className="col-md-8 col-6">
                                {data.name}
                              </div>
                            </div>
                            <hr />         
                            <div className="row">
                              <div className="col-sm-3 col-md-2 col-5">
                                <label>Nom</label>
                              </div>
                              <div className="col-md-8 col-6">
                                {data.lastname}
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-3 col-md-2 col-5">
                                <label>Age</label>
                              </div>
                              <div className="col-md-8 col-6">
                                {data.age}
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-3 col-md-2 col-5">
                                <label>Email</label>
                              </div>
                              <div className="col-md-8 col-6">
                                {data.email}
                              </div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
=======
      <div>
            <h1> Hello {data.name}</h1>
        <button type="button" onClick={this.logout}>logout</button>
      </div>
>>>>>>> master
    );
  }
}
// == Export
export default HomeUser;
