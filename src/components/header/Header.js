import React from 'react';
import PropTypes from 'prop-types';
import HeaderActions from './HeaderActions';
import './Header.scss';

/**
 * Header component.
 */
const Header = ({ user }) => (
  <nav className="navbar sticky-top jokes-header">
    <button
      type="button"
      className="navbar-brand btn-link btn jokes-header__brand"
    >
      Chuck Norris Jokes
      <span role="img" aria-label="Rolling on the Floor Laughing">
        🤣
      </span>
    </button>
    {user && <HeaderActions user={user} />}
  </nav>
);
/**
 * Header default props.
 */
Header.defaultProps = {
  /** User name . */
  user: undefined,
};

/**
 * Header props types.
 */
Header.propTypes = {
  /** User name to be displayed. */
  user: PropTypes.string,
};
export default Header;
