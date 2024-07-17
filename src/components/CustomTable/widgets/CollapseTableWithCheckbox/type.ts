import { Dispatch, SetStateAction } from 'react';

import { CustomPaginationProps, type CellType } from '../CollapseTable/type';

export interface SelectTableRowProps {
  header: CellType[];
  row: any;
  collapseChildren?: any;
  activeIndex: Array<string | number>;
  HandleCheckBoxChange: () => void;
  selectedMode: boolean;
  HandleSelectedRow?: (Id: string) => void;
  checkCollapseId?: any;
}

export interface SelectTableProps {
  headers: CellType[];
  rows: any;
  error: boolean;
  pagination?: CustomPaginationProps;
  handleSort?: (id: string | unknown) => void;
  emptyDataMessage?: string;
  setSelectedId?: Dispatch<SetStateAction<Array<string | number>>>;
  selectedId?: Array<string | number>;
  selectedMode: boolean;
  collapseChildren?: any;
}

export type StyledTableRowType = {
  expand?: boolean;
};
