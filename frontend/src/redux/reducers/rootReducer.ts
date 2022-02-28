import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { snackBarReducer } from './snackBarReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer
});
