import { MouseEvent, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

import { TableNoResults } from '../NoResults';
import { TableLoading } from '../Loading';
import { CustomCell } from '../CustomCell';
import { EnhancedTableHead } from './EnhancedTableHead';
import { type BaseTableProps, type Order } from './types';
import { RowType } from '../../types';

export const BaseTable = (props: BaseTableProps) => {
  const {
    headers,
    rows,
    handleSort,
    error,
    pagination,
    children,
    emptyDataMessage,
    HandleCheckBoxHeader,
    allSelected,
    selectedMode,
    indeterminate,
  } = props;
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<unknown>('id');
  const loading = !error && !rows;

  const handleRequestSort = (event: MouseEvent<unknown>, property: unknown) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    handleSort && handleSort(isAsc ? `-${property}` : property);
  };
  const isSelectMode = rows?.length ? selectedMode : false;

  return (
    <>
      <TableContainer>
        <Table aria-label="aibox table">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headCells={headers}
            HandleCheckBoxHeader={HandleCheckBoxHeader}
            allSelected={allSelected}
            selectedMode={isSelectMode}
            indeterminate={isSelectMode && indeterminate}
          />
          {loading ? (
            <TableLoading hedCount={headers?.length} />
          ) : rows && rows.length >= 1 ? (
            <TableBody>
              {children ? (
                children
              ) : (
                <>
                  {rows?.map((row: any, index: number) => {
                    const key = row?.id || index;
                    return (
                      <>
                        <TableRow
                          key={key}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          {headers?.map((cell) => {
                            const cellId = cell.id as keyof RowType;
                            const cellValue = row[cellId];

                            return cell?.type ? (
                              CustomCell({ row, cell })
                            ) : (
                              <TableCell {...cell.headOptions}>
                                {cellValue}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      </>
                    );
                  })}
                </>
              )}
            </TableBody>
          ) : (
            <TableNoResults
              headCount={headers.length}
              title={emptyDataMessage}
            />
          )}
        </Table>
      </TableContainer>
      {/* {pagination ? <TablePagination {...pagination} /> : null} */}
    </>
  );
};
