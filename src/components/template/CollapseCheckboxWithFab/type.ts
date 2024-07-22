import { CellType } from '@/components/CustomTable/types';
import { Dispatch, SetStateAction } from 'react';

export type CollapseTableWithFabProps<T> = {
  tableHeads: CellType[];
  data: T & { id: string | number }[];
  path: string;
  child: (props: unknown) => JSX.Element;
  setSelectedId?: Dispatch<SetStateAction<Array<string | number>>>;
  selectedId?: Array<string | number>;
};
