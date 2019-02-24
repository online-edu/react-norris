import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * FavButton component.
 */
class FavButton extends Component {
  /**
   * FavButton props types.
   */
  static get propTypes() {
    return {
      /** Get fav ot not fav flag */
      favorite: PropTypes.bool.isRequired,
      /** Gets called when the fav button is clicked. */
      onClick: PropTypes.func.isRequired,
    };
  }

  /**
   * Intilalizes the state and binds all methods.
   *
   * @param {Object} props - access 'props'
   */
  constructor(props) {
    super(props);
    const { favorite } = this.props;
    this.toggle = favorite;
    this.state = {
      icon: favorite ? 'favorite' : 'favorite_border',
    };
    this.onToggle = this.onToggle.bind(this);
  }

  /**
   * Toggle icon for button and notify parent.
   */
  onToggle() {
    this.setState(
      {
        icon: this.toggle ? 'favorite_border' : 'favorite',
      },
      () => {
        this.toggle = !this.toggle;
        const { onClick } = this.props;
        onClick(this.toggle);
      },
    );
  }

  /**
   * Render method for component
   */
  render() {
    const { icon } = this.state;
    return (
      <button type="button" className="btn btn-link" onClick={this.onToggle}>
        <i className="material-icons pt-2">{icon}</i>
      </button>
    );
  }
}

export default FavButton;
