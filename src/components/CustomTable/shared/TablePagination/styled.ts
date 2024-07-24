import theme from '@/theme';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTablePagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  height: 32px;
  width: 100%;
  padding-block: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${theme.palette.grey['300']};
  & .MuiPagination-ul {
    flex-direction: row-reverse;
    justify-content: center;
    & li button {
      background-color: ${theme.palette.grey['100']};
      color: ${theme.palette.common.black} !important;
      border-radius: 8px;
      &:hover {
        color: ${theme.palette.primary.light} !important;
      }
    }
    & .Mui-selected {
      background-color: ${theme.palette.primary.light} !important;
      color: ${theme.palette.common.white} !important;
      box-shadow: 0px 0px 10px 0px rgba(126, 188, 89, 0.5);
    }
    & .MuiPaginationItem-previousNext {
      border: none;
      & .MuiSvgIcon-root {
        & path {
          color: ${theme.palette.common.black} !important;
        }
      }
      &:hover {
        & .MuiSvgIcon-root {
          & path {
            color: ${theme.palette.primary.light} !important;
          }
        }
      }
    }
  }
`;
