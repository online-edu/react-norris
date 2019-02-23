import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import ListEmpty from './ListEmpty';
import './List.scss';

/**
 * List component.
 */
const List = ({
  btnCaption,
  title,
  items = [],
  loader,
  favorite,
  onHeaderAction,
  onFavoriteClick,
}) => (
  <ul className="list-group jokes-list">
    <TransitionGroup>
      <ListHeader
        title={title}
        loader={loader}
        btnCaption={btnCaption}
        onBtnClick={onHeaderAction}
      />
      {items
        && items.map(item => (
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <ListItem
              item={item}
              favorite={favorite}
              onFavoriteClick={fav => onFavoriteClick({ item, fav })}
            />
          </CSSTransition>
        ))}
      {items.length === 0 && (
        <CSSTransition timeout={100} classNames="fade">
          <ListEmpty />
        </CSSTransition>
      )}
    </TransitionGroup>
  </ul>
);
/**
 * List default props.
 */
List.defaultProps = {
  loader: false,
  favorite: false,
  btnCaption: undefined,
  onHeaderAction: () => {},
};
/**
 * List props types.
 */
List.propTypes = {
  /** Header title */
  title: PropTypes.string.isRequired,
  /** Button caption */
  btnCaption: PropTypes.string,
  /** Toggle spinner */
  loader: PropTypes.bool,
  /** Gets called when the header button is clicked. */
  onHeaderAction: PropTypes.func,
  /** Gets called when the fav button is clicked. */
  onFavoriteClick: PropTypes.func.isRequired,
  /** List of items */
  items: PropTypes.array.isRequired,
  /** Fav or not fav visibility */
  favorite: PropTypes.bool,
};

export default List;
