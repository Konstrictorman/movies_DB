import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogTitle-root': {
    padding: 0,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogContentText-root': {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '300',
  },
  '& .MuiDialog-paper': {
    backgroundColor: '#232323',
    color: 'white',
    borderRadius: '8px',
    border: 'solid #6f6f6f 1px',
  },
}));

export const ActionResultDialog = ({
  open,
  handleClose,
  title,
  message,
  type,
  children,
}) => {
  return (
    <div>
      <BootstrapDialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title" className="right">
          <IconButton className="right" onClick={handleClose}>
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="dialogIconContent">
            {type === 'success' && (
              <CheckCircleIcon
                className="dialogIcon"
                fontSize="66px"
                htmlColor="#f65261"
                style={{ foregroundColor: 'white' }}
                outlined
              />
            )}

            <span className="dialogTitle">{title}</span>

            <DialogContentText
              id="alert-dialog-description"
              className="dialogMsg"
            >
              {message}
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>{children}</DialogActions>
      </BootstrapDialog>
    </div>
  );
};
