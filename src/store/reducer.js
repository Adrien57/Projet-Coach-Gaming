// == Initial State
const initialState = {
  games: [],
  loading: true,
  view: '',
  currentCoach: '',

};

// == Types
export const FETCH_GAMES = 'FETCH_GAMES';
const RECEIVE_GAMES = 'RECEIVE_GAMES';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      return {
        ...state,
        games: action.games,
        loading: false,
      };
    

    default:
      return state;
  }
};

// == Action Creators


export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});
// == Selectors


// == Export
export default reducer;
