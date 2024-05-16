import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  row-gap: 32px;
`;

export const StyledFilterChild = styled(Grid)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.down('md')} {
    row-gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledInputContainer = styled(Grid)`
  width: 100%;
`;
