'use client';

import { styled } from '@mui/material';
import { BasedFabButton } from '../BasedComponent';

export const StyledFab = styled(BasedFabButton)`
  /* &.landing {
    width: 4rem;
    border-radius: 1.25rem;
    background: transparent;
    border: 1px solid white;
    color: white;
    &.Mui-disabled {
      color: ${({ disabled, theme }) =>
    disabled && theme.palette.custom[600]} !important;
      border: 1px solid
        ${({ theme, disabled }) =>
    disabled && theme.palette.custom[600]} !important;
    }
  } */
`;
