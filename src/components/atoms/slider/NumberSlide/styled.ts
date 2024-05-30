import { styled } from '@mui/material';

export const NumSlide = styled('span')`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.palette.common.white};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.palette.common.black};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
