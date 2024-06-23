import { Box, styled, Typography, TypographyProps } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  height: '100vh',
  padding: ' 36px',
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '266px',
  height: '230px',
  [theme.breakpoints.up('sm')]: { width: '448px', height: '390px' },
  [theme.breakpoints.up('md')]: { width: '360px', height: '316px' },
  [theme.breakpoints.up('lg')]: { width: '448px', height: '390px' },
}));

export const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
  },
}));

export const StyledText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
  },
}));
