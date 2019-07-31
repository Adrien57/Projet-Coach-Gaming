// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, Button, Figure, Row, Col, CardDeck } from 'react-bootstrap';

// == Import : local
import './coachsList.scss';

const CoachsList = ({ coachs }) => {
  return (
    // <ul className="coachs-list">
    <Row>
      {coachs.map((coach) => {
        return (
          <Col xs={6} md={4}>
          <CardDeck>
                <Card>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src="holder.js/171x180"
                      roundedCircle
                    />
                    <Figure.Caption>
                   {coach.user.username}
                  </Figure.Caption>
                </Figure>
                  <Card.Body>
                    <Card.Title>Team</Card.Title>
                    <Card.Text>
                      {coach.team.logo_description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Link to={`coachs/${coach.user.slug}`}>
                    <Button>
                       Test coach
                    </Button>
                  </Link>
                  </Card.Footer>
                </Card>
           </CardDeck>
           </Col>
            );
            })}

    </Row>
  );
};

CoachsList.propTypes = {
  coachs: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// class CoachsList extends React.Component {

//   componentDidMount(){

// }

//   render() {
//     return (
//       <ul className="coachs-list">
//         <Card className="coachs-list__coach-card" style={{ width: '18rem' }}>
//           <Figure className="coach-card__figure">
//             <Figure.Image
//               className="coach-card--image"
//               width={171}
//               height={180}
//               alt="171x180"
//               src="src/assets/img/profil.jpg"
//               roundedCircle
//             />
//             <Figure.Caption>
//               Coach x
//             </Figure.Caption>
//           </Figure>
//           <Card.Body className="coach-card__body">
//             <Card.Title className="coach-card__body__title">Card Title</Card.Title>
//             <Card.Text className="coach-card__body__text">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </Card.Text>
//             <Button variant="primary">Profil</Button>
//           </Card.Body>
//         </Card>
//         <Card className="coachs-list__coach-card" style={{ width: '18rem' }}>
//           <Figure className="coach-card__figure">
//             <Figure.Image
//               className="coach-card__figure__image"
//               width={171}
//               height={180}
//               alt="171x180"
//               src="src/assets/img/profil.jpg"
//               roundedCircle
//             />
//             <Figure.Caption>
//               Coach x
//             </Figure.Caption>
//           </Figure>
//           <Card.Body className="coach-card__body">
//             <Card.Title className="coach-card__body__title">Card Title</Card.Title>
//             <Card.Text className="coach-card__body__text">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </Card.Text>
//             <Button variant="primary">Profil</Button>
//           </Card.Body>
//         </Card>
//         <Card className="coachs-list__coach-card" style={{ width: '18rem' }}>
//           <Figure className="coach-card__figure">
//             <Figure.Image
//               className="coach-card__figure__image"
//               width={171}
//               height={180}
//               alt="171x180"
//               src="src/assets/img/profil.jpg"
//               roundedCircle
//             />
//             <Figure.Caption>
//               Coach x
//             </Figure.Caption>
//           </Figure>
//           <Card.Body className="coach-card__body">
//             <Card.Title className="coach-card__body__title">Card Title</Card.Title>
//             <Card.Text className="coach-card__body__text">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </Card.Text>
//             <Button variant="primary">Profil</Button>
//           </Card.Body>
//         </Card>
//       </ul>

//     )
// };
// }

// == Export
export default CoachsList;
