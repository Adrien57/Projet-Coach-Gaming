// == Import : npm
import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import categoriesData from 'src/data/categories';
import gamesData from 'src/data/games';

// == Import : local
import './app.scss';
import Nav from 'src/containers/NavGaming';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';
import FormCoach from 'src/components/FormCoach';
import Login from 'src/components/Login';
import Game from 'src/containers/Game';


class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div id="app">
        <Container>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/jeux/:slug" exact component={Game} />
            <Route path="/devenir-coach" exact component={FormCoach} />
            <Route path="/auth/login" exact component={Login} />
          </Switch>
          <Footer />
        </Container>
      </div>
    );
  }
}

// == Export
export default App;
