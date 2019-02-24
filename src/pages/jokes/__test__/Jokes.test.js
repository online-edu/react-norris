import React from 'react';
import { shallow } from 'enzyme';
import Jokes from '../Jokes';
import { List } from '../../../components';
import { loadJokes, loadFavoriteJokes } from '../JokesService';

describe('<Jokes />', () => {
  it('renders correctly', () => {
    const component = shallow(<Jokes />);
    expect(component).toMatchSnapshot();
  });

  it('renders two <List /> component', () => {
    const wrapper = shallow(<Jokes />);
    expect(wrapper.find(List)).toHaveLength(2);
  });

  it('calls componentDidMount', () => {
    jest.spyOn(Jokes.prototype, 'componentDidMount');
    const wrapper = shallow(<Jokes />);
    wrapper.update();
    expect(Jokes.prototype.componentDidMount).toBeCalledTimes(1);
  });

  it('componentDidMount should fetch, and put jokes in state', () => {
    const wrapper = shallow(<Jokes />);
    return loadJokes()
      .then(jokes => {
        wrapper.setState({ jokes });
        expect(wrapper.state('jokes')[0]).toContain('joke');
      })
      .catch(err => {
        wrapper.setState({ loading: false });
        expect(wrapper.state('loading')).toBe(false);
        expect(err).toBeDefined();
      });
  });
});
