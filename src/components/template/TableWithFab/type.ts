import { CellType } from '@/components/CustomTable/types';

export type collapseId = {
  id: number;
  name: string;
};

export type TableWithFabProps<T> = {
  tableHeads: CellType[];
  data: T;
  path: string;
  collapseIds: collapseId[];
};
