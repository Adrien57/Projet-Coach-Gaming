
// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer, { fetchGames } from 'src/store/reducer';
import ajaxMiddleware from './ajaxMiddleware';
import { fetchCoach } from './reducer';

// == Store
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);


// j'initialise le store , donc juste après je lance mon action qui consiste a recevoir tout mes jeux en BDD

store.dispatch(fetchGames());


// == Export
export default store;
