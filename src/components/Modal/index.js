import * as React from 'react';

import { Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledIconButton,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  StyledDivider
} from './styles';

const DialogTitleClose = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <StyledDialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <StyledIconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.colors.baseText,
            opacity: 0.5
          }}
        >
          <CloseIcon />
        </StyledIconButton>
      ) : null}
    </StyledDialogTitle>
  );
};

const Modal = ({ open, handleClose, title, children, actions, paperProps, ...dialogProps }) => (
  <Dialog
    PaperProps={paperProps}
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
    {...dialogProps}
  >
    {title && (
      <>
        <DialogTitleClose id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitleClose>
        <StyledDivider light />
      </>
    )}

    <StyledDialogContent>{children}</StyledDialogContent>
    <StyledDialogActions>{actions}</StyledDialogActions>
  </Dialog>
);

export default Modal;
