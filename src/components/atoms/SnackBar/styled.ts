import { Alert, styled } from '@mui/material';

export const StyledAlert = styled(Alert)(({ theme }) => ({
  '&.MuiAlert-filled': {
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    paddingInline: 0,
  },
  '&.MuiAlert-filledError': {
    backgroundColor: theme.palette.error.main,
  },
  '&.MuiAlert-filledWarning': {
    backgroundColor: theme.palette.warning.main,
  },
  '&.MuiAlert-filledSuccess': {
    backgroundColor: theme.palette.success.main,
  },
  '&.MuiAlert-filledInfo': {
    backgroundColor: theme.palette.info.main,
  },
  '.MuiAlert-icon': {
    marginLeft: '0.5rem',
  },
  '.MuiAlert-action': {
    marginRight: '4rem',
    paddingBlock: 0,
  },
}));
