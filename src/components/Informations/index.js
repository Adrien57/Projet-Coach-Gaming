// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


// == Import : local
import './informations.scss';

const Informations = () => (
  <div className="informations">
    <h2 className="informations__title">Comment ça fonctionne ?</h2>
    <ul className="informations__list">
      <div className="informations__list-item">
        <div className="informations__list-item__step">1</div>
        <h3 className="informations__list-item__title">Choisis ton jeu</h3>
      </div>
      <div className="informations__list-item">
        <div className="informations__list-item__step">2</div>
        <h3 className="informations__list-item__title">Selectionne ton coach</h3>
      </div>
      <div className="informations__list-item">
        <div className="informations__list-item__step">3</div>
        <h3 className="informations__list-item__title">Amuse toi en apprenant</h3>
      </div>
      <div className="informations__list-item">
        <div className="informations__list-item__step">4</div>
        <h3 className="informations__list-item__title">Debrief avec ton coach</h3>
      </div>
    </ul>
    <div className="informations__button">
      <Button href="#">Créer mon compte</Button>
    </div>
  </div>
);

// == Export
export default Informations;
