import { Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  height: '100vh',
}));
