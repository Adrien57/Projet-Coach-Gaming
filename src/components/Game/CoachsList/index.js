// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button, Figure, Row, Col, CardDeck } from 'react-bootstrap';

// == Import : local
import './coachsList.scss';

const CoachsList = ({ coachs }) => {


  return (
    <Row>
      {coachs.map((coach) => {

        return (
          <Col key={coach.id} xs={6} md={4}>
            <CardDeck>
            <Card bg="dark" text="white" border="info">
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src=""
                      roundedCircle
                    />
                    <Figure.Caption>
                      {coach.team.name}
                    </Figure.Caption>
                  </Figure>
                  <Card.Title>{coach.user.username}</Card.Title>
                  <Card.Body>
                    <Card.Title>{coach.user.username}</Card.Title>
                    <Card.Text>
                      {coach.team.logo_description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <NavLink to={`coachs/${coach.user.slug}`}>
                    <Button>
                       Voir le profil
                    </Button>
                  </NavLink>
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
