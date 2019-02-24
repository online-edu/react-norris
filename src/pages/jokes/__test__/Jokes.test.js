import React from 'react';
import { shallow } from 'enzyme';
import Jokes from '../Jokes';
import { List } from '../../../components';
import { loadJokes } from '../JokesService';

describe('<Jokes />', () => {
  const joke = {
    id: 480,
    joke: 'The class object inherits from Chuck Norris',
    categories: ['nerdy'],
  };
  jest.setTimeout(30000);

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
      .then((jokes) => {
        wrapper.setState({ jokes });
        expect(wrapper.state('jokes')[0]).toContain('joke');
      })
      .catch((err) => {
        wrapper.setState({ loading: false });
        expect(wrapper.state('loading')).toBe(false);
        expect(err).toBeDefined();
      });
  });

  it('makes a joke favorite on fav click', () => {
    const wrapper = shallow(<Jokes />);
    expect(wrapper.state('favoriteJokes').length).toBeLessThan(1);
    wrapper.instance().onFavoriteClick({ item: joke, fav: true });
    expect(wrapper.state('favoriteJokes').length).toBeGreaterThan(0);
  });

  it('generates a joke/5 seconds radomly', () => {
    const wrapper = shallow(<Jokes />);
    const e = {
      target: {
        checked: true,
      },
    };
    expect(wrapper.state('favoriteJokes').length).toBeLessThanOrEqual(1);
    wrapper.instance().onSwitchToggle(e);
    expect(wrapper.state('loadingFavorite')).toBe(true);
    setTimeout(() => {
      expect(wrapper.state('favoriteJokes').length).toBeGreaterThanOrEqual(1);
    }, 10000);
  });

  it('fetches a joke on tick', () => {
    const wrapper = shallow(<Jokes />);
    expect(wrapper.state('favoriteJokes').length).toBeLessThanOrEqual(1);
    wrapper.instance().ticker();
    setTimeout(() => {
      expect(wrapper.state('favoriteJokes').length).toBeGreaterThanOrEqual(1);
    }, 1000);
  });

  it('fetch a joke and set in list', () => {
    const wrapper = shallow(<Jokes />);
    return loadJokes(1).then((tempJoke) => {
      wrapper.instance().onFavoriteClick({ item: tempJoke, fav: true });
      expect(wrapper.state('favoriteJokes').length).toBeGreaterThan(0);
    });
  });

  it('handles error', () => {
    const wrapper = shallow(<Jokes />);
    const testPromise = new Promise((res, reject) => {
      setTimeout(() => reject(Error({ err: 'Promise test' })), 1000);
    });
    return testPromise.catch((err) => {
      wrapper.instance().handleError(err);
      expect(wrapper.state('error')).toBe(true);
    });
  });

  it('stops time on switch off', () => {
    const wrapper = shallow(<Jokes />);
    const e = {
      target: {
        checked: true,
      },
    };
    wrapper.instance().onSwitchToggle(e);
    expect(wrapper.state('loadingFavorite')).toBe(true);
    wrapper.instance().clearTimer();
    expect(wrapper.state('loadingFavorite')).toBe(false);
  });
});
