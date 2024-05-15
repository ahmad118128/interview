import { Box, styled } from '@mui/material';

export const DoughnutBox = styled(Box)`
  max-width: 16.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`;

export const DetailsBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 8.5rem;
  height: 8.5rem;
  top: 4.125rem;
  right: 4.125rem;
`;
