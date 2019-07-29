export default [
  {
    route: '/',
    label: 'Accueil',
  },
  {
    route: '/jeux',
    label: 'Jeux',
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
  },
  {
    route: '/qui-sommes-nous',
    label: 'Qui sommes-nous ?',
  },
  {
    route: '/devenir-coach',
    label: 'Devenir coach',
  },
  {
    route: '/auth/login',
    label: 'Inscription/Connexion',
  },
];
