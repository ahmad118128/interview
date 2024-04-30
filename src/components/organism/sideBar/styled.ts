import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledContainerIconTitleType } from './type';

export const StyledContainerIconTile = styled(
  Box
)<StyledContainerIconTitleType>`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  gap: 0.5rem;
  width: 50%;
  border-radius: 0.375rem;
  padding: 1rem;
  cursor: pointer;

  .iconSideBar {
    color: ${({ theme }) => theme.palette.grey[300]};
  }

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
    transform: ${({ label }) => (!label ? ' rotate( 180deg )' : 'none')};
  }

  h3 {
    color: ${({ theme }) => theme.palette.grey[300]};
    max-width: ${({ label }) => (!label ? '0' : '100%')};
    max-height: ${({ label }) => (!label ? '0' : '1.25rem')};
    transition: all 0.3s ease-in-out;
    transition-delay: ${({ label }) => (!label ? '0' : '0.1s')};
    overflow: hidden;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;
