import React from 'react';

/**
 * List empty component.
 */
const ListEmpty = () => (
  <li className="list-group-item d-flex flex-column justify-content-between align-items-center jokes-list__item">
    <span
      role="img"
      aria-label="Expressionless Face"
      className="jokes-list__item-empty-emoticon"
    >
      😑
    </span>
    <p className="h4 jokes-list__item-empty">
      No fav jokes? Who cares! Let&apos;s choose...
      <span role="img" aria-label="Upside-Down Face">
        🙃
      </span>
    </p>
  </li>
);

export default ListEmpty;
