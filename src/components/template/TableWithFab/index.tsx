'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import {
  IError,
  ISuccess,
} from '@/components/pages/dashboard/image-recognition/types';
import { COLLAPSE_ID } from '@/components/pages/dashboard/image-recognition/constants';
import { CustomFabButton } from '@/components/atoms/CustomFabButton';
import { EFabMode } from '@/components/atoms/CustomFabButton/type';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { TableWithFabProps } from './type';
import { useGetGroup } from '@/services/api/groupController/useGetGroup';
import { PageParamsType } from '@/services/api/users';

export default function TableWithFab<T>({
  tableHeads,
  data,
  path,
  showOnMobileColumns,
}: TableWithFabProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const [pageParams, setPageParams] = useState<PageParamsType>({
    pageNo: 0,
    ...queryParams,
  });

  const {
    data: groups,
    totalItem,
    totalPages,
    isPending,
  } = useGetGroup(pageParams);
  const newRoute = `${currentPath}/${path}`;

  const pagination: CustomPaginationProps = {
    totalPages: totalPages,
    page: pageParams.pageNo,
    pageParams: pageParams,
    setPageParams: setPageParams,
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <MobileCollapseTable
        rows={groups}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, ...showOnMobileColumns]}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
      <CustomFabButton
        onClick={() => router.push(newRoute)}
        fabType={EFabMode.FAB}
      />
    </Box>
  );
}
