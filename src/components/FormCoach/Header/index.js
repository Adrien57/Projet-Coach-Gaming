import React from 'react';
import { Card, Form, Row, Col, Button, Jumbotron,Container } from 'react-bootstrap';

import './header.scss';

class Header extends React.Component {
  componentDidMount() {

  }


  render() {
    return (

      <>
      <Jumbotron className="become">
       
        
     
    </Jumbotron>
        <div>
          <h1 className="become-title">Tu veux devenir Coach ?</h1>
        <p className="become-description">
        Être un coach certifié te permet d’être référencé sur notre plateforme. Ton profil est proposé aux joueurs ayant des besoins d'apprentissage.Alors remplis vite ta candidature ci-dessous!
        </p>
        </div>
      <Form className="form">
        <Form.Row className="row">
          

        </Form.Row>
        <Form.Row className="row">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label className="form-label">Nom</Form.Label>
            <Form.Control placeholder="Ton nom" />
          </Form.Group>
    
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label className="form-label">Prénom</Form.Label>
            <Form.Control placeholder="Ton prénom" />
          </Form.Group>

        </Form.Row>

        <Form.Row className="row">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="form-label">Ville</Form.Label>
            <Form.Control placeholder="Ta ville" />
          </Form.Group>
    
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="form-label">Jeux</Form.Label>
            <Form.Control as="select">
              <option>Fifa 19</option>
              <option>Overwatch</option>
              <option>Super Smash Bros Ultimate</option>
              <option>Pubg</option>
            </Form.Control>
          </Form.Group>
    
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="form-label">Ta plateforme</Form.Label>
            <Form.Control as="select">
              <option>Xbox One</option>
              <option>Playstation 4</option>
              <option>PC</option>
              <option>Mobile</option>
            </Form.Control>

          </Form.Group>
        </Form.Row>
        <Form.Row className="row">
          <Form.Group as={Col} >
            <Form.Label className="form-label">Palmares</Form.Label>
            <Form.Control as="textarea" placeholder="Les trophés que tu as remporté avec ta team" />
          </Form.Group>
        </Form.Row>

        <Form.Row className="row">
          <Form.Group as={Col} >
            <Form.Label className="form-label">Message</Form.Label>
            <Form.Control as="textarea" placeholder="Si tu as un message à adresser a l'équipe d'admin n'hésite pas !" />
          </Form.Group>
        </Form.Row>
    
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Je certifie sur l'honneur avoir vérifié les renseignements fournis ci-dessus et déclare qu'à ma connaissance, ils sont exacts. " />
          <Button className="form-button" variant="primary" type="submit">
            Envoyer ma Candidature
          </Button>
        </Form.Group>
    
        
      </Form>
      </>
    );
  }
}

export default Header;
//  <Row>
//         <Col>
//           <Card className="bg-dark text-white header">
//             <div className="img">
//               <Card.Img src="src/assets/img/coach-background.jpg" alt="Card image" />
//             </div>
//             <Card.ImgOverlay>
//               <Card.Title><h1>Devenir Coach</h1></Card.Title>
//             </Card.ImgOverlay>
//           </Card>

//           <Row>
//             <Col>
//               <h2>Candidature coach</h2>
//             </Col>
//           </Row>

//           <Form>
//             <Form.Row>
//               <Form.Group as={Col} controlId="lastname">
//                 <Form.Control type="email" placeholder="Nom" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="name">
//                 <Form.Control type="text" placeholder="Prénom" />
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col} controlId="name">
//                 <Form.Control type="mail" placeholder="Email" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="name">
//                 <Form.Control type="password" placeholder="Password" />
//               </Form.Group>
//             </Form.Row>
            

//             <Form.Group controlId="formGridState" md="4">

//               <Form.Control as="select">
//                 <option>Fifa 19</option>
//                 <option>PUBG</option>
//                 <option>Overwatch</option>
//                 <option>SSBU</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea1">
//               <Form.Control as="textarea" rows="3" placeholder="Palmarès" />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea1">
//               <Form.Control as="textarea" rows="3" placeholder="Message" />
//             </Form.Group>


//             <Button variant="primary" type="submit">
//               Envoyer
//             </Button>
//           </Form>
//         </Col>
//       </Row>
