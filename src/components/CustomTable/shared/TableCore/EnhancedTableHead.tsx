import { MouseEvent } from 'react';
import {
  Box,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { StyledTableCell } from './styled';
import { type EnhancedTableProps } from './types';
import { CellType } from '../../types';

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler =
    (property: unknown) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const filteredHeader = headCells?.filter((item: CellType) => {
    return item?.id !== undefined;
  });

  return (
    <TableHead>
      <TableRow>
        {filteredHeader?.map((headCell: CellType) => {
          return (
            <StyledTableCell
              key={headCell?.id}
              align="center"
              sortDirection={orderBy === headCell?.id ? order : false}
            >
              <Typography variant="body1">
                <TableSortLabel
                  active={orderBy === headCell?.id}
                  direction={orderBy === headCell?.id ? order : 'asc'}
                  onClick={
                    headCell?.sortable
                      ? createSortHandler(headCell?.id)
                      : () => {}
                  }
                  hideSortIcon={!headCell?.sortable}
                  style={{ cursor: headCell?.sortable ? 'pointer' : 'text' }}
                >
                  {headCell?.label && headCell?.label}
                  {orderBy === headCell?.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </Typography>
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
