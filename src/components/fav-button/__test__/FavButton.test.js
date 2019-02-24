import React from 'react';
import { shallow, mount } from 'enzyme';
import FavButton from '../FavButton';

describe('<FavButton />', () => {
  const onFavClick = jest.fn();
  const wrapper = <FavButton favorite onClick={onFavClick} />;

  it('renders correctly', () => {
    const component = shallow(wrapper);
    expect(component).toMatchSnapshot();
  });

  it('contains class name "btn"', () => {
    const component = shallow(wrapper);
    expect(component.find('.btn')).toHaveLength(1);
  });

  it('allows us to set props', () => {
    const component = mount(wrapper);
    expect(component.props().favorite).toBe(true);
    component.setProps({ favorite: false });
    expect(component.props().favorite).toBe(false);
  });

  it('simulates click events', () => {
    const component = shallow(wrapper);
    component.find('button').simulate('click');
    expect(onFavClick).toHaveBeenCalledTimes(1);
  });
});
