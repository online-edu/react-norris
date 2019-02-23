import { api } from '../../utils/config';
import request from '../../utils/request';

/**
 * Load jokes from server
 *
 * @returns {Promise}
 */
const loadJokes = (count = 10) => request.get(`${api}/random/${count}`).then(({ value: jokes }) => Promise.resolve(jokes));

/**
 * Retrieve all the jokes from `localStroage`
 *
 * @returns {Object[]}
 */
const getJokesFromStorage = () => {
  const jokes = localStorage.getItem('jokes');
  return (jokes && JSON.parse(jokes)) || [];
};

/**
 * Load jokes from localStorage
 *
 * @returns {Object[]}
 */
const loadFavoriteJokes = () => getJokesFromStorage();

/**
 * Find a joke by id from `localStroage`
 *
 * @returns {Object}
 */
const findJokeById = (id) => {
  const jokes = getJokesFromStorage();
  const found = jokes.findIndex(joke => joke.id === id);
  return { jokes, found };
};

/**
 * Add joke to localStorage to maintain favorite list
 *
 * @param {Object} joke - joke to add
 * @returns {Object[]}
 */
const addFavoriteJoke = (joke) => {
  const { jokes, found } = findJokeById(joke.id);
  if (found < 0 && jokes.length <= 10) jokes.push(joke);
  localStorage.setItem('jokes', JSON.stringify(jokes));
  return jokes;
};

/**
 * Remove joke from localStorage to maintain favorite list
 *
 * @param {number} id - id to find joke and remove
 * @returns {Object[]}
 */
const removeFavoriteJoke = (id) => {
  const { jokes, found: i } = findJokeById(id);
  if (i >= 0) jokes.splice(i, 1);
  localStorage.setItem('jokes', JSON.stringify(jokes));
  return jokes;
};

/**
 * On favorite click either add or remove joke from localStorage
 *
 * @param {Object} joke - joke to add/remove
 * @param {boolean} mode - add if true otherwise remove
 * @returns {Object[]}
 */
const onFavorite = (joke, mode) => (mode ? addFavoriteJoke(joke) : removeFavoriteJoke(joke.id));

export { loadJokes, onFavorite, loadFavoriteJokes };
