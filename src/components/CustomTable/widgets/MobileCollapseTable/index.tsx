import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { MobileCollapseRow } from './MobileCollapseRow';
import { MobileCollapseTableProps } from './type';
import { StyledTableWrapper } from './styled';
import { type CellType } from '../../types';
import { BaseTable } from '../../shared/TableCore';

const COLLAPSE_ID = 'collapse';
let mobileHeaders: CellType[] = [];
let collapseData: CellType[] = [];

export const MobileCollapseTable = (props: MobileCollapseTableProps) => {
  const {
    rows,
    headers,
    handleSort,
    error,
    pagination,
    mobileIdFilter, // write those id that you wanna see in mobile size array of strings['collapse', 'name']
    emptyDataMessage,
  } = props;
  const theme = useTheme();
  const breakPointDownMd = useMediaQuery(theme.breakpoints.down('md'));

  let desktopHeaders: CellType[] = headers;
  if (!breakPointDownMd) {
    desktopHeaders = headers.filter((item: CellType) => {
      return item?.id !== COLLAPSE_ID;
    });
  }

  if (breakPointDownMd) {
    mobileHeaders = headers.filter((item: CellType) => {
      return mobileIdFilter.includes(item?.id);
    });

    collapseData = headers.filter((item: CellType) => {
      return !mobileIdFilter.includes(item?.id);
    });
  }
  const header = breakPointDownMd ? mobileHeaders : desktopHeaders;

  return (
    <StyledTableWrapper>
      <BaseTable
        headers={header}
        rows={rows}
        handleSort={handleSort}
        error={error}
        pagination={pagination}
        emptyDataMessage={emptyDataMessage}
      >
        {rows?.map((row: any, index: number) => {
          const key = row?.id || index;
          return (
            <MobileCollapseRow
              key={`key${key}`}
              row={row}
              collapseData={collapseData}
              header={header}
            />
          );
        })}
      </BaseTable>
    </StyledTableWrapper>
  );
};
