// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';


// == Import : local
import './app.scss';
import Nav from 'src/containers/NavGaming';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';
import HomeUser from 'src/containers/HomeUser';
import EditProfil from 'src/components/EditProfil';
import FormCoach from 'src/components/FormCoach';
import Login from 'src/containers/Login';
import Game from 'src/containers/Game';
import CoachDetail from 'src/containers/CoachDetail';
import SignUp from '../SignUp';


class App extends React.Component {

  render() {
    const { loading } = this.props;
    return (
    <div id="app">
      {loading && (
      <div id="loading"> Chargement...</div>
    )}
    {!loading && (
      
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={HomeUser} />
          <Route path="/account/edit" exact component={EditProfil} />
          <Route path="/jeux/:slug/coachs" exact component={Game} />
          <Route path="/devenir-coach" exact component={FormCoach} />
          <Route path="/jeux/:slug/coachs/:slugcoach" exact component={CoachDetail} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/signup" exact component={SignUp} />
        </Switch>
        <Footer />
      </>
      )}
    </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
