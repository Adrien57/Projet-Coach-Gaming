// == Import : npm
import { connect } from 'react-redux';
// hoc > high order component, fonction qui prend un composant,
// et retourne ce composant enrichi de données
// import { withRouter } from 'react-router-dom';

// == Import : local
import NavGaming from 'src/components/NavGaming';
import categoriesData from 'src/data/categories';
import categoriesDataLogged from 'src/data/categoriesLogged';


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  games: state.games,
  categories: categoriesData,
  categoriesLogged: categoriesDataLogged,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
const NavGamingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavGaming);

// == Export
// exemple d'utilisation d'un hoc,
// avant d'exporter mon composant
// je le passe dans une fonction qui l'enrichit de props
// export default withRouter(RecipeContainer);
export default NavGamingContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
