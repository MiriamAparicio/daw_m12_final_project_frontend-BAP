import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import {
  validateUsername,
  validatePostalCode,
  validateEmail,
  validatePassword
} from '../../../../utils/validations';
import ConnectedProfileForm, { ProfileForm } from './ProfileForm';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setupConnected = (store = {}, props) => {
  const wrapper = shallow(<ConnectedProfileForm store={store} {...props} />);
  return wrapper;
};

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setupUnconnected = (props, state = {}) => {
  const wrapper = shallow(<ProfileForm {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const mockStore = configureStore([]);

describe('ProfileForm', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      user: {
        data: {
          username: 'testUser',
          name: 'Test',
          surname: 'Test',
          postalCode: '08339',
          email: 'test@test.com'
        },
        isLogin: true
      }
    });
    store.dispatch = jest.fn();
  });

  const props = {
    handleSubmit: () => {},
    handlePublish: () => {},
    error: 'Error',
    isLogin: true,
    profile: {
      _id: '123456',
      username: 'testUser',
      name: 'Test',
      surname: 'Test',
      postalCode: '08339',
      email: 'test@test.com'
    },
    user: {
      _id: '123456'
    },
    isEditting: true,
    isPublishing: true,
    postId: '789456'
  };

  const state = {
    username: '',
    name: '',
    surname: '',
    postalCode: '',
    email: '',
    isEditable: false,
    isEditting: false,
    formErrors: {},
    usernameValid: true,
    emailValid: true,
    postalCodeValid: true,
    formValid: false,
    isPublishing: false
  };

  test('should renders without error', () => {
    const wrapper = setupUnconnected(props, state);
    const signupFormComponent = wrapper.find(
      '[data-test="component-profileForm"]'
    );
    expect(signupFormComponent.length).toBe(1);
  });

  test('should render with given state from Redux store', () => {
    const wrapper = setupConnected(store, props);
    const userProp = wrapper.props.user;

    expect(userProp).toBe(store.user);
  });

  describe('inputs', () => {
    test('should onChange username input update state', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="username"]');

      input.simulate('change', {
        target: { name: 'username', value: 'testuser' }
      });

      expect(wrapper.state('username')).toEqual('testuser');
    });

    test('should onChange name input update state', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="name"]');

      input.simulate('change', {
        target: { name: 'name', value: 'Test User' }
      });

      expect(wrapper.state('name')).toEqual('Test User');
    });

    test('should onChange surname input update state', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="surname"]');

      input.simulate('change', {
        target: { name: 'surname', value: 'Test User' }
      });

      expect(wrapper.state('surname')).toEqual('Test User');
    });

    test('should onChange postalCode input update state', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="postalCode"]');

      input.simulate('change', {
        target: { name: 'postalCode', value: '08339' }
      });

      expect(wrapper.state('postalCode')).toEqual('08339');
    });

    test('should onChange email input update state', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="email"]');

      input.simulate('change', {
        target: { name: 'email', value: 'test@test.com' }
      });

      expect(wrapper.state('email')).toEqual('test@test.com');
    });
  });

  describe('inputs validation', () => {
    test('should username value to be valid', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="username"]');

      input.simulate('change', {
        target: { name: 'username', value: 'testuser' }
      });

      expect(validateUsername(wrapper.state('username'))).toBe(true);
    });

    test('should username value to be invalid', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="username"]');

      input.simulate('change', {
        target: { name: 'username', value: 'testuser1' }
      });

      expect(validateUsername(wrapper.state('username'))).toBe(false);
    });

    test('should postalCode value to be valid', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="postalCode"]');

      input.simulate('change', {
        target: { name: 'postalCode', value: '08339' }
      });

      expect(validatePostalCode(wrapper.state('postalCode'))).toBe(true);
    });

    test('should postalCode value to be invalid', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="postalCode"]');

      input.simulate('change', {
        target: { name: 'postalCode', value: '12324540404' }
      });

      expect(validatePostalCode(wrapper.state('postalCode'))).toBe(false);
    });

    test('should email value to be valid', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="email"]');

      input.simulate('change', {
        target: { name: 'email', value: 'test@test.com' }
      });

      expect(validateEmail(wrapper.state('email'))).toBe(true);
    });

    test('should email value to be invalid', () => {
      const wrapper = setupUnconnected(props, state);
      const input = wrapper.find('input[name="email"]');

      input.simulate('change', {
        target: { name: 'email', value: 'test.not.correct' }
      });

      expect(validateEmail(wrapper.state('email'))).toBe(false);
    });
  });
});
