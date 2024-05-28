import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';
import { StyledCustomModal } from './styles';

export default function CustomModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <StyledCustomModal>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </StyledCustomModal>
    </Modal>
  );
}
