// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button, Figure, Row, Col, CardDeck } from 'react-bootstrap';
import Rater from 'react-rater';
// == Import : local
import './coachsList.scss';

const CoachsList = ({ coachs }) => {


  return (
    <Row className="margin-row coachlist">
      {coachs.map((coach) => {

        return (
         
          <Col key={coach.id} lg={12} md={6} lg={3}>
                  <Card key={coach.id} bg="dark" text="white" border="secondary" className="home-cardDeck-coach">
                    <Figure className="home-cardDeck-picture">
                      <Figure.Image
                        className="coach-card--image"
                        width={171}
                        height={180}
                        alt="171x180"
                        src={coach.user.avatar}
                        roundedCircle
                      />
                      <Figure.Caption className="home-cardDeck-rating">
                      {coach.user.username} <br></br>
                     <span>Team : {coach.team.name}</span> 
                        
                        
                      </Figure.Caption>
                    </Figure>
                  <Card.Body>
                    <Card.Title className="home-cardDeck-name">
                      <Rater total={5} rating={coach.rating} interactive={false}
                        />
                      </Card.Title>
                    <Card.Text>
                    <p className="home-cardDeck-price">{coach.price} &euro; / h</p>
                    </Card.Text>
                    <NavLink to={`/jeux/:slug/coachs/${coach.user.slug}`}>
                    
                    <Button className="home-cardDeck-button" variant="danger" size="lg" block>Voir le profil</Button>
                    </NavLink>
                  </Card.Body>
                </Card>
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
