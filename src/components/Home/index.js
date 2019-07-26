// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import GamesList from 'src/components/GamesList';
import CoachsList from 'src/components/CoachsList';
import Reviews from 'src/components/Reviews';
import Informations from '../Informations';

class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
        <GamesList />
        <CoachsList />
        <Reviews />
        <Informations />
      </div>
    );
  }
}


// == Export
export default Home;
