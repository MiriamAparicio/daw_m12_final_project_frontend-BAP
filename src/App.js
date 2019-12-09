import React from 'react';
import HomePage from './views/HomePage/containers/HomePage';
import './App.css';

/**
 * export the unconnected component as well for testing
 */

export function App() {
  return (
    <div data-test="component-app">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
