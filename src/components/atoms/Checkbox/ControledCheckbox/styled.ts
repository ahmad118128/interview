'use client';
import { Box, Checkbox, styled } from '@mui/material';
import { IStyledCheckbox } from './type';

export const StyledCheckbox = styled(Checkbox)<IStyledCheckbox>`
  .MuiSvgIcon-root {
    fill: ${({ theme, error, disabled }) =>
      disabled
        ? theme.palette.grey[200]
        : error
          ? theme.palette.error.main
          : theme.palette.primary.main};
  }

  &.Mui-checked {
    .MuiSvgIcon-root {
      fill: ${({ theme, disabled }) =>
        disabled
          ? theme.palette.grey[200]
          : theme.palette.primary.light} !important;
    }
  }

  :hover {
    background-color: transparent !important;
    .MuiSvgIcon-root {
      fill: ${({ theme, error }) =>
        error ? theme.palette.error.main : theme.palette.primary.light};
    }
  }
`;

export const StyledWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;
