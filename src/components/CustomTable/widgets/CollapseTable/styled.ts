import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import { StyledTableRowType, StyledTableWrapperType } from './type';

export const StyledTableWrapper = styled(Box)<StyledTableWrapperType>`
  width: 100%;
  .MuiTable-root {
    border-collapse: separate !important;
    border-spacing: 0 0.25rem;
    margin-top: 1.2rem;
  }

  .MuiTableCell-root {
    border-bottom: none;
    :hover span {
      color: black !important;
    }
    }
    .MuiTableRow-root td:first-child,
    .MuiTableRow-root th:first-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .MuiTableRow-root td:last-child,
    .MuiTableRow-root th:last-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .MuiTableHead-root {
      background-color: ${({ theme }) => theme.palette.grey[50]};

      .MuiTableCell-root {
        border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
        border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
      }

      .MuiTableCell-root span {
        font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
      }

      .MuiTableRow-root th:last-child {
        border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};
      }

      .MuiTableRow-root th:first-child {
        border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
      }
    }

    .MuiTableBody-root {
      .MuiTableRow-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
        &:nth-child(odd) {
          height: 3rem !important;
        }
        &:nth-child(even) {
          height: auto !important;
        }
      }
      .MuiTableCell-root {
        border-bottom: ${({ expand, theme }) =>
          expand ? `1px solid ${theme.palette.grey[300]}` : '0'};
      }
      border-top: 1px solid ${({ theme }) => theme.palette.grey[200]};
    }

    .MuiTableRow-root td:last-child {
      border-left: 1px solid ${({ theme }) => theme.palette.grey[200]};
    }

    .MuiTableRow-root td:first-child {
      border-right: 1px solid ${({ theme }) => theme.palette.grey[200]};
    }

    td {
      padding: 0;
      vertical-align: middle;
      min-width:100px;
      text-align: center;
      color: ${({ theme }) => theme.palette.common.black} !important;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      tr:nth-child(odd) {
        height: 3rem !important;
      }

      tr:nth-child(even) {
        height: auto !important;
      }
    }
  }
`;

export const StyledCollapseChildrenTableRow = styled(TableRow)`
  .MuiCollapse-wrapperInner {
    width: 95%;
    padding: 1.25rem 0.75rem;
  }
`;

export const StyledTableRow = styled(TableRow)<StyledTableRowType>`
  background: ${({ expand, theme }) =>
    expand
      ? `${theme.palette.common.white} !important`
      : theme.palette.common.white};
`;
