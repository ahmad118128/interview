import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import { StyledTableRowType, StyledTableWrapperType } from './type';

export const StyledTableWrapper = styled(Box)<StyledTableWrapperType>`
  width: 100%;
  table {
    border-spacing: 0;
  }
  thead tr {
    background-color: ${({ theme }) => theme.palette.primary.light};
    ${({ theme }) => theme.breakpoints.up('md')} {
      height: 3.25rem;
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
      height: 3.5rem;
    }
    th {
      ${({ theme }) => theme.breakpoints.up('md')} {
        height: 3.25rem;
      }
      ${({ theme }) => theme.breakpoints.down('md')} {
        height: 3.5rem;
      }
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
      font-size: ${({ theme }) => theme.typography.body1.fontSize} !important;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.palette.grey[300]} !important;
      padding: 0;
    }
  }
  tbody tr {
    td {
      font-style: normal;
      font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
      font-size: ${({ theme }) => theme.typography.h5.fontSize};
      line-height: 1.313rem;
      text-align: center;
      color: ${({ theme }) => theme.palette.grey[500]};
      padding: 0 0.25rem;
    }
  }
  .MuiTableSortLabel-root {
    :hover {
      color: ${({ theme, sort }) =>
        sort ? theme.palette.text.secondary : 'inherit'};
      cursor: ${({ sort }) => (sort ? 'pointer' : 'text')};
    }
    svg {
      fill: ${({ theme }) => theme.palette.grey[200]};
    }
  }
  tbody {
    tr:nth-child(odd) {
      ${({ theme }) => theme.breakpoints.up('md')} {
        height: 3.25rem;
      }
      ${({ theme }) => theme.breakpoints.down('md')} {
        height: 3.5rem;
      }
      :hover {
        background-color: ${({ theme }) => theme.palette.grey[800]};
      }

      td {
        border-bottom: none;
        ${({ theme }) => theme.breakpoints.up('md')} {
          height: 3.25rem;
        }
        ${({ theme }) => theme.breakpoints.down('md')} {
          height: 3.5rem;
        }
        button {
          width: 32px;
          height: 32px;
          :hover {
            background-color: #e9f4f5;
            border-radius: 12px;
          }
        }
      }
    }
  }
`;

export const StyledCollapseChildrenTableRow = styled(TableRow)`
  .MuiCollapse-wrapperInner {
    width: 100%;
    padding: 1.25rem 0.75rem;
  }
`;

export const StyledTableRow = styled(TableRow)<StyledTableRowType>`
  background: ${({ expand, theme }) =>
    expand
      ? `${theme.palette.primary.light} !important`
      : theme.palette.common.white};
`;
