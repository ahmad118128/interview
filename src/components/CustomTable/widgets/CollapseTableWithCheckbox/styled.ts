import { Box, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableWrapper = styled(Box)`
  margin-inline: 1.25rem;
  ${({ theme }) => theme.breakpoints.down('xl')} {
    margin-inline: 0 !important;
  }
  .MuiTable-root {
    border-collapse: collapse !important;
    border-spacing: 0;
  }
  thead {
    background-color: ${({ theme }) => theme.palette.common.black}10;
    tr {
      max-height: 3.25rem !important;
    }
    th {
      max-height: 3.25rem !important;
      height: 3.25rem !important;
      padding: 0;
      border-bottom: none;
      color: ${({ theme }) => theme.palette.common.black} !important;
      text-align: right;
    }
    th:first-child {
      padding-right: 1.25rem !important;
    }
  }
  tbody {
    tr {
      height: 3.25rem !important;
      td {
        background-color: transparent;
      }
      :hover {
        td {
          background-color: ${({ theme }) =>
            theme.palette.common.black}05 !important;
        }
      }
    }
    tr:nth-child(even) {
      td {
        background-color: ${({ theme }) => theme.palette.common.black}03;
      }
    }
    td {
      border-bottom: 0.063rem solid ${({ theme }) => theme.palette.grey[500]};
      padding: 0;
      padding-inline: 0.5rem;
      vertical-align: middle;
      text-align: right;
      color: ${({ theme }) => theme.palette.grey[100]};
      font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
      font-weight: 400;
    }
    td:first-child {
      padding-right: 1.75rem;
    }
  }
`;

export const StyledIconCheckboxTableCell = styled(TableCell)`
  padding: 0;
  padding-right: 1.25rem !important;
  width: 4.375rem;
  max-width: 3.75rem;
  min-width: 2.5rem;
  text-align: right !important;
  & .MuiButtonBase-root {
    padding: 0 !important;
  }
  svg {
    color: ${({ theme }) => theme.palette.grey[300]};
    width: 1.334rem;
    height: 1.334rem;
  }
  :hover {
    svg {
      color: ${({ theme }) => theme.palette.grey[200]} !important;
    }
  }
  & .Mui-checked {
    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.palette.primary.main} !important;
      width: 1.334rem;
      height: 1.334rem;
    }
  }
  & .MuiCheckbox-root:hover {
    background-color: transparent !important;
  }
`;
