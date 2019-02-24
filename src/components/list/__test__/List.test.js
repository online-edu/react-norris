import React from 'react';
import { shallow, mount } from 'enzyme';
import List from '../List';
import ListHeader from '../ListHeader';
import ListItem from '../ListItem';

describe('<List />', () => {
  const onHeaderAction = jest.fn();
  const onFavoriteClick = jest.fn();
  const joke = [
    {
      id: 480,
      joke: 'The class object inherits from Chuck Norris',
      categories: ['nerdy'],
    },
  ];
  const wrapper = (
    <List
      title="Jokes"
      btnCaption="View more"
      loader={false}
      items={joke}
      onHeaderAction={onHeaderAction}
      onFavoriteClick={onFavoriteClick}
    />
  );

  it('renders correctly', () => {
    const component = shallow(wrapper);
    expect(component).toMatchSnapshot();
  });

  it('renders a <ListHeader /> component', () => {
    const component = shallow(wrapper);
    expect(component.find(ListHeader)).toHaveLength(1);
  });

  it('renders a <ListItem /> component', () => {
    const component = shallow(wrapper);
    expect(component.find(ListItem)).toHaveLength(1);
  });

  it('allows us to set props', () => {
    const component = mount(wrapper);
    component.setProps({ items: [] });
    expect(component.props().items.length).toBeLessThan(1);
  });
});
