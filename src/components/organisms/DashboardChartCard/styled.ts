import { Box, Typography, styled } from '@mui/material';

export const StyledChartBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border: 0.0625rem solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 0.625rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledBoxTitle = styled(Typography)`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.grey[200]};
  width: 100%;
  padding-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 500;
`;
