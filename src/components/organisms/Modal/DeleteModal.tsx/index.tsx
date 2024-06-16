'use client';

import { useState } from 'react';
import CustomModal from '../CustomModal';
import { Box, Typography } from '@mui/material';
import { DataBankRoute } from '@/strings';
import { CustomModalProps } from '../type';
import theme from '@/theme';
import { StyledDeleteTitle } from './styled';
import { StyledTitleText } from '../styled';

export const DeleteModal = ({
  open,
  setOpen,
  title,
  buttons,
  handleClose,
  id,
  onSubmit,
}: CustomModalProps) => {
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      buttons={buttons}
      handleClose={handleClose}
      id={id}
      onSubmit={onSubmit}
    >
      <Box>
        <StyledDeleteTitle variant="body1">
          {DataBankRoute.deleteModalRedText}
        </StyledDeleteTitle>
        <StyledTitleText variant="body1">{title}</StyledTitleText>
      </Box>
    </CustomModal>
  );
};
