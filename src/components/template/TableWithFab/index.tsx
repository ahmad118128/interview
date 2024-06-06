'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TableCell,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomButton } from '@/components/atoms/CustomButton';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { FilterIcon } from '@/components/CustomTable/shared';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { CellType } from '@/components/CustomTable/types';
import { commonWords } from '@/strings';
import theme from '@/theme';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import {
  IError,
  ISuccess,
} from '@/components/pages/dashboard/image-recognition/types';
import {
  COLLAPSE_ID,
  headers,
  mockData,
} from '@/components/pages/dashboard/image-recognition/constants';
import { CustomFabButton } from '@/components/atoms/CustomFabButton';
import { EFabMode } from '@/components/atoms/CustomFabButton/type';
import { useGetUsers } from '@/services/api/users';
import { useRouter, usePathname } from 'next/navigation';

export default function TableWithFab() {
  const [selected, setSelected] = useState('female');
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const currentPath = usePathname();
  console.log(currentPath);
  const newRoute = `${currentPath}/add`;

  const methods = useForm({
    defaultValues: {
      InputFile: '',
      title1: '',
      title3: '',
      title4: '',
      testing: 1,
      genre: [],
    },
  });
  const { reset, control, handleSubmit, watch } = methods;
  const onSubmit = (data: any) => console.log(data);

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        !collapse2 && setCollapse((prev) => !prev);
        if (collapse2) {
          setCollapse2(false);
          setCollapse((prev) => !prev);
        }
        break;
      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;
      default:
        break;
    }
  };

  const handleIconClick2 = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        !collapse && setCollapse2((prev) => !prev);
        if (collapse) {
          setCollapse(false);
          setCollapse2((prev) => !prev);
        }
        break;
      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;
      default:
        break;
    }
  };
  const tableHeads: CellType[] = [
    ...headers,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="ic:baseline-delete"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
          />
          <Icon
            icon="ep:picture-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
          />
        </TableCell>
      ),
    },
  ];
  const pagination: CustomPaginationProps = {
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <MobileCollapseTable
        rows={mockData}
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
