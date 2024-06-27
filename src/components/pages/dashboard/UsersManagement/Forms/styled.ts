import theme from '@/theme';
import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 3.75rem;
  height: 3rem;
  border: 1px solid ${theme.palette.grey[200]};
  background: ${theme.palette.grey[50]};
  border-radius: 0.625rem;
`;
