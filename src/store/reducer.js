// == Initial State
const initialState = {
  games: [
    {
      name: 'Fifa',
      description: 'Le plus celebre des jeux de foot',
      headerBg: 'src/assets/img/fifa-bg.jpg',
      slug: 'fifa',
    },
    {
      name: 'Pubg',
      description: 'Le plus celebre des jeux de Battle Royal',
      headerBg: 'src/assets/img/pubg-bg.jpg',
      slug: 'pubg',
    },
    {
      name: 'Overwatch',
      description: 'Le plus celebre des jeux de roles',
      headerBg: 'src/assets/img/overwatch-bg.jpg',
      slug: 'overwatch',
    },
    {
      name: 'Super Smash Bros Ultimate',
      description: 'Le plus celebre des jeux de combat Nintendo',
      headerBg: 'src/assets/img/ssbu.jpg',
      slug: 'super-smash-bros-ultimate',
    },
  ],
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

// == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});


// == Selectors


// == Export
export default reducer;
