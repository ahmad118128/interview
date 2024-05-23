import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 300px;
    background: ${({ theme }) => theme.palette.primary.dark};
    border-radius: 2rem 0 0 2rem;
    height: '100%';
  }
  .MuiBackdrop-root {
    backdrop-filter: blur(5px);
    background: rgba(64, 54, 54, 0.4);
  }

  .DrawerListWrapper {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.palette.primary.dark};
    border-radius: 2rem 0;
    padding: 1.5rem 0.75rem;
    color: ${({ theme }) => theme.palette.common.white};
    height: 100%;
  }
`;
export const StyledIconButton = styled(IconButton)`
  align-self: flex-end;
  padding: 0;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledList = styled(List)`
  & .MuiTouchRipple-root {
    display: none;
  }
  padding: 0;
  margin-top: 1.5rem;
`;
export const StyledListItemButton = styled(ListItemButton)`
  padding: 1rem 0.75rem;
  border-bottom: 0.1px solid ${({ theme }) => theme.palette.primary.light};
`;

export const StyledListItemButtonSetting = styled(ListItemButton)`
  padding: 1rem 0.75rem;
  justify-self: flex-end;
  justify-content: end;
`;

export const StyledLisItemText = styled(ListItemText)`
  text-align: right;
  color: ${({ theme }) => theme.palette.common.white};
`;
