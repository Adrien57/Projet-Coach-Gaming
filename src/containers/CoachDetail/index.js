// == Import : npm
import { connect } from 'react-redux';
// hoc > high order component, fonction qui prend un composant,
// et retourne ce composant enrichi de données
// import { withRouter } from 'react-router-dom';

// == Import : local
import CoachDetail from 'src/components/CoachDetail';
import { fetchCoach } from 'src/store/reducer';


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  games: state.games,
  coachDetail: state.coachDetail,
  loadingCoach: state.loadingCoach,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({

});

// Container
const CoachDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachDetail);

// == Export
// exemple d'utilisation d'un hoc,
// avant d'exporter mon composant
// je le passe dans une fonction qui l'enrichit de props
// export default withRouter(RecipeContainer);
export default CoachDetailContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
