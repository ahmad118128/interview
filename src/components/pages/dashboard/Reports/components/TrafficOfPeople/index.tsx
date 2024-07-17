'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import ViewImageModal from './ViewImageModal';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import {
  COLLAPSE_ID,
  initFilter,
} from '@/components/pages/dashboard/image-recognition/constants';
import {
  defaultReportValues,
  reportHeaderTrafficOfPeople,
  reportMocTrafficOfPeople,
} from '@/components/pages/dashboard/Reports/components/TrafficOfPeople/constants';
import {
  IError,
  ISuccess,
  UsersFilterProps,
} from '@/components/pages/dashboard/image-recognition/types';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { DataBankRoute, TrafficAnalysisRoute, commonWords } from '@/strings';
import theme from '@/theme';
import { ReportFormValues } from './type';
import { FilterContainer } from '@/components/template/FilterContainer';
import ReportFilterForm from './reportFilterForm';

const TrafficOfPeople = () => {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<ReportFormValues>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<boolean>(false);

  const router = useRouter();
  const currentPath = usePathname();

  const methods = useForm<ReportFormValues>({
    mode: 'onSubmit',
    defaultValues: defaultReportValues,
  });

  const submitHandler = (data: ReportFormValues) => {
    setCollapse(true);
  };

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.SEARCH:
        setSearch(true);
        break;

      default:
        break;
    }
  };

  const handleFiltersChips = (filterKey: keyof typeof defaultReportValues) => {
    methods.setValue(filterKey, defaultReportValues[filterKey]);
    setFilter({ ...filter, [filterKey]: defaultReportValues[filterKey] });
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
          <FilterContainer
            collapse={collapse}
            onHandleIconClick={handleIconClick}
            chips={filtersChips}
            handleFiltersChips={handleFiltersChips}
            refreshLoading={isLoading}
            tableName={TrafficAnalysisRoute.trafficPeople}
            setCollapse={setCollapse}
            search={search}
            setSearch={setSearch}
            chipNumber={24}
          >
            <ReportFilterForm control={control} reset={reset} />
          </FilterContainer>
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
