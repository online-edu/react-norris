import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../switch';
import Spinner from '../spinner';

/**
 * List header component.
 */
const ListHeader = ({
  title,
  loader,
  btnCaption: text,
  onBtnClick: click,
  switchCaption: svitch,
  onSwitchToggle,
}) => (
  <li className="list-group-item d-flex justify-content-between align-items-center jokes-list__item">
    <h5 className="mt-0 mb-1">{title}</h5>
    {loader && <Spinner />}
    {text && (
      <button type="button" className="btn btn-primary" onClick={click}>
        {text}
      </button>
    )}
    {svitch && (
      <Switch id={svitch} label={svitch} switchToggle={onSwitchToggle} />
    )}
  </li>
);
/**
 * List item default props.
 */
ListHeader.defaultProps = {
  loader: false,
  btnCaption: undefined,
  switchCaption: undefined,
  onSwitchToggle: () => {},
  onBtnClick: () => {},
};
/**
 * List item props types.
 */
ListHeader.propTypes = {
  /** Header title */
  title: PropTypes.string.isRequired,
  /** Button caption */
  btnCaption: PropTypes.string,
  /** Toggle spinner */
  loader: PropTypes.bool,
  /** Gets called when the button is clicked. */
  onBtnClick: PropTypes.func,
  /** Switch caption */
  switchCaption: PropTypes.string,
  /** Gets called when the switch is toggled. */
  onSwitchToggle: PropTypes.func,
};
export default ListHeader;
