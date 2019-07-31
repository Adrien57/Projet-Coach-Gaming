// == Initial State
const initialState = {
  games: [
    {
        "name": "FIFA",
        "description": "Provident facere excepturi sed officiis. Velit mollitia ut voluptatem repellat. Debitis ex quia sunt beatae nihil doloremque a. Placeat est enim fuga reprehenderit. Omnis aut corrupti adipisci quia est ipsam.",
        "header_background": "http://www.chauveau.net/maiores-quia-eligendi-quo.html",
        "slug": "fifa",
        "info_coaches": [
            {
                "price": 60,
                "rating": 5,
                "user": {
                    "username": "mguillet",
                    "avatar": "Rerum ut at sed in sit. Voluptatem nam voluptate sit placeat sapiente labore ea et. Voluptatem consectetur qui ipsum et illo fuga dolor. Commodi voluptas commodi in iste.",
                    "slug": "mguillet"
                },
                "team": {
                    "name": "Team4",
                    "logo": "https://lorempixel.com/50/50/?82191",
                    "logo_description": "Eaque quisquam."
                }
            }
        ]
    },
    {
        "name": "Overwatch",
        "description": "Modi aut et omnis est occaecati numquam deleniti odio. Omnis sit pariatur qui ut. Fuga ut iste unde ut consectetur.",
        "header_background": "http://www.allain.org/doloremque-qui-fugiat-ut-et-iste-doloremque",
        "slug": "overwatch",
        "info_coaches": [
            {
                "price": 69,
                "rating": 5,
                "user": {
                    "username": "emile70",
                    "avatar": "Ut qui sed qui sint et at aut. Ex soluta doloremque sit adipisci facere rerum aperiam. Unde quam sit inventore et provident deserunt.",
                    "slug": "emile70"
                },
                "team": {
                    "name": "Vitality",
                    "logo": "https://lorempixel.com/50/50/?40210",
                    "logo_description": "Qui quo amet."
                }
            },
            {
                "price": 57,
                "rating": 5,
                "user": {
                    "username": "lecoq.stephane",
                    "avatar": "Explicabo excepturi perspiciatis pariatur et deleniti minus. Quia quo autem impedit. Accusantium inventore vitae modi illum nostrum eveniet eius occaecati. Et nemo ea cupiditate quis reiciendis aspernatur quisquam.",
                    "slug": "lecoq-stephane"
                },
                "team": {
                    "name": "Vitality",
                    "logo": "https://lorempixel.com/50/50/?40210",
                    "logo_description": "Qui quo amet."
                }
            },
            {
                "price": 53,
                "rating": 4,
                "user": {
                    "username": "jboulanger",
                    "avatar": "Molestiae harum iusto hic odit maiores tenetur rem omnis. Repudiandae consequatur sequi sapiente. Deserunt quo incidunt ipsa qui a. Et ex dolorem quisquam perspiciatis.",
                    "slug": "jboulanger"
                },
                "team": {
                    "name": "Team3",
                    "logo": "https://lorempixel.com/50/50/?33951",
                    "logo_description": "Sit dicta itaque aspernatur quo."
                }
            },
            {
                "price": 0,
                "rating": 3,
                "user": {
                    "username": "dominique63",
                    "avatar": "Minus unde animi facere illo libero eveniet temporibus. Voluptatem mollitia neque error fugit error dolores voluptatem aliquid. Velit unde nihil praesentium aperiam. Ab dicta ut ut ea. Dolore natus ut nostrum facilis harum sunt.",
                    "slug": "dominique63"
                },
                "team": {
                    "name": "Team3",
                    "logo": "https://lorempixel.com/50/50/?33951",
                    "logo_description": "Sit dicta itaque aspernatur quo."
                }
            },
            {
                "price": 10,
                "rating": 2,
                "user": {
                    "username": "lejeune.gregoire",
                    "avatar": "Quia a voluptas sed qui iusto. Facilis nesciunt fugiat dolorum. Perferendis eos harum aperiam nobis beatae ut voluptas. Incidunt et sint tempore ex non quia.",
                    "slug": "lejeune-gregoire"
                },
                "team": {
                    "name": "Team3",
                    "logo": "https://lorempixel.com/50/50/?33951",
                    "logo_description": "Sit dicta itaque aspernatur quo."
                }
            },
            {
                "price": 80,
                "rating": 0,
                "user": {
                    "username": "pereira.isaac",
                    "avatar": "Repellat voluptas et ut veritatis quos harum. Nobis consequatur iure repellat assumenda tempora voluptas et. Consequatur doloribus ut minus et et eveniet ad. Reprehenderit omnis quam et quia.",
                    "slug": "pereira-isaac"
                },
                "team": {
                    "name": "Team4",
                    "logo": "https://lorempixel.com/50/50/?82191",
                    "logo_description": "Eaque quisquam."
                }
            },
            {
                "price": 73,
                "rating": 0,
                "user": {
                    "username": "valerie.gallet",
                    "avatar": "Officia id rerum quisquam culpa qui. Expedita ratione ipsa officia distinctio ullam aut ad aliquid. Nihil et aut soluta. Dolor et rerum qui.",
                    "slug": "valerie-gallet"
                },
                "team": {
                    "name": "Vitality",
                    "logo": "https://lorempixel.com/50/50/?40210",
                    "logo_description": "Qui quo amet."
                }
            }
        ]
    },
    {
        "name": "PUBG",
        "description": "Consequatur omnis recusandae autem et sed ratione quisquam alias. Nam reiciendis ducimus quis ut ipsa quia. Omnis error et perspiciatis omnis nam.",
        "header_background": "http://www.leblanc.fr/voluptatem-tempora-dignissimos-modi-fugit-molestiae",
        "slug": "pubg",
        "info_coaches": [
            {
                "price": 23,
                "rating": 5,
                "user": {
                    "username": "dperrier",
                    "avatar": "Reiciendis maxime et libero. Ut non provident voluptate et. Dignissimos quos sed perferendis et praesentium.",
                    "slug": "dperrier"
                },
                "team": {
                    "name": "Vitality",
                    "logo": "https://lorempixel.com/50/50/?40210",
                    "logo_description": "Qui quo amet."
                }
            },
            {
                "price": 7,
                "rating": 3,
                "user": {
                    "username": "renee88",
                    "avatar": "Non quo fuga sunt optio quod eum est. Eos sed veritatis occaecati laboriosam. Atque aut inventore animi. Sequi nam corrupti repellat blanditiis sed suscipit. Enim temporibus et mollitia ut nulla.",
                    "slug": "renee88"
                },
                "team": {
                    "name": "Team2",
                    "logo": "https://lorempixel.com/50/50/?16197",
                    "logo_description": "Veniam ratione deserunt laudantium."
                }
            },
            {
                "price": 81,
                "rating": 2,
                "user": {
                    "username": "olivier08",
                    "avatar": "Et libero animi qui est in est. Ut a blanditiis qui ab consectetur impedit. Fugit molestiae beatae minus sed rerum. Nostrum et culpa aut numquam ad aliquam omnis.",
                    "slug": "olivier08"
                },
                "team": {
                    "name": "Team2",
                    "logo": "https://lorempixel.com/50/50/?16197",
                    "logo_description": "Veniam ratione deserunt laudantium."
                }
            },
            {
                "price": 35,
                "rating": 1,
                "user": {
                    "username": "pinto.eugene",
                    "avatar": "Fugiat aut hic rerum corrupti. Ut eius cum amet laboriosam. Officia mollitia ea est repellat.",
                    "slug": "pinto-eugene"
                },
                "team": {
                    "name": "Team4",
                    "logo": "https://lorempixel.com/50/50/?82191",
                    "logo_description": "Eaque quisquam."
                }
            },
            {
                "price": 30,
                "rating": 1,
                "user": {
                    "username": "unavarro",
                    "avatar": "Incidunt explicabo exercitationem cumque ut repellendus ea. Qui amet voluptatibus sint qui et. Vel est ut in laborum qui quia consequatur ut.",
                    "slug": "unavarro"
                },
                "team": {
                    "name": "Vitality",
                    "logo": "https://lorempixel.com/50/50/?40210",
                    "logo_description": "Qui quo amet."
                }
            }
        ]
    },
    {
        "name": "Super Smash Bros Ultimate",
        "description": "Sunt dolorum totam ea id et blanditiis. Illo beatae molestias impedit dolor dolorem ut nisi. Ab dolor est et voluptas harum quis. Odit similique veritatis ut voluptas fugiat ut fugiat. Nemo magnam animi suscipit voluptas aut est.",
        "header_background": "http://www.dias.com/ducimus-expedita-accusantium-voluptatem-dolorum-quia.html",
        "slug": "super-smash-bros-ultimate",
        "info_coaches": [
            {
                "price": 89,
                "rating": 4,
                "user": {
                    "username": "ebigot",
                    "avatar": "Id sequi error veniam. Possimus optio eos officia ut. Quaerat nemo debitis blanditiis quisquam porro sequi veritatis. Quis architecto quia occaecati est odio. Et molestiae ipsam vitae reiciendis dolorem.",
                    "slug": "ebigot"
                },
                "team": {
                    "name": "Team4",
                    "logo": "https://lorempixel.com/50/50/?82191",
                    "logo_description": "Eaque quisquam."
                }
            },
            {
                "price": 10,
                "rating": 4,
                "user": {
                    "username": "hortense70",
                    "avatar": "Voluptas accusantium voluptatibus sit consectetur quia. Aperiam architecto quidem totam. Consequuntur rerum dolore aut eos facere. Nisi provident et quasi ipsum. Illo est possimus est et. Omnis sint est aut ipsum odit illo eum.",
                    "slug": "hortense70"
                },
                "team": {
                    "name": "Team2",
                    "logo": "https://lorempixel.com/50/50/?16197",
                    "logo_description": "Veniam ratione deserunt laudantium."
                }
            },
            {
                "price": 68,
                "rating": 4,
                "user": {
                    "username": "maryse.lebrun",
                    "avatar": "Culpa recusandae repudiandae mollitia autem architecto sapiente. Incidunt aut in aut maxime maxime. Eos dignissimos et omnis dolorem consequuntur omnis doloribus quod. Ducimus aut quod est sit illo eveniet.",
                    "slug": "maryse-lebrun"
                },
                "team": {
                    "name": "Team2",
                    "logo": "https://lorempixel.com/50/50/?16197",
                    "logo_description": "Veniam ratione deserunt laudantium."
                }
            },
            {
                "price": 0,
                "rating": 3,
                "user": {
                    "username": "poulain.penelope",
                    "avatar": "Ut eligendi aut molestiae pariatur nulla dolorem voluptatem. Maxime quia dolores molestiae quaerat facere. Eos molestiae non sit porro minus nihil.",
                    "slug": "poulain-penelope"
                },
                "team": {
                    "name": "Team4",
                    "logo": "https://lorempixel.com/50/50/?82191",
                    "logo_description": "Eaque quisquam."
                }
            },
            {
                "price": 68,
                "rating": 3,
                "user": {
                    "username": "marine.didier",
                    "avatar": "Quis culpa rerum cupiditate fugiat dolorum quae. Aut autem iste iure dolores. Mollitia omnis quasi omnis et et velit laudantium.",
                    "slug": "marine-didier"
                },
                "team": {
                    "name": "Team3",
                    "logo": "https://lorempixel.com/50/50/?33951",
                    "logo_description": "Sit dicta itaque aspernatur quo."
                }
            },
            {
                "price": 97,
                "rating": 3,
                "user": {
                    "username": "dupuy.danielle",
                    "avatar": "Aut non occaecati debitis nisi. Animi consequatur enim perferendis aspernatur voluptatem reiciendis sunt eos. Fugiat minima voluptate quaerat qui voluptatem voluptatibus quasi. Nam dolor voluptatem eius quo dolorem voluptatem.",
                    "slug": "dupuy-danielle"
                },
                "team": {
                    "name": "Vitality",
                    "logo": "https://lorempixel.com/50/50/?40210",
                    "logo_description": "Qui quo amet."
                }
            },
            {
                "price": 100,
                "rating": 3,
                "user": {
                    "username": "alix.maurice",
                    "avatar": "Deleniti nulla tempore et sunt. Et distinctio dolores recusandae dolorem. Commodi tempore dolor perspiciatis veritatis autem est. Quo debitis consequuntur temporibus itaque.",
                    "slug": "alix-maurice"
                },
                "team": {
                    "name": "Team4",
                    "logo": "https://lorempixel.com/50/50/?82191",
                    "logo_description": "Eaque quisquam."
                }
            }
        ]
    }
],
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
