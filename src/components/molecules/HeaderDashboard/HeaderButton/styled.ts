import { IconButton, styled } from '@mui/material';

export const HeaderIconButton = styled(IconButton)`
  padding: 0.25rem;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border-radius: 0.375rem;
  border: 0.0625rem solid ${({ theme }) => theme.palette.grey[50]};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.palette.primary.light};
    border-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
