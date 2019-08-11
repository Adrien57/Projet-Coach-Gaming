// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
      })
      console.log(this.state.data);
    })
    .catch((error) => {
      console.log(error);
    });
    
      // axios({
      //   method: 'get',
      //   url: `http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/api/profil/${this.state.slug}}`,
      // })
      //   .then((response) => {
      //     console.log(response);
          
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
  
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

      <div>

            <h1> Hello {data.name}</h1>

         
        <button type="button" onClick={this.logout}>logout</button>
      </div>
    );
  }
}

// == Export
export default HomeUser;
