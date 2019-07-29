// == Import : npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import : local
import './app.scss';
import NavGaming from 'src/components/NavGaming';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';


class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div id="app">
        <Container>
          <NavGaming />
          <Home />
          <Footer />
        </Container>
      </div>
    );
  }
}

// == Export
export default App;
