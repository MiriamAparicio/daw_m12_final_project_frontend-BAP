import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from '../constants';
import authService from '../../services/auth-service';
import { decodeToken } from '../../utils/utils';

function signupUser() {
  return {
    type: SIGNUP_USER
  };
}

function signupUserSuccess(response) {
  localStorage.setItem('token', response.data.token);
  return {
    type: SIGNUP_USER_SUCCESS,
    user: decodeToken(response.data.token),
    response
  };
}

function signupUserError(error) {
  console.error(error);
  return {
    type: SIGNUP_USER_ERROR,
    error
  };
}

export function handleSignup({
  username,
  name,
  surname,
  email,
  password,
  location
}) {
  return function(dispatch) {
    dispatch(signupUser());
    return authService
      .signup({ username, name, surname, email, password, location })
      .then(response => {
        dispatch(signupUserSuccess(response));
      })
      .catch(error => dispatch(signupUserError(error.response.data.message)));
  };
}

function loginUser() {
  return {
    type: LOGIN_USER
  };
}

function loginUserSuccess(response) {
  localStorage.setItem('token', response.data.token);
  return {
    type: LOGIN_USER_SUCCESS,
    user: decodeToken(response.data.token),
    response
  };
}

function loginUserError(error) {
  console.error(error);
  return {
    type: LOGIN_USER_ERROR,
    error
  };
}

export function handleLogin({ email, password }) {
  return function(dispatch) {
    dispatch(loginUser());
    return authService
      .login({ email, password })
      .then(response => {
        dispatch(loginUserSuccess(response));
      })
      .catch(error => dispatch(loginUserError(error.response.data.message)));
  };
}
