// == Import : npm
import { connect } from 'react-redux';
// hoc > high order component, fonction qui prend un composant,
// et retourne ce composant enrichi de données
// import { withRouter } from 'react-router-dom';

// == Import : local
import HomeUser from 'src/components/HomeUser';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  logged: state.logged,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {
    
};

// Container
const HomeUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeUser);

// == Export
// exemple d'utilisation d'un hoc,
// avant d'exporter mon composant
// je le passe dans une fonction qui l'enrichit de props
// export default withRouter(RecipeContainer);
export default HomeUserContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
