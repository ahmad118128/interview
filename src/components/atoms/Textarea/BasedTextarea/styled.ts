'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { IStyledBox } from './type';

export const StyledBox = styled(Box)<IStyledBox>`
  label {
    color: ${({ theme, error }) =>
      error && `${theme.palette.error.main} !important`};
  }

  & textarea {
    border: ${({ theme, error }) =>
      error && `0.0625rem solid  ${theme.palette.error.main}`} !important;
    &:focus {
      border: ${({ theme, error }) =>
        error &&
        `0.0625rem solid
         ${theme.palette.error.main}`} !important;
      outline-style: none;
    }
    &:hover {
      border: 0.0625rem solid
      ${({ theme, error }) =>
        error
          ? theme.palette.error.main
          : theme.palette.primary.light}!important;

    }
  }

  /* & textarea:hover {
    border: 0.0625rem solid
      ${({ theme, error }) =>
        error
          ? theme.palette.error.main
          : theme.palette.primary.light}!important;
  } */
`;
