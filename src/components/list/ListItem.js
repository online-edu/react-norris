import React from 'react';
import PropTypes from 'prop-types';
import FavButton from '../fav-button';

/**
 * List item component.
 */
const ListItem = ({ favorite, item, onFavoriteClick }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center jokes-list__item--divider">
    {item.joke}
    <FavButton
      favorite={favorite}
      onClick={toggle => onFavoriteClick(toggle)}
    />
  </li>
);
/**
 * List item props types.
 */
ListItem.propTypes = {
  /** Toggle favorite */
  favorite: PropTypes.bool.isRequired,
  /** Gets called when the fav button is clicked. */
  onFavoriteClick: PropTypes.func.isRequired,
  /** Joke details */
  item: PropTypes.shape({ joke: PropTypes.string.isRequired }).isRequired,
};

export default ListItem;
