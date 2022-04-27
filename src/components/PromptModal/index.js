import * as React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Modal from '../Modal';

const Message = styled(Typography)`
  color: #303643;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.7;
`;

const PromptModal = (props) => {
  const {
    title,
    message,
    open,
    handleClose,
    handleConfirm,
    processing = false,
    paperProps,
    closeButtonTitle
  } = props;
  return (
    <Modal
      title={title}
      handleClose={handleClose}
      open={open}
      fullWidth
      maxWidth="xs"
      actions={
        <>
          <Button variant="outlined" color="secondary" onClick={handleClose} disabled={processing}>
            {closeButtonTitle || 'Cancel'}
          </Button>
          <Button variant="contained" onClick={handleConfirm} disabled={processing}>
            {processing ? <CircularProgress size={24.5} /> : 'Yes'}
          </Button>
        </>
      }
      paperProps={paperProps}
    >
      <Message>{message}</Message>
    </Modal>
  );
};

export default PromptModal;
