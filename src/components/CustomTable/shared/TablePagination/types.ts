import { PageParamsType } from '@/services/api/users';
import { SetStateAction } from 'react';

export type CustomPaginationProps = {
  totalPages: number;
  page: number;
  setPageParams: React.Dispatch<React.SetStateAction<PageParamsType>>;
  pageParams: PageParamsType;
};
