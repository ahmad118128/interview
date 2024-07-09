'use client';
import { BaseTable } from '../../shared';
import { CollapseRow } from './collapseRow';
import { StyledTableWrapper } from './styled';
import { CollapseTableProps } from './type';

export const CollapseTable = (props: CollapseTableProps) => {
  const {
    rows,
    headers,
    collapseChildren,
    error,
    pagination,
    checkCollapseId, // it is necessary if you only wanna collapse that row that have specific data
    handleSort,
    HandleSelectedRow,
  } = props;
  const Child = collapseChildren;

  return (
    <StyledTableWrapper>
      <BaseTable
        headers={headers}
        rows={rows}
        handleSort={handleSort}
        error={error}
        pagination={pagination}
      >
        {rows?.map((row: any, index: number) => {
          const key = row?.id || index;
          return (
            <CollapseRow
              key={`key${key}`}
              row={row}
              headers={headers}
              checkCollapseId={checkCollapseId}
              collapseChildren={
                <Child row={row} paginationPage={pagination?.page} />
              }
              HandleSelectedRow={(id) =>
                HandleSelectedRow && HandleSelectedRow(id)
              }
            />
          );
        })}
      </BaseTable>
    </StyledTableWrapper>
  );
};
