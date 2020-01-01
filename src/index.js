import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import reducers from './store/reducers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthRoute from './components/AuthRoute/AuthRoute';
import App from './App';
import Login from './views/Login/containers/Login/Login';
import Signup from './views/Signup/containers/Signup/Signup';
import Anuncis from './views/Anuncis/containers/Anuncis';
import Profile from './views/Profile/containers/Profile/Profile';
import PageNotFound from './views/PageNotFound/PageNotFound';

//TODO: esborrar lína de redux.devtools
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose),
);

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/signup" component={Signup} />
      <PrivateRoute path="/anuncis" component={Anuncis} />
      <PrivateRoute path="/profile/:id" component={Profile} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
