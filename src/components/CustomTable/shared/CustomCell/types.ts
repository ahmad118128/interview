import { ReactElement } from 'react';

export type RowType = any;

type BaseCellType = {
  id?: string;
  editLink?: string;
  label?: string;
  sortable?: boolean;
  headOptions?: any;
};

type FunctionCellType = {
  type?: 'function';
  function: (row: RowType) => ReactElement;
};

type ComponentCellType = {
  type?: 'component';
  component: ReactElement;
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

export type FiltersChips<T> = Array<{
  key: keyof T;
  label: string;
  value: any;
}>;

export enum ECellTypes {
  NUMBER = 'number',
  DATE = 'date',
  DATE_HOUR = 'dateHour',
  FUNCTION = 'function',
  COMPONENT = 'component',
  EDIT = 'edit',
  DELETE = 'delete',
  EDIT_AND_DELETE = 'editAndDelete',
}

export interface GetCellTableProps {
  row: RowType;
  cell: CellType;
}
