import { SnackBarActionTypes } from './types';
import { SnackBarAlert } from '../../../models';
import { Action } from '../models';

export const setSnackBar = (data: SnackBarAlert): Action => {
  return {
    type: SnackBarActionTypes.SET_SNACKBAR,
    payload: data
  };
};

export const clearSnackBar = (): Action => {
  return {
    type: SnackBarActionTypes.CLEAR_SNACKBAR
  };
};
