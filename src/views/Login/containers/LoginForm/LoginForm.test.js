import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props, state = {}) => {
  const wrapper = shallow(<LoginForm {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe('LoginForm', () => {
  const props = {
    handleSubmit: () => {},
    error: 'Error'
  };

  const wrapper = setup(props);

  test('should renders without error', () => {
    const loginFormComponent = wrapper.find(
      '[data-test="component-loginForm"]'
    );
    expect(loginFormComponent.length).toBe(1);
  });

  test('should have a `<form>` element', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  describe('inputs', () => {
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
});
