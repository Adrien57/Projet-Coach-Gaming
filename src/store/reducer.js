// == Initial State
const initialState = {
  games: [],
  loading: true,
  view: '',
  coachDetail: {},
  loadingCoach: true,

};

// == Types
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_COACH = 'FETCH_COACH';
const RECEIVE_GAMES = 'RECEIVE_GAMES';
const RECEIVE_COACH = 'RECEIVE_COACH';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      return {
        ...state,
        games: action.games,
        loading: false,
      };
    case RECEIVE_COACH:
      return {
        ...state,
        coachDetail: action.coachdetail,
        loadingCoach: false,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchCoach = () => ({
  type: FETCH_COACH,
});

export const receiveCoachDetail = coachdetail => ({
  type: RECEIVE_COACH,
  coachdetail,
});

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
