'use client';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledDetailsWrapper = styled(Typography)`
  margin: 6px 0;
  color: ${({ theme }) => theme.palette.grey[500]};
`;
