import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../redux/store/storeStateModel';
import { Alert, Snackbar, SnackbarOrigin } from '@mui/material';
import { AlertType } from '../../models';
import { clearSnackBar } from '../../redux/actions/snackbar/actions';

const Toast: FC<{ position: SnackbarOrigin; duration: number }> = ({
  position: { vertical, horizontal },
  duration
}) => {
  const snackBarState = useSelector(
    (state: IStore) => state.snackbar.snackbarAlert
  );
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>(snackBarState.msg);
  const [type, setType] = useState<AlertType>(snackBarState.type);

  const onCloseHandler = (): void => {
    dispatch(clearSnackBar());
  };

  useEffect(() => {
    if (!snackBarState.msg) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setType(snackBarState.type);
      setMsg(snackBarState.msg);
    }
  }, [snackBarState]);

  return (
    <Snackbar
      onClose={onCloseHandler}
      open={isOpen}
      autoHideDuration={duration}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert elevation={6} variant='filled' severity={type}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
