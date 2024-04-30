'use client';

import { styled } from '@mui/material';
import { BasedFabButton } from '../../baseComponents/BasedFabButton';

export const StyledFab = styled(BasedFabButton)`
  &.MuiFab-root {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.palette.grey[300] : theme.palette.primary.light};
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2);
  }

  &.MuiFab-root svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &.MuiFab-root:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark} !important;
  }
  &.MuiSpeedDial-root .MuiSpeedDial-fab {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.palette.grey[300] : theme.palette.primary.light};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark} !important;
    }
  }

  &.MuiSpeedDialAction-fab {
    background-color: ${({ theme }) => theme.palette.common.black} !important;
    padding: 0.1875rem;
    svg {
      width: 100% !important;
      height: 100% !important;
      box-shadow: none !important;
    }

    &:hover {
      background-color: ${({ theme }) => theme.palette.common.black} !important;
    }
  }
`;
