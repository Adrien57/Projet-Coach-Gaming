// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Nav } from 'react-bootstrap';

// == Import : local
import './gamesList.scss';

class GamesList extends React.Component {

  componentDidMount(){
}

  render() {
    return (
      
    //   <Card className="gamesList">
    //     <Card.Img className="gamesList__img" src="src/assets/img/home.jpg" alt="Card image" />
    //     <Card.ImgOverlay>
    //       <Card.Title className="gamesList__title">Fifa 19</Card.Title>
    //       <Card.Text className="gamesList__description">
    // Le plus celebre des jeux de foot sur console !
    //       </Card.Text>
    //     </Card.ImgOverlay>
    //     {/* <nav className="gamesList__nav"> */}
    //       <ul className="gamesList__ul">
    //         <li>Fifa</li>
    //         <li>Overwatch</li>
    //         <li>Pubg</li>
    //         <li>Smash Ultimate</li>
    //       </ul>
    //     {/* </nav> */}
    //   </Card>
      
    
      

      <div className="gamesList">
        <h1 className="gamesList__title">Fifa 19</h1>
        <p className="gamesList__description">
          Le plus celebre des jeux de foot sur console !
        </p>
        <nav className="gamesList__nav">
          <ul className="gamesList__nav__ul">
            <li><a className="gamesList__nav__ul--link" href="#">Fifa</a></li>
            <li><a className="gamesList__nav__ul--link" href="#">Overwatch</a></li>
            <li><a className="gamesList__nav__ul--link" href="#">Pubg</a></li>
            <li><a className="gamesList__nav__ul--link" href="#">Smash Ultimate</a></li>
          </ul>
        </nav>
      </div> 
    );
  }
}


// == Export
export default GamesList;
