// == Import : npm
import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import categoriesData from 'src/data/categories';
import gamesData from 'src/data/games';

// == Import : local
import './app.scss';
import NavGaming from 'src/components/NavGaming';
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
          <NavGaming categories={categoriesData} games={gamesData} />
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
{/* <>
        <nav className="nav">
          <Nav />
        </nav>
        <main className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/recipe/:slug"
              component={Recipe}
            />
            <Route component={Error} />
          </Switch>
        </main>
      </> */}

// == Export
export default App;
