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
import { generalStr, registrationStr } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

export default function CustomModal({
  open,
  setOpen,
  title,
  children,
  buttons,
  onSubmit,
  id,
  onClose,
  ...res
}: CustomModalProps) {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      {...res}
    >
      <StyledCustomModal>
        <StyledDeleteButtonBox>
          <IconButton
            iconName="streamline:delete-1"
            size="small"
            onClick={onClose}
            height={16}
            width={16}
          />
        </StyledDeleteButtonBox>

        {title && <StyledTitleText variant="h3">{title}</StyledTitleText>}
        {children}
        {buttons && (
          <StyledActionButtonsBox>
            <CustomButton variant="contained" onClick={onSubmit}>
              {registrationStr.ok}
            </CustomButton>
            <CustomButton variant="outlined" onClick={onClose}>
              {generalStr.refuse}
            </CustomButton>
          </StyledActionButtonsBox>
        )}
      </StyledCustomModal>
    </Modal>
  );
}
