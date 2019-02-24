import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';
import { validatePassword } from '../LoginService';
import { formErrors } from '../../../utils/config';

describe('<Login />', () => {
  const wrapper = <Login history={{ push: () => {} }} />;

  it('renders correctly', () => {
    const component = shallow(wrapper);
    expect(component).toMatchSnapshot();
  });

  it('renders two <input /> controls', () => {
    const component = shallow(wrapper);
    expect(component.find('input')).toHaveLength(2);
  });

  it('validates password for sequence pattern', () => {
    const component = shallow(wrapper);
    component.setState({ password: 'adcww' });
    const pwd = component.state('password');
    expect(pwd).toEqual('adcww');
    const { valid, error } = validatePassword(pwd);
    expect(valid).toBe(false);
    expect(error).toEqual([formErrors.sequencePattern]);
  });

  it('validates password for pair Pattern', () => {
    const component = shallow(wrapper);
    component.setState({ password: 'abcaa' });
    const pwd = component.state('password');
    expect(pwd).toEqual('abcaa');
    const { valid, error } = validatePassword(pwd);
    expect(valid).toBe(true);
    expect(error).toBeUndefined();
  });

  it('validates password to be in lowercase', () => {
    const component = shallow(wrapper);
    component.setState({ password: 'ABC123ssd' });
    const pwd = component.state('password');
    expect(pwd).toEqual('ABC123ssd');
    const { valid, error } = validatePassword(pwd);
    expect(valid).toBe(false);
    expect(error).toEqual([formErrors.lowerCase]);
  });

  it('manages form submission', () => {
    const component = shallow(wrapper);
    const errors = [
      formErrors.ignoreCase,
      formErrors.lowerCase,
      formErrors.sequencePattern,
      formErrors.pairPattern,
    ];
    component.setState({ username: 'Andy Simpson', password: 'Intel' });
    const e = {
      preventDefault: () => {},
    };
    component.instance().handleSubmit(e);
    expect(component.state('formErrors')).toEqual(errors);
  });

  it('expects "event" from dom object', () => {
    const component = shallow(wrapper);
    const e = {
      target: {
        value: 'Andy Simpson',
        name: 'username',
      },
    };
    component.instance().handleChange(e);
    expect(component.state('username')).toBe('Andy Simpson');
  });
});
