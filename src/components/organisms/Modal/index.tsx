import * as React from 'react';
import Modal from '@mui/material/Modal';
import {
  StyledActionButtonsBox,
  StyledCustomModal,
  StyledDeleteButton,
  StyledDeleteButtonBox,
  StyledErrorText,
  StyledTitleText,
} from './styled';
import { CustomModalProps } from './type';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomButton } from '@/components/atoms/CustomButton';

export default function CustomModal({
  open,
  setOpen,
  title,
  errorTitle,
  children,
  buttons,
  activeButtonHandler,
  deleteButtonHandler,
}: CustomModalProps) {
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
        <StyledDeleteButtonBox>
          <StyledDeleteButton size="small" variant="text">
            <Icon
              onClick={handleClose}
              icon="streamline:delete-1"
              width="16"
              height="16"
            />
          </StyledDeleteButton>
        </StyledDeleteButtonBox>

        {errorTitle && (
          <StyledErrorText variant="body1">{errorTitle}</StyledErrorText>
        )}
        {title && <StyledTitleText variant="body1">{title}</StyledTitleText>}
        {children}
        {buttons && (
          <StyledActionButtonsBox>
            <CustomButton variant="contained" onClick={activeButtonHandler}>
              تائید
            </CustomButton>
            <CustomButton variant="outlined" onClick={deleteButtonHandler}>
              انصراف
            </CustomButton>
          </StyledActionButtonsBox>
        )}
      </StyledCustomModal>
    </Modal>
  );
}
