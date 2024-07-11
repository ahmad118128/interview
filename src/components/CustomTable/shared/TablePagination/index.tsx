import { ChangeEvent } from 'react';
import { StyledTablePagination } from './styled';
import { type CustomPaginationProps } from './types';

export const TablePagination = (props: CustomPaginationProps) => {
  const { page, pageParams, setPageParams, totalPages } = props;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageParams((prevParams) => ({
      ...prevParams,
      ...pageParams,
      page: newPage,
    }));
  };

  return totalPages > 1 ? (
    <StyledTablePagination
      count={totalPages}
      page={page}
      shape="rounded"
      onChange={handleChangePage}
    />
  ) : null;
};
