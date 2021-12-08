// import update from 'react-addons-update';
// import {loadState, saveState} from '../../components/LocalStorage/index.ts';
// import {checkEmpty} from '@funcUtils/checkEmpty.ts';
// import {StorageKeys} from '../../reference/constants';

export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (username, token) => ({
  type: AUTH_LOGIN_SUCCESS,
  username,
  token
});

export const loginFailure = () => ({
  type: AUTH_LOGIN_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});

const initialState = {
  login: {
    status: 'INIT'
  },
  status: {
    isLoggedIn: false,
    currentUser: ''
  },
  accessToken: ''
};

function Authentication(state, action) {
  switch (action.type) {
    case AUTH_INIT:
      return initialState;
    case AUTH_LOGIN_SUCCESS:
      return initialState;
    case AUTH_LOGIN_FAILURE:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return initialState;
  }
}

export default Authentication;
