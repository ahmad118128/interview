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

export const dataBankMockUsers = [
  {
    id: 1,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 2,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 3,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 4,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 5,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 6,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 7,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
  },
];

export const dataBankHeaderUser: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'name',
    label: DataBankRoute.name,
    sortable: true,
  },
  {
    id: 'nationalId',
    label: DataBankRoute.nationalId,
    type: 'number',
    sortable: true,
  },
  {
    id: 'phoneNumber',
    label: DataBankRoute.phoneNumber,
    type: 'number',
    sortable: true,
  },
  {
    id: 'group',
    label: DataBankRoute.group,
    sortable: true,
  },
  {
    id: 'nationality',
    label: DataBankRoute.nationality,
    sortable: true,
  },
  {
    id: 'supervisortList',
    label: DataBankRoute.supervisortList,
    sortable: true,
  },
];
