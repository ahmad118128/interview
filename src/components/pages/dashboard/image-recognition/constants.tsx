import { TableCell, Typography } from '@mui/material';
import { UsersFilterProps } from './types';
import { Status } from '@/components/CustomTable/shared/Status';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { handleArray } from '@/components/CustomTable/utils';
import { DataBankRoute, commonWords, generalStr, usersStr } from '@/strings';

export const COLLAPSE_ID = 'collapse';

export const headers: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'description',
    label: generalStr.description,
  },
  {
    id: 'matchCount',
    label: generalStr.matchCount,
    type: 'number',
    sortable: true,
  },
];

export const chipsCreator = (
  newFilter: UsersFilterProps
): FiltersChips<UsersFilterProps> => {
  return [
    {
      key: 'username',
      label: commonWords.userName,
      value: newFilter.username,
    },
    {
      key: 'full_name',
      label: commonWords.fullName,
      value: newFilter.full_name,
    },
    {
      key: 'groups',
      label: usersStr.groups,
      value: newFilter.groups,
    },
    {
      key: 'is_active',
      label: commonWords.status,
      value:
        newFilter.is_active === ''
          ? ''
          : newFilter.is_active === 'true'
            ? 'فعال'
            : 'غیرفعال',
    },
    {
      key: 'q',
      label: 'جست‌وجو',
      value: newFilter.q,
    },
  ];
};

export const initFilter: UsersFilterProps = {
  username: '',
  full_name: '',
  groups: '',
  is_active: '',
  q: '',
};

export const mockData = [
  {
    id: 1,
    description: 'tested',
    matchCount: 3,
  },

  {
    id: 2,
    description: 'tested',
    matchCount: 7,
  },

  {
    id: 3,
    description: 'notTested',
    matchCount: 3,
  },

  {
    id: 4,
    description: 'tested',
    matchCount: 38,
  },

  {
    id: 5,
    description: 'tested',
    matchCount: 9,
  },
  {
    id: 6,
    description: 'tested',
    matchCount: 9,
  },
  {
    id: 7,
    description: 'tested',
    matchCount: 9,
  },
  {
    id: 8,
    description: 'tested',
    matchCount: 9,
  },
  {
    id: 9,
    description: 'tested',
    matchCount: 9,
  },
];
