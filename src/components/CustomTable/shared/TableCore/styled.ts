import { styled } from '@mui/material/styles';
import { TableCell } from '@mui/material';

export const StyledTableCell = styled(TableCell)`
  .MuiTableSortLabel-root,
  .MuiTableSortLabel-root:focus {
    color: ${({ theme }) => theme.palette.common.white} !important;
  }
  svg {
    opacity: 1;
    fill: ${({ theme }) => theme.palette.grey[600]};
  }
  .MuiTableSortLabel-root:hover {
    color: ${({ theme }) => theme.palette.common.white} !important;
    svg {
      opacity: 1;
      fill: ${({ theme }) => theme.palette.secondary.dark};
    }
  }
  .Mui-active {
    svg {
      opacity: 1;
      fill: ${({ theme }) => theme.palette.secondary.main} !important;
    }
  }
`;
