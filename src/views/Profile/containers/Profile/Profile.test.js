import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { handleUpdateUser } from '../../../../store/user/actions';
import ConnectedProfile, { Profile } from './Profile';

import NavBar from '../../../../components/NavBar/NavBar';
import ProfileForm from '../ProfileForm/ProfileForm';
import Post from '../Post/Post';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (store = {}, props) => {
  const wrapper = shallow(<ConnectedProfile store={store} {...props} />);
  return wrapper;
};

const mockStore = configureStore([]);

describe('Profile', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      user: {
        error: 'Error',
        data: {
          username: 'testUser',
          name: 'Test',
          surname: 'Test',
          postalCode: '08339',
          email: 'test@test.com'
        },
        token: 'testtoken'
      }
    });
    store.dispatch = jest.fn();
  });

  const props = {
    error: 'Error',
    user: {
      username: 'testUser',
      name: 'Test',
      surname: 'Test',
      postalCode: '08339',
      email: 'test@test.com'
    },
    token: 'testtoken',
    handleUpdateUser
  };

  test('should renders without error', () => {
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find(NavBar).length).toBe(1);
    expect(wrapper.find(ProfileForm).length).toBe(1);
    expect(wrapper.find(Post).length).toBe(0);
  });

  test('should render with given state from Redux store', () => {
    const wrapper = setup(store, props);
    const userProp = wrapper.props.user;

    expect(userProp).toBe(store.user);
  });
});
