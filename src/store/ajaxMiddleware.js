import axios from 'axios';

import { FETCH_GAMES, receiveGames, receiveCoachDetail, FETCH_COACH } from 'src/store/reducer';

// un middleware est une fonction qui intercepte les actions
// qui décide de laisser passer ou non et/ou de lancer des tâches annexes
// dans le middleware j'ai accès au store, et donc à ses méthode
// getState pour lire le state, dispatch pour émettre des actions susceptible de faire évoluer le state
// j'ai également accès à next, la fonction qui laisse passer une action
// j'ai également accès à l'objet action
const ajaxMiddleware = store => next => (action) => {
  // console.log('une action tente de passer', action);
  // on fait un switch pour décider quoi faire au cas par cas des actions interceptées
  switch (action.type) {
    case FETCH_GAMES:
      // en réponse à mon action je peux faire un effet annexe
      // ici lancer une requete axios
      axios.get('http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/games')
        .then((response) => {

          // en cas de succès de ma requete je récupère des data dans response
          const gamesFromApi = response.data;
          // je peux émettre une nouvelle action
          // le but de cette action ici est d'arriver dans le reducer pour impacter le state avec les recettes récuperées
          store.dispatch(receiveGames(gamesFromApi));
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
      break;
    case FETCH_COACH:

      axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coach`,{
        params: {
          slugCoach: this.props.params.slugCoach,
        },
      })
        .then((response) => {
          const coachDetailFromApi = response.data;
          store.dispatch(receiveCoachDetail(coachDetailFromApi));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    // par défaut je laisse passer toutes les actions pour lesquelles je ne veux rien faire de particulier
    default:
      // console.log('une action passe', action);
      next(action);
  }
};

export default ajaxMiddleware;
