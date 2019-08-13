import React from 'react';
import {Row, Col, Jumbotron,Button,Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './page404.scss';


const Page404 = () => {
  
  return(
    <div className="page404">
      <h2 className="page404__title">Cette page n'existe pas enfin celle-ci oui mais pas celle que vous vous attendiez à trouver ici.<br></br>On parle de celle que vous pensiez trouver à l'origine, qui contient du texte, des images,des mots, des lettres, des chiffres, Julien Lepers, des helicoptères , bref si tu veux revenir à l'accueil clique sur le bouton juste en dessous... </h2>
      <NavLink className="page404__button" to={`/`}>
      <Button variant="success" >Revenir à l'accueil</Button>
      </NavLink>
     <Image className="page404__image" src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif"></Image>
    </div>
  )}

export default Page404;
