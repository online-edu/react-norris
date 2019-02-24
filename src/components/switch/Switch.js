import React from 'react';
import PropTypes from 'prop-types';

/**
 * Switch component.
 */
const Switch = ({ switchToggle, id, label }) => (
  <div className="custom-control custom-switch">
    <input
      type="checkbox"
      className="custom-control-input"
      aria-label={`${label} Checkbox`}
      id={id}
      name={id}
      onChange={switchToggle}
    />
    <label
      className="custom-control-label"
      htmlFor={id}
      aria-label={`${label} checkboz`}
      aria-describedby={id}
    >
      {label}
    </label>
  </div>
);
/**
 * Switch props types.
 */
Switch.propTypes = {
  /** Id to be assigned to the control. */
  id: PropTypes.string.isRequired,
  /** Display value */
  label: PropTypes.string.isRequired,
  /** Gets called when the user clicks on switch */
  switchToggle: PropTypes.func.isRequired,
};
export default Switch;
