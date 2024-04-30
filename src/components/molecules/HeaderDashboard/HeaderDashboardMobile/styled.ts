import { Box, Popover, styled } from '@mui/material';

export const ProfileViewer = styled(Popover)`
  & .MuiPaper-root {
    border-radius: 0.5rem;
    width: 12.5rem;
    height: 7.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const MenuBox = styled(Box)`
  width: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
