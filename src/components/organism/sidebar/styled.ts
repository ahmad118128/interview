import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import isPropValid from '@emotion/is-prop-valid';

import {
  StyledContainerIconTileType,
  StyledContainerSideBarType,
} from './type';
import theme from '../../../theme/index';
export const StyledContainerSideBar = styled(Box, {
  shouldForwardProp: (props: any) => isPropValid(props),
})<StyledContainerSideBarType>`
  height: ${({ customStyles }) => customStyles?.height || 'calc(100vh - 64px)'};
  width: ${({ open }) => (open ? '11.5rem' : '3.75rem')};
  transition: all 0.5s;
  background: radial-gradient(
    100% 67.64% at 100% 50%,
    #0b0038 0%,
    #1e1449 100%
  );
  margin-top: ${({ customStyles }) => customStyles?.marginTop || '4rem'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 0.75rem;
`;

export const StyledIconsSideBar = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px !important;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c2c0d5;
    background-clip: padding-box;
    border-radius: 4px;
  }
`;
export const StyledContainerIcon = styled(Box)`
  // width: 24px;
  // height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconSideBar {
    color: ${({ theme }) => theme.palette.grey[300]};
  }
`;
export const StyledContainerIconTile = styled(Box)<StyledContainerIconTileType>`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  gap: 0.5rem;
  width: 50%;
  border-radius: 0.375rem;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    .iconSideBar,
    .titleSideBar {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }
  &.active {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border: 1px solid ${({ theme }) => theme.palette.primary.light};
    box-shadow: 0px 0px 10px 0px rgba(126, 188, 89, 0.5);
    .iconSideBar,
    .titleSideBar {
      color: ${({ theme }) => theme.palette.primary.light};
    }
    h3 {
      color: ${({ theme }) => theme.palette.primary.light};
    }
    * {
      fill: ${({ theme }) => theme.palette.primary.light};
    }
  }
  .closeIcon {
    transition: all 0.5s;
    transform: ${({ open }) => (!open ? ' rotate( 180deg )' : 'none')};
  }
  h3 {
    color: ${({ theme }) => theme.palette.grey[300]};
    max-width: ${({ open }) => (!open ? '0' : '100%')};
    max-height: ${({ open }) => (!open ? '0' : '1.25rem')};
    transition: all 0.3s ease-in-out;
    transition-delay: ${({ open }) => (!open ? '0' : '0.1s')};
    overflow: hidden;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;
export const StyledDivider = styled(Divider)`
  margin: 0.125rem auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 93%;
`;
