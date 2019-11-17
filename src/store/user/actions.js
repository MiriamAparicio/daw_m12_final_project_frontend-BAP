import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR
} from '../constants';
import authService from '../../services/auth-service';
import profileService from '../../services/profile-service';
import { decodeToken } from '../../utils/utils';
import { ERROR_MESSAGES } from '../../utils/error-messages';

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
  console.error(error.message);
  return {
    type: SIGNUP_USER_ERROR,
    error: ERROR_MESSAGES[error.code]
  };
}

export function handleSignup(user) {
  return function(dispatch) {
    dispatch(signupUser());
    return authService
      .signup(user)
      .then(response => {
        dispatch(signupUserSuccess(response));
      })
      .catch(error => dispatch(signupUserError(error.response.data)));
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
  console.error(error.message);
  return {
    type: LOGIN_USER_ERROR,
    error: ERROR_MESSAGES[error.code]
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
      .catch(error => dispatch(loginUserError(error.response.data)));
  };
}

function updateUser() {
  return {
    type: UPDATE_USER
  };
}

function updateUserSucces(response) {
  localStorage.setItem('token', response.data.token);
  return {
    type: UPDATE_USER_SUCCESS,
    user: decodeToken(response.data.token),
    response
  };
}

function updateUserError(error) {
  console.error(error.message);
  return {
    type: UPDATE_USER_ERROR,
    error: ERROR_MESSAGES[error.code]
  };
}

export function handleUpdateUser(user, token) {
  return function(dispatch) {
    dispatch(updateUser());
    return profileService
      .updateUserProfile(user, token)
      .then(response => {
        dispatch(updateUserSucces(response));
      })
      .catch(error => dispatch(updateUserError(error.response.data)));
  };
}
