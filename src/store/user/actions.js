import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../constants';
import authService from '../../services/auth-service';
import { decodeToken } from '../../utils/utils';

function loginUser() {
  return {
    type: LOGIN_USER
  };
}

function loginUserSuccess(response) {
  localStorage.setItem('token', response.data.token);
  console.log(localStorage.getItem('token'));
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
