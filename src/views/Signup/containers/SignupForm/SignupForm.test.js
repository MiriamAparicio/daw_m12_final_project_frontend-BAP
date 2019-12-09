import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './SignupForm';
import {
  validateUsername,
  validatePostalCode,
  validateEmail,
  validatePassword
} from '../../../../utils/validations';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props, state = {}) => {
  const wrapper = shallow(<SignupForm {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe('SignupForm', () => {
  const props = {
    handleSubmit: () => {},
    error: 'Error'
  };

  const wrapper = setup(props);

  test('should renders without error', () => {
    const signupFormComponent = wrapper.find(
      '[data-test="component-signupForm"]'
    );

    expect(signupFormComponent.length).toBe(1);
  });

  test('should have a `<form>` element', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  describe('inputs', () => {
    test('should onChange username input update state', () => {
      const username = '';
      const wrapper = setup(props, { username });
      const input = wrapper.find('input[name="username"]');

      input.simulate('change', {
        target: { name: 'username', value: 'testuser' }
      });

      expect(wrapper.state('username')).toEqual('testuser');
    });

    test('should onChange name input update state', () => {
      const name = '';
      const wrapper = setup(props, { name });
      const input = wrapper.find('input[name="name"]');

      input.simulate('change', {
        target: { name: 'name', value: 'Test User' }
      });

      expect(wrapper.state('name')).toEqual('Test User');
    });

    test('should onChange surname input update state', () => {
      const surname = '';
      const wrapper = setup(props, { surname });
      const input = wrapper.find('input[name="surname"]');

      input.simulate('change', {
        target: { name: 'surname', value: 'Test User' }
      });

      expect(wrapper.state('surname')).toEqual('Test User');
    });

    test('should onChange postalCode input update state', () => {
      const postalCode = '';
      const wrapper = setup(props, { postalCode });
      const input = wrapper.find('input[name="postalCode"]');

      input.simulate('change', {
        target: { name: 'postalCode', value: '08339' }
      });

      expect(wrapper.state('postalCode')).toEqual('08339');
    });

    test('should onChange email input update state', () => {
      const email = '';
      const wrapper = setup(props, { email });
      const input = wrapper.find('input[name="email"]');

      input.simulate('change', {
        target: { name: 'email', value: 'test@test.com' }
      });

      expect(wrapper.state('email')).toEqual('test@test.com');
    });

    test('should onChange password input update state', () => {
      const password = '';
      const wrapper = setup(props, { password });
      const input = wrapper.find('input[name="password"]');

      input.simulate('change', {
        target: { name: 'password', value: '12345' }
      });

      expect(wrapper.state('password')).toEqual('12345');
    });
  });

  describe('inputs validation', () => {
    test('should username value to be valid', () => {
      const username = '';
      const wrapper = setup(props, { username });
      const input = wrapper.find('input[name="username"]');

      input.simulate('change', {
        target: { name: 'username', value: 'testuser' }
      });

      expect(validateUsername(wrapper.state('username'))).toBe(true);
    });

    test('should username value to be invalid', () => {
      const username = '';
      const wrapper = setup(props, { username });
      const input = wrapper.find('input[name="username"]');

      input.simulate('change', {
        target: { name: 'username', value: 'testuser1' }
      });

      expect(validateUsername(wrapper.state('username'))).toBe(false);
    });

    test('should postalCode value to be valid', () => {
      const postalCode = '';
      const wrapper = setup(props, { postalCode });
      const input = wrapper.find('input[name="postalCode"]');

      input.simulate('change', {
        target: { name: 'postalCode', value: '08339' }
      });

      expect(validatePostalCode(wrapper.state('postalCode'))).toBe(true);
    });

    test('should postalCode value to be invalid', () => {
      const postalCode = '';
      const wrapper = setup(props, { postalCode });
      const input = wrapper.find('input[name="postalCode"]');

      input.simulate('change', {
        target: { name: 'postalCode', value: '12324540404' }
      });

      expect(validatePostalCode(wrapper.state('postalCode'))).toBe(false);
    });

    test('should email value to be valid', () => {
      const email = '';
      const wrapper = setup(props, { email });
      const input = wrapper.find('input[name="email"]');

      input.simulate('change', {
        target: { name: 'email', value: 'test@test.com' }
      });

      expect(validateEmail(wrapper.state('email'))).toBe(true);
    });

    test('should email value to be invalid', () => {
      const email = '';
      const wrapper = setup(props, { email });
      const input = wrapper.find('input[name="email"]');

      input.simulate('change', {
        target: { name: 'email', value: 'test.not.correct' }
      });

      expect(validateEmail(wrapper.state('email'))).toBe(false);
    });

    test('should password value to be valid', () => {
      const password = '';
      const wrapper = setup(props, { password });
      const input = wrapper.find('input[name="password"]');

      input.simulate('change', {
        target: { name: 'password', value: '123456Aa' }
      });

      expect(validatePassword(wrapper.state('password'))).toBe(true);
    });

    test('should password value to be invalid', () => {
      const password = '';
      const wrapper = setup(props, { password });
      const input = wrapper.find('input[name="password"]');

      input.simulate('change', {
        target: { name: 'password', value: '1234' }
      });

      expect(validatePassword(wrapper.state('password'))).toBe(false);
    });
  });
});
