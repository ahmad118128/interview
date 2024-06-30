'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { TableCell } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import ReportFilterContainer from '@/components/pages/dashboard/report/reportFilterContainer';
import ViewImageModal from './ViewImageModal';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import {
  COLLAPSE_ID,
  initFilter,
} from '@/components/pages/dashboard/image-recognition/constants';
import {
  reportHeaderTrafficOfPeople,
  reportMocTrafficOfPeople,
} from '@/components/pages/dashboard/report/constants';
import {
  IError,
  ISuccess,
  UsersFilterProps,
} from '@/components/pages/dashboard/image-recognition/types';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { commonWords } from '@/strings';
import theme from '@/theme';

const TrafficOfPeople = () => {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();
  const currentPath = usePathname();

  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      nationalId: '',
      phoneNumber: '',
      group: '',
      supervisortList: '',
      nationality: '',
    },
  });

  const submitHandler = (data: any) => {
    console.log(`this is my typeof ${typeof data}`);
    setCollapse(true);
  };

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;

      default:
        break;
    }
  };

  const handleFiltersChips = (filterKey: keyof typeof initFilter) => {
    methods.setValue(filterKey, initFilter[filterKey]);
    setFilter({ ...filter, [filterKey]: initFilter[filterKey] });
    setFiltersChips((prevFiltersChips) => {
      return prevFiltersChips.filter((chip) => chip.key !== filterKey);
    });
  };

  const pagination: CustomPaginationProps = {
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };

  const tableHeadsClient: CellType[] = [
    ...reportHeaderTrafficOfPeople,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => <ViewImageModal />,
    },
  ];

  const { control, reset } = { ...methods };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <ReportFilterContainer
            control={control}
            reset={reset}
            collapse={collapse}
            onHandleIconClick={handleIconClick}
            chips={filtersChips}
            handleFiltersChips={handleFiltersChips}
            refreshLoading={isLoading}
          />
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={reportMocTrafficOfPeople}
        headers={tableHeadsClient}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'name', 'supervisortList']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
};

export default TrafficOfPeople;
