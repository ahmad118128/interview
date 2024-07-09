import { ChangeEvent, ReactElement } from 'react';

export interface CustomPaginationProps {
  warperStyle?: object;
  innerStyle?: any;
  pageCount?: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, pageButton: number) => void;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export interface CollapseTableProps {
  headers: CellType[];
  rows: any;
  collapseChildren: any;
  checkCollapseId?: any;
  error?: boolean;
  pagination?: CustomPaginationProps;
  handleSort?: (id: string | unknown) => void;
  HandleSelectedRow?: (Id: string) => void;
}

export interface CollapseRowProps {
  headers: CellType[];
  row: any;
  collapseChildren?: any;
  HandleSelectedRow?: (Id: string) => void;
  checkCollapseId?: any;
}
export type StyledTableRowType = {
  expand: boolean;
};

type BaseCellType = {
  id?: string;
  editLink?: string;
  label?: string;
  sortable?: boolean;
  headOptions?: any;
};

type ComponentCellType = {
  type?: 'component';
  component: ReactElement;
};
type FunctionCellType = {
  type?: 'function';
  function: (row: RowType) => ReactElement;
};

type OtherCellType = {
  type?:
    | 'number'
    | 'date'
    | 'dateHour'
    | 'money'
    | 'edit'
    | 'delete'
    | 'editAndDelete';
  component?: never;
  function?: never;
};

export type CellType = BaseCellType &
  (ComponentCellType | OtherCellType | FunctionCellType);

export type RowType = any;

export type StyledTableWrapperType = {
  sort?: boolean;
};
