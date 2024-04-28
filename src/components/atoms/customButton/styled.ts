import { Button as MUIButton, ButtonProps, styled } from '@mui/material';

export const StyledButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
  /* Default styles */
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.grey[50],
  borderRadius: '6px',
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  boxShadow: 'none',

  '&:hover, &:focus': {
    backgroundColor: theme.palette.secondary.dark,
  },
  /* Variant styles */
  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.grey[50],
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.grey[50],
      boxShadow: 'none',
    },
  },

  '&.MuiButton-outlinedPrimary': {
    border: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.grey[50],

    '&:hover, &:focus': {
      outline: `1px solid ${theme.palette.primary.light}`,
      color: theme.palette.primary.light,
      boxShadow: 'none',
      transform: `none`,
    },
  },

  '&.MuiButton-textPrimary': {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  // style of loginButton
  '&.loginButton': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: '0px',
    width: '18.75rem',
    height: '2.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      border: '0px',
    },
  },

  /* Common disabled styles */
  '&.Mui-disabled:not(:has(svg))': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[300],
    border: 'none',
  },
  //different size styles //
  '&.MuiButton-sizeSmall': {
    padding: '0.25rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '400',
  },

  '&.MuiButton-sizeMedium': {
    padding: '0.5rem 2rem',
    fontSize: '1rem',
    fontWeight: '400',
  },

  '&.MuiButton-sizeLarge': {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '400',
  },
}));
