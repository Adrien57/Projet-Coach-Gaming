// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from "react-icons/md";


// == Import : local
import './informations.scss';

const Informations = () => (
  <Row className="margin-row how">
    <h2 className="how-title">Comment ca marche ?</h2>
      <Col lg={12}>
        <Row className="how-elem">
          <Col lg={3}>
          <MdLooksOne  size="2em" />
            <p>Choisis ton jeu</p>
          </Col>
          <Col lg={3}>
          <MdLooksTwo  size="2em" />
            <p>Selectionne ton coach</p>
          </Col>
          <Col lg={3}>
          <MdLooks3  size="2em" />
            <p>Amuse toi en apprenant</p>
          </Col>
          <Col lg={3}>
          <MdLooks4  size="2em" />
            <p>Débrief avec ton coach</p>
          </Col>
          </Row>
          <Button>Créer mon compte</Button>
      </Col>
  </Row>

);

// == Export
export default Informations;
