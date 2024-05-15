import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const StyledLinearProgress = styled(LinearProgress)`
  &.MuiLinearProgress-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiLinearProgress-bar2Indeterminate {
    background-color: rgba(133, 128, 156, 0.5);
  }
  .MuiLinearProgress-bar1Indeterminate {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
export const StyledContainerLoading = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  z-index: 1000;
  border: 1px solid #0b0038;
  border-radius: 8px;
  padding: 6px;
  background: rgba(250, 250, 250, 0.8);
`;
