import theme from '@/theme';
import { Typography, styled } from '@mui/material';

export const StyledDeleteTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: 0.125rem;
  margin-bottom: 0.875rem;
  text-align: center;
`;
