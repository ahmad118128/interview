import { Typography, styled } from '@mui/material';

export const NumSlide = styled(Typography)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.palette.common.white};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.palette.common.black};
`;
