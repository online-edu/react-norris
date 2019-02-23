import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

/**
 * List header component.
 */
const ListHeader = ({
  title,
  loader,
  btnCaption: text,
  onBtnClick: click,
}) => (
  <li className="list-group-item d-flex justify-content-between align-items-center jokes-list__item">
    <h5 className="mt-0 mb-1">{title}</h5>
    {loader && <Spinner />}
    {text && (
      <button type="button" className="btn btn-primary" onClick={click}>
        {text}
      </button>
    )}
  </li>
);
/**
 * List item default props.
 */
ListHeader.defaultProps = {
  loader: false,
};
/**
 * List item props types.
 */
ListHeader.propTypes = {
  /** Header title */
  title: PropTypes.string.isRequired,
  /** Button caption */
  btnCaption: PropTypes.string.isRequired,
  /** Toggle spinner */
  loader: PropTypes.bool,
  /** Gets called when the button is clicked. */
  onBtnClick: PropTypes.func.isRequired,
};
export default ListHeader;
