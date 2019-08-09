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
      
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      console.log(sessionStorage.getItem('userData'));
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
    this.setState({
      redirect: true,
    });
  }


  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (<Redirect to={'/auth/login'} />
      );
    }
    return (

      <div>
        <h1>Hello</h1>
        <button type="button" onClick={this.logout}>logout</button>
      </div>
    );
  }
}

// == Export
export default HomeUser;
