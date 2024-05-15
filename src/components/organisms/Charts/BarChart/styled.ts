import { Box, styled } from '@mui/material';

export const BarBox = styled(Box)`
  display: flex;
  gap: 32px;
  & > div {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;
