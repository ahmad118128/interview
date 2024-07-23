import { Icon } from '@iconify/react';

import {
  EFilterModeIcon,
  EFilterTableNameIcon,
  IconFilterModeTable,
  IconFilterNameTable,
} from './type';
import theme from '@/theme';
import { tablePhrases } from '@/components/CustomTable/strings';

export const rightIcons: IconFilterNameTable[] = [
  {
    img: (
      <Icon
        icon="fluent:table-insert-row-28-regular"
        style={{
          color: theme.palette.grey[600],
          width: 20,
          height: 20,
        }}
      />
    ),
    title: tablePhrases.manageColumns,
    disabled: true,
    name: EFilterTableNameIcon.FILTER,
  },
  {
    img: (
      <Icon
        icon="iconoir:filter"
        style={{
          color: theme.palette.grey[500],
          width: 20,
          height: 20,
        }}
      />
    ),
    title: tablePhrases.filtering,
    disabled: false,
    name: EFilterTableNameIcon.FILTER,
  },
];

export const leftIcons: IconFilterModeTable[] = [
  {
    img: (
      <Icon
        icon="uiw:table"
        style={{
          color: theme.palette.grey[500],
          width: 24,
          height: 24,
        }}
      />
    ),
    title: tablePhrases.tableMode,
    mode: EFilterModeIcon.TABLE,
  },
];
