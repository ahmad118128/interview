import {
  Button as MUIButton,
  ButtonProps,
  styled,
  IconButton,
} from '@mui/material';

export const StyledButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.grey[50],
  borderRadius: '6px',
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  boxShadow: 'none',

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

  '&.Mui-disabled:not(:has(svg))': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[300],
    border: 'none',
  },
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

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '6px',

  '& .iconify': {
    color: theme.palette.primary.main,
  },

  '&.Mui-disabled': {
    '& .iconify': {
      color: theme.palette.grey[300],
      opacity: 0.5,
    },
  },

  '&:hover': {
    backgroundColor: theme.palette.grey[100],
    outline: `1px solid ${theme.palette.primary.light}`,
    '& .iconify': {
      color: theme.palette.primary.light,
    },
  },

  '&:selected': {
    backgroundColor: 'red',
  },

  '&.active': {
    backgroundColor: theme.palette.grey[100],
    outline: `1px solid ${theme.palette.primary.light}`,
    '& .iconify': {
      color: theme.palette.primary.light,
    },
  },

  '&.MuiIconButton-sizeLarge': {
    padding: '0.25rem',
  },

  '&.MuiIconButton-sizeMedium': {
    padding: '0.25rem',
  },

  '&.MuiIconButton-sizeSmall': {
    padding: '0.25rem',
  },
}));
