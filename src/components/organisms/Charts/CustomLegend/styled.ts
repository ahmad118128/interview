import { Box, styled } from '@mui/material';

export const ContainerBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  div span {
    display: block;
    width: 4rem;
    height: 1.5rem;
    border-radius: 0.625rem;
  }
  div:nth-child(even) span {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  div:nth-child(odd) span {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;
