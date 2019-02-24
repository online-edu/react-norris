import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';
import FavButton from '../../fav-button';

describe('<ListItem />', () => {
  const onFavClick = jest.fn();
  const joke = {
    id: 480,
    joke: 'The class object inherits from Chuck Norris',
    categories: ['nerdy'],
  };

  const wrapper = (
    <ListItem item={joke} favorite onFavoriteClick={onFavClick} />
  );

  it('renders correctly', () => {
    const component = shallow(wrapper);
    expect(component).toMatchSnapshot();
  });

  it('contains class name "list-group-item" ', () => {
    const component = shallow(wrapper);
    expect(component.find('.list-group-item')).toHaveLength(1);
  });

  it('contains a FavButton ', () => {
    const component = shallow(wrapper);
    expect(component.find(FavButton)).toHaveLength(1);
  });

  it('simulates click events', () => {
    const component = shallow(wrapper);
    component.find(FavButton).simulate('click');
    expect(onFavClick).toHaveBeenCalledTimes(1);
  });
});
