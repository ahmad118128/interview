import { ChangeEvent } from 'react';

import { StyledTablePagination } from './styled';
import { type CustomPaginationProps } from './types';

export const TablePagination = (props: CustomPaginationProps) => {
  const { setPage, current = 1, all_page = 1 } = props;

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  return all_page > 1 ? (
    <StyledTablePagination
      count={all_page}
      page={current}
      shape="rounded"
      boundaryCount={current}
      onChange={handleChangePage}
    />
  ) : null;
};
