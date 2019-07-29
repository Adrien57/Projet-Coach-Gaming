// == Initial State
const initialState = {
  games: [
    {
      name: 'Fifa',
      description: 'Le plus celebre des jeux de foot',
      header_background: "url de l'image",
      slug: 'fifa',
    },
    {
      name: 'Pubg',
      description: 'Le plus celebre des jeux de Battle Royal',
      header_background: "url de l'image",
      slug: 'pubg',
    },
    {
      name: 'Overwatch',
      description: 'Le plus celebre des jeux de roles',
      header_background: "url de l'image",
      slug: 'overwatch',
    },
    {
      name: 'Super Smash Bros Ultimate',
      description: 'Le plus celebre des jeux de combat Nintendo',
      header_background: "url de l'image",
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
