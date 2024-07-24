import { ChangeEvent, MouseEvent } from 'react';
import { type CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import { CellType } from '@/components/CustomTable/types';

export interface BaseTableProps {
  headers: CellType[];
  rows: any;
  error?: boolean;
  pagination?: CustomPaginationProps;
  children?: any;
  handleSort?: (id: string | unknown) => void;
  emptyDataMessage?: string;
  HandleCheckBoxHeader?: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
  allSelected?: boolean;
  selectedMode?: boolean;
  indeterminate?: boolean;
}

export interface EnhancedTableProps {
  onRequestSort: (event: MouseEvent<unknown>, property: unknown) => void;
  order?: Order;
  orderBy?: unknown;
  headCells?: CellType[] | null;
  HandleCheckBoxHeader?: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
  allSelected?: boolean;
  selectedMode?: boolean;
  indeterminate?: boolean;
}

export type Order = 'asc' | 'desc';
