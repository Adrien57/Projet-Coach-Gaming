// == Import : npm
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from 'react-icons/md';
import {NavLink} from 'react-router-dom';

// == Import : local
import './informations.scss';

const Informations = () => (
  <Row className="informations margin-row how ">
    <h2 className="how-title">Comment ca marche ?</h2>
    <Col lg={12}>
      <Row className="informations__information how-elem ">
        <Col lg={3}>
          <MdLooksOne size="2em" />
          <h3 className="informations__information__title">La prise de conscience</h3>
          <p className="informations__information__description">Apprends à te connaitre et définis tes forces et tes faiblesses</p>
        </Col>
        <Col lg={3}>
          <MdLooksTwo size="2em" />
          <h3 className="informations__information__title">Reserve ton coach</h3>
          <p className="informations__information__description">Nos coachs sont certifiés, expérimentés et pédagogues pour une expérience la plus agréable possible ! </p>
        </Col>
        <Col lg={3}>
          <MdLooks3 size="2em" />
          <h3 className="informations__information__title">Apprendre avec les meilleurs</h3>
          <p className="informations__information__description">Rendez-vous sur ton jeu préféré avec ton coach et profite de ton cours particulier !</p>
        </Col>
        <Col lg={3}>
          <MdLooks4 size="2em" />
          <h3 className="informations__information__title">Suis ta progression</h3>
          <p className="informations__information__description">Debrief avec ton coach , analyse ta progression et tes axes de progression !</p>
        </Col>
      </Row>
      <NavLink to={'/auth/signup'}>
        <Button size="lg" className="form-button">Créer mon compte</Button>
      </NavLink>
    </Col>
  </Row>

);

// == Export
export default Informations;
