import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Login from './views/Login/containers/Login/Login';
import Signup from './views/Signup/containers/Signup/Signup';
import * as serviceWorker from './serviceWorker';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
