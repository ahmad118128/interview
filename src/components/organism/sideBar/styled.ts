import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.5s',
  borderRadius: '0.375rem',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.common.white,
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
}));
