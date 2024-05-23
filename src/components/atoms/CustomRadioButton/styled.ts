'use client';
import { styled } from '@mui/material/styles';
import { BaseRadioButton } from '@/components/BaseComponents/BaseRadioButton';
import { IStyledRadio } from './type';

export const StyledRadioButton = styled(BaseRadioButton)<IStyledRadio>`
  & .MuiRadio-root {
    color: ${({ theme, error }) =>
      error ? theme.palette.error.main : theme.palette.grey[300]} !important;
  }

  & .MuiRadio-root:hover {
    color: ${({ theme }) => theme.palette.common.black} !important;
    background-color: transparent;
  }

  & .Mui-checked {
    color: ${({ theme }) => theme.palette.primary.light} !important;
  }

  & .Mui-disabled {
    opacity: 0.3;
  }
`;
