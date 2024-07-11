'use client';
import { styled } from '@mui/material/styles';
import { BaseRadioButton } from '@/components/BaseComponents/BaseRadioButton';
import { IStyledRadio } from './type';
import { Box, Grid, RadioGroup } from '@mui/material';

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

export const RadioButtonContainer = styled(RadioGroup)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    gap: 24px !important;
  }
`;

export const RadioButtonLabelHolder = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;
