import { CellType } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '../image-recognition/constants';
import { DataBankRoute, SupervisitoryListRoute } from '@/strings';

export const dataBankMockUsers = [
  {
    id: 1,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 2,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 3,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 4,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 5,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 6,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 7,
    name: 'نام و نام‌خانوادگی',
    nationalId: '0025698741',
    phoneNumber: '09125631214',
    group: 'گروه یک',
    nationality: 'ایرانی',
    supervisortList: 'لیست نظارتی',
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
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

export const dataBankHeaderUserCollapse = [
  {
    id: 'submitter',
    label: SupervisitoryListRoute.submitter,
  },
  {
    id: 'education',
    label: DataBankRoute.education,
  },
  {
    id: 'fatherName',
    label: DataBankRoute.fatherName,
  },
  {
    id: 'phone',
    label: DataBankRoute.phone,
  },
  {
    id: 'birthDate',
    label: DataBankRoute.birthDate,
  },
  {
    id: 'submitDate',
    label: DataBankRoute.submitDate,
  },
  {
    id: 'birthCertificateNumber',
    label: DataBankRoute.birthCertificateNumber,
  },
  {
    id: 'sex',
    label: DataBankRoute.sex,
  },
  {
    id: 'birthCity',
    label: DataBankRoute.birthCity,
  },
  {
    id: 'information',
    label: DataBankRoute.information,
  },
];

export const dataBankMockUsersCollapse = [
  {
    id: 1,
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 2,
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 3,
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 4,
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 5,
    submitter: 'ادمین',
    education: 'فوق لیسانس',
    fatherName: 'امید',
    phone: 88246596,
    birthDate: '1373/09/04',
    submitDate: '12:00 - 1401/11/05',
    birthCertificateNumber: '00536985',
    sex: 'مرد',
    birthCity: 'تهران',
    information:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
];
