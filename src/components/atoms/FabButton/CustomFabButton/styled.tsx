'use client';

import { styled } from '@mui/material';
import { BasedFabButton } from '../BasedComponent';

export const StyledFab = styled(BasedFabButton)`
display: flex;
gap: 1rem;
width: 56px;
height: 56px;
 
 
  &.MuiFab-root {
    background-color : ${({ disabled, theme }) =>
    theme.palette.primary.light};
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
