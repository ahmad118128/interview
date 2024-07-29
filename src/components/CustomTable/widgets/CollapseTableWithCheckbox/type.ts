import { Dispatch, ReactNode, SetStateAction } from 'react';

import { CustomPaginationProps, type CellType } from '../CollapseTable/type';

export interface SelectTableRowProps<T> {
  header: CellType[];
  row: T & { id: string | number };
  collapseChildren?: ReactNode;
  activeIndex: Array<string | number>;
  HandleCheckBoxChange: () => void;
  selectedMode: boolean;
  HandleSelectedRow?: (Id: string | number) => void;
  checkCollapseId?: string | number;
}

export interface SelectTableProps<T> {
  headers: CellType[];
  rows: (T & { id: string | number })[];
  error: boolean;
  pagination?: CustomPaginationProps;
  handleSort?: (id: string | unknown) => void;
  emptyDataMessage?: string;
  setSelectedId?: Dispatch<SetStateAction<Array<string | number>>>;
  selectedId?: Array<string | number>;
  selectedMode: boolean;
  collapseChildren?: (props: {
    row: T;
    paginationPage: number | undefined;
  }) => JSX.Element;
}

export type StyledTableRowType = {
  expand?: boolean;
};
