// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Header from 'src/components/Game/Header';
import CoachsList from 'src/components/CoachsList';

import './game.scss';

// == Composant
const Game = ({ game }) => (
  <div>
    <Header
      name={game.name}
      description={game.description}
    />
    <CoachsList />
  </div>
);

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default Game;
