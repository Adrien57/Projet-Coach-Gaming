// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import GamesList from 'src/components/Home/GamesList';
import CoachsList from 'src/components/Home/CoachsList';
import Reviews from 'src/components/Home/Reviews';
import Informations from 'src/components/Home/Informations';

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
