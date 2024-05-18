import { Box, Collapse, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableWrapper = styled(Box)`
  width: 100%;
  .MuiTable-root {
    border-collapse: collapse !important;
    border-spacing: 0;
    margin-top: 1.2rem;
  }
  thead {
    border-radius: 0.1rem;
    background-color: ${({ theme }) => theme.palette.grey[50]};
    th {
      color: ${({ theme }) => theme.palette.common.black} !important;
      padding-bottom: 10px;
    }
    margin-bottom: 1rem; /* Add margin-bottom to thead */
  }
  tbody {
    margin-top: 2rem;

    tr {
      background-color: ${({ theme }) => theme.palette.grey[50]};
      height: 3rem !important;
    }
    td {
      border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
      padding: 0;
      vertical-align: middle;
      text-align: center;
      color: ${({ theme }) => theme.palette.common.black} !important;
    }
    th {
      padding-top: 10px;
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
      tr:nth-child(odd) {
        height: 3rem !important;
      }
      tr:nth-child(even) {
        height: auto !important;
      }
      tr:last-child {
        td {
          border-bottom: 0.25rem solid
            ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
    tbody:before {
      content: '-';
      display: block;
      line-height: 1em;
      color: transparent;
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
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
  font-style: normal;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: 1.25rem;
  td {
    border-bottom: none !important;
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
  * {
    color: ${({ theme }) => theme.palette.grey[300]} !important;
  }
`;
