import React from 'react';
import { shallow, mount } from 'enzyme';
import ListHeader from '../ListHeader';

describe('<ListHeader />', () => {
  const onBtnClick = jest.fn();

  const wrapper = (
    <ListHeader title="Jokes" btnCaption="View More" onBtnClick={onBtnClick} />
  );

  it('renders correctly', () => {
    const component = shallow(wrapper);
    expect(component).toMatchSnapshot();
  });

  it('contains class name "list-group-item" ', () => {
    const component = shallow(wrapper);
    expect(component.find('.list-group-item')).toHaveLength(1);
  });

  it('contains a "button" ', () => {
    const component = shallow(wrapper);
    expect(component.find('button')).toHaveLength(1);
  });

  it('allows us to set props', () => {
    const component = mount(wrapper);
    expect(component.props().btnCaption).toEqual('View More');
    component.setProps({ btnCaption: 'Random' });
    expect(component.props().btnCaption).toEqual('Random');
  });

  it('simulates click events', () => {
    const component = shallow(wrapper);
    component.find('button').simulate('click');
    expect(onBtnClick.mock.calls.length).toBe(1);
  });
});
