'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import {
  IError,
  ISuccess,
} from '@/components/pages/dashboard/image-recognition/types';
import { CustomFabButton } from '@/components/atoms/CustomFabButton';
import { EFabMode } from '@/components/atoms/CustomFabButton/type';
import { useRouter, usePathname } from 'next/navigation';
import { CollapseTableWithFabProps } from './type';
import { CollapseTable } from '@/components/CustomTable/widgets/CollapseTable';
import { CollapseTableWithCheckbox } from '@/components/CustomTable/widgets/CollapseTableWithCheckbox';

export default function CollapseCheckboxWithFab<T>({
  tableHeads,
  data,
  path,
  child,
  selectedId,
  setSelectedId,
}: CollapseTableWithFabProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const currentPath = usePathname();

  const newRoute = `${currentPath}/${path}`;

  return (
    <Box sx={{ position: 'relative' }}>
      <CollapseTableWithCheckbox
        rows={data}
        headers={tableHeads}
        error={!tableData?.data?.results}
        handleSort={(id) => {
          setOrder(id);
        }}
        collapseChildren={child}
        selectedMode
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <CustomFabButton
        onClick={() => router.push(newRoute)}
        fabType={EFabMode.FAB}
      />
    </Box>
  );
}
