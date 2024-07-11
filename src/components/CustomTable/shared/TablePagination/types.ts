import React from 'react';
import { PageParamsType } from '@/services/api/type';

export type CustomPaginationProps = {
  totalPages: number;
  page: number;
  setPageParams: React.Dispatch<React.SetStateAction<PageParamsType>>;
  pageParams: PageParamsType;
};
