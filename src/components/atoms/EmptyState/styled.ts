import { Grid, styled } from '@mui/material';
import Image from 'next/image';

export const EmptyStateContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const EmptyStateImage = styled(Image)`
  ${({ theme }) => theme.breakpoints.up('lg')} {
    width: 26.875rem !important;
    height: 22.5rem !important;
  }
  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 16.563rem !important;
    height: 13.875rem !important;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 10.875rem !important;
    height: 9.125rem !important;
  }
`;
