// == Import : npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import : local
import './app.scss';
import NavGaming from 'src/components/NavGaming';
import CoachDetail from 'src/components/CoachDetail';
import CoachFooter from 'src/components/Footer';

// == Composant

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div id="app">
        <Container>
          <NavGaming />
          <CoachDetail />
        </Container>
        <CoachFooter />
      </div>
    );
  }
}

// == Export
export default App;
