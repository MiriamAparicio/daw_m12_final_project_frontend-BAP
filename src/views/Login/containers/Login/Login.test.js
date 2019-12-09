import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedLogin, { Login } from './Login';

import NavBar from '../../../../components/NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (store = {}, props) => {
  const wrapper = shallow(
    <MemoryRouter>
      <ConnectedLogin store={store} {...props} />
    </MemoryRouter>
  );
  return wrapper;
};

const mockStore = configureStore([]);

describe('Login', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      user: { error: 'Error when login' }
    });
    store.dispatch = jest.fn();
  });

  const props = {
    handleLogin: () => {},
    error: 'Error'
  };

  test('should renders without error', () => {
    const wrapper = shallow(<Login {...props} />);

    expect(wrapper.find(NavBar).length).toBe(1);
    expect(wrapper.find(LoginForm).length).toBe(1);
  });

  test('should render with given state from Redux store', () => {
    const wrapper = setup(store, props);
    const userProp = wrapper.instance().props.user;
    expect(userProp).toBe(store.user);
  });
});
