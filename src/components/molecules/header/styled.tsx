import { Box, IconButton, styled } from '@mui/material';

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding-inline: 2.5rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 0.0625rem solid #ededef;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 100;
`;

export const UsernameBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ActionBar = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled(IconButton)`
  padding: 0;
  color: ${({ theme }) => theme.palette.primary.main};
`;
