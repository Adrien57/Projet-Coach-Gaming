/* eslint-disable indent */
// eslint-disable-next-line import/prefer-default-export
import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getSlugFromString = string => (
    slugify(string, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
  })
);

export const getUrl = (urlPrefix, stringToSlugify) => (
  urlPrefix + getSlugFromString(stringToSlugify)
);

export const getGameBySlug = (gamesData, slug) => {
  const selectedGame = gamesData.find(game => getSlugFromString(game.name) === slug);
  return selectedGame;
}
