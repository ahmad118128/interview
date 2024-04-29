import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledContainerIconTileType } from './type';
export const StyledContainerIcon = styled(Box)`
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
