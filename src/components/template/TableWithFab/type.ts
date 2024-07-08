import { CellType } from '@/components/CustomTable/types';

export type TableWithFabProps<T> = {
  tableHeads: CellType[];
  data: T;
  path: string;
  collapseId1: string;
};
