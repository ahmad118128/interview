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
