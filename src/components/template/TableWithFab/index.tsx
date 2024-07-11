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
import { PageParamsType } from '@/services/api/users';

export default function TableWithFab<T>({
  tableHeads,
  data,
  path,
}: TableWithFabProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const currentPath = usePathname();

  const newRoute = `${currentPath}/${path}`;

  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const [pageParams, setPageParams] = useState<PageParamsType>({
    pageNo: 0,
    ...queryParams,
  });

  const pagination: CustomPaginationProps = {
    totalPages: 5,
    page: 0,
    setPageParams: setPageParams,
    pageParams: pageParams,
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <MobileCollapseTable
        rows={data}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'matchCount', 'actions']}
        pagination={pagination}
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
