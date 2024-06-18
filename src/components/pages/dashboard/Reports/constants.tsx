import { CellType } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '../image-recognition/constants';
import { DataBankRoute } from '@/strings';

export const filterInputs = {
  gateName: 'نام گیت',
  orientation: 'جهت گیری',
  minimumSimilarityPercentage: 'حداقل درصد تشابه ',
  matchingType: 'نوع تطبیق',
  fromAge: 'از سن',
  untilAge: 'تا سن ',
  gender: 'جنسیت',
  registrationTimeOf: 'زمان ثبت از',
  registrationTimeUpTo: 'زمان ثبت تا',
};

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
    label: DataBankRoute.supervisoryList,
    sortable: true,
  },
];

export const dataBankMockgrous = [
  {
    id: 1,
    groupName: 'گروه یک',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و ...',
  },
  {
    id: 2,
    groupName: 'گروه یک',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و ...',
  },
  {
    id: 3,
    groupName: 'گروه یک',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و ...',
  },
  {
    id: 4,
    groupName: 'گروه یک',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و ...',
  },
];

export const dataBankHeadergroup: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'groupName',
    label: DataBankRoute.groupName,
    sortable: true,
  },
  {
    id: 'description',
    label: DataBankRoute.description,
    sortable: true,
  },
];
