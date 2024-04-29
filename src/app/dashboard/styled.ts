'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSideBar = styled(Box)`
  width: 3.75rem;
  height: 100%;
  transition: all 0.5s;
`;
export const StyledChildLayout = styled('main')`
  margin-top: 64px;
  overflow: auto;
  padding: 20px;
  flex: 1;
`;
export const StyledMainLayout = styled(Box)`
  width: 100%;
  flex: 1;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const StyledContainerLayout = styled(Box)`
  min-height: calc(100vh);
  height: auto;
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  inset: 0;
  overflow: hidden;
  max-height: calc(100vh-64px);
  position: relative;
  width: 100%;
`;
export const StyledContainerAppBar = styled(Box)`
  position: fixed;
  width: 100%;
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
  position: sticky;
`;
