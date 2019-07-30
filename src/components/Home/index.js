// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import HeaderHome from 'src/components/Home/HeaderHome';
import CoachsList from 'src/components/CoachsList';
import Reviews from 'src/components/Home/Reviews';
import Informations from 'src/components/Home/Informations';

class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
        <HeaderHome />
        <CoachsList />
        <Reviews />
        <Informations />
      </div>
    );
  }
}


// == Export
export default Home;
