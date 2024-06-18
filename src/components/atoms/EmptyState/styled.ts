import { Box, styled } from '@mui/material';
import Image from 'next/image';

export const EmptyStateContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyStateImage = styled(Image)`
  ${({ theme }) => theme.breakpoints.up('lg')} {
    width: 430px;
    height: 360px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 265px;
    height: 222px;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 174px;
    height: 146px;
  }
`;
