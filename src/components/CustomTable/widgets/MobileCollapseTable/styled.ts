import { Box, Collapse, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableWrapper = styled(Box)`
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
      height: 3rem !important;
      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[100]};

        &.MuiTableRow-root td:last-child {
          border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};
        }

        &.MuiTableRow-root td:first-child {
          border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
        }

        .MuiTableCell-root {
          border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
          border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
        }
      }
    }
    .MuiTableCell-root {
      border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
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

export const StyledIconCheckboxTableCell = styled(TableCell)`
  padding: 1rem 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 5rem;
    text-align: right !important;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 4.375rem;
    text-align: center !important;
  }
`;

export const StyledCollapse = styled(Collapse)`
  .MuiCollapse-wrapperInner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.75rem;
    row-gap: 0.75rem;
  }
`;
export const StyledMobileList = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: (4, 1.25rem);
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: 1.25rem;
  td {
    border: none !important;
  }
`;

export const StyledMobileListCellLabel = styled(Box)`
  font-weight: 500;
  text-align: right;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const StyledMobileListCellValue = styled(Box)`
  font-weight: 400;
  text-align: center;
  grid-column-start: 2;
  text-align: right;
  grid-column-end: 12;
  border: none;
  :hover {
    border: none;
  }

  * {
    // color: ${({ theme }) => theme.palette.grey[300]} !important;
  }
`;
