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
import { useRouter, usePathname } from 'next/navigation';
import { TableWithFabProps } from './type';
import { CollapseTable } from '@/components/CustomTable/widgets/CollapseTable';
import { Child } from '@/components/CustomTable/widgets/CollapseTable/TableChild';
import {
  dataBankHeaderUserCollapse,
  dataBankMockUsersCollapse,
} from '@/components/pages/dashboard/data-bank/constants';

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

  // const pagination: CustomPaginationProps = {
  //   all_page: tableData?.data?.all_page as number,
  //   current: currentPage,
  //   setPage: (newPage: number) => setCurrentPage(newPage),
  // };
  return (
    <Box sx={{ position: 'relative' }}>
      <CollapseTable
        rows={data}
        headers={tableHeads}
        error={!tableData?.data?.results}
        // mobileIdFilter={[COLLAPSE_ID, 'matchCount', 'actions']}
        // pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
        collapseChildren={Child}
      />
      <CustomFabButton
        onClick={() => router.push(newRoute)}
        fabType={EFabMode.FAB}
      />
    </Box>
  );
}
