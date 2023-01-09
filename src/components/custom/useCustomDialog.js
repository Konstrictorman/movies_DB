import { useState } from 'react';

const defaultValues = {
  d_title: 'Ooops',
  d_message: 'Something went wrong',
  d_type: 'error',
  d_open: false,
  d_actionBtn: false,
};

export const useCustomDialog = (initialState = { defaultValues }) => {
  const [dialogState, setDialogState] = useState(initialState);

  const handleOpenResultDialog = () => {
    setDialogState({
      ...dialogState,
      d_open: true,
    });
  };

  const handleCloseResultDialog = () => {
    /*
    setDialogState({
      ...dialogState,
      d_open: false,
    });
    */
    setDialogState(initialState);
  };

  const setActionBtnVisibility = (show) => {
    setDialogState({
      ...dialogState,
      d_actionBtn: { show },
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
