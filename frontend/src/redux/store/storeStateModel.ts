import { IAuth, ISnackBarState } from '../../models';

export interface IStore {
  auth: IAuth;
  snackbar: ISnackBarState;
}
