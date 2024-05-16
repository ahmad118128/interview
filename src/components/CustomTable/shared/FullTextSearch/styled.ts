import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSearchContainer = styled(Box)`
  width: 18.75rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 15.625rem;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    min-width: 6.25rem;
    width: 100%;
    max-width: 15.625rem;
  }
`;
