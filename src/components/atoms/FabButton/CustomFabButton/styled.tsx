'use client';

import { styled } from '@mui/material';
import { BasedFabButton } from '../BasedComponent';

export const StyledFab = styled(BasedFabButton)`
padding: 13px;
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
 
 
  &.MuiFab-root {
    background-color : ${({ disabled, theme }) =>
    disabled ? theme.palette.grey[300] : theme.palette.primary.light};
  }

  &.MuiFab-root svg {
    width: 30px;
    height: 30px;
  }

  &.MuiFab-root:hover {
    background-color : ${({ disabled, theme }) =>
    theme.palette.primary.dark};
  }
  

 
`;
