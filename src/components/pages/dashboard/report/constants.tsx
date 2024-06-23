import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '@/components/pages/dashboard/image-recognition/constants';
import { DataBankRoute } from '@/strings';

export const reportMocTrafficOfPeople = [
  {
    id: 1,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 2,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 3,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 4,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 5,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 6,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
  {
    id: 7,
    name: 'نام و نام‌خانوادگی',
    group: 'گروه یک',
    supervisortList: 'لیست نظارتی',
  },
];

export const reportHeaderTrafficOfPeople: CellType[] = [
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
    id: 'group',
    label: DataBankRoute.group,
    sortable: true,
  },
  {
    id: 'supervisortList',
    label: DataBankRoute.supervisoryList,
    sortable: true,
  },
];
