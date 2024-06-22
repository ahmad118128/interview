import { StyledSideBarType } from '@/app/dashboard/type';
import {
  Box,
  Button,
  Divider,
  ListItemButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledsideBarWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const StyledNavWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 450px;
  overflow: scroll;
  padding-inline: 0 15px;
`;

export const StyledListItemButton = styled(ListItemButton)<StyledSideBarType>(
  ({ theme, isOpen }) => ({
    width: isOpen ? '100%' : '57.6px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.5s',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    justifyContent: isOpen ? 'flex-start' : 'center',
    gap: isOpen ? '0.5rem' : '0',
    marginBottom: '0.45rem',
    padding: '1rem',
    '&.MuiButtonBase-root': {
      color: 'transparent !important',
    },

    '&:hover': {
      backgroundColor: theme.palette.grey[100],
      '.MuiListItemIcon-root , .MuiListItemText-root ': {
        color: theme.palette.primary.light,
      },
    },

    '&:active': {
      backgroundColor: theme.palette.grey[100],
      '.MuiListItemIcon-root , .MuiListItemText-root ': {
        color: theme.palette.primary.light,
      },
    },

    '&.selected': {
      backgroundColor: theme.palette.grey[100],
      border: `1px solid ${theme.palette.primary.light}`,
      boxShadow: '0px 0px 10px 0px rgba(126, 188, 89, 0.5)',
      '.MuiListItemIcon-root , .MuiListItemText-root ': {
        color: theme.palette.primary.light,
      },
    },

    '.MuiListItemIcon-root': {
      color: theme.palette.grey[300],
      minWidth: 0,
    },

    '.MuiListItemText-root': {
      color: theme.palette.grey[300],
      flexGrow: 0,
    },
  })
);

export const StyledFooterSideBar = styled(Box)<StyledSideBarType>(
  ({ theme, isOpen }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    marginBottom: isOpen ? '2rem' : '1.5rem',
    backgroundColor: theme.palette.common.white,
  })
);

export const StyledDivider = styled(Divider)(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.grey[300],
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  lineHeight: 1.5,
  color: theme.palette.grey[300],
}));

export const StyledFooterOpen = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  height: '32px',
  width: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.375rem',
}));
