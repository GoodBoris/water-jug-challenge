import { Action } from '../actions/models';
import { IAuth } from '../../models';
import { AuthActionTypes } from '../actions/auth/types';

const initialState: IAuth = {
  isLoading: true,
  currentUser: null,
  err: ''
};

export const authReducer = (state = initialState, action: Action): IAuth => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload
      };
    case AuthActionTypes.REGITSER:
      return {
        ...state,
        isLoading: true
      };
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload
      };
    case AuthActionTypes.GET_PROFILE:
      return {
        ...state,
        isLoading: true
      };
    case AuthActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        err: '',
        currentUser: action.payload
      };
    case AuthActionTypes.AUTH_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isLoading: false,
        currentUser: null
      };
    default:
      return state;
  }
};
