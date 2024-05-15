import theme from '@/theme';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTablePagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  height: 32px;
  background-color: ${theme.palette.primary.dark};
  width: 100%;
  padding-block: 0.75rem;
  & .MuiPagination-ul {
    flex-direction: row-reverse;
    justify-content: center;
    & li button {
      color: ${theme.palette.grey['300']} !important;
      border-radius: 8px;
      &:hover {
        color: ${theme.palette.secondary.dark} !important;
      }
      &:focus {
        border: 1px solid ${theme.palette.secondary.main};
        color: ${theme.palette.secondary.main} !important;
      }
    }
    & .Mui-selected {
      background-color: unset !important;
      border: 1px solid ${theme.palette.secondary.main};
      color: ${theme.palette.secondary.main} !important;
    }
    & .MuiPaginationItem-previousNext {
      border: none;
      color: ${theme.palette.grey['300']} !important;
      &:hover {
        & .MuiSvgIcon-root {
          & path {
            color: ${theme.palette.secondary.dark} !important;
          }
        }
      }
      &:focus {
        & .MuiSvgIcon-root {
          & path {
            color: ${theme.palette.secondary.main} !important;
          }
        }
      }
    }
  }
`;
