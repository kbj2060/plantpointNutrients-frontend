import update from 'react-addons-update';
import { saveState, loadState } from '../../utils/localstorage';
// import {checkEmpty} from '@funcUtils/checkEmpty.ts';
// import {StorageKeys} from '../../reference/constants';

export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const RESTORE_LOGIN_INFO = 'RESTORE_LOGIN_INFO';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (name, authorization) => ({
  type: AUTH_LOGIN_SUCCESS,
  name,
  authorization
});

export const restoreLoginInfo = (info) => ({
  type: RESTORE_LOGIN_INFO,
  info
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

function Authentication(state = initialState, action) {
  switch (action.type) {
    case AUTH_INIT:
      return initialState;
    case AUTH_LOGIN_SUCCESS: {
      const successUpdated = update(state, {
        login: {
          status: { $set: 'SUCCESS' }
        },
        status: {
          isLoggedIn: { $set: true },
          currentUser: { $set: action.name }
        },
        accessToken: { $set: action.authorization }
      });
      saveState('authentication', successUpdated);
      return successUpdated;
    }
    case RESTORE_LOGIN_INFO: {
      return action.info;
    }
    case AUTH_LOGIN_FAILURE:
      return initialState;
    case LOGOUT:
      saveState('authentication', initialState);
      return initialState;
    default:
      try {
        return !loadState('authentication') ? state : loadState('authentication');
      } catch (e) {
        return initialState;
      }
  }
}

export default Authentication;
