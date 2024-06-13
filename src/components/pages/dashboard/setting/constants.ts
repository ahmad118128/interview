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

export const ClientHeader: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'factoryName',
    label: SettingRoute.factoryName,
    sortable: true,
  },
  {
    id: 'stationName',
    label: SettingRoute.stationName,
    sortable: true,
  },
  {
    id: 'clientAddress',
    label: SettingRoute.clientAddress,
    sortable: true,
  },
  {
    id: 'clientStatus',
    label: SettingRoute.clientStatus,
    sortable: true,
  },
  {
    id: 'supervisoryList',
    label: DataBankRoute.supervisoryList,
    sortable: true,
  },
  {
    id: 'recordFrameStatus',
    label: SettingRoute.recordFrameStatus,
    sortable: true,
  },
];

export const ClientMock = [
  {
    id: 1,
    factoryName: 'علوم سبز',
    stationName: 'نام ایستگاه',
    clientAddress: ' 112.16.14.75',
    clientStatus: ' دوربین وصل',
    supervisoryList: 'لیست۱-لیست۲-لیست۳',
    recordFrameStatus: 'فریم ها ثبت شوند',
  },
  {
    id: 2,
    factoryName: 'علوم سبز',
    stationName: 'نام ایستگاه',
    clientAddress: ' 112.16.14.75',
    clientStatus: ' دوربین وصل',
    supervisoryList: 'لیست۱-لیست۲-لیست۳',
    recordFrameStatus: 'فریم ها ثبت شوند',
  },
  {
    id: 3,
    factoryName: 'علوم سبز',
    stationName: 'نام ایستگاه',
    clientAddress: ' 112.16.14.75',
    clientStatus: ' دوربین وصل',
    supervisoryList: 'لیست۱-لیست۲-لیست۳',
    recordFrameStatus: 'فریم ها ثبت شوند',
  },
  {
    id: 4,
    factoryName: 'علوم سبز',
    stationName: 'نام ایستگاه',
    clientAddress: ' 112.16.14.75',
    clientStatus: ' دوربین وصل',
    supervisoryList: 'لیست۱-لیست۲-لیست۳',
    recordFrameStatus: 'فریم ها ثبت شوند',
  },
];
