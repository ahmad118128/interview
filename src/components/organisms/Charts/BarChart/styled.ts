import { Box, styled } from '@mui/material';

export const BarBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  & > div {
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    gap: 1rem;
  }
`;
