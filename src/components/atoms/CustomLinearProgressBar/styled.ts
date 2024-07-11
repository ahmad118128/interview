import { LinearProgress, LinearProgressProps, styled } from '@mui/material';

export const StyledLinearProgressBar = styled(
  LinearProgress
)<LinearProgressProps>(({ theme }) => ({
  height: 16,
  border: 1,
  borderColor: theme.palette.grey[200],
  borderRadius: 10,
  backgroundColor: theme.palette.grey[50],
  boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.2) inset',
  transform: 'scaleX(-1)',
  '& .MuiLinearProgress-bar': {
    width: 12,
    height: 12,
    top: 2,
    left: 6,
    borderRadius: 10,
    backgroundColor: theme.palette.primary.light,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
}));
