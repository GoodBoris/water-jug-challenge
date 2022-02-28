import { ISnackBarState } from '../../models';
import { Action } from '../actions/models';
import { SnackBarActionTypes } from '../actions/snackbar/types';

const initialState: ISnackBarState = {
  snackbarAlert: { type: undefined, msg: '' }
};

export const snackBarReducer = (
  state = initialState,
  action: Action
): ISnackBarState => {
  switch (action.type) {
    case SnackBarActionTypes.SET_SNACKBAR:
      return {
        ...state,
        snackbarAlert: action.payload
      };
    case SnackBarActionTypes.CLEAR_SNACKBAR:
      return {
        ...state,
        snackbarAlert: { type: undefined, msg: '' }
      };
    default:
      return state;
  }
};
