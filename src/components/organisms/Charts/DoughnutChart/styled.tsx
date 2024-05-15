import { Box, styled } from '@mui/material';

export const DoughnutBox = styled(Box)`
  max-width: 268px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const DetailsBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 136px;
  height: 136px;
  top: 66px;
  right: 66px;
`;
