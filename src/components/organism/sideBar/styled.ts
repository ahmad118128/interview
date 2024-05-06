import { Box, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledContainerIconTitleType } from './type';

export const StyledContainerIconTile = styled(
  Box
)<StyledContainerIconTitleType>`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 1rem;
  cursor: pointer;

  .iconSideBar {
    color: ${({ theme }) => theme.palette.grey[300]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    .iconSideBar,
    .titleSideBar {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border: 1px solid ${({ theme }) => theme.palette.primary.light};
    box-shadow: 0px 0px 10px 0px rgba(126, 188, 89, 0.5);
    .iconSideBar,
    .titleSideBar {
      color: ${({ theme }) => theme.palette.primary.light};
    }

    h3 {
      color: ${({ theme }) => theme.palette.primary.light};
    }

    * {
      fill: ${({ theme }) => theme.palette.primary.light};
    }
  }

  .closeIcon {
    transition: all 0.5s;
    transform: ${({ label }) => (!label ? ' rotate( 180deg )' : 'none')};
  }

  h3 {
    color: ${({ theme }) => theme.palette.grey[300]};
    max-width: ${({ label }) => (!label ? '0' : '100%')};
    max-height: ${({ label }) => (!label ? '0' : '1.25rem')};
    transition: all 0.3s ease-in-out;
    transition-delay: ${({ label }) => (!label ? '0' : '0.1s')};
    overflow: hidden;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;
export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.5s',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  // Add your custom styles here
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
    '.MuiListItemIcon-root , .MuiListItemText-root ': {
      color: theme.palette.primary.light,
    },
  },
  '&:focus': {
    backgroundColor: theme.palette.grey[100],
    boxShadow: '0px 0px 10px 0px rgba(126, 188, 89, 0.5)',
    border: `1px solid ${theme.palette.primary.light}`,
    '.MuiListItemIcon-root , .MuiListItemText-root ': {
      color: theme.palette.primary.light,
    },
  },
  '&:active': {
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
