// == Initial State
const initialState = {
  games: [],
  loading: true,
  view: '',
coachDetail: {
    "price": 10,
    "description": "Modi ut vel qui deserunt provident deserunt ut. Nihil quia magnam dolore vel velit consequatur accusantium. Error cupiditate minima voluptate quod. Facere quos laudantium blanditiis excepturi ducimus quia. Sunt qui id dolores rerum repellendus qui consequuntur.",
    "rating": 3,
    "youtube": "http://bernier.com/neque-temporibus-iusto-deleniti-temporibus-minima-minima-et.html",
    "facebook": "In dicta similique repellat omnis occaecati maiores. Similique aut et mollitia quia. Modi ut ab eius accusantium corrupti ducimus ducimus. Alias quod accusamus quasi dicta dolor magni.",
    "insta": "http://www.martins.fr/consequatur-labore-dolorem-qui-deserunt-exercitationem-nisi-architecto",
    "twitch": "http://pons.fr/cumque-deserunt-culpa-qui-optio.html",
    "user": {
        "username": "emmanuel81",
        "avatar": "Sunt et qui exercitationem iusto accusamus. Harum rerum tempore vel. Porro earum nihil architecto quam porro consequatur sequi. Omnis voluptatibus reiciendis nostrum optio animi et cumque.",
        "records": [
            {
                "description": "Championne de freestyle de marathon en apnée",
                "logo": {
                    "url": "http://gay.fr/",
                    "logo_description": "Voluptas rerum ut."
                }
            },
            {
                "description": "Miss \"fait des super tarte aux pommes \" 2015",
                "logo": {
                    "url": "http://www.lucas.fr/eum-nostrum-non-assumenda-cupiditate-alias-sit.html",
                    "logo_description": "Molestiae incidunt."
                }
            }
        ]
    },
    "team": {
        "name": "Team3",
        "logo": "https://lorempixel.com/50/50/?12881"
    },
    "game": {
        "name": "Overwatch"
    },
    "reviews": [
        {
            "rating": 4,
            "comment": "Eveniet illo maxime iusto ad expedita. Eos rerum laudantium possimus laboriosam non error. Quos voluptas quae officia. Rerum esse sed nobis qui.",
            "created_at": "2019-07-31T11:01:14+02:00",
            "user": {
                "username": "dupuy.georges",
                "avatar": "Molestiae labore est cumque aperiam repellat. Iste distinctio rerum pariatur architecto ad sit. Est architecto voluptate eum inventore.",
                "records": []
            }
        },
        {
            "rating": 5,
            "comment": "coach au top",
            "created_at": "2019-07-31T11:14:02+02:00",
            "user": {
                "username": "admin",
                "avatar": null,
                "records": []
            }
        }
    ]
}
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
