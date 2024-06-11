import { TableCell, Typography } from '@mui/material';

import { CellType } from '@/components/CustomTable/types';
import { COLLAPSE_ID } from '../image-recognition/constants';
import { DataBankRoute, SupervisitoryListRoute } from '@/strings';

export const supervisitoryListHeader: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'listName',
    label: SupervisitoryListRoute.listName,
    sortable: true,
  },
  {
    id: 'similarityPercentage',
    label: SupervisitoryListRoute.similarityPercentage,
    sortable: true,
  },
  {
    id: 'description',
    label: DataBankRoute.description,
    sortable: true,
  },
  {
    id: 'status',
    label: SupervisitoryListRoute.status,
    sortable: true,
  },
];

export const supervisitoryListMock = [
  {
    id: 1,
    listName: 'لیست یک',
    similarityPercentage: '54.52٪',
    description: 'لورم ایپسوم‌متن ساختگی با تولید سادگی نامفهوم...',
    status: 'فعال',
  },
  {
    id: 2,
    listName: 'لیست یک',
    similarityPercentage: '54.52٪',
    description: 'لورم ایپسوم‌متن ساختگی با تولید سادگی نامفهوم...',
    status: 'فعال',
  },
  {
    id: 3,
    listName: 'لیست یک',
    similarityPercentage: '54.52٪',
    description: 'لورم ایپسوم‌متن ساختگی با تولید سادگی نامفهوم...',
    status: 'فعال',
  },
  {
    id: 4,
    listName: 'لیست یک',
    similarityPercentage: '54.52٪',
    description: 'لورم ایپسوم‌متن ساختگی با تولید سادگی نامفهوم...',
    status: 'فعال',
  },
  {
    id: 5,
    listName: 'لیست یک',
    similarityPercentage: '54.52٪',
    description: 'لورم ایپسوم‌متن ساختگی با تولید سادگی نامفهوم...',
    status: 'فعال',
  },
  {
    id: 6,
    listName: 'لیست یک',
    similarityPercentage: '54.52٪',
    description: 'لورم ایپسوم‌متن ساختگی با تولید سادگی نامفهوم...',
    status: 'فعال',
  },
];
