import { TableCell, Typography } from '@mui/material';
import { UsersFilterProps } from './types';
import { Status } from '@/components/CustomTable/shared/Status';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { handleArray } from '@/components/CustomTable/utils';
import { commonWords, usersStr } from '@/strings';

export const COLLAPSE_ID = 'collapse';

export const headers: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'username',
    label: commonWords.userName,
    sortable: true,
  },
  {
    id: 'name',
    label: commonWords.fullName,
    type: 'function',
    function: (row) => (
      <TableCell>
        <Typography variant="body1">{`${row?.first_name} ${row?.last_name}`}</Typography>
      </TableCell>
    ),
  },
  {
    id: 'groups',
    label: usersStr.groups,
    type: 'function',
    function: (row) => (
      <TableCell>
        <Typography variant="body1">
          {row?.groups && row?.groups.length ? handleArray(row?.groups) : '-'}
        </Typography>
      </TableCell>
    ),
  },
  {
    id: 'is_active',
    label: commonWords.status,
    type: 'function',
    function: (row) => (
      <TableCell>
        <Typography variant="body1">
          <Status state={row?.is_active} />
        </Typography>
      </TableCell>
    ),
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
