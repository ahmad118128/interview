import { Typography, styled } from '@mui/material';

export const StyledErrorMessage = styled(Typography)`
  min-height: 20px; // prevent reformatting when get error
  color: ${({ theme }) => theme.palette.error.main};
  margin-right: 0.5rem;
`;
