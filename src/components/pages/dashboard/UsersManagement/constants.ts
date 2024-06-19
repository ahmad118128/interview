import { TableCell, Typography } from '@mui/material';

import { CellType } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '../image-recognition/constants';
import {
  DataBankRoute,
  SupervisitoryListRoute,
  registrationStr,
} from '@/strings';

export const usersHeader: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'firstName',
    label: DataBankRoute.firstName,
    sortable: true,
  },
  {
    id: 'lastName',
    label: DataBankRoute.lastName,
    sortable: true,
  },
  {
    id: 'nationalId',
    label: DataBankRoute.nationalId,
    sortable: true,
  },
  {
    id: 'username',
    label: registrationStr.username,
    sortable: true,
  },
];

export const usersMock = [
  {
    id: 1,
    firstName: 'علی',
    lastName: 'احمدی',
    nationalId: '0052368741',
    username: 'AdminUser',
  },
  {
    id: 2,
    firstName: 'علی',
    lastName: 'احمدی',
    nationalId: '0052368741',
    username: 'AdminUser',
  },
  {
    id: 3,
    firstName: 'علی',
    lastName: 'احمدی',
    nationalId: '0052368741',
    username: 'AdminUser',
  },
  {
    firstName: 'علی',
    lastName: 'احمدی',
    nationalId: '0052368741',
    username: 'AdminUser',
  },
];
