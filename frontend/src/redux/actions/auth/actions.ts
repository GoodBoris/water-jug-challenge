import { AuthActionTypes } from './types';
import { Dispatch } from 'react';
import { removeLocalStorageToken } from '../../../utils/authUtils';
import { Action } from '../models';

const createGetProfile = (): Action => {
  return {
    type: AuthActionTypes.GET_PROFILE
  };
};

const createRegister = (): Action => {
  return {
    type: AuthActionTypes.REGITSER
  };
};

const createLogin = (): Action => {
  return {
    type: AuthActionTypes.LOGIN
  };
};

const registerSuccess = (data: any): Action => {
  return {
    type: AuthActionTypes.REGISTER_SUCCESS,
    payload: data
  };
};

const loginSuccess = (data: any): Action => {
  return {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: data
  };
};

const getProfileSuccess = (data: any): Action => {
  return {
    type: AuthActionTypes.GET_PROFILE_SUCCESS,
    payload: data
  };
};

export const userLoggedOut =
  () =>
  (dispatch: Dispatch<any>): void => {
    removeLocalStorageToken();
    dispatch({
      type: AuthActionTypes.LOGOUT
    });
  };
