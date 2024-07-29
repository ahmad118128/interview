import { Box, styled } from '@mui/material';

export const BarBox = styled(Box)`
  width: 352px;
  height: 224px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    gap: 2rem;
    & > div {
      flex-direction: column;
      justify-content: center;
      width: fit-content;
      gap: 1rem;
    }
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    & > div {
      margin-top: 2rem;
    }
  }
`;
