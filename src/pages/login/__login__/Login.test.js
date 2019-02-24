import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('<Login />', () => {
  it('renders correctly', () => {
    const component = shallow(<Login history={{ push: () => {} }} />);
    expect(component).toMatchSnapshot();
  });
});
