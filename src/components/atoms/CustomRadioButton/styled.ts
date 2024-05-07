'use client';
import { styled } from '@mui/material/styles';
import { BaseRadioButton } from '@/components/baseComponents/BaseRadioButton';
import { RadioProps } from '@mui/material';

export const StyledRadioButton = styled(BaseRadioButton)<any>`
  /* background-color: red; */
  & .MuiRadio-root {
    color: ${({ theme, error }) =>
      error ? 'red' : theme.palette.grey[300]} !important;
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
