import { CellType } from '@/components/CustomTable/types';

export type TableWithFabProps<T> = {
  tableHeads: CellType[];
  data: T;
};
