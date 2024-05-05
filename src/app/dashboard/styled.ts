'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledChildLayout = styled('main')`
  margin-top: 4rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 2.5rem;
  flex-wrap: wrap;
  height: 100vh;
  flex: 1;
`;

export const StyledMainLayout = styled(Box)`
  width: 100vw;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-right: 5rem;
  overflow-y: hidden;
`;

export const StyledContainerLayout = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledContainerAppBar = styled(Box)`
  position: fixed;
  width: 100%;
  height: 4rem;
`;

export const StyledContainerSideBar = styled(Box)`
  height: 100%;
  width: 5rem;
  position: fixed;
`;
