import theme from '@/theme';
import { Box, Grid, styled } from '@mui/material';
import { ControledCheckbox } from '@/components/atoms/Checkbox';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0 3.75rem',
  border: `1px solid ${theme.palette.grey[200]}`,
  background: `${theme.palette.grey[50]}`,
  borderRadius: '0.625rem',
  flexDirection: 'column',
  height: '116px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    height: '3rem',
  },
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
  },
}));
export const StyledTitleGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));
export const StyledGridCheckBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  gap: '1.25rem',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
  },
}));

export const StyledCheckboxWrapper = styled(Grid)(() => ({
  flexDirection: 'row',
  '& .MuiBox-root': {
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
}));
