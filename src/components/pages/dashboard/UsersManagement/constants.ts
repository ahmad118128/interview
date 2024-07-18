import { TableCell, Typography } from '@mui/material';

import { CellType } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '../image-recognition/constants';
import {
  DataBankRoute,
  UsersManagementRoute,
  commonWords,
  generalStr,
  gpuServersString,
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

export const addDataArray = [
  {
    title: DataBankRoute.usersList,
    check1Name: 'addPerson',
    check1Label: UsersManagementRoute.addPerson,
    check1: true,
    check2: false,
    check3: false,
    check2Name: 'editPerson',
    check2Label: UsersManagementRoute.editPerson,
    check3Name: 'deletePerson',
    check3Label: UsersManagementRoute.deletePerson,
  },
  {
    title: commonWords.groupsList,
    check1Name: 'addGroup',
    check1Label: DataBankRoute.addGropModalTitle,
    check2Name: 'editGroup',
    check1: false,
    check2: true,
    check3: false,
    check2Label: commonWords.editGroup,
    check3Name: 'deleteGroup',
    check3Label: UsersManagementRoute.deleteGroup,
  },
  {
    title: DataBankRoute.supervisoryList,
    check1Name: 'addList',
    check1Label: UsersManagementRoute.addList,
    check2Name: 'editList',
    check2Label: UsersManagementRoute.editList,
    check3Name: 'deleteList',
    check1: true,
    check2: false,
    check3: false,
    check3Label: UsersManagementRoute.deleteList,
  },
  {
    title: UsersManagementRoute.passingPeopleImageRecognition,
    check1Name: 'registeredPeopleImageRecognition',
    check1: true,
    check2: false,
    check1Label: UsersManagementRoute.registeredPeopleImageRecognition,
    check2Name: 'passingPeopleImageRecognition',
    check2Label: UsersManagementRoute.passingPeopleImageRecognition,
  },
  {
    title: UsersManagementRoute.reports,
    check1: true,
    check2: false,
    check3: false,
    check1Name: 'passingPeopleReport',
    check1Label: UsersManagementRoute.passingPeopleReport,
    check2Name: 'peoplesTrafficReport',
    check2Label: UsersManagementRoute.peoplesTrafficReport,
    check3Name: 'entryAndExitReport',
    check3Label: UsersManagementRoute.entryAndExitReport,
  },
  {
    title: UsersManagementRoute.usersManagement,
    check1Name: 'addStaff',
    check1Label: UsersManagementRoute.addStaff,
    check2Name: 'editStaff',
    check2Label: UsersManagementRoute.editStaff,
    check3Name: 'deleteStaff',
    check1: true,
    check2: false,
    check3: false,
    check3Label: UsersManagementRoute.deleteStaff,
  },
  {
    title: generalStr.settings,
    check2: false,
    check1Name: 'generalSetting',
    check1Label: commonWords.generalSetting,
    check2Name: 'databaseSetting',
    check2Label: UsersManagementRoute.databaseSetting,
  },
];

export const inputFilterArray = [
  { name: 'userName', label: gpuServersString.userName },
  {
    name: 'roobinPassword',
    label: registrationStr.roobinPassword,
    isPassword: true,
  },
  {
    name: 'repeatRoobinPassword',
    label: registrationStr.repeatRoobinPassword,
    isPassword: true,
  },
  { name: 'name', label: generalStr.name },
  { name: 'lastName', label: generalStr.lastName },
  { name: 'nationalId', label: DataBankRoute.nationalId, type: 'number' },
];
