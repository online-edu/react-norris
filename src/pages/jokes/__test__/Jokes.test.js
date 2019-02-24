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

  it('renders a <List /> component', () => {
    const wrapper = shallow(<Jokes />);
    wrapper.setState({ showModal: true });
    expect(wrapper.find(List)).toHaveLength(2);
  });

  it('calls componentDidMount', () => {
    jest.spyOn(Jokes.prototype, 'componentDidMount');
    const wrapper = shallow(<Jokes />);
    wrapper.update();
    expect(Jokes.prototype.componentDidMount).toBeCalledTimes(1);
  });
});
