import { Box, Typography, styled } from '@mui/material';

export const StyledChartBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background-color: #fafafa;
  border: 1px solid #ededef;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledTitleBox = styled(Typography)`
  border-bottom: 1px solid #ededef;
  width: 100%;
  padding-bottom: 12px;
  font-size: 18px;
  font-weight: 500;
`;
