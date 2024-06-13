import { CellType } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '../image-recognition/constants';
import { DataBankRoute, SettingRoute } from '@/strings';

export const lastBackupStatusMock = [
  {
    id: 1,
    actionType: 'پشتیبان گیری موردی',
    buildTime: '1402/01/24 15:56',
    executionStatus: 'خاتمه یافته',
    savingPath: 'تیتر جدول',
    description: 'عملیات موفق',
  },
  {
    id: 2,
    actionType: 'پشتیبان گیری موردی',
    buildTime: '1402/01/24 15:56',
    executionStatus: 'خاتمه یافته',
    savingPath: 'تیتر جدول',
    description: 'عملیات موفق',
  },
  {
    id: 3,
    actionType: 'پشتیبان گیری موردی',
    buildTime: '1402/01/24 15:56',
    executionStatus: 'خاتمه یافته',
    savingPath: 'تیتر جدول',
    description: 'عملیات موفق',
  },
  {
    id: 4,
    actionType: 'پشتیبان گیری موردی',
    buildTime: '1402/01/24 15:56',
    executionStatus: 'خاتمه یافته',
    savingPath: 'تیتر جدول',
    description: 'عملیات موفق',
  },
];

export const lastBackupStatusHeader: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'actionType',
    label: SettingRoute.actionType,
    sortable: true,
  },
  {
    id: 'buildTime',
    label: SettingRoute.buildTime,
    sortable: true,
  },
  {
    id: 'executionStatus',
    label: SettingRoute.executionStatus,
    sortable: true,
  },
  {
    id: 'savingPath',
    label: SettingRoute.savingPath,
    sortable: true,
  },
  {
    id: 'description',
    label: DataBankRoute.description,
    sortable: true,
  },
];
