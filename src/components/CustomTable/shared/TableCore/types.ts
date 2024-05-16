import { MouseEvent } from 'react';
import { type CustomPaginationProps } from '../TablePagination/types';
import { CellType } from '../../types';

export interface BaseTableProps {
  headers: CellType[];
  rows: any;
  error?: boolean;
  pagination: CustomPaginationProps;
  children?: any;
  handleSort?: (id: string | unknown) => void;
  emptyDataMessage?: string;
}

export interface EnhancedTableProps {
  onRequestSort: (event: MouseEvent<unknown>, property: unknown) => void;
  order?: Order;
  orderBy?: unknown;
  headCells?: CellType[] | null;
}

export type Order = 'asc' | 'desc';
