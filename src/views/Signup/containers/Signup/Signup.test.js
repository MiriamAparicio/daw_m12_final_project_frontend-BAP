import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedSignup, { Signup } from './Signup';

import NavBar from '../../../../components/NavBar/NavBar';
import SignupForm from '../SignupForm/SignupForm';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (store = {}, props) => {
  const wrapper = shallow(
    <MemoryRouter>
      <ConnectedSignup store={store} {...props} />
    </MemoryRouter>
  );
  return wrapper;
};

const mockStore = configureStore([]);

describe('Signup', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      user: {
        error: 'Error when signup',
        isLogin: true
      }
    });
    store.dispatch = jest.fn();
  });

  const props = {
    handleSignup: () => {},
    error: 'Error',
    isLogin: true
  };

  test('renders without error', () => {
    const wrapper = shallow(<Signup {...props} />);

    expect(wrapper.find(NavBar).length).toBe(1);
    expect(wrapper.find(SignupForm).length).toBe(1);
  });

  test('should render with given state from Redux store', () => {
    const wrapper = setup(store, props);
    const userProp = wrapper.instance().props.user;
    expect(userProp).toBe(store.user);
  });
});
