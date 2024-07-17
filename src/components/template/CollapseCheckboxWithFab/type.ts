import { CellType } from '@/components/CustomTable/types';
import { Dispatch, SetStateAction } from 'react';

export type CollapseTableWithFabProps<T> = {
  tableHeads: CellType[];
  data: T;
  path: string;
  child: any;
  setSelectedId?: Dispatch<SetStateAction<Array<string | number>>>;
  selectedId?: Array<string | number>;
};
