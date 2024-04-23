import {
  Button as MUIButton,
  ButtonProps,
  styled,
  IconButton,
} from '@mui/material';

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
      border: `2px solid ${theme.palette.primary.light}`,
      color: theme.palette.primary.light,
    },

    '&.Mui-disabled': {
      border: `1px solid ${theme.palette.grey[300]}`,
      backgroundColor: 'transparent',
      color: theme.palette.grey[300],
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
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      border: '0px',
    },
  },

  /* Common disabled styles */
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[300],
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

  '& .MuiButton-startIcon > svg': {
    marginLeft: '0.75rem',
    marginRight: '0',
    width: '1.5rem',
    height: '1.5rem',
  },

  '& .MuiButton-endIcon > svg': {
    marginRight: '0.75rem',
    marginLeft: '0',
    width: '1.5rem',
    height: '1.5rem',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '12px',

  '& > svg': {
    fill: theme.palette.grey[300],
  },

  '&.Mui-disabled': {
    '& > svg': {
      fill: theme.palette.grey[600],
      opacity: 0.5,
    },
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    '& > svg': {
      fill: theme.palette.secondary.dark,
    },
  },

  '&.active': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.secondary.main}`,
    '& > svg': {
      fill: theme.palette.secondary.main,
    },
  },

  '&.MuiIconButton-sizeLarge': {
    padding: '0.75rem',
  },

  '&.MuiIconButton-sizeMedium': {
    padding: '0.5rem',
  },

  '&.MuiIconButton-sizeSmall': {
    padding: '0.25rem',
  },
}));
