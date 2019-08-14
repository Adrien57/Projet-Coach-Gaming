import React from 'react';
import { Jumbotron, Image, Col, Row } from 'react-bootstrap';

import './whoarewe.scss';

const WhoAreWe = () => (
  <Row className="whoarewe">
  <Col lg={12} xs={12} className="no-padding">
  <Jumbotron className="banniere">
    <h1 className="banniere__title">Mais c'est quoi ce truc ?</h1>
    <p className="banniere__description">Coach-gaming est une plateforme de coaching dédiée aux fans de jeux vidéos dans le but de débloquer la progression des joueurs de tous niveaux.
      Pour être référencés sur la plateforme CoachGaming, tous nos coachs ont été évalués en amont par nos sélectionneurs sur des critères très stricts tels que leurs compétences techniques, leurs aptitudes pédagogiques ou leurs capacités à partager leur expertise.
    </p>
  </Jumbotron>
  </Col>
  <Col lg={12} xs={12}>
 
  <Col lg={12} xs={12} className="no-padding">
  <Jumbotron className="why">
      <Row className="center-element">
      <Col lg={6} xs={12}>
        <h1 className="why__title">Pourquoi prendre des cours ?</h1>
      <p className="why__description">Tu touches un peu mais tu souhaites améliorer ta technique de jeu, tu veux connaître toutes les ficelles pour exploser tes amis ou tu recherches du coaching ingame intensif  ?<br/>
        Bénéficier de l’expertise de nos joueurs pros en cours individuel, c’est le moyen le plus rapide et le plus efficace voir la différence dans ton gameplay !
      </p>
      </Col>
      <Col lg={6} xs={12}>
      <div className="img-center">
        <Image className="why__image" src="https://images.unsplash.com/photo-1557860647-12c6c2c6ac0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></Image>
      </div>
      </Col>
      </Row>
  </Jumbotron>
  </Col>
 
  </Col>
  <Col lg={12} xs={12} className="no-padding">
  <Jumbotron className="rules">
      <Row className="rules-center-element">
      <Col lg={6} xs={12}>
      <div className="img-center">
        <Image className="rules__image" src="https://image.freepik.com/photos-gratuite/jeune-femme-jouant-controleur-jeu-video-pouce-leve-parce-qu-il-s-est-passe-quelque-chose-bien_1368-42320.jpg"></Image>
      </div>
        
      </Col>
      <Col className="rules-container" lg={6} xs={12}>
      <h1 className="rules__title">Les règles du jeu</h1>
      <p className="rules__description">
      Tous nos coachs sont sensibilisés pour éduquer les eleves aux bonnes pratiques, comme notamment les conditions idéales pour jouer, le contrôle du temps passé, ou les limites à se fixer. N’hésites pas à échanger avec tes enfants pour les accompagner dans un usage responsable des jeux vidéo à la maison, mieux encore partage une partie avec eux !<br/>
      </p>
      </Col>
      </Row>
  </Jumbotron>
  </Col>
  </Row>
);


export default WhoAreWe;
