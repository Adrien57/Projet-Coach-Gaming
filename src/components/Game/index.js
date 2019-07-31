// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Header from 'src/components/Game/Header';
import CoachsList from 'src/components/Game/CoachsList';

import './game.scss';

// == Composant
const Game = ({ games }) => (
  <div>
    <Header
      name={games.name}
      description={games.description}
      image={games.header_background}
    />
    <CoachsList coachs={games.info_coaches} />
  </div>
);

Game.propTypes = {
  games: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    header_background: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default Game;
