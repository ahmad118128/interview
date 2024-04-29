'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSideBar = styled(Box)`
  width: 3.75rem;
  height: 100%;
  transition: all 0.5s;
`;
export const StyledChildLayout = styled('main')`
  width: 100%;
  overflow: hidden;
`;
export const StyledContainerLayout = styled(Box)`
  min-height: calc(100vh - 64px);
  height: auto;
  width:calc(100vw - 3.75rem)
  position: relative;
  top: 64px;
  display: flex;
  flex-wrap: no-wrap;
  inset: 0;
  overflow: hidden;
  max-height: calc(100vh-64px);
  position: relative;
`;
export const StyledContainerAppBar = styled(Box)`
  position: fixed;
  width: calc(100%);
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14),
    0px 1px 10px rgba(0, 0, 0, 0.12);
  background-color: white;
  height: 4rem;
`;
export const StyledContainerSideBar = styled(Box)`
  height: 100vh;
  width: 3.75rem;
  transition: all 0.5s;
  background: radial-gradient(
    100% 67.64% at 100% 50%,
    #0b0038 0%,
    #1e1449 100%
  );
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  position: fixed;
  z-index: 100;
`;
