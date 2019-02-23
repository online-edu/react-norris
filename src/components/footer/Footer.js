import React from 'react';
import './Footer.scss';

/**
 * List empty component.
 */
const Footer = () => (
  <footer className="jokes-footer py-3">
    <div className="container">
      <p className="mb-0 font-weight-normal">
        © {new Date().getFullYear()} Chuck Norris Jokes Inc. All right reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
