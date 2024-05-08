'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainerLayout = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledMainLayout = styled(Box)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`;

export const StyledContainerSideBar = styled(Box)`
  height: 100vh;
  width: 5rem;
`;

export const StyledChildLayout = styled('main')`
  margin-top: 4rem;
  overflow-y: auto;
  overflow-x: hidden;
`;
