import { Box, styled } from '@mui/material';
import Image from 'next/image';

export const StyledWrapperModal = styled(Box)`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
    align-items: stretch;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    flex-direction: row;
  }
  gap: 20px;
  border-radius: 6px;
  margin-top: 1.25rem;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  background: ${({ theme }) => theme.palette.grey[100]};
`;

export const StyledImage = styled(Image)`
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

export const StyledWrapperImage = styled(Box)`
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  width: 100px;
  height: 100px;
  position: relative;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 138px;
    height: 138px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 216px;
    height: 216px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    width: 216px;
    height: 216px;
  }
`;
