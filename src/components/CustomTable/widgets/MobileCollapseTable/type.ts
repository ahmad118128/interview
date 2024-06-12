import { type CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import { type CellType } from '@/components/CustomTable/types';

export interface MobileCollapseRowProps {
  header: CellType[];
  row: any;
  collapseData?: any;
  radioInput?: boolean;
  activeIndex?: string | number;
  HandleCheckBoxChange?: () => void;
}

export interface MobileCollapseTableProps {
  headers: CellType[];
  mobileIdFilter?: any;
  rows: any;
  error: boolean;
  pagination: CustomPaginationProps;
  handleSort?: (id: unknown) => void;
  emptyDataMessage?: string;
}

export type StyledTableRowType = {
  expand?: boolean;
};
