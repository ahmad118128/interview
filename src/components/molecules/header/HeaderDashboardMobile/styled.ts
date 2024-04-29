import { Box, IconButton, Menu, Popover, styled } from '@mui/material';

export const ProfileViewer = styled(Popover)`
  & .MuiPaper-root {
    border-radius: 8px;
    width: 200px;
    height: 124px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

export const ActionMenu = styled(Box)`
  width: 176px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileAction = styled(IconButton)`
  width: 40px;
  height: 40px;
  color: #383838;
  background-color: #fafafa;
  border-radius: 6px;
`;
