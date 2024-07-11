import { Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.25rem',
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  width: '264.001px',
  height: '230px',
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    width: '360.001px',
    height: '314px',
  },
  [theme.breakpoints.up('md')]: {
    width: '390px',
    height: '340px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '448px',
    height: '390px',
  },
}));
