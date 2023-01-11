import { useState } from 'react';

const defaultValues = {
  dTitle: 'Ooops',
  dMessage: 'Something went wrong',
  dType: 'error',
  dOpen: false,
  dActionBtn: false,
};

export const useCustomDialog = (initialState = { defaultValues }) => {
  const [dialogState, setDialogState] = useState(initialState);

  const handleOpenResultDialog = () => {
    setDialogState({
      ...dialogState,
      dOpen: true,
    });
  };

  const handleCloseResultDialog = () => {
    /*
    setDialogState({
      ...dialogState,
      dOpen: false,
    });
    */
    setDialogState(initialState);
  };

  const setActionBtnVisibility = (show) => {
    setDialogState({
      ...dialogState,
      dActionBtn: { show },
    });
  };

  return [
    dialogState,
    setDialogState,
    handleOpenResultDialog,
    handleCloseResultDialog,
    setActionBtnVisibility,
  ];
};
