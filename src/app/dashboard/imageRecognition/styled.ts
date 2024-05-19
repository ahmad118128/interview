import { Box, styled } from '@mui/material';

export const StyledContainerImageRecognition = styled(Box)`
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.palette.grey[50]};
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 0.625rem;
  .muiaccordionsummary: {
    background: blue;
    marginy: 0;
  }
`;
