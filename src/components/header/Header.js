import React from 'react';
import './Header.scss';

/**
 * Header component.
 */
const Header = () => (
  <nav className="navbar sticky-top header jokes-header">
    <button type="button" className="navbar-brand btn-link btn jokes-header__brand">
      Chuck Norris Jokes
      <span role="img" aria-label="Rolling on the Floor Laughing">
        🤣
      </span>
    </button>
  </nav>
);

export default Header;
