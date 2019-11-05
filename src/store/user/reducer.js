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
import { decodeToken } from '../../utils/utils';

const initialState = {
  isLogin: true,
  data: localStorage.getItem('token')
    ? decodeToken(localStorage.getItem('token'))
    : {},
  token: localStorage.getItem('token') && localStorage.getItem('token'),
  error: ''
};

function user(state = initialState, action) {
  switch (action.type) {
    // SIGNUP
    case SIGNUP_USER:
      return {
        ...state,
        isLogin: true
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLogin: false,
        data: action.user,
        token: action.response.data.token
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        isLogin: false,
        error: action.error
      };

    // LOGIN
    case LOGIN_USER:
      return {
        ...state,
        isLogin: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLogin: false,
        data: action.user,
        token: action.response.data.token
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLogin: false,
        error: action.error
      };

    //UPDATE
    case UPDATE_USER:
      return {
        ...state,
        isLogin: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLogin: false,
        data: action.user,
        token: action.response.data.token
      };
    case UPDATE_USER_ERROR:
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
