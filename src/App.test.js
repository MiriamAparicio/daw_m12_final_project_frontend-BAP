import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe('App', () => {
  test('should renders without error', () => {
    const wrapper = setup();
    const appComponent = wrapper.find('[data-test="component-app"]');
    expect(appComponent.length).toBe(1);
  });
});
