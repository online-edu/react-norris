import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Header actions component.
 */
const HeaderActions = ({ user }) => (
  <div className="my-2 my-sm-0">
    <div className="jokes-header__user-dropdown">
      <button className="btn jokes-header__user-dropdown-btn" type="button">
        <i className="material-icons jokes-header__user--avatar">
          account_circle
        </i>
        <span className="ml-1 ng-binding">{user}</span>
      </button>
      <div className="jokes-header__user-dropdown-content">
        <ul className="nav flex-column">
          <li>
            <NavLink to="/login">Log out</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
/**
 * Header actions default props.
 */
HeaderActions.defaultProps = {
  /** User name . */
  user: 'Andy Simpson',
};

/**
 * Header actions props types.
 */
HeaderActions.propTypes = {
  /** User name to be displayed. */
  user: PropTypes.string,
};
export default HeaderActions;
