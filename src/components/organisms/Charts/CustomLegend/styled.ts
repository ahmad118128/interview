import { Box, styled } from '@mui/material';

export const ContainerBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  div span {
    display: block;
    width: 64px;
    height: 24px;
    border-radius: 10px;
  }
  div:nth-child(even) span {
    background-color: #7ebc59;
  }
  div:nth-child(odd) span {
    background: #383838;
  }
`;
