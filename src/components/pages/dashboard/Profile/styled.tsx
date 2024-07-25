import theme from '@/theme';
import { Box, Grid, styled } from '@mui/material';

export const StyledAddFormWrapperProfile = styled(Box)`
  border-radius: 0.625rem;
  border: 1px solid ${theme.palette.grey[300]};
  background: ${theme.palette.grey[50]};
  padding: 0;
  min-height: 99.5%;
`;
export const StyledAddFormHeaderProfile = styled(Box)`
  border-bottom: 1px solid ${theme.palette.grey[300]};
  padding: 1.75rem 1rem;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 1.75rem 1rem;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 1.75rem 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 1.75rem 11.875rem;
  }

  border-radius: 0.625rem 0.625rem 0 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledAddFormMainProfile = styled(Box)`
  padding: 1.75rem 1rem;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 1.75rem 1rem;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 1.75rem 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 1.75rem 11.875rem;
  }
`;
export const StyledFilterChildProfile = styled(Grid)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.down('md')} {
    row-gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
