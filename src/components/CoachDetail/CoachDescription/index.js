// == Import : npm
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// == Import : local
import './coachDescription.scss';

// == Composant

class CoachDescription extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Row className="description">
        <Col xs={12} md={12}>
          <h2> Description </h2>
          <p>Salut à tous :)
            Après plusieurs années de compétition au plus haut niveau, j'ai engrangé beaucoup d'expérience que je souhaite désormais vous transmettre en devenant coach FIFA sur GamerCoach !
            En cours, j'analyserai ton gameplay pour déceler tes points faibles et les travailler.
            Nous pourrons également travailler ton mental et la gestion d'un match. 
            Alors si tu es prêt à écouter mes conseils pour franchir un cap, réserve vite une heure de coaching avec moi !
            Mon rank sur fifa.gg
          </p>
        </Col>
      </Row>
    );
  }
}

// == Export
export default CoachDescription;
