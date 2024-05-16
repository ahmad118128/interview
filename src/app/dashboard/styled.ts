'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledSideBarType } from './type';

export const StyledChildLayout = styled('main')`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 2.5rem;
  flex-wrap: wrap;
  height: 100vh;
  flex: 1;
`;

export const StyledMainLayout = styled(Box)<StyledSideBarType>`
  width: 100vw;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-right: ${({ isOpen }) => (isOpen ? '12.6rem' : '5.1rem')};
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

export const StyledContainerSideBar = styled(Box)<StyledSideBarType>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? '11rem' : '3.5rem')};
  position: fixed;
  background: ${({ theme }) => theme.palette.grey[50]};
  padding: 0.75rem;
  border-left: 2px solid ${({ theme }) => theme.palette.grey[200]};
`;
