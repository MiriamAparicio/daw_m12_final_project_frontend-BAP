import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../constants';
import { decodeToken } from '../../utils/utils';

const initialState = {
  isLogin: true,
  user: localStorage.getItem('token')
    ? decodeToken(localStorage.getItem('token'))
    : {},
  token: localStorage.getItem('token') && localStorage.getItem('token'),
  error: ''
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLogin: false,
        user: action.user,
        token: action.response.data.token
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLogin: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default user;
