import { IconButton, styled } from '@mui/material';

export const HeaderBox = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding-inline: 2.5rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.grey[200]};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 100;
`;

export const ActionButton = styled(IconButton)`
  padding: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: color 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.palette.primary.light};
    background-color: transparent;
  }
`;
