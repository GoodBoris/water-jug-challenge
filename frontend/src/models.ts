export interface IAuth {
  currentUser: CurrentUser | null;
  err: any;
  isLoading: boolean;
}

export type CurrentUser = {
  id: number;
  pseudo: string;
  email: string;
  token?: string;
};

export interface ISnackBarState {
  snackbarAlert: SnackBarAlert;
}

export type SnackBarAlert = {
  type: AlertType;
  msg: string;
};

export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined;
