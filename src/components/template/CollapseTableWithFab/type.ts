import { CellType } from '@/components/CustomTable/types';

export type CollapseTableWithFabProps<T> = {
  tableHeads: CellType[];
  data: T;
  path: string;
  child: any;
};
